import { Canvas } from '@react-three/fiber';
import { OrbitControls} from "@react-three/drei";

export default function CanvasWrapper(props) {
    return(
    <Canvas camera={{ position: [2, 2, 2] }} shadows>
      <OrbitControls enablePan={false} enableZoom={true} />
      <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={1.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
      { props.children }
    </Canvas>
    );
}