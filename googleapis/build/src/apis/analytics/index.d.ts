import { analytics_v2_4 } from './v2.4';
import { analytics_v3 } from './v3';
export declare const VERSIONS: {
    'v2.4': typeof analytics_v2_4.Analytics;
    'v3': typeof analytics_v3.Analytics;
};
export declare function analytics(version: 'v2_4'): analytics_v2_4.Analytics;
export declare function analytics(options: analytics_v2_4.Options): analytics_v2_4.Analytics;
export declare function analytics(version: 'v3'): analytics_v3.Analytics;
export declare function analytics(options: analytics_v3.Options): analytics_v3.Analytics;
