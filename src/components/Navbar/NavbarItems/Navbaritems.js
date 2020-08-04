import React from 'react';
import classes from './Navbaritems.module.css';

function Navbaritems(props) {
    return (
        <div className={classes.NavbarItem}>
            {props.children}
        </div>
    );
}

export default Navbaritems;