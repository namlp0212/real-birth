import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksComponent = () => {
    useEffect(() => {
      const container = document.querySelector('.fireworks-container');
      const fireworks = new Fireworks(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 60,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 0
        },
        delay: {
          min: 10,
          max: 60
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 4
          },
          trace: {
            min: 0.1,
            max: 1
          }
        },
        brightness: {
          min: 60,
          max: 100,
          decay: {
            min: 0.015,
            max: 0.025
          }
        },
        boundaries: {
          x: 50,
          y: 50,
          width: container.clientWidth,
          height: container.clientHeight
        },
        sound: {
          enabled: false,
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      });
      fireworks.start();
  
      return () => fireworks.stop();
    }, []);
  
    return <div className="fireworks-container" style={{  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000  }}></div>;
  };

export default FireworksComponent;