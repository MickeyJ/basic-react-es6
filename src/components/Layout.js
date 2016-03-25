import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

// Layout Component
// - collecting sub-components
// - passing down the 'title' prop from App.js

export default props =>{
  return(
    <div>
      <Header title={props.title} />
      <Content title={props.title} className="container" />
      <Footer title={props.title} />
    </div>
  )
}