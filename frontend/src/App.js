import './App.css';
import Fertlizer from './components/Fertlizer';
import Home from './components/Home';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/LoginForm/SignupForm';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

const router = createBrowserRouter([{
  path : "/",
  element : <Home/>
},{
  path : "/login",
  element : <LoginForm/>
} ,{
path : "/signup" ,
element : <SignupForm/>},
{
  path : "/fertilizer" ,
  element : <Fertlizer/>}

])

  return (
    <>
    <ToastContainer position="top-center" theme="light" />
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
