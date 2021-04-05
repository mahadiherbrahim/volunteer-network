import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [imageLink, setImageLink] = useState('');

    const onSubmit = data => {

        const eventData = {
            name: data.name,
            image : imageLink,
        };

        const url = `http://localhost:5000/addEvent`;
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
        .then(res => console.log(res))
    }




    const handleImageUpload = event => {

        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','410b5fd5e1b122c413f230644ed7ca8f');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageLink(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="New Event" {...register("name")} className="form-control"  /> <br></br>
                <input type="file" className="form-control" onChange={handleImageUpload}/><br></br>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddEvent;