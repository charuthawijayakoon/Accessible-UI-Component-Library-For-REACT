import { Collapse, Drawer, IconButton, List, ListItemIcon, Tooltip, ListItemButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles, createStyles, } from '@mui/styles';
import { useEffect, useState } from 'react';
import * as Icons from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AddIcon from '@mui/icons-material/Add';
import { BookMarkModal } from './BookMarks/BookMarkModal';
import React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import './sass/main.scss';
const rightDrawerWidth = 60;
const useStyles = makeStyles((theme) => createStyles({
    
}));
export function RightDrawer(props) {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [shortCutsLs, setShortCutLs] = useState([]);
    const [isExpand, setIsExpand] = useState(false);
    const [selectItem, setSelectItem] = useState("");
    useEffect(() => {
        setShortCutLs(props === null || props === void 0 ? void 0 : props.data);
    }, [props === null || props === void 0 ? void 0 : props.data]);
    useEffect(() => {
        if (props === null || props === void 0 ? void 0 : props.isSaveSuccess) {
            setOpen(false);
        }
    }, [props === null || props === void 0 ? void 0 : props.isSaveSuccess]);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        
    }));
    const ListItem = (obj) => {
        var _a, _b, _c;
        let Icon = (_b = (Icons[(_a = obj === null || obj === void 0 ? void 0 : obj.icon) !== null && _a !== void 0 ? _a : 'Settings'])) !== null && _b !== void 0 ? _b : SettingsIcon;
        let open = obj === null || obj === void 0 ? void 0 : obj.isOpen;
        return (React.createElement(React.Fragment, null,
            React.createElement(Tooltip, { title: obj === null || obj === void 0 ? void 0 : obj.name, placement: "left" },
                React.createElement(ListItemButton, { className: open ? 'Uui-shortcutKey' : '', onClick: () => {
                        let newarr = shortCutsLs === null || shortCutsLs === void 0 ? void 0 : shortCutsLs.map((o) => {
                            return Object.assign(Object.assign({}, o), { isOpen: (o === null || o === void 0 ? void 0 : o.id) === (obj === null || obj === void 0 ? void 0 : obj.id) ? !(o === null || o === void 0 ? void 0 : o.isOpen) : false });
                        });
                        console.log(256, newarr);
                        setShortCutLs(newarr);
                    } },
                    React.createElement(ListItemIcon, null,
                        React.createElement(Icon, { className: open ? 'Uui-shortcutKeyClick' : '' })))),
            React.createElement(Collapse, { in: open, timeout: "auto", unmountOnExit: true },
                React.createElement(List, { component: "div", disablePadding: true }, (_c = obj === null || obj === void 0 ? void 0 : obj.contentList) === null || _c === void 0 ? void 0 :
                    _c.map((mod) => {
                        return ListSubItem(mod, open);
                    }),
                    React.createElement(ListItemButton, { onClick: () => {
                            setSelectItem(obj === null || obj === void 0 ? void 0 : obj.name);
                            setOpen(true);
                        } },
                        React.createElement(ListItemIcon, null,
                            React.createElement(AddIcon, { className: open ? 'Uui-icon-shortcut' : '' })))))));
    };
    const ListSubItem = (obj, open) => {
        var _a, _b;
        let SubIcon = (_b = (Icons[(_a = obj === null || obj === void 0 ? void 0 : obj.icon) !== null && _a !== void 0 ? _a : 'Settings'])) !== null && _b !== void 0 ? _b : SettingsIcon;
        let isActive = (obj === null || obj === void 0 ? void 0 : obj.link) === window.location.pathname ? true : false;
        return (React.createElement(React.Fragment, null,
            React.createElement(Tooltip, { title: obj === null || obj === void 0 ? void 0 : obj.name, placement: "left" },
                React.createElement(ListItemButton, { sx: { pl: 4 }, onClick: () => {
                        let fullurl = (props === null || props === void 0 ? void 0 : props.baseURL) + (obj === null || obj === void 0 ? void 0 : obj.link);
                        console.log(256, fullurl);
                        window.location.replace(fullurl.trim());
                    } },
                    React.createElement(ListItemIcon, null, isActive ?
                        React.createElement(React.Fragment, null,
                            React.createElement(StyledBadge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, variant: "dot" },
                                React.createElement(SubIcon, { className: open ? 'Uui-txt--primary' : '' })))
                        :
                            React.createElement(SubIcon, { className: open ? 'Uui-txt--primary' : '' }))))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Drawer, { className: 'Uui-rightDrawer', variant: 'permanent', classes: {
                paper: 'Uui-rightDrawerPaper'
            }, anchor: 'right' },
            React.createElement("div", { className: 'chatbar__iconHolder rightshort' },
                React.createElement(IconButton, { "aria-label": 'open drawer', className: 'chatbar__icon' },
                    React.createElement(MessageIcon, null)),
                React.createElement(IconButton, { "aria-label": 'open drawer', className: 'chatbar__icon', onClick: () => {
                        setSelectItem("");
                        setOpen(true);
                    } },
                    React.createElement(Tooltip, { title: "Manage Shortcuts", placement: "left" },
                        React.createElement(MoreHorizIcon, null))),
                React.createElement(IconButton, { className: 'expandIconRight', onClick: () => {
                        setIsExpand(!isExpand);
                        let newarr = shortCutsLs === null || shortCutsLs === void 0 ? void 0 : shortCutsLs.map((obj) => { return Object.assign(Object.assign({}, obj), { isOpen: !isExpand }); });
                        setShortCutLs(newarr);
                    } }, !isExpand ? React.createElement(OpenInFullIcon, null) : React.createElement(CloseFullscreenIcon, null)),
                React.createElement(List, null, shortCutsLs === null || shortCutsLs === void 0 ? void 0 : shortCutsLs.map((obj) => {
                    return ListItem(obj);
                })))),
        React.createElement(BookMarkModal, { auth:props.auth,userInfo: props === null || props === void 0 ? void 0 : props.userInfo, open: isOpen, onClose: () => {
                setOpen(false);
            }, selectedItem: selectItem, onUpdate: (data) => {
                if (data) {
                    props === null || props === void 0 ? void 0 : props.onUpdate(data);
                }
            }, menuLs: props === null || props === void 0 ? void 0 : props.menuLs, contentLs: props === null || props === void 0 ? void 0 : props.contentLs })));
}
//# sourceMappingURL=RightDrawer.js.map