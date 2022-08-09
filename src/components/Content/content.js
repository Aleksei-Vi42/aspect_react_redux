import React, { useCallback } from "react"
import './content.css'


const Content = ({ props }) => {

  let steElemens = (el) => {

    if (el.type) {
      switch (el.type) {
        case 'panel':
          return (<div className="panel"
            style={{
              width: el.props.width + 'px',
              height: el.props.height + 'px',
              visibility: el.props.visible ? 'visibility' : 'hidden'
            }}>panel</div>)

        case 'label':
          return (<span className="label"
            style={{
              visibility: el.props.visible ? 'visibility' : 'hidden'
            }}>{el.props.caption}</span>)

        case 'button':
          return (<button className="button"
            style={{
              width: el.props.width + 'px',
              height: el.props.height + 'px',
              visibility: el.props.visible ? 'visibility' : 'hidden'
            }}>button</button>)


      }
    }

  }

  return (
    <div>
      {props.map(steElemens)}
    </div>

  )
}
export default Content