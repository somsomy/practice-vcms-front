import {createContext, useState} from "react";

export const PopoverContext = createContext({
  options: {
    anchorEl: '',
    content: ''
  },
  actions: {
    handleAnchorEl(){},
    handleClose(){},
    handleContent(){},
  }
})

const {Provider} = PopoverContext;

export const PopoverProvider = ({children}) => {
  const [anchorEl, setAnchorEl] = useState(false)
  const [content, setContent] = useState()

  const handleAnchorEl = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleContent = value => {
    setContent(value)
  }

  const initialState = {
    options: {
      anchorEl: anchorEl,
      content: content,
    },
    actions: {
      handleAnchorEl: handleAnchorEl,
      handleClose: handleClose,
      handleContent: handleContent,
    }
  }

  return (
    <Provider value={initialState}>
      {children}
    </Provider>
  )
}