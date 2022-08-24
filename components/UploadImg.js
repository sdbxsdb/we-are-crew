import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Avatar({ url, size, onUpload }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setImageUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

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
    }
  }

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile Image"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="" style={{ height: size, width: size }}>
          <h1>no image</h1>
        </div>
      )}
      
      <div style={{ width: size }} className="borderRed h-20">
        <label className="" htmlFor="single">
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          // style={{
          //   visibility: "hidden",
          //   position: "absolute",
          // }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadImg}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
