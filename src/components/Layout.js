import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

// Layout
export default props =>{
  return(
    <div>
      <Header title={props.title} />
      <Content className="container" title={props.title} />
      <Footer title={props.title} />
    </div>
  )
}