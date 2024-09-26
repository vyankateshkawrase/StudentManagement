import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import { NavbarSimple } from "./Components/NavList";
import About from "./Components/About";
import StudentBlog from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";
import { SimpleFooter } from "./Components/Footer";

function App() {

  return (
    <>
    <NavbarSimple/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/read/:id" element={<Read/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blogs" element={<StudentBlog/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      <SimpleFooter/>
    </>
  )
}

export default App
