import React from 'react'

function ScannerResult({props}) {
    console.log(props);
  return (
    <div>
        {props.map(item=><div>{item.name}<img src={item.image} alt=""></img></div>)}
    </div>
  )
}

export default ScannerResult