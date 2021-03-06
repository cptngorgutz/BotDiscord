"use strict";
// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const google_auth_library_1 = require("google-auth-library");
const pify = require("pify");
const url = require("url");
const util = require("util");
const apirequest_1 = require("./apirequest");
const endpoint_1 = require("./endpoint");
const fsp = pify(fs);
class Discovery {
    /**
     * Discovery for discovering API endpoints
     *
     * @param options Options for discovery
     */
    constructor(options) {
        this.transporter = new google_auth_library_1.DefaultTransporter();
        this.options = options || {};
    }
    /**
     * Generate and Endpoint from an endpoint schema object.
     *
     * @param schema The schema from which to generate the Endpoint.
     * @return A function that creates an endpoint.
     */
    makeEndpoint(schema) {
        return (options) => {
            const ep = new endpoint_1.Endpoint(options);
            ep.applySchema(ep, schema, schema, ep);
            return ep;
        };
    }
    /**
     * Log output of generator. Works just like console.log
     */
    log(...args) {
        if (this.options && this.options.debug) {
            console.log.apply(this, arguments);
        }
    }
    /**
     * Generate all APIs and return as in-memory object.
     * @param discoveryUrl
     */
    discoverAllAPIs(discoveryUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
            const res = yield this.transporter.request({ url: discoveryUrl, headers });
            const items = res.data.items;
            const apis = yield Promise.all(items.map((api) => __awaiter(this, void 0, void 0, function* () {
                const endpointCreator = yield this.discoverAPI(api.discoveryRestUrl);
                return { api, endpointCreator };
            })));
            const versionIndex = {};
            // tslint:disable-next-line no-any
            const apisIndex = {};
            for (const set of apis) {
                if (!apisIndex[set.api.name]) {
                    versionIndex[set.api.name] = {};
                    apisIndex[set.api.name] = (options) => {
                        const type = typeof options;
                        let version;
                        if (type === 'string') {
                            version = options;
                            options = {};
                        }
                        else if (type === 'object') {
                            version = options.version;
                            delete options.version;
                        }
                        else {
                            throw new Error('Argument error: Accepts only string or object');
                        }
                        try {
                            const ep = 
                            // tslint:disable-next-line: no-any
                            set.endpointCreator(options, this);
                            return Object.freeze(ep); // create new & freeze
                        }
                        catch (e) {
                            throw new Error(util.format('Unable to load endpoint %s("%s"): %s', set.api.name, version, e.message));
                        }
                    };
                }
                versionIndex[set.api.name][set.api.version] = set.endpointCreator;
            }
            return apisIndex;
        });
    }
    /**
     * Generate API file given discovery URL
     *
     * @param apiDiscoveryUrl URL or filename of discovery doc for API
     * @returns A promise that resolves with a function that creates the endpoint
     */
    discoverAPI(apiDiscoveryUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof apiDiscoveryUrl === 'string') {
                const parts = url.parse(apiDiscoveryUrl);
                if (apiDiscoveryUrl && !parts.protocol) {
                    this.log('Reading from file ' + apiDiscoveryUrl);
                    const file = yield fsp.readFile(apiDiscoveryUrl, { encoding: 'utf8' });
                    return this.makeEndpoint(JSON.parse(file));
                }
                else {
                    this.log('Requesting ' + apiDiscoveryUrl);
                    const res = yield this.transporter.request({ url: apiDiscoveryUrl });
                    return this.makeEndpoint(res.data);
                }
            }
            else {
                const options = apiDiscoveryUrl;
                this.log('Requesting ' + options.url);
                const url = options.url;
                delete options.url;
                const parameters = {
                    options: { url, method: 'GET' },
                    requiredParams: [],
                    pathParams: [],
                    params: options,
                    context: { google: { _options: {} }, _options: {} }
                };
                const pcr = pify(apirequest_1.createAPIRequest);
                const res = yield pcr(parameters);
                return this.makeEndpoint(res.data);
            }
        });
    }
}
exports.Discovery = Discovery;
//# sourceMappingURL=discovery.js.map