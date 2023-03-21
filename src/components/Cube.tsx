import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ValueProps } from "../models/models";

const Cube = ({value}:ValueProps) => {
  return (
    <div className="container">
      <h2 className="container__value">Width = {value}</h2>
    <Canvas>
      <OrbitControls autoRotateSpeed={10} autoRotate enableZoom={false} />
      <ambientLight />
      <directionalLight position={[1, 2, 3]} />
      <directionalLight position={[-10, -20, -30]} />
      <mesh>
        <boxGeometry args={[value, 30, 30]} />
        <PerspectiveCamera makeDefault position={[60, 60, 60]} />
        <meshStandardMaterial color="#A93226" />
      </mesh>
    </Canvas>
    
    </div>
  );
};

export default Cube;
