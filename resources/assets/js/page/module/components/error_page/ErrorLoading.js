import React from 'react';

import Loadable from 'react-loadable';

const ErrorLoading = ({ error }) => {
    if(error)
        return 'Error importing component...';
    return <h5></h5>
}

export default ErrorLoading;
