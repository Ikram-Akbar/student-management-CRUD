
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/CRUD/Home";
import Students from "../components/CRUD/Students";
import Update from "../components/CRUD/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/students",
    element: <Students></Students>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path:"/update/:id",
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
]);
export default router;