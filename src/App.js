//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  NavLink
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';


function App() {
  return (
  <Router>  
    <div className="App">
    <Header />
      <main role="main" className="">   
        <Switch>
          <Route exact path="/">
            <div className="container">
              <PageContentLanding />
              <Sidebar />
            </div>
          </Route>
          <Route path="/about">
          <div className="container">
            <div className="main-column">
              <p>Lorem ispum dolor.</p>
            </div>
            <Sidebar />
          </div>
          </Route>
          <Route path="/map">            
            <div className="map">Map goes here.</div>
          </Route>
        </Switch>  
      </main>
    <Footer />
    </div>
    </Router>  
  );
}

export default App;