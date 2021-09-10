import Popover from '@material-ui/core/Popover';
import {useContext} from "react";
import {PopoverContext} from "./context/popoverContext";
import {List, ListItem} from "@material-ui/core";

function PopOver() {
  const {options, actions} = useContext(PopoverContext)
  console.log(options.anchorEl)
  return (
    <Popover
      anchorEl={options.anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(options.anchorEl)}
      onClose={actions.handleClose}>
      <List>
        <ListItem>dd</ListItem>
      </List>
    </Popover>
  )
}

export default PopOver;