import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [stats, setStats] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      setStats(response.data.stats);
    } catch (error) {
      console.error(error);
      alert("Error al cargar el archivo.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>DataScienceHub</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir y procesar</button>

      {stats && (
        <div>
          <h2>Estadísticas Descriptivas</h2>
          <pre>{JSON.stringify(stats, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
