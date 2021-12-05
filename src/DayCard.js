import React from 'react'
import moment from 'moment';

function DayCard(props) {
    
    let newDate = new Date();
    const weekday = props?.reading.dt * 1000
    
    newDate.setTime(weekday)

    const Kelvin  = Math.round(props?.reading.main.temp)
    const celsius = Math.round(Kelvin  -273.15)

    return (
        <div className="col">
             <div className="card">
                <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                <img src={`https://openweathermap.org/img/wn/${props?.reading.weather[0].icon}@2x.png`} alt=""/>
                <h2>{celsius} °</h2>
                <div className="card-body">
                <p className="card-text">{props?.reading.weather[0].description}</p>
                </div>
            </div>
      </div>
    )
}
export default DayCard
