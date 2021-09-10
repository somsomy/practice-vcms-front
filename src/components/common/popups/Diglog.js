import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {useContext} from "react";
import {DialogContext} from "./context/dialogContext";

function Popup() {
  const {options, actions} = useContext(DialogContext)

  return (
    <Dialog open={options.open} onClose={actions.handleClose}>
      <DialogTitle
        disableTypography
        style={{backgroundColor: "navy", color: "white"}}>{options.title}</DialogTitle>
      <DialogContent>{options.content}</DialogContent>
      <DialogActions>{options.footer}</DialogActions>
    </Dialog>
  )
}

export default Popup;