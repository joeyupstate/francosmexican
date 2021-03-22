import React, {Component} from "react"
import { Link } from 'react-router-dom';


const ASSETS = {
    burger: require("../assets/buger.png")
}
const PAGES = [
    {
      title: 'Menu',
      to: '/menu'
    },
    {
      title: 'Story',
      to: '/story'
    },
    {
      title: 'Pledge',
      to: '/pledge'
    },
    {
      title: 'Contact',
      to: '/about'
    }
]



class Nav extends Component{


    
    render(){

        return(
        
          
        <div className="menu">
        <img
                src = {ASSETS.burger}
                className="dropdown-image"
                alt="burger-icon"
                onClick = {this.props.toggleMenu}
                />
            <div className ="nav" >
            {PAGES.map((page) =>(
               <Link
               to={page.to}
               className="item"
               key={page.title}
               onClick={this.props.toggleMenu}
           
             >
               {page.title}
             </Link>
        

            ))}     
          <div
          className="close"
          id="close-nav"
          onClick={this.props.toggleMenu}
        >x</div>        
        </div>

         </div>


        )
    }
}

export default Nav