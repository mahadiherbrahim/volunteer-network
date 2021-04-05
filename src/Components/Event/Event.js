import React,{useEffect, useState} from 'react-router-dom';

const Event = ({event}) => {
    return (
        <div className="col-md-3">
            <img style={{height:'300px'}} src={event.image} alt=""/>
            <h3>{event.name}</h3>
        </div>
    );
};

export default Event;