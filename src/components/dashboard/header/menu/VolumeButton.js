import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import {Button, DialogActions} from "@material-ui/core";
import {useContext} from "react";
import {DialogContext} from "../../../common/popups/context/dialogContext";

const DialogContent = ({actions}) => {
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      볼륨 세팅
      <DialogActions>
        <Button type="submit">
          OK
        </Button>
        <Button onClick={actions.handleClose}>
          Cancel
        </Button>
        <Button onSubmit={onSubmit}>
          Apply
        </Button>
      </DialogActions>
    </>
  )
}

function VolumeButton() {
  const {actions} = useContext(DialogContext)

  const handleVolumeSettings = () => {
    actions.handleTitle('Sound Settings')
    actions.handleContent(<DialogContent actions={actions}/>)
    actions.handleOpen()
  }

  return (
    <Button
      size="small"
      variant="contained"
      startIcon={<VolumeUpIcon/>}
      onClick={handleVolumeSettings}
    >볼륨</Button>
  )
}

export default VolumeButton;