import React from "react"
import locationIcon from './assets/location.png'

export default function Entry(props) {
    return (
        <div className="entry">
            <img className="location-img" src={props.imageUrl}></img>
            <div className="entry-details">
                <img className="pin-icon" src={locationIcon}/>
                <span className="location">{props.location}</span>
                <a className="maps-link" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="title">{props.title}</h2>
                <p className="duration">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}