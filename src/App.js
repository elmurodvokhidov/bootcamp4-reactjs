import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home';
import Magazine from "./pages/Magazine";
import RootLayout from "./layout/RootLayout";
import Admins from './pages/admins/Admins';
import Users from './pages/users/Users';
import ProfileLayout from "./layout/ProfileLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="magazine" element={<Magazine />} />
        <Route path="profile" element={<ProfileLayout />}>
          <Route path="admins" element={<Admins />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;