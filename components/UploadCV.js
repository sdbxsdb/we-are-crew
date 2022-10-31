import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const UploadCV = ({ url, onUpload, setCvFileName, cvFileName, updatedAt }) => {
  const [uploading, setUploading] = useState(false);

  const [showPdfOnly, setShowPdfOnly] = useState(false);
  const [showFileTooBig, setFileTooBig] = useState(false);

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

      console.log(event.target.files[0]);

      if (event.target.files[0].type !== "application/pdf") {
        setShowPdfOnly(true);
        return;
      }

      if (event.target.files[0].type === "application/pdf") {
        setShowPdfOnly(false);
        if (event.target.files[0].size >= 1000000) {
          setFileTooBig(true);
          return;
        }
      }

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
        <div className=" w-[120px] relative">
          <label
            className="text-lg text-wearecrewBlue shadow-md border-wearecrewBlue border-2 p-2 rounded-md top-2 absolute group-hover:scale-102 transition"
            htmlFor="cv"
          >
            {!cvFileName && (uploading ? "Uploading ..." : "Upload CV")}
            {cvFileName && (uploading ? "Uploading ..." : "Upload New CV")}
          </label>
          <input
            className="opacity-100 w-[120px] h-[45px] borderRed top-[10%] absolute"
            type="file"
            id="cv"
            accept="application/pdf"
            onChange={uploadCV}
            disabled={uploading}
          />
        </div>
        {/* <a id="downloadCV" rel="noreferrer" target="_blank" href={publicUrl} download>Download CV</a> */}
      </div>
      <div className="w-full text-center flex flex-col gap-y-4 mt-4">
        <small className={`${showPdfOnly ? "text-wearecrewRed" : ""}`}>
          Please upload .pdf files only.
        </small>
        {showFileTooBig && (
          <small className="text-wearecrewRed">
            Your CV file size is too big.  Please upload a file less than 1Mb.
          </small>
        )}
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
