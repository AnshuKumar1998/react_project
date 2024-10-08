import React, { Component } from 'react';
import './WeatherApp.css';
import Result from './result';
import Search from './search';
import Recent from './recent';
import axios from "axios";

class WeatherApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: "",
            lon: "",
            weatherData: null,
            city: "",
            isSearched: false,
            recent: [],
        };
    }

    researchHandler = (lat, lon, city) => {
       
       this.setState({weatherData: null}, () => {
        let url = '';
    
        if (lat && lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70b173b46d3f278484da06d54b7dcc3e`;
        } else if (city) {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70b173b46d3f278484da06d54b7dcc3e`;
        }
    
        if (url) {
            axios
                .get(url)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        city: res.data.name,
                        weatherData: res.data,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("Please provide either latitude and longitude or a city name.");
        }

       })
    }
    
    componentDidMount(){
        const data = window.localStorage.getItem("recent");
        let recent = data === null ? [] : JSON.parse(data);
        this.setState({recent});
    }

    addDataToRecent = () =>{
        let recent = this.state.recent;

        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city,
        });
        this.setState({ recent }, () =>{
            window.localStorage.setItem('recent',JSON.stringify(this.state.recent));
        });
    }

    changeHandler = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    searchHandler = () => {
        const { lat, lon, city } = this.state;
        let url = '';
    
        if (lat && lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70b173b46d3f278484da06d54b7dcc3e`;
        } else if (city) {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70b173b46d3f278484da06d54b7dcc3e`;
        }
    
        if (url) {
            axios
                .get(url)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        city: res.data.name,
                        weatherData: res.data,
                    }, () => {
                        this.addDataToRecent();
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("Please provide either latitude and longitude or a city name.");
        }
    }
    

    locationHandler = () => {
        this.setState({
            lat: "",
            lon: "",
            city: "",
            weatherData: null
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    setTimeout(() => {
                        this.setState({
                            lat: res.coords.latitude,
                            lon: res.coords.longitude
                        }, () => {
                            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=70b173b46d3f278484da06d54b7dcc3e`)
                            .then((res) => {
                                console.log(res.data);
                                this.setState({
                                    city: res.data.name,
                                    weatherData: res.data,

                                }, () => {
                                    this.addDataToRecent();
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        });
                    }, 500);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
        
    };

    render() {
        return (
            <div className="weather-app">
                <main>
                    <Search
                        lat={this.state.lat}
                        lon={this.state.lon}
                        city={this.state.city}
                        weatherData={this.state.weatherData}
                        change={this.changeHandler}
                        getLocation={this.locationHandler}
                        search ={this.searchHandler}
                    />
                    <Recent recent ={this.state.recent} researchHandler = {this.researchHandler} />
                    <Result isSearched={this.state.isSearched} weatherData={this.state.weatherData} />
                </main>
                <footer>
                    <p>Looking for Web Development Online Training? Call us at: +91 9024244886 / +91 9269698122 or visit <a href="http://www.wscubetech.com">www.wscubetech.com</a></p>
                </footer>
            </div>
        );
    }
}

export default WeatherApp;
