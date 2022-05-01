import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Genius Car Service</title>
        </Helmet>
    );
};

export default PageTitle;