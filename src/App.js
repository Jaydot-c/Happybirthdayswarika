import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    window.location.href = "https://swarspotify.netlify.app/";  // 👉 Update with your live site URL
  };

  return (
    <div className="birthday-container">
      <h1>🎉 Happy Birthday! 🎈</h1>
      <p>Pink pasta 🎶</p>

      <div className="image-button-wrapper">
        {/* Surrounding Images */}
        <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-06-25 164120.png`} alt="Pic 1" className="surround-pic top-left" />
        <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-06-25 164149.png`} alt="Pic 2" className="surround-pic top-right" />
        <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-06-27 115053.png`} alt="Pic 3" className="surround-pic bottom-left" />
        <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-06-27 215407.png`} alt="Pic 4" className="surround-pic bottom-right" />

        {/* The Button */}
        <button onClick={handleClick}>Click Here for Your Surprise 🎁</button>
      </div>
      <div className="birthday-message">
        <h2>For Swari 💖</h2>
        <p>Wishing you smiles, music, and a little bit of magic today ✨🎶
            उड़ता फिरे दिल, उतरना जाने ना🌺</p>
      </div>
    </div>
  );
}

export default App;

