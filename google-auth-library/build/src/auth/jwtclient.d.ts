/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="node" />
import { GoogleToken } from 'gtoken';
import * as stream from 'stream';
import { CredentialBody, Credentials, JWTInput } from './credentials';
import { GetTokenResponse, OAuth2Client, RefreshOptions, RequestMetadataResponse } from './oauth2client';
export interface JWTOptions extends RefreshOptions {
    email?: string;
    keyFile?: string;
    key?: string;
    scopes?: string | string[];
    subject?: string;
    additionalClaims?: {};
}
export declare class JWT extends OAuth2Client {
    email?: string;
    keyFile?: string;
    key?: string;
    scopes?: string | string[];
    scope?: string;
    subject?: string;
    gtoken?: GoogleToken;
    additionalClaims?: {};
    private access?;
    /**
     * JWT service account credentials.
     *
     * Retrieve access token using gtoken.
     *
     * @param email service account email address.
     * @param keyFile path to private key file.
     * @param key value of key
     * @param scopes list of requested scopes or a single scope.
     * @param subject impersonated account's email address.
     */
    constructor(options: JWTOptions);
    constructor(email?: string, keyFile?: string, key?: string, scopes?: string | string[], subject?: string);
    /**
     * Creates a copy of the credential with the specified scopes.
     * @param scopes List of requested scopes or a single scope.
     * @return The cloned instance.
     */
    createScoped(scopes?: string | string[]): JWT;
    /**
     * Obtains the metadata to be sent with the request.
     *
     * @param url the URI being authorized.
     */
    protected getRequestMetadataAsync(url?: string | null): Promise<RequestMetadataResponse>;
    /**
     * Indicates whether the credential requires scopes to be created by calling
     * createScoped before use.
     * @return false if createScoped does not need to be called.
     */
    createScopedRequired(): boolean;
    /**
     * Get the initial access token using gToken.
     * @param callback Optional callback.
     * @returns Promise that resolves with credentials
     */
    authorize(): Promise<Credentials>;
    authorize(callback: (err: Error | null, result?: Credentials) => void): void;
    private authorizeAsync;
    /**
     * Refreshes the access token.
     * @param refreshToken ignored
     * @private
     */
    protected refreshTokenNoCache(refreshToken?: string | null): Promise<GetTokenResponse>;
    /**
     * Create a gToken if it doesn't already exist.
     */
    private createGToken;
    /**
     * Create a JWT credentials instance using the given input options.
     * @param json The input object.
     */
    fromJSON(json: JWTInput): void;
    /**
     * Create a JWT credentials instance using the given input stream.
     * @param inputStream The input stream.
     * @param callback Optional callback.
     */
    fromStream(inputStream: stream.Readable): Promise<void>;
    fromStream(inputStream: stream.Readable, callback: (err?: Error | null) => void): void;
    private fromStreamAsync;
    /**
     * Creates a JWT credentials instance using an API Key for authentication.
     * @param apiKey The API Key in string form.
     */
    fromAPIKey(apiKey: string): void;
    /**
     * Using the key or keyFile on the JWT client, obtain an object that contains
     * the key and the client email.
     */
    getCredentials(): Promise<CredentialBody>;
}
