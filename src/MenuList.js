import React from 'react'
import dailyMenu from './dailyMenu';

function MenuList(props) {
    return (
        <React.Fragment>
            
            <div className="btns">
                <button value="All" onClick={props.handleBtns}>Entire week</button>
                <button value={props[0].Date} onClick={props.handleBtns}>{props[0].Date}</button>

            </div>
            
            <div>
            {props.Menu.map(item => {
                return <dailyMenu Menu ={item.MenusForDays} />
            })}
        </div>
        </React.Fragment>
        
    )
}

export default MenuList
