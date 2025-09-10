import { createRoutesFromElements, Route, useRoutes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    
  const routes = createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile/:username" element={<Profile />} />
      {/* * matches any path you haven't shown about, perfect for a not found page */}
           <Route path="*" element={<NotFound />} />
    </Route>
  );

  return useRoutes(routes);
};

export default AppRoutes;