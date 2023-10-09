import React from 'react'

export default function Alert(props) {
  // if (!props.alert) {
  //   return null; // Don't render anything if props.alert is null or undefined
  // }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">        
    <strong>{props.alertText}</strong>: {props.alert.msg}
    
    </div>}
    </div>
  )
}
