// create your App component here

import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h2>Wagwan wadau</h2>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
