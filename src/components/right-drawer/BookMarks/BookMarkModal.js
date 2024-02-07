import { useEffect, useState } from "react";
import { createStyles, DialogTitle, IconButton, Typography, Dialog, Divider, DialogContent, Card, CardContent, Checkbox, ListItemIcon, ListItemText, Avatar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as Icons from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import React from "react";
import '../sass/main.scss';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export const useStyles = makeStyles((theme) => createStyles({
    layoutCard: {
        borderColor: '#EDEDED',
        height: '100%'
    },
    layoutHeader: {
        paddingBottom: 0
    },
    addPaddingBottom: {
        paddingBottom: '10px',
    },
    layoutBtn: {
        width: '100%',
        height: '100%',
        // minHeight: 100,
        borderColor: '#EDEDED',
    },
    layoutCardIcons: {
        '& > button:not(last-child)': {
            marginRight: 12
        }
    },
    layoutCardContent: {
        paddingBottom: '16px !important'
    },
    dialogPaper: {},
    root: {
        margin: 0,
        padding: 8,
    },
    closeButton: {
        position: 'absolute',
        right: 16,
        top: 16,
       // color: theme.palette.grey[500],
        padding: 0
    },
    addIcon: {
        position: 'absolute',
        left: 8,
        top: 8,
    },
    titleHolder: {
        display: 'flex',
        alignItems: 'center'
    },
    controls: {
        cursor: 'context-menu',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '20px',
        paddingRight: '20px',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifyItems: 'center',
        border: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        background: '#C2CAEC',
        borderRadius: '5px'
    },
    text: {
        textAlign: 'center'
    },
    large: {
        width: 68,
        height: 68,
        border: "4px solid white",
    },
    btnIcon: {
        color: "#2D4190",
        paddingRight: "2px",
        marginRight: "10px"
    }
}));
function CustomDialogTitle(props) {
    const { children, classes, onClose } = props, other = __rest(props, ["children", "classes", "onClose"]);
    return (React.createElement(DialogTitle, Object.assign({ disableTypography: true, className: classes.root }, other),
        React.createElement("div", { className: classes.titleHolder },
            React.createElement(IconButton, { "aria-label": "info" },
                React.createElement(AccountTreeIcon, { color: "primary" })),
            React.createElement(Typography, { color: "primary", component: "span", variant: "h6" }, children)),
        onClose ? (React.createElement(IconButton, { "aria-label": 'close', className: classes.closeButton, onClick: onClose },
            React.createElement(CloseIcon, null))) : null));
}
export function BookMarkModal(props) {
    var _a;
    const classes = useStyles();
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [menuLs, setMenuLs] = useState([]);
    const [contentLs, setContentLs] = useState([]);
    const [expanded, setExpanded] = useState();
    const [img, setImg] = useState();
    useEffect(() => {
        var _a, _b, _c, _d;
        clearField();
        if (props === null || props === void 0 ? void 0 : props.open) {
            const item = props.auth || {};
            setName(((_a = props === null || props === void 0 ? void 0 : props.userInfo) === null || _a === void 0 ? void 0 : _a.firstName) + " " + ((_b = props === null || props === void 0 ? void 0 : props.userInfo) === null || _b === void 0 ? void 0 : _b.lastName));
            setImg((_c = props === null || props === void 0 ? void 0 : props.userInfo) === null || _c === void 0 ? void 0 : _c.img);
            setMenuLs(props === null || props === void 0 ? void 0 : props.menuLs);
            setContentLs(props === null || props === void 0 ? void 0 : props.contentLs);
            let branchDetails = (_d = item) === null || _d === void 0 ? void 0 : _d.branches;
            let loggedBranch = branchDetails === null || branchDetails === void 0 ? void 0 : branchDetails.find((o) => { return o.isLogged; });
            setBranch(loggedBranch === null || loggedBranch === void 0 ? void 0 : loggedBranch.branchName);
        }
    }, [props === null || props === void 0 ? void 0 : props.open]);
    useEffect(() => {
        console.log(256, props === null || props === void 0 ? void 0 : props.selectedItem, contentLs);
        if ((props === null || props === void 0 ? void 0 : props.selectedItem) != "") {
            let newarr = contentLs === null || contentLs === void 0 ? void 0 : contentLs.map((obj) => {
                return Object.assign(Object.assign({}, obj), { isExpand: (obj === null || obj === void 0 ? void 0 : obj.name) === (props === null || props === void 0 ? void 0 : props.selectedItem) });
            });
            setExpanded(newarr);
        }
        else {
            setExpanded(contentLs);
        }
    }, [props === null || props === void 0 ? void 0 : props.selectedItem, contentLs]);
    useEffect(() => {
        console.log(256, expanded, props === null || props === void 0 ? void 0 : props.selectedItem);
    }, [expanded]);
    useEffect(() => {
        console.log(contentLs, menuLs);
    }, [contentLs, menuLs]);
    const handleToggle = (id) => {
        let newarr = menuLs === null || menuLs === void 0 ? void 0 : menuLs.map((item) => {
            var _a;
            return Object.assign(Object.assign({}, item), { contentList: (_a = item === null || item === void 0 ? void 0 : item.contentList) === null || _a === void 0 ? void 0 : _a.map((obj) => (obj === null || obj === void 0 ? void 0 : obj.moduleContentId) === id ? Object.assign(Object.assign({}, obj), { isShortcut: !(obj === null || obj === void 0 ? void 0 : obj.isShortcut), isDeleted: obj.id && (obj === null || obj === void 0 ? void 0 : obj.isShortcut) ? true : false }) : obj) });
        });
        console.log(256, newarr);
        setMenuLs(newarr);
    };
    const clearField = () => {
        setName("");
        setBranch("");
        setMenuLs([]);
        setContentLs([]);
        setExpanded([]);
    };
    const submitForm = () => {
        console.log(256, menuLs);
        props === null || props === void 0 ? void 0 : props.onUpdate(menuLs);
    };
    const CommonAccordian = (module) => {
        var _a, _b, _c, _d, _e, _f;
        let Icon = (_b = (Icons[(_a = module === null || module === void 0 ? void 0 : module.icon) !== null && _a !== void 0 ? _a : 'Settings'])) !== null && _b !== void 0 ? _b : SettingsIcon;
        return (React.createElement(React.Fragment, null,
            React.createElement(Accordion, { expanded: (_d = (_c = expanded === null || expanded === void 0 ? void 0 : expanded.find((obj) => { return (obj === null || obj === void 0 ? void 0 : obj.name) == (module === null || module === void 0 ? void 0 : module.name); })) === null || _c === void 0 ? void 0 : _c.isExpand) !== null && _d !== void 0 ? _d : false, onChange: () => {
                    let newarr = expanded === null || expanded === void 0 ? void 0 : expanded.map((o) => {
                        return Object.assign(Object.assign({}, o), { isExpand: module.name === o.name ? !(o === null || o === void 0 ? void 0 : o.isExpand) : false });
                    });
                    console.log(256, newarr);
                    setExpanded(newarr);
                } },
                React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                    React.createElement(Icon, { className: 'Uui-txt--primary' }),
                    React.createElement(Typography, null, module === null || module === void 0 ? void 0 : module.name)),
                ((_e = module === null || module === void 0 ? void 0 : module.contentList) === null || _e === void 0 ? void 0 : _e.length) > 0 ?
                    React.createElement(AccordionDetails, null, ContentList((_f = module === null || module === void 0 ? void 0 : module.contentList) !== null && _f !== void 0 ? _f : []))
                    :
                        React.createElement(React.Fragment, null))));
    };
    const ContentList = (contentLs) => {
        return (React.createElement(React.Fragment, null,
            React.createElement(List, { dense: true, sx: { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } }, contentLs === null || contentLs === void 0 ? void 0 : contentLs.map((obj) => {
                var _a, _b;
                let Icon = (_b = (Icons[(_a = obj === null || obj === void 0 ? void 0 : obj.icon) !== null && _a !== void 0 ? _a : 'Settings'])) !== null && _b !== void 0 ? _b : SettingsIcon;
                const labelId = `checkbox-list-secondary-label-${obj === null || obj === void 0 ? void 0 : obj.moduleContentId}`;
                return React.createElement(ListItem, { className: (obj === null || obj === void 0 ? void 0 : obj.isShortcut) ? "selectedListRow" : "", key: obj === null || obj === void 0 ? void 0 : obj.id, secondaryAction: React.createElement(Checkbox, { edge: "end", onChange: () => { handleToggle(obj === null || obj === void 0 ? void 0 : obj.moduleContentId); }, checked: obj === null || obj === void 0 ? void 0 : obj.isShortcut, inputProps: { 'aria-labelledby': labelId } }), disablePadding: true },
                    React.createElement(ListItemIcon, null,
                        React.createElement(Icon, { className: 'Uui-txt--primary' })),
                    React.createElement(ListItemText, { primary: obj === null || obj === void 0 ? void 0 : obj.name }));
            }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Dialog
        // className={classes.dialogPaper}
        , { 
            // className={classes.dialogPaper}
            onClose: props.onClose, "aria-labelledby": 'simple-dialog-title', open: props.open, fullWidth: true, maxWidth: "md" },
            React.createElement(CustomDialogTitle, { classes: classes, id: 'customized-dialog-title', onClose: props.onClose }, "Manage ShortCuts"),
            React.createElement(Divider, null),
            React.createElement(DialogContent, null,
                React.createElement("div", null,
                    React.createElement("br", null),
                    React.createElement("div", null,
                        React.createElement(Card, { className: 'formCard__shadowLess' },
                            React.createElement(CardContent, { className: 'formCard__body' },
                                React.createElement("form", null,
                                    React.createElement("div", { className: 'formCard__row' },
                                        React.createElement(Avatar, { alt: (_a = props === null || props === void 0 ? void 0 : props.userInfo) === null || _a === void 0 ? void 0 : _a.email, src: img, className: classes.large }),
                                        React.createElement("div", { className: 'formCard__item' },
                                            React.createElement(Typography, { variant: "h6", gutterBottom: true }, name),
                                            React.createElement("div", { className: 'formCard__row formCard__item--branch' },
                                                React.createElement(AccountTreeIcon, null),
                                                React.createElement(Typography, null, branch)))),
                                    React.createElement(Divider, null),
                                    React.createElement("div", { className: "manageShortCard" }, menuLs === null || menuLs === void 0 ? void 0 : menuLs.map((module) => {
                                        return CommonAccordian(module);
                                    })))))),
                    React.createElement("br", null),
                    React.createElement("div", { className: "brachbtn__buttonRow" },
                        React.createElement(Button, { variant: 'contained', className: 'Uui-btn--primary', type: 'submit', onClick: () => {
                                //setConfirmationModalOpen(true)
                                submitForm();
                            } }, "Save")))))));
}
//# sourceMappingURL=BookMarkModal.js.map