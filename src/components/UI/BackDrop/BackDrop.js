import React from 'react';
import classes from './BackDrop.module.css';

function BackDrop(props) {
    return (
        props.show?<div className={classes.BackDrop} onClick={props.click}>
        {props.children}
    </div>:null
    );
}

export default BackDrop;