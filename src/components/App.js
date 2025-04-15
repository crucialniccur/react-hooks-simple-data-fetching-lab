// create your App component here

import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImageUrl(data.message));
  }, []);

  if (!imageUrl) return <p>Loading...</p>;

  return (
    <div>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
