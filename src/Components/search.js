import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

export default function search(props) {
  return (
    <div className="container">
        <div className="search-section">
            <div className="boxOne">
                <label htmlFor="cityName" >Type City Name</label>
                <input type="text" name="city" value={ props.city } onChange={ props.change } id="cityName" placeholder="City Name" />  
            </div>    
            <div className="boxTwo">
                <span htmlFor="cityName">Or</span>
            </div>
            <div className="boxThree">
                <label htmlFor="currentLocation">Current Location<button className="btn" onClick={props.getLocation}><FontAwesomeIcon icon={faCrosshairs} /></button></label>
                <div className="boxthreeContainer">
                    <label htmlFor="lat" >Lat:</label>
                    <input type="text" id="lat" name="lat" onChange={ props.change } value={ props.lat } placeholder="Latitude" />
                    <label htmlFor="lon" name="lon" >Lon:</label>
                    <input type="text" id="lon" name="lon" onChange={ props.change } value={ props.lon } placeholder="Longitude" />
                    <button onClick={props.search}>Search</button>
                    
                </div>
            </div>
        </div>
    </div>

       
  
  )
}
