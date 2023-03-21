import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ValueProps } from "../models/models";

const Sphere = ({value}:ValueProps) => {
  return (
    <div className="container">
      <h2 className="container__value">Radius = {value}</h2>
    <Canvas>
      <OrbitControls autoRotateSpeed={15} autoRotate enableZoom={false} />
      <ambientLight />
      <directionalLight position={[1, 0, 3]} />
      <directionalLight position={[-10, -20, -30]} />
      <mesh>
        <sphereGeometry args={[value]} />
        <PerspectiveCamera makeDefault position={[80, 80, 80]} />
        <meshStandardMaterial color="#A93226" />
      </mesh>
    </Canvas>
    </div>
  );
};

export default Sphere;
