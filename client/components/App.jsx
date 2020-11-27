import React from 'react'



import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Polaroid from './Polaroid.jsx'
import Profile from './Profile.jsx'
import Search from './Search.jsx'

class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <Nav/>
          <Home/>
          <Form/>
          <Polaroid/>
          <Profile/>
          <Search/>
        </>
      )
    }
  }

export default App
