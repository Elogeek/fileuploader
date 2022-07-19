import './App.css';
import React, {useState} from 'react';
import FileUpload from "react-mui-fileuploader";
import { TextField } from '@mui/material';

function App() {

  const [file, setFile] = useState();

  const handleFileUploadError = (error) => {
    // Do something...
  }

  const handleFilesChange = (event) => {
      setFile(event.target.files[0])
  }

  return (
      <FileUpload
          multiFile={true}
          disabled={false}
          accept="image/*"
          maxSize={512000}
          minSize={5120}
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
                onChange={handleFilesChange}
            />
          </div>
      </FileUpload>
  )
}

export default App;
