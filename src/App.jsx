import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Suspense, lazy } from "react";

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./Contact'));

function App() {

  return (
    <>
    
    <Link to="/">Home </Link>
    <Link to="/about">About </Link>
    <Link to="/contact">Contact </Link>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={
      <Suspense fallback={<p>Loading</p>}>
      <h2>About</h2> <br /> <br /> <br />
      <About />
    </Suspense>}/>
      <Route path="/contact" element={
      <Suspense fallback={<p>Loading</p>}>
      <h2>Contact</h2> <br /> <br /> <br />
      <Contact />
    </Suspense>}/>
      
     </Routes>
    </>
  )
}

export default App
