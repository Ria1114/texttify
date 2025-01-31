import React from 'react'
// type rfc
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
       
        
      </ul>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' style={{height:'30px', width:'30px'}}></div>
      </div>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
      </div>
      </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {

   title: PropTypes.string,
   text: PropTypes.string

}
// Navbar.defaultProps = {
//     // in app.js if <Navbar/> is empty than we will use default props

//    title: 'set title here',
//    text: 'text here'

// }
