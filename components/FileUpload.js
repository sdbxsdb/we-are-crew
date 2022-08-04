import React, {useRef, useState} from 'react'

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef(null)


  const handleFileInput = (e) => {

    const file = e.target.files[0];
    const fileSizeString = file.size.toString().slice(0, -3);
    const fileSizeNumber = parseInt(fileSizeString);
    
    console.log("SIZE -", fileSizeNumber);
    if (fileSizeNumber > 1024)
      {
        alert("File size is too large. Please upload a file less than 1MB");
        setSelectedFile('');
      }
  };

  return (
      <div className="file-uploader">
          <input type="file" onChange={handleFileInput} value={selectedFile} />
          <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
      </div>
  )
}

export default FileUpload;
