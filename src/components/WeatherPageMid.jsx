import { Button } from "react-bootstrap";

export default function WeatherPageMid() {
    return (
        <>
            <h1 className="text-3xl text-center mt-6 font-bold" style={{ fontSize: 80, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginTop: '20px', textDecoration: 'underline' }}>Check Weather</h1>
            <div id="weather-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <input placeholder="Enter city" style={{ fontSize: 40, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginBottom: '10px', padding: '10px 20px', borderRadius: '50px', border: '1px solid #ccc', width: '450px' }}></input>
                <Button style={{ fontSize: 40, fontFamily: 'Lilita One, cursive', marginTop: '20px', width: '300px' }} className="rounded-pill" onClick="getWeather()">Search</Button>
                <img id="weather-icon" alt="Weather Icon"></img>
                <div id="temp-div"></div>
                <div id="weather-info"></div>
                <div id="hourly-forecast"></div>
            </div>
            <script src="./script.js"></script>
        </>
    )
}
{/* <div id="weather-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <input type="text" id="city" placeholder="Enter city" style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}></input>
    <Button onClick={() => getWeather()} style={{ padding: '10px 20px', fontSize: '16px' }}>Search</Button>
    <img id="weather-icon" alt="Weather Icon" style={{ marginTop: '20px' }}></img>
    <div id="temp-div" style={{ marginTop: '10px' }}></div>
    <div id="weather-info" style={{ marginTop: '10px' }}></div>
    <div id="hourly-forecast" style={{ marginTop: '10px' }}></div>
</div> */}
