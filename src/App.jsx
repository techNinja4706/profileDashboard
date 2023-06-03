import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import "./App.css";
import Post from "./Pages/Post/Post";
import Gallery from "./Pages/Gallery/Gallery";
import Todo from "./Pages/Todo/Todo";
import Layout from "./Pages/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import UserList from "./Context/UserList";
// import Text from "./components/Test";

function App() {
  const router = createBrowserRouter([
    // { path: "test", element: <Text />},
    { index: true, element: <Login /> },
    {
      path: "/profile/:id",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "post", element: <Post /> },
        { path: "gallery", element: <Gallery /> },
        { path: "todo", element: <Todo /> },
      ],
    },
  ]);
  return (
    <UserList>
      <RouterProvider router={router} />
    </UserList>
  );
}

export default App;
