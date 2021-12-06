import React from 'react'
import moment from 'moment';

function DayCard(props) {
  
  if(props != null){
  
    let newDate = new Date();
    const weekday = props?.reading.dt * 1000
    
    newDate.setTime(weekday)

    const Kelvin  = Math.round(props?.reading.main.temp)
    const celsius = Math.round(Kelvin  -273.15)

    return (
        <div className="col">
             <div className="card">
                <h4 className="card-title p-0 m-0">{moment(newDate).format('dddd')}</h4>
                <p className="text-muted p-0 card-temp">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                  <div className="d-flex">
                  <img src={`https://openweathermap.org/img/wn/${props?.reading.weather[0].icon}@2x.png`} className="card-img" alt=""/>
                <p className="card-desc">{props?.reading.weather[0].description}</p>

                  </div>
                <h2>{celsius} °</h2>
                <div className="card-body">
                </div>
            </div>
      </div>
    )
  }
}
export default DayCard
