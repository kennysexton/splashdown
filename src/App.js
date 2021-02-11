// Run: npm start 
// Build: npm run deploy

import React, { useState, useEffect } from 'react';
import { getRandomCity, round } from '../src/utils/common'

// CSS
import './App.css';
import './components/spinner.css';
import './components/settingsModal.css'

//My Components
import Spinner from './components/Spinner'
import CityName from './components/CityName'
import ImageBackground from './components/ImageBackground'
import Weather from './components/Weather'
import SettingsModal from './components/SettingsModal';

function App() {

  // Variables
  const [city, setCity] = useState(null);
  const [imgs, setImgs] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);

  //Visibility
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(true)

  // ComponentDidMount() replacement
  useEffect(() => {
    const randomCity = getRandomCity()
    setCity(randomCity)
    console.log('Shown City:  ' + randomCity)
    const unsplashQuery = 'https://api.unsplash.com/search/photos/?page=1$per_page=1&query=' + randomCity + '&client_id=' + process.env.REACT_APP_UNSPLASH_KEY
    fetch(unsplashQuery)
      .then(response => response.json())
      .then(data => {
        console.log("-- Image API returned")
        console.log(data.results[0].user.links.html)
        setImgs(data.results[0].urls);
        console.log()
        setLoading(false) // TODO move this trigger to imageBackground componenet to represent to load
      })
      .catch(err => {
        console.error(`Unsplash API error (${err})! Query: ${unsplashQuery}`);
      });

    const openWeatherQuery = 'https://api.openweathermap.org/data/2.5/weather?q=' + randomCity + '&units=imperial&apiKey=' + process.env.REACT_APP_OPEN_WEATHER_KEY
    fetch(openWeatherQuery)
      .then(response => response.json())
      .then(data => {
        console.log(`-- Weather API returned ${data.main.temp}`)
        setTemperature(data.main.temp);
        setIcon(data.weather[0].icon);
      })
      .catch(err => {
        console.error(`Error happened during fetching from open weather! ${err}`);
      });
  }, []);

  function toggleHidden() {
    console.log(`inside toggle hidden`)
    setHidden(({ hidden }) => !{ hidden });
  };

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
          <ImageBackground data={imgs} />
        )}

      <div onClick={() => toggleHidden()}>
        {/* Displays the name of the city */}
        <CityName data={city} />

        {/* Shows weather information */}
        <Weather weather={`${round(temperature)}°F`} icon={icon}></Weather>
      </div>

      {/* Shows settings and credits */}
      {!{ hidden } && <SettingsModal />}
      <div className="bottomGradient"></div>

    </div>
  );
}

export default App;