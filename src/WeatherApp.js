import React, {useEffect,useState} from 'react'
import DayCard from './DayCard';

function WeatherApp() {

    const apiKey = '0cd584fcad8a53e82ffd018b2f9a999e'

    const [weatherData, setWeatherData] = useState([{}]);

    const cityName = "Finland"
    const state = "02610"

    useEffect( ()=> {
        
          async function fetchApi(){

              let response = await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${state}&appid=${apiKey}`)
                  response = await response.json()
                const dailyData = response.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                setWeatherData(dailyData)   
                console.log(dailyData)

          }  
          
          fetchApi()
    },[])

    function formatDayCards() {
        
        return weatherData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }

        return (
            <div className="weatherContainer container">
                <div className="row">
                    {  weatherData.length > 1 ? formatDayCards() : null}            
                </div>
            </div>
        )

   
    
}

export default WeatherApp
