import "./App.css";
import Fertlizer from "./components/Fertlizer";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/LoginForm/SignupForm";
import Weather from "./pages/Weather";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/weather",
      element: <Weather />,
    },
    {
      path: "/fertilizer",
      element: <Fertlizer />,
    },
  ]);

  return (
    <>
      <ToastContainer position="top-center" theme="light" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
