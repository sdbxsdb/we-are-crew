import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const UploadCV = ({ url, onUpload, setCvFileName, cvFileName, updatedAt }) => {
  const [uploading, setUploading] = useState(false);

  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const {
    data: { publicUrl },
  } = supabase.storage.from("cvs").getPublicUrl(url);

  async function uploadCV(event) {
    try {
      setUploading(true);

      // if (!event.target.files || event.target.files.length === 0) {
      //   throw new Error("You must select a CV to upload.");
      // }

      // setFileName(event.target.files.name);


      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}${updatedAt}?${file.name}`;
      // const fileName = `${Math.random()}.${fileExt}`;

      const filePath = `${fileName}`;

      setCvFileName(fileName);

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
    <div className="w-full">
      <div className="file-uploader group relative h-12">
        <label
          className="text-sm text-wearecrewBlue shadow-md border-wearecrewBlue border-2 p-2 rounded-md left-1/2 transform -translate-x-1/2 top-2 absolute"
          htmlFor="cv"
        >
          {!cvFileName && (uploading ? "Uploading ..." : "Upload CV")}
          {cvFileName && (uploading ? "Uploading ..." : "Upload New CV")}
        </label>
        <input
          className="opacity-0 w-[120px] h-[45px] borderRed top-0 left-[36%] absolute"
          type="file"
          id="cv"
          accept="application/pdf"
          onChange={uploadCV}
          disabled={uploading}
        />
        {/* <a id="downloadCV" rel="noreferrer" target="_blank" href={publicUrl} download>Download CV</a> */}
      </div>

      {cvFileName && (
        <div className="mt-4 w-full text-center">
          <p className="text-sm text-wearecrewBlue">CV Uploded &#10003;</p>
        </div>
      )}
    </div>
  );
};

export default UploadCV;
