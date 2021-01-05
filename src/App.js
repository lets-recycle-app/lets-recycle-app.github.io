import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';
import PageDriversList from './components/PageDriversList/PageDriversList.js';
import AdminDepotMap from "./components/AdminDepotMap/AdminDepotMap";

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
            <HeaderAdmin />
            <div className="admin-container">
              <SidebarAdmin />
              <div className="main-column">
                <p>Sample Admin page</p>
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/drivers-list">
            <HeaderAdmin />
            <div className="admin-container">
              <SidebarAdmin />
              <div className="main-column">
                < PageDriversList />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/map">
            <HeaderAdmin />
            <div className="admin-container">
              <SidebarAdmin />
              <div className="main-column">
                < AdminDepotMap />
              </div>
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;