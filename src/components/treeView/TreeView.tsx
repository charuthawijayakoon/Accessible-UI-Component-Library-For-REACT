import {
  alpha,
  Card,
  Collapse,
  SvgIcon,
  SvgIconProps,
  Theme,
  Tooltip,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { TransitionProps } from "@mui/material/transitions";
import TreeItem, { TreeItemProps } from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import React from "react";
import { useSpring, animated } from "react-spring";
import UuiTypography from "../typography";
import { UuiButton, UuiIconButton } from "../button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import clsx from 'clsx';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


import { makeStyles, useTheme } from "@mui/material/styles";
import TreeVIewComponent from "./treeViewComponent";

const useStyles = makeStyles({
      root: {
          minHeight: '100vh',
          flexGrow: 1,
          maxWidth: 400
      }
});

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="Uui-treeview__icon"
      fontSize="inherit"
      style={{ width: 18, height: 18 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="Uui-treeview__icon"
      fontSize="inherit"
      style={{ width: 18, height: 18 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="Uui-treeview__icon close"
      fontSize="inherit"
      style={{ width: 18, height: 18 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}



const StyledTreeItem = withStyles(() =>
  createStyles({
    iconContainer: {
      "& .close": {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(useTheme().palette.text.primary, 0.4)}`,
    },
  })
)
  ((props: TreeItemProps) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />
  ));

function UuiTreeView() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [anchorEl, setAnchorEl] = React.useState(false);
  let [anchorElclassGroup, setAnchorElclassGroup] = React.useState(false);
  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    if (anchorEl === false) {
      if (anchorElclassGroup === false) {
        setExpanded(nodeIds);
      }
    }
  };

  return (
    <div className="componentCard__treeviewContent">
      {/* <TreeView
        className={clsx(classes.root, 'Uui-treeview')}
        expanded={expanded}
       
        onNodeToggle={anchorEl === true? () => null : handleToggle}
        defaultCollapseIcon={
          <IndeterminateCheckBoxIcon
            className="Uui-txt--primary"
            style={{ fontSize: 22 }}
          />
        }
        defaultExpandIcon={
          <AddBoxIcon
            className="Uui-txt--primary "
            style={{ fontSize: 22 }}
          />
        }
      >
     
          
              <StyledTreeItem
                className="Uui-treeview__node"
                label={
                  <TreeVIewComponent
                    info={"Add New Class Group"}
                    children={<>

                     
                    </>} onClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
                      throw new Error("Function not implemented.");
                    } } title={undefined} desc={undefined}                  />
                }
              >
                    <StyledTreeItem
                      className="Uui-treeview__node"
                      label={
                        <TreeVIewComponent
                          info={"Add New Class"}
                          children={<>


                            <UuiIconButton
                              className='visiblityIconBtn'
                              size="small"
                            >
                              <Tooltip placement="left" arrow children={undefined} title={undefined}>
                                <div className='visiblityIcon'>
                                  <RemoveRedEyeOutlinedIcon />
                                </div>
                              </Tooltip>
                            </UuiIconButton>
                          </>} onClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
                            throw new Error("Function not implemented.");
                          } } title={undefined} desc={undefined}                        />
                      }
                    >
                      {classes.map(
                        ({
                          className,
                          classId,
                          products,
                          classDescription,
                        }: any) => (
                          <StyledTreeItem
                            className="Uui-treeview__node"
                            nodeId={"Class"+classDescription}
                            label={
                              <TreeVIewComponent
                                title={className}
                                desc={classDescription}
                                info={"Add New Product"}
                                children={<>
                                  <UuiIconButton
                                    className='visiblityIconBtn'
                                    size="small"
                                  >
                                    <Tooltip title={classDescription} placement="left" arrow>
                                      <div className='visiblityIcon'>
                                        <RemoveRedEyeOutlinedIcon />
                                      </div>
                                    </Tooltip>
                                  </UuiIconButton>
                                </>} onClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
                                  throw new Error("Function not implemented.");
                                } }                              />
                            }
                          >
                            {products.map(
                              ({
                                productName,
                                productId,
                                productDescription, 
                                   productStatus
                              }: any) => (
                                <StyledTreeItem
                                  className="Uui-treeview__node"
                                  nodeId={productDescription}
                                  label={
                                    <TreeVIewComponent
                                      onClick={() => {}}
                                      title={productName}
                                      desc={productDescription}
                                      info={"Product"}
                                      children={
                                        <>
                                          <UuiIconButton
                                          className='visiblityIconBtn'
                                            size="small"
                                            
                                          >
                                            <Tooltip title={productName} placement= "left" arrow>
                                            <div className='visiblityIcon' >
                                                <RemoveRedEyeOutlinedIcon />
                                              </div>
                                            </Tooltip>
                                          </UuiIconButton>
                                        </>
                                      }
                                    />
                                  }
                                />
                              )
                            )}
                          </StyledTreeItem>
                        )
                      )}
                    </StyledTreeItem>
                  )
         
              </StyledTreeItem>
         
      </TreeView> */}

    </div>
  );
}

export default UuiTreeView;
