import React from 'react'

function dailyMenu(props) {
    console.log(props.Menu)
    if(props != null){
        
        return (
            
            <React.Fragment>
                
                <div className="signle">
                    {
                        props.Menu.map(item => {
                                return(
                                item.SetMenus.map(m =>{
                                    return(
                                        m.Components.map(c=>{
                                            return <p>{c}</p>
                                        })
                                    )
                                })
                            )
                        })
                    }
                    
                </div>
            </React.Fragment>
        )
    }
    
}

export default dailyMenu
