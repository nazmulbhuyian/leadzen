import { RouterProvider } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import router from "./login/routes";



function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
