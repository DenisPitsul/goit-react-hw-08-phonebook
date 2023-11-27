import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "pages/Home/Home";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Contacts from "pages/Contacts/Contacts";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route 
          path='/register'
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register/>}/>
          }
        />
        <Route 
          path='/login'
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>
          }
        />
        <Route 
          path='/contacts'
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
          }
          />
      </Route>
    </Routes>
  )
}

export default App;
