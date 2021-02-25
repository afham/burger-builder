import React from 'react';
import classes from './BuildControl.module.css';


const buildControl = (props) =>{
    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed}>Remove</button>
        <button className={classes.More} onClick={props.added}>Add item</button>
    </div>
    );
};

export default buildControl;