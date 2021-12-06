import React from 'react'
import moment from 'moment';

function dailyMenu(props) {
    console.log(props.Menu)
    if(props != null){
        
        return (
            
            <React.Fragment>
                
                <div className="menuCard col-12">
                    {
                        props.Menu.map(item => {
                                return(
                                    item.SetMenus.length>0?
                                    <div>
                                        <h3 className="px-5 py-3">{moment(item.Date).format('dddd')}</h3>
                                            {
                                                item.SetMenus.map(m =>{
                                                    return(
                                                        m.Components.map(c=>{
                                                            return (
                                                                <div>  
                                                                    <p className="">{c}</p>
                                                                </div>
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                    </div>
                                    :null
                                    
                                    
                            )
                        })
                    }
                    
                </div>
            </React.Fragment>
        )
    }
    
}

export default dailyMenu
