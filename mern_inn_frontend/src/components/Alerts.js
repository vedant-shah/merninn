import React from 'react'

function Alerts(props) {
  return (
    props.alert &&
    <>
      <div className={`alert alert-${props.alert.type}`} style={{ position: 'absolute', zIndex: '100', width: '100%' }}role="alert">
        {props.alert.message}
      </div>
    </>
  )
}

export default Alerts