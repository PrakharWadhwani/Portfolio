import React from 'react';
import { designData } from '../../data/designData';
import styles from './VisualsArchive.module.css';

const VisualArchive = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        {designData.map((design) => (
          <div key={design.id} className={styles.card}>
            <img 
              src={design.image} 
              alt={design.title} 
              className={styles.image} 
            />
            <div className={styles.text}>
              <h3>{design.title}</h3>
              <p>{design.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualArchive;