import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ValueProps } from "../models/models";

const Cylynder = ({value}:ValueProps) => {
  return (
    <div className="container">
      <h2 className="container__value">Height = {value}</h2>
    <Canvas>
      <OrbitControls autoRotateSpeed={25} autoRotate enableZoom={false} />
      <ambientLight />
      <directionalLight position={[1, 2, 3]} />
      <directionalLight position={[-10, -20, -30]} />
      <mesh>
        <cylinderGeometry args={[10, 10, value]} />
        <PerspectiveCamera makeDefault position={[60, 60, 0]} />
        <meshStandardMaterial color="#A93226" />
      </mesh>
    </Canvas>
    </div>
  );
};

export default Cylynder;
