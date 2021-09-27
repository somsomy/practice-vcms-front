import {createContext, useState} from "react";

export const ModalContext = createContext({
  options: {
    open: Boolean,
    title: String,
    content: '',
    bottom: '',
  },
  actions: {
    handleOpen(){},
    handleClose(){},
    handleTitle(){},
    handleContent(){},
    handleBottom(){},
  }
})

const { Provider } = ModalContext;

export const ModalProvider = ({children}) => {
  const [open, setOpen] = useState('none')
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [bottom, setBottom] = useState()

  const handleOpen = () => {
    setOpen('flex')
  }

  const handleClose = () => {
    setOpen('none')
  }

  const handleTitle = value => {
    setTitle(value)
  }

  const handleContent = value => {
    setContent(value)
  }

  const handleBottom = value => {
    setBottom(value)
  }

  const initialState = {
    options: {
      open: open,
      title: title,
      content: content,
      bottom: bottom,
    },
    actions: {
      handleOpen: handleOpen,
      handleClose: handleClose,
      handleTitle: handleTitle,
      handleContent: handleContent,
      handleBottom: handleBottom,
    }
  }

  return (
    <Provider value={initialState}>
      {children}
    </Provider>
  )
}