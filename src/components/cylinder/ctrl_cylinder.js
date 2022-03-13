import Slider from '@mui/material/Slider';
import CtrlDesc from '../ui/ctrl_desc';
import CtrlCheckBoxDesc from '../ui/ctrl_check_box_desc';

export default function CtrlCylinder(props) {

    function handleRadiusTopChange(event) {
        props.onChangeRadiusTop(event.target.value);
    }
    function handleRadiusBottomChange(event) {
        props.onChangeRadiusBottom(event.target.value);
    }
    function handleHeightChange(event) {
        props.onChangeHeight(event.target.value);
    }
    function handleOpenEnded(event) {
        props.onChangeOpenEnded(event.target.checked);
    }

    return(
        <div className="controls">
            <h4 className="controls-title">{props.shapeName} configuration</h4>
            <div className="controls-row">
                <CtrlDesc helper="Radius of the cylinder at the top">Radius top</CtrlDesc>
                <Slider 
                    data-testid = "cylinder-radius-top"
                    onChange={handleRadiusTopChange} 
                    value={props.radiusTop} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={1.5} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Radius of the cylinder at the bottom">Radius bottom</CtrlDesc>
                <Slider 
                    data-testid = "cylinder-radius-bottom"
                    onChange={handleRadiusBottomChange} 
                    value={props.radiusBottom} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={1.5} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Height of the cylinder">Height</CtrlDesc>
                <Slider 
                    data-testid = "cylinder-height"
                    onChange={handleHeightChange} 
                    value={props.height} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlCheckBoxDesc
                    label="Open ended" 
                    helper="Indication whether the ends of the cylinder are open or capped"
                    onChange={handleOpenEnded}
                    ifChecked={props.openEnded}
                />
            </div>
        </div>
    );
}
