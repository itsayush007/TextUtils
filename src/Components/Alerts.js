import React from 'react'

function Alerts(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
 
        <div style={{height:"60px"}}>
               {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show rounded`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            {/* removed dismiss icon from here */}
        </div>}
        </div>
     
    )
}

export default Alerts
