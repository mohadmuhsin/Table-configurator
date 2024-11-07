import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Table } from "./Table";
import { useConfigurator } from "../Context/configurator";

function Experience() {
    const {legs} = useConfigurator()
  return (
    <>
      <Stage
        intensity={1.5}
        environment={"city"}
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
       <Table/>
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default Experience;
