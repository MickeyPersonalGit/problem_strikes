import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';

export default function CtrlDesc(props) {
    return(
        <div className="field-name">
        {props.children}
        <Tooltip title={props.helper} placement="top" arrow>
            <IconButton>  
                <HelpIcon fontSize={'small'} />
            </IconButton>
        </Tooltip>
    </div>
    );
}