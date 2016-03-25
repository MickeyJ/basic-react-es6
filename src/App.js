import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'

// Rendering the Layout component
// to <div id="main"> in index.html
// while passing in the 'title' as a prop

ReactDOM.render(
  <Layout title={'Some Website'} />,
  document.getElementById('main')
);