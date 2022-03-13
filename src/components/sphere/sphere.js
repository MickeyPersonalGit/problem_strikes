import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import * as c from '../../helper/constants';

export default function Sphere(props) {
    const ref = useRef()
    useFrame(() => {
      ref.current.rotation.x = ref.current.rotation.y += c.ROTATION_SPEED
    })
    return (
        <mesh
        {...props}
        ref={ref}>
        <sphereGeometry attach="geometry" args={[props.radius, props.widthSegments, props.heightSegments]} /> 
        <meshStandardMaterial attach="material" color={props.color} />
      </mesh>
    );
}