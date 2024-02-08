import { useState } from "react";

export const Buttons = ({ secret, index, passObjectToggle, color, toggle }) => {

  let isClicked = 'blue';
  //Comprueba si en el toggle hay un indice en el que yo he marcado el div
  if ((toggle.length != 0) && Object.keys(toggle) == index) {
    const isToggled = toggle[index];
    if(isToggled){
      isClicked = 'red';
    }else {
      isClicked = 'blue';
    }
  }

  return (
    <div className="w-20 h-20 m-5 border-none rounded-lg 
    cursor-pointer hover:bg-red-400"
      value={index}
      style={{ backgroundColor: isClicked }}
      onClick={() => passObjectToggle(secret, index)}>
      <p className="text-white">{index}</p>
    </div>
  )
}

export default Buttons
