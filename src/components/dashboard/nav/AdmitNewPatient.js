import {Button, DialogActions, Grid} from "@material-ui/core";

const DialogContent = ({actions}) => {
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form>
      <Grid container>
        <Grid item>
          11111
        </Grid>
        <Grid item>
          22222
        </Grid>
        <Grid item>
          33333
        </Grid>
        <Grid item>
          44444
        </Grid>
      </Grid>

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
    </form>

  )
}

const showNewPatientDialog = ({actions}) => {
  actions.handleTitle('Admit New Patient')
  actions.handleContent(<DialogContent actions={actions}/>)
  actions.handleOpen()
}

export default showNewPatientDialog;