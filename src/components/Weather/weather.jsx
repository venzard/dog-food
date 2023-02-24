import React, { useEffect, useState } from "react";


export default () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [data, setData] = useState();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    },[])

    useEffect(() => {
        const fetchData = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&lang=ru&units=metric&APPID=e01ec0f48246ab62baee2210b72f2f7b`)
        .then(res => res.json())
        .then(result => {
            setData(result)
        });
        }
        if (lat && long ) {
            fetchData();
        }
    }, [lat,long])
    
    return (
        <div className="weather">
            {data 
                ? 
                <>
                <div>{data?.name} {Math.floor(data?.main.temp)}°C</div>
                <div>Ощущается как {Math.floor(data?.main.feels_like)}°C</div>
                <div>Скорость ветра: {Math.floor(data?.wind.speed)} м/с</div>
                <div>{data?.weather[0].description.charAt(0).toUpperCase() + data?.weather[0].description.slice(1)}</div>
                </>
                :
                <></> 
            }
        </div>
    )
}