import React from 'react'

// Content Component

export default props =>{
  return(
    <div className="container" style={{height: '80vh'}}>

      <h3>here is some content for {props.title}</h3>

    </div>
  )
}