import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, autoRotate }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [rotationY, setRotationY] = useState(-0.2);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setRotationY((prev) => prev + 0.005); // Slow rotation on Y-axis
      }, 30);

      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, rotationY, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Conditional rendering of the Canvas


  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => setAutoRotate(false)} // Disable auto-rotation on interaction
          onEnd={() => setAutoRotate(true)} // Re-enable auto-rotation when interaction ends
        />
        <Computers isMobile={isMobile} autoRotate={autoRotate} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
