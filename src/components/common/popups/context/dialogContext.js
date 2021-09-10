import {createContext, useState} from "react";

export const DialogContext = createContext({
  options: {
    open: Boolean,
    title: String,
    content: '',
    footer: '',
  },
  actions: {
    handleClose(){},
    handleOpen(){},
    handleTitle(){},
    handleContent(){},
  }
})

const { Provider } = DialogContext;

export const DialogProvider = ({children}) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [footer, setFooter] = useState()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleTitle = value => {
    setTitle(value)
  }

  const handleContent = value => {
    setContent(value)
  }

  const handleFooter = value => {
    setFooter(value)
  }

  const initialState = {
    options: {
      open: open,
      title: title,
      content: content,
      footer: footer,
    },
    actions: {
      handleOpen: handleOpen,
      handleClose: handleClose,
      handleTitle: handleTitle,
      handleContent: handleContent,
      handleFooter: handleFooter,
    }
  }

  return (
    <Provider value={initialState}>
      {children}
    </Provider>
  )
}