import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as c from '../../helper/constants';

export default function Cone(props) {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += c.ROTATION_SPEED
    })
    return (
        <mesh
        {...props}
        ref={ref}>
        <coneGeometry args={[props.radius, props.height, 32, 1, props.openEnded, props.thetaStart, props.thetaLength * Math.PI]} />
        <meshNormalMaterial attach="material" />
        </mesh>
    )
}