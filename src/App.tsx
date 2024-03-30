import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { Home } from "./Pages";
import React from "react";
import { CustomizationProvider } from "./Contexts/Customization";
import NewApproach from "./Pages/NewApproach";

const App = () => {
  return (
    <>
      <CustomizationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<NewApproach />} />
            </Route>
          </Routes>
        </Router>
      </CustomizationProvider>
    </>
  );
};

export default App;
