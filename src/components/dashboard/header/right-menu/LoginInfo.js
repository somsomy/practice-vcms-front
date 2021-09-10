import {Button, Menu, MenuItem} from "@material-ui/core";
import {useState} from "react";

function LoginInfo() {
  const [anchorEl, setAnchorEl] = useState(null)
console.log(anchorEl)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button fullWidth size="small" variant="contained" onClick={handleClick}>로그인 정보</Button>

      <Menu
        anchorEl={anchorEl}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>계정 정보</MenuItem>
        <MenuItem>사용자 관리</MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </Menu>
    </div>
  )
}

export default LoginInfo;