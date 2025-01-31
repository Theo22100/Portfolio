import React, { useEffect, useState, Suspense } from "react";
import Pre from "./Pre";

const Particles = React.lazy(() => import("react-tsparticles"));

function Particle() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense fallback={<Pre />}>
      <Particles
        id="tsparticles"
        aria-hidden="true"
        role="presentation"
        params={{
          particles: {
            number: {
              value: isMobile ? 50 : 300,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Suspense>
  );
}

export default Particle;
