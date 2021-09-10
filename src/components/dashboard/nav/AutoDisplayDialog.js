import {Button, DialogActions} from "@material-ui/core";

const DialogContent = ({actions}) => {
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <div>오토 디스플레이</div>
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

const showAutoDisplayDialog = ({actions}) => {
  actions.handleTitle('Auto Display')
  actions.handleContent(<DialogContent actions={actions}/>)
  actions.handleOpen()
}

export default showAutoDisplayDialog;