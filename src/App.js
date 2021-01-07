import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AdminHeader from './components/AdminHeader/AdminHeader.js';
import AdminSidebar from './components/AdminSidebar/AdminSidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';
import PageAbout from './components/PageAbout/PageAbout.js';
import PageDriversList from './components/PageDriversList/PageDriversList.js';
import AdminDepotMap from "./components/AdminDepotMap/AdminDepotMap";
import AdminData from "./components/AdminData/AdminData";
import AdminPostCode from "./components/AdminPostCode/AdminPostCode";

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
                <PageAbout />
              </div>
              <Sidebar />
            </div>
            <Footer />
          </Route>
          {/* admin  */}
          <Route exact path="/admin">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                <AdminData />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/drivers-list">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < PageDriversList />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/map">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < AdminDepotMap />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/postcode">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < AdminPostCode />
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