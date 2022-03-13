import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as c from '../../helper/constants';

export default function Box(props) {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += c.ROTATION_SPEED
    })
    return (
        <mesh
        {...props}
        ref={ref}>
        <boxGeometry args={[props.xSize, props.ySize, 1]} />
        <meshStandardMaterial color={props.color} />
        </mesh>
    )
}

