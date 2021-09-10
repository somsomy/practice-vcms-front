import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "10px 0 20px"
  },
}))

export default useStyles;