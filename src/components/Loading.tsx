import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert'

interface LoadingI {
    isLoading: boolean;
    isFailed: boolean;
}

const Loading: React.FC<LoadingI> = ({ isLoading, isFailed }) => {
    return (
        <>
            {
                isLoading ?
                    <CircularProgress color="secondary" /> : ""
            }
            {
                isFailed ? < Alert severity="info">Error in login</Alert> : ""
            }


        </>
    )
}

export default Loading
