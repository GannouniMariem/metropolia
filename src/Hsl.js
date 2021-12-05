import React, {useEffect,useState} from 'react'

function Hsl() {
    
    const apiKey = '2132208'

    const [HslData, setHslData] = useState([{}]);

   /* useEffect( ()=> {
            
        fetch( ``).then(
                
                response => response.json()

            ).then(
                
                data => {
                    setHslData(data)
                    console.log(data)
                }
            )
    },[])
*/
    return (
        <div className="hslContainer">
            this is hsl
        </div>
    )
}

export default Hsl
