import React, {useState, useEffect} from 'react'
import {data} from './data.js'
import MenuList from './MenuList';

function Menu() {

    const [ListMenu, SetListMenu] = useState([{}])

    useEffect(()=>{

        async function MenuFetch(){

            let response = await fetch('https://www.foodandco.fi/modules/json/json/Index?costNumber=3208&language=en')
                response = await response.json()
                SetListMenu(response)
                console.log(response)
        }



        SetListMenu(data)
        console.log(data)
    },[])

    //filtring button functionality

    const handleBtns = (e)=>{
        if(e.target.value ==="All"){
          SetListMenu(data)
        }else{
          const dayMenu = ListMenu.filter(item => item.MenusForDays.Date === e.target.value)
          SetListMenu(dayMenu)
        }
    }

    
    return (
        <div className="menuContainer">
            <MenuList Menu = {ListMenu} handleBtns={handleBtns}/>
        </div>
    )
}

export default Menu
