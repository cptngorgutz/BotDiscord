"use strict";
// Copyright 2018, Google, LLC.
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
Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
const v1_1_1 = require("./v1.1");
const v2_1 = require("./v2");
const v3_1 = require("./v3");
exports.VERSIONS = {
    'v1.1': v1_1_1.androidpublisher_v1_1.Androidpublisher,
    'v1': v1_1.androidpublisher_v1.Androidpublisher,
    'v2': v2_1.androidpublisher_v2.Androidpublisher,
    'v3': v3_1.androidpublisher_v3.Androidpublisher,
};
function androidpublisher(versionOrOptions) {
    return googleapis_common_1.getAPI('androidpublisher', versionOrOptions, exports.VERSIONS, this);
}
exports.androidpublisher = androidpublisher;
//# sourceMappingURL=index.js.map