import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import css
import './styles/index.css';
import './styles/fonts.css';
import {
  Header,
  List,
  Navbar,
  Footer
} from "./components";
import {
  Home,
  Projects,
  NotFinished,
  Join,
  Contact,
  Support,
  Newsletter,
} from "./pages";

ReactDOM.render(
  <Router >
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/games" element={<NotFinished />} />
      <Route path="/tabletop-games" element={<NotFinished />} />
      <Route path="/merch" element={<NotFinished />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/join" element={<Join />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
    <Footer imageurl="dasdasd" data="dasda" />
  </Router>,
  document.getElementById('root')
);