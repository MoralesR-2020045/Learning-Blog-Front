import React, { useState } from "react";
import { usePublication } from "../shared/hooks/usePublication";
import { Input } from "./Input";

export const Publication = () => {
  const { publicaciones, loading } = usePublication();
  const [activeInputId, setActiveInputId] = useState(null);
  const [nombre, setNombre] = useState("");

  const handleCommentClick = (publicationId) => {
    setActiveInputId(publicationId);
  };

  const handleSendNombre = (publicationId) => {
    if (nombre.trim() === "") {
      alert("El nombre no puede estar vacío");
      return;
    }

    setNombre("");
    setActiveInputId(null);
  };

  return (
    <div className="publication-container">
      <h2 className="publication-title">Publicaciones Recientes</h2>

      {loading ? (
        <p className="publication-message">Cargando publicaciones...</p>
      ) : publicaciones.length > 0 ? (
        publicaciones.map((pub) => (
          <div key={pub._id} className="publication-card">
            <h4 className="publication-card-title">{pub.title}</h4>
            <p className="publication-card-description">{pub.description}</p>
            <small className="publication-card-date">
              {new Date(pub.date).toLocaleString()}
            </small>
            <button onClick={() => handleCommentClick(pub._id)}>Comentario</button>
            {activeInputId === pub._id && (
              <Input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                send={() => handleSendNombre(pub._id)}
              />
            )}
          </div>
        ))
      ) : (
        <p className="publication-message">No hay publicaciones aún.</p>
      )}
    </div>
  );
};
