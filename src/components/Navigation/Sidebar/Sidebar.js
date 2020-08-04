import React from 'react';
import classes from './Sidebar.module.css';

function Sidebar(props) {
    return (
        <div className={classes.Sidebar}>
            <div><h3>Books</h3></div>
            <div className={classes.Sidebar__searchBox}>
            <input type="text" onKeyPress={props.change} onSubmit={props.submit} />
            </div>
            <div className={classes.Sidebar__differentSections}>
                <ul>
                    {props.options.map(option=>{
                        let link = '#'+option.topic;
                        return <a href={link}><li>{option.topic}</li></a>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;