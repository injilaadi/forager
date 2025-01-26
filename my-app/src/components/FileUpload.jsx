import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = (props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      console.log(acceptedFiles)
      const file = acceptedFiles[0]
      // Call your backend API endpoint to upload files

      const formData = new FormData();

      formData.append(
        "outfit",
        file,
        file.name
    );

    const response = await fetch("http://127.0.0.1:5000/api/data",
        {
        method: 'POST',
        body: formData
    })

    const jsonResponse = await response.json();

    console.log(jsonResponse)
    // replace the ``` and JSON to make it into a real object

    // FOR NOW...
    const FAKE_URL = "https://media-photos.depop.com/r1/16093260/2432718249_bd1d2ec6bbb9473a9ccf90121e6d7a66/P0_IR.jpg"

    // make a fake reponse
    const FAKE_RESPONSE = {
        cost: "$15",
        brand: "Brandy Melville",
        website: "https://www.depop.com/products/daria_szymelfenig-brandy-melville-los-angeles-sweatshirt/",
        url: FAKE_URL
    }
    // set the parent state
    props.setFit([FAKE_RESPONSE])
    },
  });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FileUpload;