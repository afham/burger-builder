import React from 'react';
import Aux from '../../hoc/HocAux';
import classes from './Layout.module.css';

const layout = (props) => {
    return(
    <Aux>
        <div >Tosolbar,sidedrawer , backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    );
}

export default layout;