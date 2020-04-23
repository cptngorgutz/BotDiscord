"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_common_1 = require("googleapis-common");
// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace
var adexchangebuyer2_v2beta1;
(function (adexchangebuyer2_v2beta1) {
    let context;
    /**
     * Ad Exchange Buyer API II
     *
     * Accesses the latest features for managing Authorized Buyers accounts,
     * Real-Time Bidding configurations and auction metrics, and Marketplace
     * programmatic deals.
     *
     * @example
     * const {google} = require('googleapis');
     * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
     *
     * @namespace adexchangebuyer2
     * @type {Function}
     * @version v2beta1
     * @variation v2beta1
     * @param {object=} options Options for Adexchangebuyer2
     */
    class Adexchangebuyer2 {
        constructor(options, google) {
            context = { _options: options || {}, google };
            this.accounts = new Resource$Accounts();
            this.bidders = new Resource$Bidders();
        }
    }
    adexchangebuyer2_v2beta1.Adexchangebuyer2 = Adexchangebuyer2;
    class Resource$Accounts {
        constructor() {
            this.clients = new Resource$Accounts$Clients();
            this.creatives = new Resource$Accounts$Creatives();
            this.finalizedProposals = new Resource$Accounts$Finalizedproposals();
            this.products = new Resource$Accounts$Products();
            this.proposals = new Resource$Accounts$Proposals();
            this.publisherProfiles = new Resource$Accounts$Publisherprofiles();
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts = Resource$Accounts;
    class Resource$Accounts$Clients {
        constructor() {
            this.invitations = new Resource$Accounts$Clients$Invitations();
            this.users = new Resource$Accounts$Clients$Users();
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Clients = Resource$Accounts$Clients;
    class Resource$Accounts$Clients$Invitations {
        constructor() { }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
                pathParams: ['accountId', 'clientAccountId', 'invitationId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Clients$Invitations = Resource$Accounts$Clients$Invitations;
    class Resource$Accounts$Clients$Users {
        constructor() { }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId', 'userId'],
                pathParams: ['accountId', 'clientAccountId', 'userId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['accountId', 'clientAccountId', 'userId'],
                pathParams: ['accountId', 'clientAccountId', 'userId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Clients$Users = Resource$Accounts$Clients$Users;
    class Resource$Accounts$Creatives {
        constructor() {
            this.dealAssociations =
                new Resource$Accounts$Creatives$Dealassociations();
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        stopWatching(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        watch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Creatives = Resource$Accounts$Creatives;
    class Resource$Accounts$Creatives$Dealassociations {
        constructor() { }
        add(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        remove(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Creatives$Dealassociations = Resource$Accounts$Creatives$Dealassociations;
    class Resource$Accounts$Finalizedproposals {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/finalizedProposals')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Finalizedproposals = Resource$Accounts$Finalizedproposals;
    class Resource$Accounts$Products {
        constructor() { }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/products/{productId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'productId'],
                pathParams: ['accountId', 'productId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/products')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Products = Resource$Accounts$Products;
    class Resource$Accounts$Proposals {
        constructor() { }
        accept(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        addNote(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        cancelNegotiation(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        completeSetup(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/proposals')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/proposals')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        pause(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        resume(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/proposals/{proposalId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['accountId', 'proposalId'],
                pathParams: ['accountId', 'proposalId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Proposals = Resource$Accounts$Proposals;
    class Resource$Accounts$Publisherprofiles {
        constructor() { }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId', 'publisherProfileId'],
                pathParams: ['accountId', 'publisherProfileId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/publisherProfiles')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Accounts$Publisherprofiles = Resource$Accounts$Publisherprofiles;
    class Resource$Bidders {
        constructor() {
            this.accounts = new Resource$Bidders$Accounts();
            this.filterSets = new Resource$Bidders$Filtersets();
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders = Resource$Bidders;
    class Resource$Bidders$Accounts {
        constructor() {
            this.creatives = new Resource$Bidders$Accounts$Creatives();
            this.filterSets = new Resource$Bidders$Accounts$Filtersets();
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts = Resource$Bidders$Accounts;
    class Resource$Bidders$Accounts$Creatives {
        constructor() { }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+ownerName}/creatives/{creativeId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['ownerName', 'creativeId'],
                pathParams: ['creativeId', 'ownerName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Creatives = Resource$Bidders$Accounts$Creatives;
    class Resource$Bidders$Accounts$Filtersets {
        constructor() {
            this.bidMetrics = new Resource$Bidders$Accounts$Filtersets$Bidmetrics();
            this.bidResponseErrors =
                new Resource$Bidders$Accounts$Filtersets$Bidresponseerrors();
            this.bidResponsesWithoutBids =
                new Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids();
            this.filteredBidRequests =
                new Resource$Bidders$Accounts$Filtersets$Filteredbidrequests();
            this.filteredBids =
                new Resource$Bidders$Accounts$Filtersets$Filteredbids();
            this.impressionMetrics =
                new Resource$Bidders$Accounts$Filtersets$Impressionmetrics();
            this.losingBids = new Resource$Bidders$Accounts$Filtersets$Losingbids();
            this.nonBillableWinningBids =
                new Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids();
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['ownerName'],
                pathParams: ['ownerName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['ownerName'],
                pathParams: ['ownerName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets = Resource$Bidders$Accounts$Filtersets;
    class Resource$Bidders$Accounts$Filtersets$Bidmetrics {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Bidmetrics = Resource$Bidders$Accounts$Filtersets$Bidmetrics;
    class Resource$Bidders$Accounts$Filtersets$Bidresponseerrors {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Bidresponseerrors = Resource$Bidders$Accounts$Filtersets$Bidresponseerrors;
    class Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids = Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids;
    class Resource$Bidders$Accounts$Filtersets$Filteredbidrequests {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Filteredbidrequests = Resource$Bidders$Accounts$Filtersets$Filteredbidrequests;
    class Resource$Bidders$Accounts$Filtersets$Filteredbids {
        constructor() {
            this.creatives =
                new Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives();
            this.details =
                new Resource$Bidders$Accounts$Filtersets$Filteredbids$Details();
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Filteredbids = Resource$Bidders$Accounts$Filtersets$Filteredbids;
    class Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName', 'creativeStatusId'],
                pathParams: ['creativeStatusId', 'filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives = Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives;
    class Resource$Bidders$Accounts$Filtersets$Filteredbids$Details {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName', 'creativeStatusId'],
                pathParams: ['creativeStatusId', 'filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Filteredbids$Details = Resource$Bidders$Accounts$Filtersets$Filteredbids$Details;
    class Resource$Bidders$Accounts$Filtersets$Impressionmetrics {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Impressionmetrics = Resource$Bidders$Accounts$Filtersets$Impressionmetrics;
    class Resource$Bidders$Accounts$Filtersets$Losingbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Losingbids = Resource$Bidders$Accounts$Filtersets$Losingbids;
    class Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids = Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids;
    class Resource$Bidders$Filtersets {
        constructor() {
            this.bidMetrics = new Resource$Bidders$Filtersets$Bidmetrics();
            this.bidResponseErrors =
                new Resource$Bidders$Filtersets$Bidresponseerrors();
            this.bidResponsesWithoutBids =
                new Resource$Bidders$Filtersets$Bidresponseswithoutbids();
            this.filteredBidRequests =
                new Resource$Bidders$Filtersets$Filteredbidrequests();
            this.filteredBids = new Resource$Bidders$Filtersets$Filteredbids();
            this.impressionMetrics =
                new Resource$Bidders$Filtersets$Impressionmetrics();
            this.losingBids = new Resource$Bidders$Filtersets$Losingbids();
            this.nonBillableWinningBids =
                new Resource$Bidders$Filtersets$Nonbillablewinningbids();
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['ownerName'],
                pathParams: ['ownerName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['ownerName'],
                pathParams: ['ownerName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets = Resource$Bidders$Filtersets;
    class Resource$Bidders$Filtersets$Bidmetrics {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Bidmetrics = Resource$Bidders$Filtersets$Bidmetrics;
    class Resource$Bidders$Filtersets$Bidresponseerrors {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Bidresponseerrors = Resource$Bidders$Filtersets$Bidresponseerrors;
    class Resource$Bidders$Filtersets$Bidresponseswithoutbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Bidresponseswithoutbids = Resource$Bidders$Filtersets$Bidresponseswithoutbids;
    class Resource$Bidders$Filtersets$Filteredbidrequests {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Filteredbidrequests = Resource$Bidders$Filtersets$Filteredbidrequests;
    class Resource$Bidders$Filtersets$Filteredbids {
        constructor() {
            this.creatives = new Resource$Bidders$Filtersets$Filteredbids$Creatives();
            this.details = new Resource$Bidders$Filtersets$Filteredbids$Details();
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Filteredbids = Resource$Bidders$Filtersets$Filteredbids;
    class Resource$Bidders$Filtersets$Filteredbids$Creatives {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName', 'creativeStatusId'],
                pathParams: ['creativeStatusId', 'filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Filteredbids$Creatives = Resource$Bidders$Filtersets$Filteredbids$Creatives;
    class Resource$Bidders$Filtersets$Filteredbids$Details {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName', 'creativeStatusId'],
                pathParams: ['creativeStatusId', 'filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Filteredbids$Details = Resource$Bidders$Filtersets$Filteredbids$Details;
    class Resource$Bidders$Filtersets$Impressionmetrics {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Impressionmetrics = Resource$Bidders$Filtersets$Impressionmetrics;
    class Resource$Bidders$Filtersets$Losingbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Losingbids = Resource$Bidders$Filtersets$Losingbids;
    class Resource$Bidders$Filtersets$Nonbillablewinningbids {
        constructor() { }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['filterSetName'],
                pathParams: ['filterSetName'],
                context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexchangebuyer2_v2beta1.Resource$Bidders$Filtersets$Nonbillablewinningbids = Resource$Bidders$Filtersets$Nonbillablewinningbids;
})(adexchangebuyer2_v2beta1 = exports.adexchangebuyer2_v2beta1 || (exports.adexchangebuyer2_v2beta1 = {}));
//# sourceMappingURL=v2beta1.js.map