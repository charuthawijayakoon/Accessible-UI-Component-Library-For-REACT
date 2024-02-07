import {
    Card,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    Switch,
    TextField,
    styled,
  } from "@mui/material";
  import { Meta } from "@storybook/react";
  import React from "react";
  import UuiInput from "./Input";
  
  import UuiTypography from "../typography";
  import UuiRadio from "../radio";
  import Uuiaddlocation from "./addAddress";
  import UuidropDown from "./dropDown";
  import UuiinputField from "./inputField";
  import UuiaddContact from "./addContent";
  import UuideletContact from "./deleteContact";
  import UuiCheckbox from "./checkbox";
  import UuiDisableCheckboxTxt from "./desableCheckbox";
  import UuionlyCheckboxTxt from "./onlyCheckbox";
  import UuionlySwitch from "./onlySwitch";
  import UuiDisableSwitch from "./disableSwitch";
  import UuionlyRadio from "./onlyRadio";
  import UuiSwitchTxt from "./switch";
  import UuiSwitch from "../switch";
  import UuiRadioTxt from "./radio";
  import UuiRadioDisable from "./disableRadio";
  import UuidisableInput from "./disableInput";
  import UuidisableDropdown from "./disableDropDown";
  import UuiUploadProfile from "./uploadprofile";
  import UuiDatePicker from "./datePicker";
  import UuidisableDatePicker from "./disableDatepicker";
  import UuiCalendar from "./Calendar";
  import UuiEsignature from "./esignature";
  // import UuiSwitch from "./switch";
  
  // import flage from "../../resources/flage .svg";
  
  export default {
    title: "components/Input",
  } as Meta;
  
  export const Default = () => {
    const [age, setAge] = React.useState("");
    const [open1, setOpen] = React.useState(false);
  
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    const handleClose1 = () => {
      setOpen(false);
    };
  
    const handleOpen1 = () => {
      setOpen(true);
    };
  
    return (
      <Card className="componentCard">
        <div className="componentCard__title">Inputs</div>
        <h1 className="componentCard__subHeader">Checkbox</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">No Lable checked</div>
            <UuionlyCheckboxTxt />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Active CheckBox</div>
            <UuiCheckbox />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Disable CheckBox</div>
            <UuiDisableCheckboxTxt />
          </div>
          <div className="formCard__item"></div>
        </div>
        <h1 className="componentCard__subHeader">Switch</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Only Switch</div>
            <UuionlySwitch />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Switch</div>
            <FormControlLabel
              control={<UuiSwitch color="primary" name="gilad" />}
              label={
                <UuiTypography className="Uui-txt-small" variant="body1">
                  Label
                </UuiTypography>
              }
            />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">DisableSwitch</div>
            <UuiDisableSwitch />
          </div>
          <div className="formCard__item"></div>
        </div>
  
        <h1 className="componentCard__subHeader">Radio</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Only Radio</div>
            <UuionlyRadio />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Radio</div>
            <UuiRadioTxt />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Disable Radio</div>
            <UuiRadioDisable />
          </div>
          <div className="formCard__item"></div>
        </div>
        <h1 className="componentCard__subHeader t">Text Fields</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Active Input</div>
            <UuiinputField />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Disable Input</div>
            <UuidisableInput />
          </div>
          <div className="formCard__item"></div>
          <div className="formCard__item"></div>
        </div>
        {/* <h1 className="componentCard__subHeader t">Password Field</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Active Input</div>
            <UuiinputField />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">Disable Input</div>
            
          </div>
          <div className="formCard__item"></div>
          <div className="formCard__item"></div>
        </div> */}
        <h1 className="componentCard__subHeader t">Date Picker</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Active Date Picker</div>
            <UuiDatePicker />
          </div>
          <div className="formCard__item">
            <div className="lableHeadings">DisableDate Picker</div>
            <UuidisableDatePicker />
          </div>
          <div className="formCard__item"></div>
          <div className="formCard__item"></div>
        </div>
        <div className="formCard__row">
          <div className="formCard__item">
            <div className="lableHeadings">Date Picker Calender</div>
            <UuiCalendar />
          </div>
        </div>
        <div className="formCard__item"></div>
        <h1 className="componentCard__subHeader ">DropDown</h1>
        <div className="formCard__row">
          <div className="formCard__item staffDropDown">
            <div className="lableHeadings">Active Dropdown</div>
            <UuidropDown />
          </div>
          <div className="formCard__item ">
            <div className="lableHeadings">Disable Dropdown</div>
            <UuidisableDropdown />
          </div>
          <div className="formCard__item "></div>
          <div className="formCard__item "></div>
        </div>
        <h1 className="componentCard__subHeader">Add location</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <Uuiaddlocation />
          </div>
          <div className="formCard__item"></div>
          <div className="formCard__item"></div>
        </div>
        <h1 className="componentCard__subHeader ">Add Contact</h1>
        <div className="lableHeadings">Active form</div>
        <UuiaddContact />
        <div className="lableHeadings">Disable form</div>
        <UuideletContact />
        <h1 className="componentCard__subHeader">Divider</h1>
        <Divider className="dividerLine" />
        <h1 className="componentCard__subHeader ">upload Profile</h1>
        <div className="formCard__row">
          <div className="formCard__item">
            <UuiUploadProfile />
          </div>
          <div className="formCard__item">
            <UuiEsignature />
          </div>
        </div>
      </Card>
    );
  };
  