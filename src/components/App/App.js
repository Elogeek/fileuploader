import './App.css';
import React from 'react';
import { TextField } from '@mui/material';
import FileUpload from "react-mui-fileuploader";

function App() {

    const handleFileUploadError = (error) => {
        // Do something...
    }

    const handleFilesChange = (files) => {
        // Do something...
    }

    return (
        <FileUpload
            multiFile={true}
            disabled={false}
            title="My awesome file uploader"
            accept="image/*"
            maxSize={512000}
            minSize={5120}
            header="[Drag to drop]"
            leftLabel="or"
            rightLabel="to select files"
            buttonLabel="click here"
            buttonRemoveLabel="Remove all"
            maxFileSize={10}
            maxUploadFiles={0}
            maxFilesContainerHeight={357}
            errorSizeMessage={'fill it or move it to use the default error message'}
            onFilesChange={handleFilesChange}
            onError={handleFileUploadError}
            bannerProps={{ elevation: 0, variant: "outlined" }}
            containerProps={{ elevation: 0, variant: "outlined" }}
        >
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
        </FileUpload>
    )
}

export default App;