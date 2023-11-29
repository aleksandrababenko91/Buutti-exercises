import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import Notes from './Notes.jsx'


const Home = () => {
  return (
    <div>
      <h2>Welcome!</h2>
      </div>
  )
}
const About = () => {
  return (
    <div>
      <h2>this is a page for a React exercise.</h2>
      </div>
  )
}
const Links = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/">LinkedIn</a>
    </div>
  )
}
const App = () => {
  const padding = { padding: 5 }

  return(
    <Router>
      <div className="App">
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/About">about</Link>
        <Link style={padding} to="/Links">links</Link>
        <Link style={padding} to="/Notes">notes</Link>
      </div>
      <Routes>
        <Route path="/Links" element={<Links />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Notes"  element={<Notes />} />
      </Routes>
    </Router>
  )
}
export default App