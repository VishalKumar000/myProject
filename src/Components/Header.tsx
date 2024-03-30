//@ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import toast from "react-hot-toast";
import { useCustomization } from "../Contexts/Customization";

const Header = ({ components, design_id }) => {
  const navigate = useNavigate();
  const { image, setimage } = useCustomization();
  const [loader, setLoader] = useState(false);
  const saveImage = async () => {
    const getDiv = document.getElementById("main_design");
    const image = await htmlToImage.toBlob(getDiv);

    if (image) {
      const obj = {
        design: components,
      };
      console.log(obj);
      const formData = new FormData();
      formData.append("design", JSON.stringify(obj));
      formData.append("image", image);

      try {
        setLoader(true);
        // const { data } = await api.put(`/api/update-user-design/${design_id}`, formData)
        // toast.success(data.message)
        toast.success("message");
        setLoader(false);
      } catch (error) {
        setLoader(false);
        // toast.error(error.response.data.message)
        toast.error("error");
      }
    }
  };

  const flipImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.scale(1, -1); // Flip along Y-axis
        ctx.drawImage(img, 0, -img.height);
        resolve(canvas.toDataURL());
      };
      img.onerror = reject;
      img.src = url;
    });
  };

  const downloadImage = async () => {
    const getDiv = document.getElementById("main_design");
    const dataUrl = await htmlToImage.toPng(getDiv, {
      style: {
        transform: "scale(1)",
      },
    });

    const flippedDataUrl = await flipImage(dataUrl);
    var link = document.createElement("a");
    link.download = "image";
    link.href = dataUrl;
    setimage({
        map: flippedDataUrl,
        displacementMap: "../Textures/Plastic/Plastic_003_height.jpg",
        normalMap: "../Textures/Plastic/Plastic_003_normal.jpg",
        roughnessMap: "../Textures/Plastic/Plastic_003_roughness.jpg",
        aoMap: "../Textures/Plastic/Plastic_003_ambientOcclusion.jpg",
      });
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <img
            src=""
            alt=""
          />
        </Link>
        <span className="text-xl">Mini</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            disabled={loader}
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            {loader ? "Loading..." : "Save"}
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            set Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
