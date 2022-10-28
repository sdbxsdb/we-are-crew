import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function UploadImg({ url, onUpload }) {

  const [uploading, setUploading] = useState(false);


  const {data: {publicUrl}} = supabase.storage
  .from("images")
  .getPublicUrl(url);
  // console.log("IMG -", publicUrl);


  async function uploadImg(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
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

      <div className="file-uploader  group relative w-full mb-12">
        <label className={`text-sm text-wearecrewBlue absolute opacity-50 group-hover:opacity-100 ${uploading ? "left-[39%]" : "left-[42%]"}`} htmlFor="image">
          {uploading ? "Uploading ..." : "Change  Image"}
        </label>
        <input
          className="opacity-0 w-[120px] h-[30px] border-0 left-[35%] absolute"
          type="file"
          id="image"
          accept="image/*"
          onChange={uploadImg}
          disabled={uploading}
        />
      </div>

  );
}
