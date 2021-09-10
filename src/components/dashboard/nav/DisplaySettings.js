const DialogContent = () => {
  return (
    <div>
      디스플레이 세팅
    </div>
  )
}

const showDisplaySettingDialog = ({actions}) => {
  actions.handleTitle('Display Settings')
  actions.handleContent(<DialogContent />)
  actions.handleOpen()
}

export default showDisplaySettingDialog;