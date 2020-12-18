import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';
import PageDriversList from './components/PageDriversList/PageDriversList.js';
import AdminHeader from './components/AdminHeader/AdminHeader.js';

function App() {
  return (
  <Router>
    <div className="App">    
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="container">
            <PageContentLanding />
            <Sidebar />
          </div>
          <Footer />
        </Route>
        <Route path="/about">
        <Header />  
        <div className="container">
          <div className="main-column">
            <p>Lorem ispum dolor.</p>
          </div>
          <Sidebar />
        </div>
        <Footer />
        </Route>
{/* admin  */}
        <Route exact path="/admin">
          <AdminHeader />
          <p>Admin login goes here.</p>
        </Route>
        <Route path="/admin/drivers-list">
          <AdminHeader />
          <div className="container">
            <div className="main-column">
              < PageDriversList />
            </div>
          </div>
        </Route>
        <Route path="/admin/map">
          <AdminHeader />
          <div className="map">Map goes here.</div>
        </Route>
      </Switch>
    </div>
    </Router>  
  );
}

export default App;