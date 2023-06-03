import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <Login /> },
    { path: "/profile-dashboard", element: <Profile /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
