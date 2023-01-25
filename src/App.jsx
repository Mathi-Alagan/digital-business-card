import React from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App(){
    return(
        <div className="container">
          <Header/>
          <Links/>
          <About/>
          <Interest/>
          <Footer/>
        </div>
    )
}