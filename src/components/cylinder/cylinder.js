import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as c from '../../helper/constants';

export default function Cylinder(props) {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += c.ROTATION_SPEED
    })

    return (
        <mesh
        {...props}
        ref={ref}>
        <cylinderBufferGeometry attach="geometry" args={[props.radiusTop, props.radiusBottom, props.height, 32, 1, props.openEnded]} />
        <meshNormalMaterial attach="material" />
        </mesh>
    )
}