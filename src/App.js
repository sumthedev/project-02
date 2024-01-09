import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Import your pages and components
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Events from "./Pages/Events";
import Messages from "./Pages/Messages";
import RootLayout from "./layouts/RootLayout";
import View from "./Pages/View";
import Edit from "./Pages/Edit";
import Eventedit from "./Pages/Event-edit";
import Eventview from "./Pages/Event-view";
import Form from "./components/Form";
import Login from "./Pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <RootLayout />
          ) : (
            <Login onLogin={() => setIsLoggedIn(true)} />
          )
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="form" element={<Form />} />
        <Route path="views" element={<View />} />
        <Route path="event-edit" element={<Eventedit />} />
        <Route path="event-view" element={<Eventview />} />
        <Route path="edit" element={<Edit />} />
        <Route path="events" element={<Events />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
