#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { spawn } = require('child_process')

// ===== 설정 부분 - 여기를 수정하세요! =====
const CONFIG = {
  // Swagger JSON 파일 경로 또는 URL
  swaggerInput: './swagger/swagger.json', // 로컬 파일
  // swaggerInput: 'http://localhost:3000/api-docs-json',  // URL 사용시

  // 출력 디렉토리
  outputDir: './src/generated',

  // 프로젝트 루트
  projectRoot: process.cwd(),

  // 커스텀 예약어 매핑 (필요시 수정)
  reservedWordsMappings: {
    class: 'className',
    function: 'functionName',
    protected: 'protectedField',
    public: 'publicField',
    private: 'privateField',
    static: 'staticField'
    // 필요한 매핑 추가
  }
}

// TypeScript-fetch 생성기 옵션
const GENERATOR_OPTIONS = {
  // 네이밍 컨벤션
  modelPropertyNaming: 'camelCase', // 모델 속성명: camelCase
  paramNaming: 'camelCase', // 파라미터명: camelCase
  enumPropertyNaming: 'PascalCase', // Enum 속성명: PascalCase

  // 코드 생성 옵션
  stringEnums: true, // 문자열 enum 사용
  supportsES6: true, // ES6 문법 사용
  typescriptThreePlus: true, // TypeScript 3+ 사용

  // 정렬 옵션
  sortParamsByRequiredFlag: true, // 필수 파라미터 먼저
  sortModelPropertiesByRequiredFlag: true, // 필수 속성 먼저

  // 성능 옵션
  withoutRuntimeChecks: true, // 런타임 체크 제거 (성능 향상)

  // 구조 옵션
  useSingleRequestParameter: true, // 단일 요청 파라미터 사용
  withInterfaces: true, // 인터페이스 생성
  withSeparateModelsAndApi: true, // 모델과 API 분리
  modelPackage: 'models', // 모델 패키지명
  apiPackage: 'apis' // API 패키지명
}

// ===== 유틸리티 함수들 =====

function log(message) {
  console.log(`🔧 ${message}`)
}

function logError(message) {
  console.error(`❌ ${message}`)
}

function logSuccess(message) {
  console.log(`✅ ${message}`)
}

// 옵션을 문자열로 변환
function createAdditionalProperties(options) {
  return Object.entries(options)
    .filter(
      ([key, value]) => value !== undefined && value !== null && value !== ''
    )
    .map(([key, value]) => `${key}=${value.toString()}`)
    .join(',')
}

// 예약어 매핑을 문자열로 변환
function createReservedWordsMappings(mappings) {
  return Object.entries(mappings)
    .map(([key, value]) => `${key}=${value}`)
    .join(',')
}

// OpenAPI Generator CLI 실행
function runOpenApiGenerator(args) {
  return new Promise((resolve, reject) => {
    log(`OpenAPI Generator 실행: openapi-generator-cli ${args.join(' ')}`)

    const child = spawn('npx', ['openapi-generator-cli', ...args], {
      stdio: 'inherit',
      env: {
        ...process.env,
        // Java 옵션 설정 (로그 레벨 조정)
        JAVA_OPTS: '-Dlog.level=warn -Xmx2g'
      }
    })

    child.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`OpenAPI Generator가 코드 ${code}로 종료되었습니다`))
      }
    })

    child.on('error', (error) => {
      reject(new Error(`OpenAPI Generator 실행 실패: ${error.message}`))
    })
  })
}

// Swagger JSON 다운로드 (URL인 경우)
async function downloadSwaggerJson(url, outputPath) {
  const fetch = (await import('node-fetch')).default

  try {
    log(`Swagger JSON 다운로드: ${url}`)
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const swaggerData = await response.json()
    await fs.writeJSON(outputPath, swaggerData, { spaces: 2 })
    logSuccess(`Swagger JSON 저장: ${outputPath}`)
  } catch (error) {
    throw new Error(`Swagger JSON 다운로드 실패: ${error.message}`)
  }
}

