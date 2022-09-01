import axios from 'axios';
import React, { useState } from 'react'
import InputBox from './components/Input';
import Result from './components/Result'

function App() {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async () => {
    const apiKey = "9c4cb4662ca24c98f8244899d1682632";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apiKey + "&units=" + unit;

    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDesc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    setDesc(weatherDesc);
    setTemp(temp);
    setIcon(imageURL);
    setInput("");
  }


  return (
    <div>
      {
        temp === ""
          ? (<InputBox setInput={setInput} input={input} findWeather={findWeather} />)
          : (<Result temp={temp} desc={desc} image={icon} setTemp={setTemp} />)
      }
    </div>
  );
}

export default App;
