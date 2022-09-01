import React from 'react'
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import './Input.css'

const InputBox = ({ input, setInput, findWeather }) => {

    const functionCall = (event) => {
            event.preventDefault();
            findWeather();
    }

    return (
        <div className='inputBox'>
            <div className='inputBox__field'>
                <h1>Google Weather App</h1>
                <p>Powered by</p>
                <img src='https://blog.hubspot.com/hubfs/image8-2.jpg' alt='logo' />
                <form>
                    <Input placeholder="Enter the City Name" onChange={(e)=>setInput(e.target.value)} value={input}/><br />
                    <Button variant="contained" color="secondary" type='submit' onClick={functionCall}>Search</Button>
                </form>
            </div>

        </div>
    )
}

export default InputBox;
