import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

function FloatingSphere() {
  const sphereRef = useRef();

  // Animate rotation and small floating motion
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.4;
      sphereRef.current.position.y = Math.sin(t * 1.5) * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.6}>
      <MeshDistortMaterial
        color="#00e0ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Text Section */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>
          Hi 👋 I’m <span className="highlight">Siddhu Kumar</span>
        </h1>
        <p>
          Full Stack Developer specializing in{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">NestJS</span>,{" "}
          <span className="highlight">Django</span> &{" "}
          <span className="highlight">Flask</span>. Passionate about building
          modern web apps that blend creativity and functionality.
        </p>
        <motion.a
          href="#projects"
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          🚀 View My Work
        </motion.a>
      </motion.div>

      {/* 3D Canvas */}
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} intensity={1.2} />
          <FloatingSphere />
          <Stars radius={50} depth={50} count={4000} factor={4} fade />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
}
