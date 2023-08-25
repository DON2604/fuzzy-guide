import React from 'react'
import { Banner } from "./Features/Banner";
import { Skills } from "./Features/Skills";
import { Contact } from "./Features/Contact";
import { Footer } from './Features/Footer';
import { NavBar } from './Features/NavBar';

const Home = () => {
  return (
    <>
    <NavBar />
    <Banner />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}

export default Home
