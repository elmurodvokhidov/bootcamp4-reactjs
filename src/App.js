import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
