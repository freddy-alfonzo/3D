import Cube from "../components/Cube";
import Cylinder from "../components/Cylinder"
import Sphere from "../components/Sphere";
import type { ValueProps } from "../models/models";

const Graphics = ({value}:ValueProps) => {

  return (
    <>
        <Cube value={value}/>
        <Cylinder value={value}/>
        <Sphere value={value}/>

    </>
  );
};

export default Graphics;
