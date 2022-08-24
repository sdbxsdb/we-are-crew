import React, {useRef, useState} from 'react'

const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState('');
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
      <div className="file-uploader relative">
          <input className="absolute left-0 opacity-0 borderRed h-[40px] w-[100px]" type="file" onChange={handleFileInput} value={selectedFile} />
          <button className="p-2 rounded-md border-2 border-wearecrewBlue" onClick={e => fileInput.current && fileInput.current.click()}>Upload CV</button>
      </div>
  )
}

export default UploadCV;
