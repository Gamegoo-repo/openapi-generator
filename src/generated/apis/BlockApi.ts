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
  ApiResponseBlockListResponse,
  ApiResponseBlockResponse,
} from '../models/index';

export interface BlockMemberRequest {
    memberId: number;
}

export interface DeleteBlockMemberRequest {
    memberId: number;
}

export interface GetBlockListRequest {
    page: number;
}

export interface UnblockMemberRequest {
    memberId: number;
}

/**
 * BlockApi - interface
 * 
 * @export
 * @interface BlockApiInterface
 */
export interface BlockApiInterface {
    /**
     * 대상 회원을 차단하는 API 입니다.
     * @summary 회원 차단 API
     * @param {number} memberId 차단할 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiInterface
     */
    blockMemberRaw(requestParameters: BlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>>;

    /**
     * 대상 회원을 차단하는 API 입니다.
     * 회원 차단 API
     */
    blockMember(requestParameters: BlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse>;

    /**
     * 차단 목록에서 특정 회원이 탈퇴한 회원인 경우, 삭제하는 API 입니다. (차단 해제 아님)
     * @summary 차단 목록에서 탈퇴한 회원 삭제 API
     * @param {number} memberId 목록에서 삭제할 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiInterface
     */
    deleteBlockMemberRaw(requestParameters: DeleteBlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>>;

    /**
     * 차단 목록에서 특정 회원이 탈퇴한 회원인 경우, 삭제하는 API 입니다. (차단 해제 아님)
     * 차단 목록에서 탈퇴한 회원 삭제 API
     */
    deleteBlockMember(requestParameters: DeleteBlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse>;

    /**
     * 내가 차단한 회원의 목록을 조회하는 API 입니다.
     * @summary 차단 목록 조회 API
     * @param {number} page 페이지 번호, 1 이상의 숫자를 입력해 주세요.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiInterface
     */
    getBlockListRaw(requestParameters: GetBlockListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockListResponse>>;

    /**
     * 내가 차단한 회원의 목록을 조회하는 API 입니다.
     * 차단 목록 조회 API
     */
    getBlockList(requestParameters: GetBlockListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockListResponse>;

    /**
     * 해당 회원에 대한 차단을 해제하는 API 입니다.
     * @summary 회원 차단 해제 API
     * @param {number} memberId 차단을 해제할 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiInterface
     */
    unblockMemberRaw(requestParameters: UnblockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>>;

    /**
     * 해당 회원에 대한 차단을 해제하는 API 입니다.
     * 회원 차단 해제 API
     */
    unblockMember(requestParameters: UnblockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse>;

}

/**
 * 
 */
export class BlockApi extends runtime.BaseAPI implements BlockApiInterface {

    /**
     * 대상 회원을 차단하는 API 입니다.
     * 회원 차단 API
     */
    async blockMemberRaw(requestParameters: BlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling blockMember.');
        }

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
            path: `/api/v2/block/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 대상 회원을 차단하는 API 입니다.
     * 회원 차단 API
     */
    async blockMember(requestParameters: BlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse> {
        const response = await this.blockMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 차단 목록에서 특정 회원이 탈퇴한 회원인 경우, 삭제하는 API 입니다. (차단 해제 아님)
     * 차단 목록에서 탈퇴한 회원 삭제 API
     */
    async deleteBlockMemberRaw(requestParameters: DeleteBlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling deleteBlockMember.');
        }

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
            path: `/api/v2/block/delete/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 차단 목록에서 특정 회원이 탈퇴한 회원인 경우, 삭제하는 API 입니다. (차단 해제 아님)
     * 차단 목록에서 탈퇴한 회원 삭제 API
     */
    async deleteBlockMember(requestParameters: DeleteBlockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse> {
        const response = await this.deleteBlockMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 내가 차단한 회원의 목록을 조회하는 API 입니다.
     * 차단 목록 조회 API
     */
    async getBlockListRaw(requestParameters: GetBlockListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockListResponse>> {
        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling getBlockList.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/block`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 내가 차단한 회원의 목록을 조회하는 API 입니다.
     * 차단 목록 조회 API
     */
    async getBlockList(requestParameters: GetBlockListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockListResponse> {
        const response = await this.getBlockListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 회원에 대한 차단을 해제하는 API 입니다.
     * 회원 차단 해제 API
     */
    async unblockMemberRaw(requestParameters: UnblockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBlockResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling unblockMember.');
        }

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
            path: `/api/v2/block/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 회원에 대한 차단을 해제하는 API 입니다.
     * 회원 차단 해제 API
     */
    async unblockMember(requestParameters: UnblockMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBlockResponse> {
        const response = await this.unblockMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
