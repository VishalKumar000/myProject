import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import Configurator from "./Configurator";
import FabricCanvas from "./FabricCanvas";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 w-[900px]">
          <FabricCanvas />
        </div>
        <div className="flex-1 h-screen">
          <Canvas>
            <color attach="background" args={["#fff"]} />
            <Experience />
          </Canvas>
          <Configurator />
        </div>
      </div>
    </>
  );
};

export default Home;
