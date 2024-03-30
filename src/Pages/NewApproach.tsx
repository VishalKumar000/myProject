//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const NewApproach = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");

  const updateTshirtImage = (imageURL) => {
    const canvas = canvasRef.current;

    fabric.Image.fromURL(imageURL, function (img) {
      img.scaleToHeight(300);
      img.scaleToWidth(300);
      canvas.centerObject(img);
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 380,
      width: 200,
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 50,
      width: 100,
      fill: 'yellow',
      selectable: true, // Make the rectangle selectable
      movable: true, // Enable the rectangle to be moved
      resizable: true, // Enable the rectangle to be resized
      lockRotation: true, // Lock rotation to prevent accidental rotation
      lockScalingX: false, // Allow horizontal resizing
      lockScalingY: false, // Allow vertical resizing
      borderColor: 'black', // Set border color
      cornerColor: 'blue', // Set corner color
      cornerSize: 10, // Set corner size
      transparentCorners: false 
    });
    canvi.add(rect);
    canvas.centerObject(rect);
    canvi.renderAll();
  }

  const reverse1Image = () => {};

  const reverse2Image = () => {};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    console.log(canvas);
    reader.onload = function (event){
        var imgObj = new Image();
        imgObj.src = event.target.result;

        // When the picture loads, create the image in Fabric.js
        imgObj.onload = function () {
            var img = new fabric.Image(imgObj);

            img.scaleToHeight(100);
            img.scaleToWidth(100); 
            canvas.centerObject(img);
            canvas.add(img);
            canvas.renderAll();
        };
    };
    reader.readAsDataURL(file);
  };

  //   setTimeout(() => {
  //     console.log(canvasRef);
  //   }, 1000);

  return (
    <>
      <main className="custome">
        <div id="tshirt-div">
          <img
            className="ml-5"
            id="tshirt-backgroundpicture"
            src=".\Clothes\mens_longsleeve_front.png"
          />
          <div id="drawingArea" className="drawing-area">
            <div className="canvas-container">
              <canvas className="border-2 border-black" id="canvas" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="canva-div">
            <div className="change">
              <div className="reverse-option">
                <button className="reverse-header dropdown-menu">
                  <a href="#" className="drop-btn">
                    Reverse Image Option
                  </a>
                </button>
                <div className="dropdown-content">
                  <div className="front-back">
                    <div className="front f-same">
                      <label htmlFor="tshirt-back">T-Shirt Back:</label>
                      <button
                        id="flipback"
                        type="button"
                        className="btn"
                        onClick={reverse1Image}
                        title="Rotate View"
                      >
                        <i className="fas fa-retweet"></i>
                      </button>
                    </div>
                    <div className="back f-same">
                      <label htmlFor="tshirt-back">T-Shirt Front:</label>
                      <button
                        id="flipback"
                        type="button"
                        className="btn"
                        onClick={reverse2Image}
                        title="Rotate View"
                      >
                        <i className="fas fa-retweet"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="design-selection">
                <button className="reverse-header dropdown-menu-1">
                  <a href="#" className="drop-btn">
                    T-Shirt Design & Color Option
                  </a>
                </button>
                {/* <!-- <h2 className="rev-header">T-Shirt Design & Color Option</h2> --> */}
                <div className="dropdown-content-1">
                  <div className="custom-selection">
                    <label htmlFor="tshirt-design">T-Shirt Design:</label>
                    <select id="tshirt-design" className="tshirt-color">
                      <option value="">Select one of our designs ...</option>
                      <option value="img/sample/batman.png">Batman</option>
                    </select>
                  </div>
                  <div className="color-selection">
                    <label htmlFor="tshirt-color">T-Shirt Color:</label>
                    <select id="tshirt-color" className="tshirt-color">
                      {/* <!-- You can add any color with a new option and definings its hex code --> */}
                      <option value="#fff">White</option>
                      <option value="#180A0A">Black</option>
                      <option value="#FF1818">Red</option>
                      <option value="#008000">Green</option>
                      <option value="#ff0">Yellow</option>
                      <option value="#4D77FF">Sky Blue</option>
                      <option value="#F473B9">Pink</option>
                      <option value="#D8D2CB">Grey</option>
                      <option value="#008000">Green</option>
                      <option value="#8A39E1">Violet</option>
                    </select>
                  </div>
                  <div className="random-color-selection">
                    <button id="random">Random Color</button>
                  </div>
                </div>
              </div>

              <div className="text-selection">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => addRect(canvas)}>Rectangle</button>
                <button className="reverse-header dropdown-menu-2">
                  <a href="#" className="drop-btn">
                    T-Shirt Text Option
                  </a>
                </button>
                {/* <!-- <h2 className="rev-header">T-Shirt Design & Color Option</h2> --> */}
                <div className="dropdown-content-2">
                  <label htmlFor="tshirt-text">T-Shirt text:</label>
                  <input
                    id="tshirt-text"
                    className="tshirt-txt"
                    type="text"
                    placeholder="Enter your text here!!"
                  />
                  {/* <!-- <input className="span2" id="text-string" type="text" placeholder="add text here..."> --> */}
                  <button id="add-text" className="txt-btn" title="Add text">
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              </div>
              

              <div className="input-selection">
                <button className="reverse-header dropdown-menu-3">
                  <a href="#" className="drop-btn">
                    Custom Design Option
                  </a>
                </button>
                {/* <h2 className="rev-header">Custom Design Option</h2> */}
                <div className="dropdown-content-3">
                  <label htmlFor="tshirt-custompicture" className="input-field">
                    Upload your own design:
                  </label>
                  <input
                    type="file"
                    className="input-btn"
                    id="tshirt-custompicture"
                    onChange={handleFileChange}
                  />
                  <p>
                    To remove a loaded picture on the clothes select it and
                    press the <kbd>DEL</kbd> key.
                  </p>
                  <button id="btnDisplayFront" className="btnDisplay">
                    Front Save
                  </button>
                  <button id="btnDisplayBack" className="btnDisplay">
                    Back Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewApproach;
