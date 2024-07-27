import { useState } from "react";
import { Button } from "react-bootstrap";

const api = {
    key: "a2d4fefe80668b45592163bce92eceae",
    base: "https://api.openweathermap.org/data/2.5/",
}

export default function WeatherPageMid() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState("");

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result)
            });
    };

    return (
        <>

            <h1 className="text-3xl text-center mt-6 font-bold"
                style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>
                Check Weather
            </h1>
            <div id="weather-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>

                <input type="text"
                    style={{
                        fontSize: 40, fontFamily: 'Lilita One, cursive',
                        color: "dodgerblue",
                        marginBottom: '10px',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        width: '510px',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                    }}
                    placeholder="Enter city name..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    style={{ fontSize: 40, fontFamily: 'Lilita One, cursive', marginTop: '15px', width: '300px' }}
                    className="rounded-pill"
                    onClick={searchPressed}>
                    Search
                </Button>
            </div>

            {typeof weather.main != "undefined" ? (
                // <div style={{ fontFamily: 'Lilita One, cursive', color: "dodgerblue", textAlign: 'center', fontSize: 70, boxSizing: 'border-box' }}>
                //     <p style={{ textDecoration: 'underline' }}>{weather.name}</p>
                //     <p>{weather.main.temp}°C</p>
                //     <p>{weather.weather[0].main}</p>
                //     <p>({weather.weather[0].description})</p>
                // </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    boxSizing: 'border-box',
                    marginTop: '-200px',
                }}>
                    <div style={{
                        border: '2px solid dodgerblue',
                        borderRadius: '20px',
                        padding: '20px',
                        width: '100%',
                        maxWidth: '600px',
                        fontFamily: 'Lilita One, cursive',
                        color: 'dodgerblue',
                        textAlign: 'center',
                        fontSize: 70,
                        boxSizing: 'border-box'
                    }}>
                        <p style={{ textDecoration: 'underline' }}>{weather.name}</p>
                        <p>{weather.main.temp}°C</p>
                        <p>{weather.weather[0].main}</p>
                        <p>({weather.weather[0].description})</p>
                    </div>
                </div>

            ) : (
                ""
            )}
        </>
    )
}

