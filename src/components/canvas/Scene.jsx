'use client'

import { Canvas } from '@react-three/fiber'
import { Center, Environment, Grid, OrbitControls, Preload, Stage } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, ToneMapping } from '@react-three/postprocessing'

import Model from '@/components/canvas/SmdCore'

export default function Scene() {

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
      eventSource={document.body}
      eventPrefix='client'
      flat shadows camera={{ position: [-15, 0, 10], fov: 25 }}
            onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <fog attach="fog" args={['black', 15, 22.5]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }}
             adjustCamera={false}>
        <Center scale={4} position={[0, .5, 0]}>
          <Model />
        </Center>
      </Stage>
      <Grid renderOrder={-1} position={[0, 0, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3}
            sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.05} makeDefault
        // minPolarAngle={Math.PI / 2}
                     maxPolarAngle={Math.PI / 2} />
      <EffectComposer disableNormalPass>
        <ToneMapping />
      </EffectComposer>
      <Environment background preset="sunset" backgroundBlurriness={8.8} />
      <Preload all />
    </Canvas>
  )
}
