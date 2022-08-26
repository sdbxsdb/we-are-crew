import React, { useState } from 'react'
import { supabase } from "../utils/supabaseClient";


const UploadCV = ({ url, onUpload, setCvFileName, cvFileName }) => {

  const [uploading, setUploading] = useState(false);

  const {data: {publicUrl}} = supabase.storage
  .from("cvs")
  .getPublicUrl(url);
  setCvFileName(cvFileName);

  // console.log("CV -", publicUrl);



  async function uploadImg(event) {
    try {
      setUploading(true);

      // if (!event.target.files || event.target.files.length === 0) {
      //   throw new Error("You must select a CV to upload.");
      // }

      // setFileName(event.target.files.name);

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      setCvFileName(file.name);

      let { error: uploadError } = await supabase.storage
        .from("cvs")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
      // console.log("EVENT-", event.target.files);
    }
  }



  return (
    <div className="file-uploader  group relative w-full mb-12">
    <label className="text-sm text-wearecrewBlue left-[39%] absolute opacity-50 group-hover:opacity-100" htmlFor="cv">
      {uploading ? "Uploading ..." : "Upload CV"}
    </label>
    <input
      className="opacity-0 w-[120px] h-[30px] border-0 left-[35%] absolute"
      type="file"
      id="cv"
      accept="application/pdf"
      onChange={uploadImg}
      disabled={uploading}
    />
    
    <a id="downloadCV" rel="noreferrer" target="_blank" href={publicUrl} download>Download CV</a>
    <p>{cvFileName}</p>
  </div>
  )
}

export default UploadCV;
