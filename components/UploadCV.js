import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const UploadCV = ({ url, onUpload, setCvFileName, cvFileName, updatedAt }) => {
  const [uploading, setUploading] = useState(false);

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

      const slugify = (str) =>
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${updatedAt}?${slugify(file.name)}.${fileExt}`;
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
    <div className="mb-12 w-full">
      <div className="file-uploader group relative w-full h-12">
        <label
          className="text-sm text-wearecrewBlue shadow-md border-wearecrewBlue border-2 p-2 rounded-md left-[39%] absolute opacity-50 group-hover:opacity-100 transition"
          htmlFor="cv"
        >
          {!cvFileName && (
            uploading ? "Uploading ..." : "Upload CV"
          )}
          {cvFileName && (
            uploading ? "Uploading ..." : "Upload New CV"
          )}


        </label>
        <input
          className="opacity-0 w-[120px] h-[30px] border-0 left-[35%] absolute"
          type="file"
          id="cv"
          accept="application/pdf"
          onChange={uploadCV}
          disabled={uploading}
        />
        {/* <a id="downloadCV" rel="noreferrer" target="_blank" href={publicUrl} download>Download CV</a> */}
      </div>

      {cvFileName && (
        <div className="mt-4">
          <p className="text-sm text-wearecrewBlue">CV on file:</p>
          <p className="">{cvFileName.split("?").pop()}</p>
        </div>
      )}

    </div>
  );
};

export default UploadCV;
