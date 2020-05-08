import React from "react";
import Confetti from "react-confetti";

const ConfettiExplosion = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  return <Confetti width={w} height={h} />;
};

export default ConfettiExplosion;
