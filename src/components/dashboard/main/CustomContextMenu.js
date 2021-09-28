import {Item, Menu, Separator} from "react-contexify";

function CustomContextMenu({onShow, }) {
  return (
    <Menu id="menu-id">
      <Item onClick={onShow}>
        Zoom In
      </Item>
      <Separator />
      <Item>
        Numberic Parameter Settings
      </Item>
      <Separator />
      <Item>
        Waveform Settings
      </Item>
      <Separator />
      <Item>
        Alarm Settings
      </Item>
      <Separator />
      <Item>
        Trend Review
      </Item>
      <Separator />
      <Item>
        Event Review
      </Item>
      <Separator />
      <Item>
        Admit or Discharge
      </Item>
    </Menu>
  )
}

export default CustomContextMenu;
