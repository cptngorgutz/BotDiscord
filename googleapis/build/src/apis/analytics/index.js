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
const v2_4_1 = require("./v2.4");
const v3_1 = require("./v3");
exports.VERSIONS = {
    'v2.4': v2_4_1.analytics_v2_4.Analytics,
    'v3': v3_1.analytics_v3.Analytics,
};
function analytics(versionOrOptions) {
    return googleapis_common_1.getAPI('analytics', versionOrOptions, exports.VERSIONS, this);
}
exports.analytics = analytics;
//# sourceMappingURL=index.js.map