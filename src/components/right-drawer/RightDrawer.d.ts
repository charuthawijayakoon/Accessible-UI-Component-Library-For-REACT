import React from 'react';
import 'sass/main.scss';
export interface UserInfo {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    img: any;
}
interface RightDrawerProps {
    userInfo: UserInfo;
    apiHost: string;
    baseURL: string;
    data: any[];
    onUpdate(data: any): void;

    auth:any[],
    menuLs: any[];
    contentLs: any[];
    isSaveSuccess: boolean;
}
export declare function RightDrawer(props: RightDrawerProps): React.JSX.Element;
export {};
