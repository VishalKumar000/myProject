//@ts-nocheck

import React from "react";

const Element = ({ id, info, exId }) => {
  return (
    <>
      {exId ? (
        <>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[7px] h-[7px] cursor-nwse-resize bg-green-500 z-[99999] "
          ></div>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[7px] h-[7px] cursor-nwse-resize bg-green-500 z-[99999] "
          ></div>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[7px] h-[7px] cursor-nwse-resize bg-green-500 z-[99999] "
          ></div>
        </>
      ) : (
        <>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[7px] h-[7px] cursor-nwse-resize bg-gray-500 z-[99999] "
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[7px] h-[7px] cursor-ne-resize bg-gray-500 z-[99999] "
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[7px] h-[7px] cursor-ne-resize bg-gray-500 z-[99999] "
          ></div>
        </>
      )}
      <div
        onMouseDown={() => info.rotateElement(id, info)}
        className="hidden absolute group-hover:block -top-[3px] -left-[3px] w-[7px] h-[7px] cursor-[url(https://cdn-icons-png.flaticon.com/512/3818/3818260.png), auto] bg-pink-500 z-[99999] "
      ></div>

      <div
        onMouseDown={() => info.resizeElement(id, info)}
        className="hidden absolute group-hover:block -top-[3px] left-[50%] translate-[-50%,-50%] w-[7px] h-[7px] cursor-n-resize bg-gray-500 z-[99999] "
      ></div>
      <div
        onMouseDown={() => info.resizeElement(id, info)}
        className="hidden absolute group-hover:block top-[50%] -left-[3px] translate-[-50%,50%] w-[7px] h-[7px] cursor-e-resize bg-gray-500 z-[99999] "
      ></div>
      <div
        onMouseDown={() => info.resizeElement(id, info)}
        className="hidden absolute group-hover:block top-[50%] -right-[3px] translate-[-50%, -50%] w-[7px] h-[7px] cursor-e-resize bg-gray-500 z-[99999] "
      ></div>
      <div
        onMouseDown={() => info.resizeElement(id, info)}
        className="hidden absolute group-hover:block -bottom-[3px] left-[50%] translate-[-50%,0%] w-[7px] h-[7px] cursor-n-resize bg-gray-500 z-[99999] "
      ></div>
      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="hidden absolute group-hover:block top-0 left-0 right-0 bottom-0 w-full h-full cursor-move z-[99998] "
      ></div>
      {/* <div
        onMouseDown={() => info.moveElement(id, info)}
        className="hidden absolute group-hover:block -bottom-[3px] left-[50%] translate-[-50%,0%] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999] "
      ></div> */}
    </>
  );
};

export default Element;
