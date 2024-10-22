import { useEffect } from 'react';
import Particles from 'particlesjs';

export default function ParticleAnimation() {

  useEffect(() => {
    Particles.init({
      selector: '.background',
      maxParticles: 125,
      speed: 0.5,
      connectParticles: true,
      color: '#abcdef',
      sizeVariations: 2,
      //https://vincentgarreau.com/particles.js/
    });
  }, []);
}