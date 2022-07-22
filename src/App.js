
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from './Pages/OurTeam'
import About from './Pages/About'
import Feed from "./components/Feed";
import Login from './Pages/SignIn'
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <div className="App">

            
        <BrowserRouter>
          <Navbar />
            <Routes>
                  <Route path="/" element={<LandingPage />} >
                      <Route path="/" element={<Feed />} />
                      <Route path="ourTeam" element={<OurTeam />} />
                      <Route path="about" element={<About />} />
                      <Route path="login" element={<Login />} />
                      <Route path="signUp" element={<SignUp />} />
                  </Route>
            </Routes>
          <Footer />
        </BrowserRouter>



        
        {/* <Routes>
          <Route path="LandingPage" element={<Feed />} >
          
          

          </Route>
        </Routes> */}
          
    </div>
  );
}

export default App;
