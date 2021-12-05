import React from 'react'
import DailyMenu from './DailyMenu';

function MenuList(props) {
    if(props.Menu != null){
        console.log(props.Menu)
        return (
            <React.Fragment>
                
                <div className="btns">
                     <button value={props.Menu[0].MenusForDays[0].Date} onClick={props.handleBtns}>{props.Menu[0].MenusForDays[0].Date}</button>
                    <button value="All" onClick={props.handleBtns}>Entire week</button>
    
                </div>
    
                <div>
                    {props.Menu.map(item => {
                        return <DailyMenu Menu ={item.MenusForDays}/>
                    })}
                </div>
            </React.Fragment>
            
        )

    }else{
        return(
            <di>waiting data</di>
        )
    }

}

export default MenuList
