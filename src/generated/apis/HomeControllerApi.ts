/* tslint:disable */
/* eslint-disable */
/**
 * Gamegoo V2 API
 * Gamegoo V2 API 명세서
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiResponseObject,
  ApiResponseString,
} from '../models/index';

/**
 * HomeControllerApi - interface
 * 
 * @export
 * @interface HomeControllerApiInterface
 */
export interface HomeControllerApiInterface {
    /**
     * 예외를 발생시켜 테스트합니다.
     * @summary 에러 테스트
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomeControllerApiInterface
     */
    errorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseObject>>;

    /**
     * 예외를 발생시켜 테스트합니다.
     * 에러 테스트
     */
    error(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseObject>;

    /**
     * health check를 위한 API 입니다.
     * @summary Health Check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomeControllerApiInterface
     */
    healthcheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseString>>;

    /**
     * health check를 위한 API 입니다.
     * Health Check
     */
    healthcheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseString>;

    /**
     * API 서비스 상태를 확인합니다.
     * @summary 홈 엔드포인트
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomeControllerApiInterface
     */
    homeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseString>>;

    /**
     * API 서비스 상태를 확인합니다.
     * 홈 엔드포인트
     */
    home(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseString>;

}

/**
 * 
 */
export class HomeControllerApi extends runtime.BaseAPI implements HomeControllerApiInterface {

    /**
     * 예외를 발생시켜 테스트합니다.
     * 에러 테스트
     */
    async errorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/errortest`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 예외를 발생시켜 테스트합니다.
     * 에러 테스트
     */
    async error(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseObject> {
        const response = await this.errorRaw(initOverrides);
        return await response.value();
    }

    /**
     * health check를 위한 API 입니다.
     * Health Check
     */
    async healthcheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseString>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * health check를 위한 API 입니다.
     * Health Check
     */
    async healthcheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseString> {
        const response = await this.healthcheckRaw(initOverrides);
        return await response.value();
    }

    /**
     * API 서비스 상태를 확인합니다.
     * 홈 엔드포인트
     */
    async homeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseString>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/home`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * API 서비스 상태를 확인합니다.
     * 홈 엔드포인트
     */
    async home(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseString> {
        const response = await this.homeRaw(initOverrides);
        return await response.value();
    }

}
