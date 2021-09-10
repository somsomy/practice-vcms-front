import {useHistory} from "react-router-dom";
import {Button, TextField} from "@material-ui/core";
import useStyles from "../../assets/style/login";
import logo from "../../assets/images/logo.png";

function LoginForm() {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    history.push("/dashboard");
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={logo} alt="logo"/>
        <span>Login</span>
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField label="ID" variant="outlined" margin="normal" required autoFocus/>
        <TextField type="password" label="Password" variant="outlined" margin="normal" required/>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>Login</Button>
      </form>
    </div>
  )
}

export default LoginForm;