import React from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

var API_KEY = "aa4bb0a723eaa080682819846f9360f6";

class App extends React.Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.city.value;
    const country = e.target.country.value;
    var errMsg = 'Please enter City and Country';

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country && data.cod === "404") {
      errMsg = 'We\'re working on it. Please Try again Later ';
    }

    if(city && country && data.cod !== '404') {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: errMsg
      })
    }
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="conatiner">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  country={this.state.country}
                  error={this.state.error}
                />
                <p className="credits"> Credits: 'Shivam Sagar' </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;