import VentDisplay from "./display/VentDisplay";
import PMDisplay from "./display/PMDisplay";
import CustomContextMenu from "./CustomContextMenu";
import {contextMenu, useContextMenu} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import ZoomIn from "./display/ZoomIn";
import {useState} from "react";

const showMenu = e => {
  contextMenu.show({
    id: 'menu-id',
    event: e,
  })
}

function DisplayContainer({displayArray}) {
  const {row, col} = displayArray;
  const [zoomIn, setZoomIn] = useState(false)

  const {show} = useContextMenu({
    id: 'menu-id'
  })

  const handleContextMenu = e => {
    show(e, {
      position: {
        x: e.clientX,
        y: e.clientY
      },
    })
  }

  const onShow = () => {
    setZoomIn(!zoomIn)
  }

  return (
    <main id="main">
      <div className={`layout ${zoomIn && 'scroll'}`} id="scroll_layout">
        <div className="row">
          {
            [...Array(row * col)].map((item, idx) => {
              return (
                ++idx % 2 === 0 ?
                  <PMDisplay key={idx} row={row} col={col} onContextMenu={showMenu}/> :
                  <VentDisplay key={idx} row={row} col={col} onContextMenu={showMenu}/>
            )
            })
          }
          <CustomContextMenu onShow={onShow} />
        </div>
      </div>
      <ZoomIn zoomIn={zoomIn} onShow={onShow}/>
    </main>
  )
}

export default DisplayContainer;