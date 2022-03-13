import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CtrlCheckBoxDesc(props) {
    return(
        <div className="checkbox-name">
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={props.onChange} checked={props.ifChecked} />} label={props.label} data-testid='chk-open-closed' />
            </FormGroup>
            <Tooltip title={props.helper} placement="top" arrow>
                <IconButton>  
                    <HelpIcon fontSize={'small'} />
                </IconButton>
            </Tooltip>
        </div>
    );
}