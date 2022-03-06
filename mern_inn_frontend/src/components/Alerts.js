import React from 'react'

function Alerts(props) {
  return (
    props.alert &&
    <>
      <div className={`alert alert-${props.alert.type} alert-dismissible`} style={{ position: 'absolute', zIndex: '999', width: '100%', top: '0' }}role="alert">
        {props.alert.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  )
}

export default Alerts