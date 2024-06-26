import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/UserLogin";
import RecipeFinder from "./components/RecipeFinderproject";
import Homepage from "./components/HomePage";
//import Homepage from "./components/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/getrecipe",
          element: <RecipeFinder />,
        },
        {
          path: "/getlogin",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;