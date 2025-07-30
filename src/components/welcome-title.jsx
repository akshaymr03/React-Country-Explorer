import { Grid, Typography } from 'antd';
import React from 'react';

const { useBreakpoint } = Grid;

const WelcomeTitle = () => {
    const screens = useBreakpoint();

    return (
        <div className="welcome-container">
            {screens.xs ? (
                <div className="mobile-welcome">
                    <div className="line" />
                    <Typography className="welcome-text">WELCOME</Typography>
                    <div className="line" />
                </div>
            ) : (
                <>
                    <div className="line1" />
                    <h2 className="welcome-text">WELCOME</h2>
                    <div className="line2" />
                </>
            )}
        </div>
    );
};

export default WelcomeTitle;
