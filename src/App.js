import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AdminHeader from './components/AdminHeader/AdminHeader.js';
import AdminSidebar from './components/AdminSidebar/AdminSidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';
import PageAbout from './components/PageAbout/PageAbout.js';
import PageManageCollection from './components/PageManageCollection/PageManageCollection.js';
import AdminDriversList from './components/AdminDriversList/AdminDriversList.js';
import AdminDepotMap from './components/AdminDepotMap/AdminDepotMap.js';
import AdminData from './components/AdminData/AdminData.js';
import AdminPostCode from './components/AdminPostCode/AdminPostCode.js';
// import AdminCounter from './components/AdminCounter/AdminCounter.js';
import AdminWelcome from './components/AdminWelcome/AdminWelcome.js';
import AdminDrivers from './components/AdminDrivers/AdminDrivers.js';
import AdminDriversMap from './components/AdminDriversMap/AdminDriversMap.js';
import AdminUsers from './components/AdminUsers/AdminUsers.js';
import TestPage from './components/FormUtils/TestPage.js';

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
              <PageAbout />
              <Sidebar />
            </div>
            <Footer />
          </Route>
          <Route path="/manage-collection">
            <Header />
            <div className="container">
              <PageManageCollection />
              <Sidebar />
            </div>
            <Footer />
          </Route>
          <Route path="/test">
            <Header />
            <div className="container">
              <TestPage />
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
                <AdminWelcome />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/depots">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                <AdminData />
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
          <Route path="/admin/drivers">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                <AdminDrivers />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/admin/users">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                <AdminUsers />
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

          {/*           <Route path="/admin/counter">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < AdminCounter/>
              </div>
            </div>
            <Footer />
          </Route> */}

          {/* driver  */}
          <Route exact path="/driver">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                <AdminWelcome />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/driver/list">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < AdminDriversList />
              </div>
            </div>
            <Footer />
          </Route>
          <Route path="/driver/map">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
                < AdminDriversMap />
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
