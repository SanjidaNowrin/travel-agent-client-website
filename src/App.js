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
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import ManageEvents from "./pages/ManageEvents/ManageEvents";
import About from "./pages/About";
import Guiders from "./pages/Guiders/Guiders";

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
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/guiders">
              <Guiders></Guiders>
            </Route>

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
            <Route path="/event">
              <ManageEvents></ManageEvents>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
