import React, { useEffect } from "react";
import Vapi from "@vapi-ai/web";
import stopBtn from "./stopBtn.png";

const VoiceAssistant = () => {
  useEffect(() => {
    // Inicializálás a Public Key-el
    const vapi = new Vapi("d76e59d4-29cb-4eb6-9e41-0256456907cc");

    // Start gomb
    const startBtn = document.getElementById("startBtn");
    startBtn.onclick = () => {
      console.log("Assistant started...");
      alert("Asszisztens indul");
      vapi.start("767ac174-c058-4cb7-84b4-a72282bcf429"); // ide jön az Assistant ID
    };

    // Stop gomb
    const stopBtn = document.getElementById("stopBtn");
    stopBtn.onclick = () => {
      console.log("Assistant stopped.");
      vapi.stop();
    };
  }, []);

  
  return (
    <div className="app-container">
      <button id="startBtn" className="neon-button">Start Assistant</button>
      
    
      <img
  src={stopBtn}
  alt="Stop" 
  id="stopBtn"
  style={{ cursor: "pointer", paddingLeft:"10px", width: "40px", height: "40px" }}
/>
    </div>
  );
};

export default VoiceAssistant;
