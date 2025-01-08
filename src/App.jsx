import Home from "./Home/Home.jsx"
import Profile from "./Profile/Profile.jsx"
import Physics from "./Subjects/Physics.jsx"
import Chemistry from "./Subjects/Chemistry.jsx"
import Maths from "./Subjects/Maths.jsx"
import GK from "./Subjects/GK.jsx"
import Computer from "./Subjects/Computer.jsx"
import { AppProvider } from "./AppContext.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/Scholars_Playground" element={<Home/>}/>
          <Route path="/Scholars_Playground/profile" element={<Profile/>}/>
          <Route path="/Scholars_Playground/physics" element={<Physics/>}/>
          <Route path="/Scholars_Playground/chemistry" element={<Chemistry/>}/>
          <Route path="/Scholars_Playground/mathematics" element={<Maths/>}/>
          <Route path="/Scholars_Playground/general_knowledge" element={<GK/>}/>
          <Route path="/Scholars_Playground/computer" element={<Computer/>}/>
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
