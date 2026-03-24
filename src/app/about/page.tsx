import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import VisualArchive from "../../components/Visuals/VisualsArchive";
import Contact from "../../components/Contact/Contact";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#0d0d0d' }}>
      <Navbar />
      
      <VisualArchive />
      <Contact />
    </main>
  );
}