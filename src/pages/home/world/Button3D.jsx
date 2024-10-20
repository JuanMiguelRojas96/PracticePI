import { useRef } from "react";
import { Text } from "@react-three/drei";

const Button3D = ({ onClick, status }) => {
  const meshRef = useRef();

  return (
    <mesh 
      ref={meshRef} 
      position={[0, 15, 0]} 
      onClick={onClick}
    >
      <boxGeometry args={[5, 1, 1]} />
      <meshStandardMaterial color={"purple"} />
      <Text 
        position={[0, 0, 0.6]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {status ? "Stop Sound" : "Play Sound"}
      </Text>
    </mesh>
  );
};

export default Button3D;
