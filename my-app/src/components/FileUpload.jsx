import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
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