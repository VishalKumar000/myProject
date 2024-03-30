import React, { createContext, useContext, useState } from "react";

export const Colors = [
  {
    color: "#ececec",
    name: "white",
  },
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
];

const CustomizationContext = createContext({});
//@ts-ignore

export const CustomizationProvider = (props) => {
  const [color, setColor] = useState(Colors[0]);
  const [image, setimage] = useState({
    map: "../Textures/Plastic/Plastic_003_height.jpg",
    displacementMap: "../Textures/Plastic/Plastic_003_height.jpg",
    normalMap: "../Textures/Plastic/Plastic_003_normal.jpg",
    roughnessMap: "../Textures/Plastic/Plastic_003_roughness.jpg",
    aoMap: "../Textures/Plastic/Plastic_003_ambientOcclusion.jpg",
  });
  return (
    <CustomizationContext.Provider value={{ color, setColor, image, setimage }}>
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
