import './App.css';
import React from 'react';
import { TextField } from '@mui/material';

function App() {

    return (
        <div className="file-uploader">
            <TextField
                id="avatar-upload"
                type="file"
                margin="normal"
                fullWidth
                label="Upload a new avatar"
                variant="filled"
            />
        </div>
    )
}

export default App;