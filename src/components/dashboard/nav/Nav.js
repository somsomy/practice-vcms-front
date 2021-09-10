import {Grid} from "@material-ui/core";
import NavButton from "./NavButton";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useContext} from "react";
import {DialogContext} from "../../common/popups/context/dialogContext";
import showNewPatientDialog from "./AdmitNewPatient";
import showAutoDisplayDialog from "./AutoDisplayDialog"
import showDisplaySettingDialog from "./DisplaySettings";
import {PopoverContext} from "../../common/popups/context/popoverContext";

function Nav() {
  const {actions} = useContext(DialogContext)
  const popoverActions = useContext(PopoverContext).actions

  const handleAdmitPatientDialog = () => {
    const param = {
      actions: actions,
    }
    showNewPatientDialog(param)
  }

  const handleAutoDisplay = () => {
    const param = {
      actions: actions,
    }
    showAutoDisplayDialog(param)
  }

  const handleDisplaySettingsDialog = () => {
    const param = {
      actions: actions,
    }
    showDisplaySettingDialog(param)
  }

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={3}>
          <NavButton startIcon={<NotificationsIcon />}>Alarm Silence</NavButton>
        </Grid>
        <Grid item xs={3}>
          <NavButton endIcon={<ArrowDropDownIcon/>} onClick={popoverActions.handleAnchorEl}>Alarm Events</NavButton>
        </Grid>
        <Grid item xs>
          <NavButton onClick={handleAdmitPatientDialog}>Admit New Patient</NavButton>
        </Grid>
        <Grid item xs>
          <NavButton onClick={handleAutoDisplay}>Auto Display</NavButton>
        </Grid>
        <Grid item xs>
          <NavButton onClick={handleDisplaySettingsDialog}>Display Settings</NavButton>
        </Grid>
        <Grid item xs>
          <NavButton>##########</NavButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default Nav;