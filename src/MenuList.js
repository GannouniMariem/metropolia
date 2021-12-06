import React from 'react'
import DailyMenu from './DailyMenu';
import moment from 'moment';

function MenuList(props) {
    if(props.Menu != null){
        console.log(props.Menu)
        return (
            <React.Fragment>
                
                <div className="btns">
                
                     <button className="btn btn-primary" value={props.Menu[0].MenusForDays[0].Date} onClick={props.handleBtns}>{moment(props.Menu[0].MenusForDays[0].Date).format('MMMM Do YYYY, h:mm:ss a')}</button>
                     <button value="All" className="btn btn-primary" onClick={props.handleBtns}>Entire week</button>
    
                </div>
    
                <div className="row">
                    {props.Menu.map(item => {
                        return (
                            <DailyMenu Menu ={item.MenusForDays}/>
                        )
                    })}
                </div>
            </React.Fragment>
            
        )

    }else{
        return(
            <div>waiting data</div>
        )
    }

}

export default MenuList
