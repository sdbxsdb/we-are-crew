import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function UploadImg({ url, onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [showWrongImgFormat, setShowWrongImgFormat] = useState(false);
  const [showImgTooBig, setShowImgTooBig] = useState(false);

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(url);
  // console.log("IMG -", publicUrl);

  async function uploadImg(event) {
    try {
      setUploading(true);

      console.log(event.target.files);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      if (!event.target.files[0].type.includes("image/")) {
        setShowWrongImgFormat(true);
        return;
      }

      if (event.target.files[0].type.includes("image/")) {
        setShowWrongImgFormat(false);
        if (event.target.files[0].size >= 1000000) {
          setShowImgTooBig(true);
          return;
        }
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("images")
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
    <div className="file-uploader flex flex-col gap-y-4 group relative w-full mb-12">
      <label
        className={`text-sm text-wearecrewBlue absolute left-[42%] opacity-100 group-hover:opacity-100`}
        htmlFor="image"
      >
        {uploading ? "Uploading ..." : "Change  Image"}
      </label>
      <input
        className="opacity-0 w-[120px] h-[30px] border-0 left-[35%] absolute"
        type="file"
        id="image"
        // accept="image/*"
        onChange={uploadImg}
        disabled={uploading}
      />
      {showWrongImgFormat && (
        <div className="w-full mt-[40px] text-center">
          <small className="text-wearecrewRed">
            Please upload jpg, jpeg or png files only.
          </small>
        </div>
      )}
      {showImgTooBig && (
        <div className="w-full mt-[40px] text-center">
          <small className="text-wearecrewRed">
            Your profile image file size is too large.  
            <br />
            Please upload a file less than 2Mb.
          </small>
        </div>
      )}
    </div>
  );
}
