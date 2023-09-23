"use client";

import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicID, setPublicID] = useState("");

  return (
    <>
      {publicID && (
        <CldImage
          src={publicID}
          width={640}
          height={480}
          alt="a cloud image."
        />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicID(info.public_id);
        }}
        options={{
          sources: ["local", "google_drive", "dropbox"],
          multiple: false,
          styles: {
            palette: {
              window: "#000000",
              sourceBg: "#000000",
              windowBorder: "#8E9FBF",
              tabIcon: "#FFFFFF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#2AD9FF",
              link: "#08C0FF",
              action: "#336BFF",
              inProgress: "#00BFFF",
              complete: "#33ff00",
              error: "#EA2727",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'roboto', monospace": {
                url: "https://fonts.googleapis.com/css?family=Space+Mono",
                active: true,
              },
            },
          },
        }}
        uploadPreset="mtkfbhdl"
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
