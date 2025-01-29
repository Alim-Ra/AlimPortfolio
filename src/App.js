/*App.js
Alim Rashyani
301497158*/

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Welcome from "./components/Welcome/welcome";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Intro />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
