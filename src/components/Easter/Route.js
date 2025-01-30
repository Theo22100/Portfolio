import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Utils/Particle";
import { motion } from "framer-motion";
import video from "@media/secret.mp4"
function RouteSecret() {
    const [preloading, setPreloading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            <Container fluid className="about-section pt-0" id="home">
                <Particle />

                <Container className="d-flex justify-content-center align-items-center vh-100">
                    {preloading ? (
                        <div className="preload-message title-font-easter" style={{ fontSize: "2.2em" }}>
                            Powder & Ekko...
                        </div>
                    ) : (
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.3,
                                rotate: 720,
                                filter: "blur(20px)", 
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                                y: [0, -10, 0], 
                                filter: "blur(0px)", 
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.5, 1],
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                            }}
                            style={{
                                width: "100%",
                                maxWidth: "1000px",
                                height: "auto",
                                overflow: "hidden", 
                            }}
                        >
                            <motion.div
                                initial={{ filter: "blur(20px)" }}
                                animate={{ filter: "blur(0px)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <iframe
                                    className="embed-responsive-item"
                                    style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
                                    src= {video}
                                    title="Ma meilleure ennemie - Pomme & Stromae"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </Container>
            </Container>
        </section>
    );
}

export default RouteSecret;
