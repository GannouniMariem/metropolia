import React, {useState, useEffect} from 'react'
import {data} from './data.js'
import MenuList from './MenuList';

function Menu() {

    const [ListMenu, SetListMenu] = useState([{}])

    useEffect(()=>{

        async function MenuFetch(){

            let response = await fetch('https://www.foodandco.fi/modules/json/json/Index?costNumber=3208&language=en',  {mode:'no-cors'})
            SetListMenu(data)

        }


        MenuFetch()
        console.log(ListMenu)
    })

    //filtring button functionality

    const handleBtns = (e)=>{
        if(e.target.value ==="All"){
          SetListMenu(data)
        }else{
            ListMenu.map(item =>{
                const daiMenu = item.MenusForDays.filter(a => a.Date === e.target.value)
                return (
                    SetListMenu(daiMenu)
                )
            })
         
        }
    }

    
    if(ListMenu.length >= 1){
        console.log(ListMenu);
        return (
            
            <div className="menuContainer text-center container p-5">
                <h1> Menu </h1>    
                <MenuList Menu = {ListMenu} handleBtns={handleBtns}/>

            </div>
            
        )
    }else return( <div>bbb</div> )
}

export default Menu
