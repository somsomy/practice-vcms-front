import LoginForm from "../components/login/LoginForm";
import {Link} from "react-router-dom";
import useStyles from "../assets/style/login";

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <LoginForm />
      <Link to="/join">회원가입</Link>
    </div>
  )
}

export default Login;