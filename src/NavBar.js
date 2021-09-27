import {Route, NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

import Dashboard from './Dashboard'
import Pages from './Pages'
import Links from './Links'

const NavBar=(props)=>{
   
    return(
        <div>

            <Navbar bg = "dark" expand = "lg">
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav" />
            <Nav>

                    <ul class = "navbar-nav">
                                <NavLink to="/dashboard" className = "d-inline p-2 bg-dark text-white"> Dashbord </NavLink>
                                <NavLink to="/pages" className = "d-inline p-2 bg-dark text-white"> Pages </NavLink>
                                <NavLink to="/links" className = "d-inline p-2 bg-dark text-white"> Links </NavLink>
                            
                        
                        
                    </ul>
            </Nav>
            </Navbar >
          <Route path="/dashboard" component = {Dashboard} exact={true}/>  
          <Route path="/pages" component ={Pages}  />  
          <Route path="/links" component ={Links} />  
           
       
        </div>  
        
        
        
    )
}


export default NavBar