// ===== 메인 함수 =====
async function generateApiClient() {
  try {
    log('API 클라이언트 생성을 시작합니다...')

    // 1. 입력 파일 처리
    let inputSpecPath

    if (CONFIG.swaggerInput.startsWith('http')) {
      // URL에서 다운로드
      inputSpecPath = path.join(CONFIG.projectRoot, 'temp-swagger.json')
      await downloadSwaggerJson(CONFIG.swaggerInput, inputSpecPath)
    } else {
      // 로컬 파일 사용
      inputSpecPath = path.resolve(CONFIG.swaggerInput)
      if (!(await fs.pathExists(inputSpecPath))) {
        throw new Error(`Swagger 파일을 찾을 수 없습니다: ${inputSpecPath}`)
      }
      log(`로컬 Swagger 파일 사용: ${inputSpecPath}`)
    }

    // 2. 출력 디렉토리 준비
    const outputPath = path.resolve(CONFIG.outputDir)
    log(`출력 디렉토리 정리: ${outputPath}`)
    await fs.emptyDir(outputPath)

    // 3. OpenAPI Generator 실행
    log('TypeScript API 클라이언트 생성 중...')

    const generatorArgs = [
      'generate',
      '-g',
      'typescript-fetch', // 생성기 타입
      '-i',
      inputSpecPath, // 입력 스펙 파일
      '-o',
      outputPath, // 출력 디렉토리
      '-c',
      'openapitools.json', // 설정 파일
      '--additional-properties',
      createAdditionalProperties(GENERATOR_OPTIONS),
      '--reserved-words-mappings',
      createReservedWordsMappings(CONFIG.reservedWordsMappings),
      '--enable-post-process-file', // 후처리 활성화
      '--skip-validate-spec', // 스펙 검증 스킵 (선택사항)
      '--remove-operation-id-prefix' // operationId 접두사 제거
    ]

    await runOpenApiGenerator(generatorArgs)

    // 4. 임시 파일 정리
    if (CONFIG.swaggerInput.startsWith('http')) {
      await fs.remove(inputSpecPath)
    }

    // 5. 메인 index.ts 파일 생성
    const indexPath = path.join(outputPath, 'index.ts')
    const indexContent = `// 🤖 Auto-generated API Client
// 이 파일은 자동 생성되었습니다. 직접 수정하지 마세요.

// API 클래스들
export * from './apis';

// 모델 타입들  
export * from './models';

// 런타임 설정
export * from './runtime';

// Configuration 클래스 재export (편의성)
export { Configuration } from './runtime';
`

    await fs.writeFile(indexPath, indexContent, 'utf8')

    // 6. README 생성
    const readmePath = path.join(outputPath, 'README.md')
    const readmeContent = `# Generated API Client

이 디렉토리의 파일들은 OpenAPI Generator에 의해 자동 생성되었습니다.

## 사용법

\`\`\`typescript
import { Configuration, DefaultApi } from './generated';

// API 클라이언트 설정
const config = new Configuration({
  basePath: 'http://localhost:3000',
  // 인증이 필요한 경우
  accessToken: 'your-token'
});

const api = new DefaultApi(config);

// API 호출
const response = await api.someApiMethod();
\`\`\`

## 재생성

\`npm run generate\` 명령으로 다시 생성할 수 있습니다.
`

    await fs.writeFile(readmePath, readmeContent, 'utf8')

    logSuccess('🎉 API 클라이언트 생성이 완료되었습니다!')
    logSuccess(`📁 생성된 파일 위치: ${outputPath}`)
    logSuccess('🚀 이제 생성된 타입과 API 함수를 사용할 수 있습니다!')
  } catch (error) {
    logError(`API 클라이언트 생성 실패: ${error.message}`)
    process.exit(1)
  }
}

// CLI에서 직접 실행되는 경우
if (require.main === module) {
  generateApiClient()
}

module.exports = {
  generateApiClient,
  CONFIG
}
