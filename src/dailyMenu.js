import React from 'react'
import { Button } from '@material-ui/core';

function dailyMenu(props) {
    return (
        
        <React.Fragment>
            
            <div className="signle">
                <h1>{props.Date}</h1>

                {props.SetMenus.Components.map(item => {
                    return <p>{item}</p>
                })}
                
            </div>
        </React.Fragment>
    )
}

export default dailyMenu
