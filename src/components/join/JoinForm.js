import useStyles from "../../assets/style/login";
import {useHistory} from "react-router-dom";
import {Button, Grid, TextField} from "@material-ui/core";
import logo from "../../assets/images/logo.png";

function JoinForm() {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    history.push("/");
  }

  return (
    <div className={classes.paper}>
      <div>
        <img src={logo} alt="logo"/>
        <span>Join</span>
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={9}>
            <TextField fullWidth label="아이디" variant="outlined" margin="normal" required autoFocus/>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" color="primary">중복확인</Button>
          </Grid>
        </Grid>
        <TextField type="password" label="비밀번호" variant="outlined" margin="normal" required/>
        <TextField label="비밀번호 확인" variant="outlined" margin="normal" required/>
        <Grid container spacing={1}>
          <Grid item>
            <TextField label="이름" variant="outlined" margin="normal" required/>
          </Grid>
          <Grid item>
            <TextField label="직급" variant="outlined" margin="normal" required/>
          </Grid>
        </Grid>
        <TextField label="이메일" variant="outlined" margin="normal" required/>
        <Grid container spacing={1}>
          <Grid item>
            <TextField label="연락처" variant="outlined" margin="normal" required/>
          </Grid>
          <Grid item>
            <TextField label="휴대번호" variant="outlined" margin="normal"/>
          </Grid>
        </Grid>
        <TextField label="부서" variant="outlined" margin="normal" required/>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained" color="primary" margin
                    className={classes.button}>회원가입</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth type="reset" variant="outlined" color="primary" className={classes.button}>취소</Button>
          </Grid>
        </Grid>
      </form>
    </div>

  )
}

export default JoinForm;