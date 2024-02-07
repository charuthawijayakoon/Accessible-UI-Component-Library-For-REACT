import React from "react";
import { UserInfo } from "../RightDrawer";
import 'sass/main.scss';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"text" | "large" | "controls" | "root" | "layoutCard" | "layoutHeader" | "addPaddingBottom" | "layoutBtn" | "layoutCardIcons" | "layoutCardContent" | "dialogPaper" | "closeButton" | "addIcon" | "titleHolder" | "btnIcon">;
export interface CustomDialogTitleProps {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
    classes: any;
}
interface BookMarkModalProps {
    userInfo: UserInfo;
    open: boolean;
    onClose: () => void;
    selectedItem: string;
    onUpdate: (menuLs: any) => void;
    menuLs: any[];
    contentLs: any[];
}
export declare function BookMarkModal(props: BookMarkModalProps): React.JSX.Element;
export {};
