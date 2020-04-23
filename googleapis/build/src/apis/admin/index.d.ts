import { admin_datatransfer_v1 } from './datatransfer_v1';
import { admin_directory_v1 } from './directory_v1';
import { admin_reports_v1 } from './reports_v1';
export declare const VERSIONS: {
    'datatransfer_v1': typeof admin_datatransfer_v1.Admin;
    'directory_v1': typeof admin_directory_v1.Admin;
    'reports_v1': typeof admin_reports_v1.Admin;
};
export declare function admin(version: 'datatransfer_v1'): admin_datatransfer_v1.Admin;
export declare function admin(options: admin_datatransfer_v1.Options): admin_datatransfer_v1.Admin;
export declare function admin(version: 'directory_v1'): admin_directory_v1.Admin;
export declare function admin(options: admin_directory_v1.Options): admin_directory_v1.Admin;
export declare function admin(version: 'reports_v1'): admin_reports_v1.Admin;
export declare function admin(options: admin_reports_v1.Options): admin_reports_v1.Admin;
