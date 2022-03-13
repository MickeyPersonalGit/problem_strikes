import React from 'react'
import { useState } from 'react';
import Box from './components/box/box';
import CtrlBox from './components/box/ctrl_box'
import Sphere from './components/sphere/sphere';
import CtrlSphere from './components/sphere/ctrl_sphere'
import Cylinder from './components/cylinder/cylinder';
import CtrlCylinder from './components/cylinder/ctrl_cylinder';
import Cone from './components/cone/cone';
import CtrlCone from './components/cone/ctrl_cone';
import CanvasWrapper from './components/canvas_wrapper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import * as c from './helper/constants';

const geometry = ['Cube','Sphere','Cylinder','Cone']; 

export default function App() {
  let page = null;
  let controls = null;
  const [shape, setShape] = useState("");

  //Handle Box/cube state
  const [xSize, setXSize] = useState(1);
  const [ySize, setYSize] = useState(1);
  const [boxColor, setBoxColor] = useState(c.GEOMETRY_COLOR);
  function handleWidthChange(value) {
    setXSize(value);
  }
  function handleHeightChange(value) {
    setYSize(value);
  }

  //Handle Sphere state
  const [radius, setRadius] = useState(0.5);
  const [widthSegments, setWidthSegments] = useState(32);
  const [heightSegments, setHeightSegments] = useState(16);
  const [sphereColor, setSphereColor] = useState(c.GEOMETRY_COLOR);
  function handleRadiusChange(value) {
    setRadius(value);
  }
  function handleWidthSegmentsChange(value) {
    setWidthSegments(value);
  }
  function handleHeightSegmentsChange(value) {
    setHeightSegments(value);
  }

  //Handle Cylinder state
  const [cylinderRadiusTop, setCylinderRadiusTop] = useState(0.5);
  const [cylinderRadiusBottom, setCylinderRadiusBottom] = useState(0.5);
  const [cylinderHeight, setCylinderHeight] = useState(1.5);
  const [cylinderOpenEnded, setCylinderOpenEnded] = useState(false);
  function handleCylinderRadiusTopChange(value) {
    setCylinderRadiusTop(value);
  }
  function handleCylinderRadiusBottomChange(value) {
    setCylinderRadiusBottom(value);
  }
  function handleCylinderHeightChange(value) {
    setCylinderHeight(value);
  }
  function handleCylinderOpenEndedChange(value) {
    setCylinderOpenEnded(value);
  }

  //Handle Cone state
  const [coneRadius, setConeRadius] = useState(0.5);
  const [coneHeight, setConeHeight] = useState(1);
  const [coneThetaStart, setConeThetaStart] = useState(0);
  const [coneThetaLength, setConeThetaLength] = useState(2);
  const [coneOpenEnded, setConeOpenEnded] = useState(false);

  function handleConeRadiusChange(value) {
    setConeRadius(value);
  }
  function handleConeHeightChange(value) {
    setConeHeight(value);
  }
  function handleConeThetaStartChange(value) {
    setConeThetaStart(value);
  }
  function handleConeThetaLengthChange(value) {
    setConeThetaLength(value);
  }
  function handleConeOpenEndedChange(value) {
    setConeOpenEnded(value);
  }

  //Handle opened 
  switch(shape) {
    case geometry[0]:
      page = <Box xSize={xSize} ySize={ySize} color={boxColor} />
      controls = 
      <CtrlBox 
        shapeName={shape}
        data-testid= {shape}
        defaultWidthValue={xSize} 
        defaultHeightValue={ySize}
        defaultColor={boxColor} 
        onChangeWidth={handleWidthChange} 
        onChangeHeight={handleHeightChange}
        onChangeColor={setBoxColor} 
      />;
      break;
    case geometry[1]:
      page = 
      <Sphere 
        radius={radius} 
        widthSegments={widthSegments} 
        heightSegments={heightSegments}
        color={sphereColor} 
      />
      controls = 
      <CtrlSphere 
        shapeName={shape}
        defaultValue={radius} 
        defaultColor={sphereColor} 
        defaultWidthSegmentsValue={widthSegments}
        defaultHeightSegmnetsValue={heightSegments}
        onChangeSize={handleRadiusChange} 
        onChangeColor={setSphereColor} 
        onChangeWidthSegments={handleWidthSegmentsChange}
        onChangeHeightSegments={handleHeightSegmentsChange}
      />;
      break;
    case geometry[2]:
      page =  
      <Cylinder 
        radiusTop={cylinderRadiusTop}
        radiusBottom={cylinderRadiusBottom}
        height={cylinderHeight}
        openEnded={cylinderOpenEnded}
      />
      controls = 
      <CtrlCylinder 
        shapeName={shape}
        radiusTop={cylinderRadiusTop}
        radiusBottom={cylinderRadiusBottom}
        height={cylinderHeight}
        openEnded={cylinderOpenEnded}
        onChangeRadiusTop={handleCylinderRadiusTopChange}
        onChangeRadiusBottom={handleCylinderRadiusBottomChange}
        onChangeHeight={handleCylinderHeightChange}
        onChangeOpenEnded={handleCylinderOpenEndedChange}
      />
      break;
    case geometry[3]:
      page = 
      <Cone 
        radius={coneRadius}
        height={coneHeight}
        thetaStart={coneThetaStart}
        thetaLength={coneThetaLength}
        openEnded={coneOpenEnded}
      />
      controls =
      <CtrlCone 
        shapeName={shape}
        radius={coneRadius}
        height={coneHeight}
        thetaStart={coneThetaStart}
        thetaLength={coneThetaLength}
        openEnded={coneOpenEnded}
        onChangeRadius = {handleConeRadiusChange}
        onChangeHeight = {handleConeHeightChange}
        onChangeThetaStart = {handleConeThetaStartChange}
        onChangeThetaLength = {handleConeThetaLengthChange}
        onChangeOpenEnded = {handleConeOpenEndedChange}
      />
      break;
    default:
      page = "";
  }

  return ( 
    <div className="app" id="root">
      <div className="toolbar">
        <div className="picker"  data-testid="geometry-picker">
          <h1>Geometry picker</h1>
          <p>Select desired geometry to change it's configuration</p>
          <Autocomplete
            disablePortal
            data-testid="geometry-selector"
            id="combo-box-demo"
            options={geometry}
            onChange={(event, value) => setShape(value)}
            renderInput={(params) => <TextField {...params} label="Geometry" />}
          />
        </div>
        {controls}
      </div>
      <div className="helper">
        <ThreeDRotationIcon />
        <span>Use mouse to rotate the camera</span>
      </div>
      <CanvasWrapper>
        { page }
        <gridHelper position={[0, -2, 0]} args={[10, 10, c.GRID_COLOR, c.GRID_COLOR ]} />
      </CanvasWrapper>
    </div>
  );
}

