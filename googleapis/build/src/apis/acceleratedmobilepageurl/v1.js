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
var acceleratedmobilepageurl_v1;
(function (acceleratedmobilepageurl_v1) {
    let context;
    /**
     * Accelerated Mobile Pages (AMP) URL API
     *
     * Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given
     * list of public URL(s).
     *
     * @example
     * const {google} = require('googleapis');
     * const acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
     *
     * @namespace acceleratedmobilepageurl
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Acceleratedmobilepageurl
     */
    class Acceleratedmobilepageurl {
        constructor(options, google) {
            context = { _options: options || {}, google };
            this.ampUrls = new Resource$Ampurls();
        }
    }
    acceleratedmobilepageurl_v1.Acceleratedmobilepageurl = Acceleratedmobilepageurl;
    class Resource$Ampurls {
        constructor() { }
        batchGet(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://acceleratedmobilepageurl.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/ampUrls:batchGet')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
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
    acceleratedmobilepageurl_v1.Resource$Ampurls = Resource$Ampurls;
})(acceleratedmobilepageurl_v1 = exports.acceleratedmobilepageurl_v1 || (exports.acceleratedmobilepageurl_v1 = {}));
//# sourceMappingURL=v1.js.map