
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./routes/layout/layout.component.jsx";
import Home from "./routes/00-home/home.component.jsx";
import Destination from "./routes/01-destination/destination.component.jsx";
import Crew from "./routes/02-crew/crew.component.jsx";
import Technology from "./routes/03-technology/technonlogy.component";

// import ThemeColorUpdater from './themeColorUpdater.jsx';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>

  
  );
}

export default App;
