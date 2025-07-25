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
  ApiResponseMannerInsertResponse,
  ApiResponseMannerKeywordListResponse,
  ApiResponseMannerRatingResponse,
  ApiResponseMannerResponse,
  ApiResponseMannerUpdateResponse,
  MannerInsertRequest,
  MannerUpdateRequest,
} from '../models/index';

export interface AddNegativeMannerRatingRequest {
    memberId: number;
    mannerInsertRequest: MannerInsertRequest;
}

export interface AddPositiveMannerRatingRequest {
    memberId: number;
    mannerInsertRequest: MannerInsertRequest;
}

export interface GetMannerKeywordInfoRequest {
    memberId: number;
}

export interface GetMannerLevelInfoRequest {
    memberId: number;
}

export interface GetNegativeMannerRatingInfoRequest {
    memberId: number;
}

export interface GetPositiveMannerRatingInfoRequest {
    memberId: number;
}

export interface UpdateMannerRatingRequest {
    mannerId: number;
    mannerUpdateRequest: MannerUpdateRequest;
}

/**
 * MannerApi - interface
 * 
 * @export
 * @interface MannerApiInterface
 */
export interface MannerApiInterface {
    /**
     * 비매너 평가를 등록하는 API 입니다.
     * @summary 비매너 평가 등록 API
     * @param {number} memberId 비매너 평가를 등록할 대상 회원의 id 입니다.
     * @param {MannerInsertRequest} mannerInsertRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    addNegativeMannerRatingRaw(requestParameters: AddNegativeMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerInsertResponse>>;

    /**
     * 비매너 평가를 등록하는 API 입니다.
     * 비매너 평가 등록 API
     */
    addNegativeMannerRating(requestParameters: AddNegativeMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerInsertResponse>;

    /**
     * 매너 평가를 등록하는 API 입니다.
     * @summary 매너 평가 등록 API
     * @param {number} memberId 매너 평가를 등록할 대상 회원의 id 입니다.
     * @param {MannerInsertRequest} mannerInsertRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    addPositiveMannerRatingRaw(requestParameters: AddPositiveMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerInsertResponse>>;

    /**
     * 매너 평가를 등록하는 API 입니다.
     * 매너 평가 등록 API
     */
    addPositiveMannerRating(requestParameters: AddPositiveMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerInsertResponse>;

    /**
     * 특정 회원의 매너 키워드 정보를 조회하는 API 입니다.
     * @summary 특정 회원의 매너 키워드 정보 조회 API
     * @param {number} memberId 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    getMannerKeywordInfoRaw(requestParameters: GetMannerKeywordInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerKeywordListResponse>>;

    /**
     * 특정 회원의 매너 키워드 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 키워드 정보 조회 API
     */
    getMannerKeywordInfo(requestParameters: GetMannerKeywordInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerKeywordListResponse>;

    /**
     * 특정 회원의 매너 레벨 정보를 조회하는 API 입니다.
     * @summary 특정 회원의 매너 레벨 정보 조회 API
     * @param {number} memberId 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    getMannerLevelInfoRaw(requestParameters: GetMannerLevelInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerResponse>>;

    /**
     * 특정 회원의 매너 레벨 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 레벨 정보 조회 API
     */
    getMannerLevelInfo(requestParameters: GetMannerLevelInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerResponse>;

    /**
     * 특정 회원에 대해 내가 실시한 비매너 평가를 조회하는 API 입니다.
     * @summary 특정 회원에 대한 나의 비매너 평가 조회 API
     * @param {number} memberId 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    getNegativeMannerRatingInfoRaw(requestParameters: GetNegativeMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerRatingResponse>>;

    /**
     * 특정 회원에 대해 내가 실시한 비매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 비매너 평가 조회 API
     */
    getNegativeMannerRatingInfo(requestParameters: GetNegativeMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerRatingResponse>;

    /**
     * 특정 회원에 대해 내가 실시한 매너 평가를 조회하는 API 입니다.
     * @summary 특정 회원에 대한 나의 매너 평가 조회 API
     * @param {number} memberId 대상 회원의 id 입니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    getPositiveMannerRatingInfoRaw(requestParameters: GetPositiveMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerRatingResponse>>;

    /**
     * 특정 회원에 대해 내가 실시한 매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 매너 평가 조회 API
     */
    getPositiveMannerRatingInfo(requestParameters: GetPositiveMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerRatingResponse>;

    /**
     * 매너/비매너 평가를 수정하는 API 입니다.
     * @summary 매너/비매너 평가 수정 API
     * @param {number} mannerId 수정하고자 하는 매너/비매너 평가 id 입니다.
     * @param {MannerUpdateRequest} mannerUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MannerApiInterface
     */
    updateMannerRatingRaw(requestParameters: UpdateMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerUpdateResponse>>;

    /**
     * 매너/비매너 평가를 수정하는 API 입니다.
     * 매너/비매너 평가 수정 API
     */
    updateMannerRating(requestParameters: UpdateMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerUpdateResponse>;

}

/**
 * 
 */
export class MannerApi extends runtime.BaseAPI implements MannerApiInterface {

    /**
     * 비매너 평가를 등록하는 API 입니다.
     * 비매너 평가 등록 API
     */
    async addNegativeMannerRatingRaw(requestParameters: AddNegativeMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerInsertResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling addNegativeMannerRating.');
        }

        if (requestParameters.mannerInsertRequest === null || requestParameters.mannerInsertRequest === undefined) {
            throw new runtime.RequiredError('mannerInsertRequest','Required parameter requestParameters.mannerInsertRequest was null or undefined when calling addNegativeMannerRating.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/manner/negative/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.mannerInsertRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 비매너 평가를 등록하는 API 입니다.
     * 비매너 평가 등록 API
     */
    async addNegativeMannerRating(requestParameters: AddNegativeMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerInsertResponse> {
        const response = await this.addNegativeMannerRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 매너 평가를 등록하는 API 입니다.
     * 매너 평가 등록 API
     */
    async addPositiveMannerRatingRaw(requestParameters: AddPositiveMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerInsertResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling addPositiveMannerRating.');
        }

        if (requestParameters.mannerInsertRequest === null || requestParameters.mannerInsertRequest === undefined) {
            throw new runtime.RequiredError('mannerInsertRequest','Required parameter requestParameters.mannerInsertRequest was null or undefined when calling addPositiveMannerRating.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/manner/positive/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.mannerInsertRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 매너 평가를 등록하는 API 입니다.
     * 매너 평가 등록 API
     */
    async addPositiveMannerRating(requestParameters: AddPositiveMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerInsertResponse> {
        const response = await this.addPositiveMannerRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 특정 회원의 매너 키워드 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 키워드 정보 조회 API
     */
    async getMannerKeywordInfoRaw(requestParameters: GetMannerKeywordInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerKeywordListResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling getMannerKeywordInfo.');
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
            path: `/api/v2/manner/keyword/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 특정 회원의 매너 키워드 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 키워드 정보 조회 API
     */
    async getMannerKeywordInfo(requestParameters: GetMannerKeywordInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerKeywordListResponse> {
        const response = await this.getMannerKeywordInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 특정 회원의 매너 레벨 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 레벨 정보 조회 API
     */
    async getMannerLevelInfoRaw(requestParameters: GetMannerLevelInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling getMannerLevelInfo.');
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
            path: `/api/v2/manner/level/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 특정 회원의 매너 레벨 정보를 조회하는 API 입니다.
     * 특정 회원의 매너 레벨 정보 조회 API
     */
    async getMannerLevelInfo(requestParameters: GetMannerLevelInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerResponse> {
        const response = await this.getMannerLevelInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 특정 회원에 대해 내가 실시한 비매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 비매너 평가 조회 API
     */
    async getNegativeMannerRatingInfoRaw(requestParameters: GetNegativeMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerRatingResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling getNegativeMannerRatingInfo.');
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
            path: `/api/v2/manner/negative/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 특정 회원에 대해 내가 실시한 비매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 비매너 평가 조회 API
     */
    async getNegativeMannerRatingInfo(requestParameters: GetNegativeMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerRatingResponse> {
        const response = await this.getNegativeMannerRatingInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 특정 회원에 대해 내가 실시한 매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 매너 평가 조회 API
     */
    async getPositiveMannerRatingInfoRaw(requestParameters: GetPositiveMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerRatingResponse>> {
        if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
            throw new runtime.RequiredError('memberId','Required parameter requestParameters.memberId was null or undefined when calling getPositiveMannerRatingInfo.');
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
            path: `/api/v2/manner/positive/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 특정 회원에 대해 내가 실시한 매너 평가를 조회하는 API 입니다.
     * 특정 회원에 대한 나의 매너 평가 조회 API
     */
    async getPositiveMannerRatingInfo(requestParameters: GetPositiveMannerRatingInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerRatingResponse> {
        const response = await this.getPositiveMannerRatingInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 매너/비매너 평가를 수정하는 API 입니다.
     * 매너/비매너 평가 수정 API
     */
    async updateMannerRatingRaw(requestParameters: UpdateMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseMannerUpdateResponse>> {
        if (requestParameters.mannerId === null || requestParameters.mannerId === undefined) {
            throw new runtime.RequiredError('mannerId','Required parameter requestParameters.mannerId was null or undefined when calling updateMannerRating.');
        }

        if (requestParameters.mannerUpdateRequest === null || requestParameters.mannerUpdateRequest === undefined) {
            throw new runtime.RequiredError('mannerUpdateRequest','Required parameter requestParameters.mannerUpdateRequest was null or undefined when calling updateMannerRating.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWT TOKEN", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/manner/{mannerId}`.replace(`{${"mannerId"}}`, encodeURIComponent(String(requestParameters.mannerId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.mannerUpdateRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 매너/비매너 평가를 수정하는 API 입니다.
     * 매너/비매너 평가 수정 API
     */
    async updateMannerRating(requestParameters: UpdateMannerRatingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseMannerUpdateResponse> {
        const response = await this.updateMannerRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
