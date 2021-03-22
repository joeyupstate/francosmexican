
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "../src/components/Nav"
import Menu from "../src/components/pages/Menu";
import Home from "../src/components/pages/Homes"
import Story from "../src/components/pages/Story"
import React, { Component,Fragment } from 'react';
import Pledge from "../src/components/pages/Pledge"




class App extends Component{
render(){

  return (
    
    <Router>
      
<div className="App">

<Nav toggleMenu={this.toggleMenu} />
<Header renderHome={this.renderHome} />
<div className="container">

{this.renderRoutes()}
</div>

<Footer />

</div>
     </Router>
  );


}

renderRoutes = () => (
  <Fragment>
    <Route
      exact
      path="/"
      render={() => <Home />}
    />

<Route
      path="/story"
      render={() => <Story />}
    />

<Route
      path="/menu"
      render={() => <Menu/>}
    />

<Route
      path="/pledge"
      render={() => <Pledge/>}
    />
  

  </Fragment>
)

renderHome = () => (
  <Fragment>
    <Route
      exact
      path="/"
      render={() => <Home />}
    />
</Fragment>)


toggleMenu = () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    if (!nav.classList.contains('reveal')) {
      nav.classList.remove('hide');
      nav.classList.add('reveal');
    } else {
      nav.classList.add('hide');
      nav.classList.remove('reveal');
    }
  }
}





}



export default App;
