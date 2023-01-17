import React from 'react'
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export default function SnackBar (props) {
    return (
        <Snackbar message={props.snackBar.message} open={props.snackBar.open} autoHideDuration={1000}>
            <Alert severity={props.snackBar.type} sx={{ width: '100%' }}>
                {props.snackBar.message}
            </Alert>
        </Snackbar>
    )
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});