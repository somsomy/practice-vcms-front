import {Button} from "@material-ui/core";

function NavButton(props) {
  const {children, startIcon, endIcon, onClick} = props;

  return (
    <Button
      fullWidth
      size="small"
      variant="contained"
      color="primary"
      style={{border: "1px solid #c3c3c3"}}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >{children}</Button>
  )
}

export default NavButton;