import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import VisualArchive from "../../components/Visuals/VisualsArchive";
import Contact from "../../components/Contact/Contact";
import CustomCursor from '@/src/components/CustomCursor/CustomCursor';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#0d0d0d' }}>
      <Navbar />
      <CustomCursor />
      
      <VisualArchive />
      <Contact />
    </main>
  );
}