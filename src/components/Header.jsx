import React, {Component} from "react"
import { Link } from 'react-router-dom';



class Header extends Component{


    render(){

        return(
            
                  <div className="header">

<Link
to= "/"
className="home-link">

<div 
className = "title" 
onClick ={this.props.renderHome}>
    
Tipo Verde 

<div className="sub-title">
Mexican Kitchen
</div>
</div>

</Link>

</div>
        )
    }
}

export default Header