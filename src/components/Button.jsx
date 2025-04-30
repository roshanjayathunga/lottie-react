import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import buttonData from "../assets/lotties/Button.json"; // Replace with your JSON file path

const Button = ({ label, onClick }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current, // Reference to the container
      renderer: "svg",
      loop: false, // Disable looping
      autoplay: false, // Disable autoplay
      animationData: buttonData, // JSON data for the animation
    });

    return () => {
      animationInstance.current.destroy(); // Cleanup on component unmount
    };
  }, []);

  const handleClick = () => {
    if (animationInstance.current) {
      animationInstance.current.stop(); // Reset animation
      animationInstance.current.play(); // Play animation
    }
    if (onClick) {
      onClick(); // Trigger the provided onClick handler
    }
  };

  return (
    <button
      style={{
        background: "white",
        border: "none",
        cursor: "pointer",
        width: "auto",
        height: "auto",
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      <div ref={animationContainer}></div>
      <span>{label}</span>
    </button>
  );
};

export default Button;
