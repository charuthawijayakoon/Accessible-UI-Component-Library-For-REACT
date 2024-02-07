
import React from 'react'
import DynamicButton from '../button/DynamicButton'
import InfoIcon from "@mui/icons-material/Info";
import Collapse from "@mui/material/Collapse";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import UuiTypography from '../typography';
interface TreeItemProps {
    title:any;
    desc:any;
    children:any;
    info:any;
    onClick(event: React.MouseEvent<HTMLButtonElement>):void;
}
export default function TreeVIewComponent({title,desc,children,info,onClick}: TreeItemProps) {
  return (
    <div className="Uui-treeview__node__container" onClick={(e:React.MouseEvent<HTMLDivElement>) =>{
      e.stopPropagation()
    }} >
    <div className="Uui-treeview__node__title">
      <UuiTypography variant="body1">
        {title}
      </UuiTypography>
    </div>
    <div className='TreeViewBtnWrapper'  >
   
      {
        info === "Add New Class Group"  ?

        <span style={{paddingRight:"60px"}}>
        <DynamicButton
        title={desc}
        onClick={() => {}}
      >
        {info !== "Product" ? <InfoIcon /> :null}
      </DynamicButton>
      <DynamicButton
        title={info}
        onClick={onClick}
      >
        {info !== "Product" ? <AddCircleOutlineRoundedIcon
          style={{ color: "#005EB8" }}
        /> :null}
      </DynamicButton>
      </span>

      :
     <>
        <DynamicButton
        title={desc}
        onClick={() => {}}
      >
        {info !== "Product" ? <InfoIcon /> :null}
      </DynamicButton>
      <DynamicButton
        title={info}
        onClick={onClick}
      >
        {info !== "Product" ? <AddCircleOutlineRoundedIcon
          style={{ color: "#005EB8" }}
        /> :null}
      </DynamicButton>
     </>
      }

      <span>
      {children}
      </span>

    </div>
  </div>
  )
}
