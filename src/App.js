import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";

import PrivateRoute from "./route/PrivateRoute";
import Home from "./pages/Home/Home";
import AddService from "./pages/AddService/AddService";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/detail/:serviceId"></PrivateRoute>
            {/* 
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/dentist">
              <Dentists></Dentists>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>*/}
            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
