import React, { useState } from "react";
import { usePublication } from "../shared/hooks/usePublication";
import { useComment } from "../shared/hooks/useComment";
import { validateCommentForm } from "../shared/hooks/validators/validateCommentForm";
import { CommentPanel } from "./CommentPanel";

export const Publication = ({ uid }) => {
  const { publicaciones, loading } = usePublication(uid);
  const [activeInputId, setActiveInputId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [contenido, setContenido] = useState("");

  const { comments, loading: loadingComments, sendComment } = useComment(activeInputId);

  const handleCommentClick = (id) => {
    setActiveInputId(id === activeInputId ? null : id);
    setNombre("");
    setContenido("");
  };

  const handleSendComentario = async () => {
    const validationError = validateCommentForm({ nombre, contenido });
    if (validationError) return alert(validationError);
    await sendComment({ nickName: nombre, comment: contenido, publication: activeInputId });
    setContenido("");
    setNombre("")
  };

  return (
    <div className="publication-wrapper" style={{ display: "flex", gap: "2rem" }}>
      <div className="publication-container" style={{ flex: 1 }}>
        <h2 className="publication-title">
          {uid ? "Publicaciones del Curso" : "Publicaciones Recientes"}
        </h2>
        {loading ? (
          <p className="publication-message">Cargando publicaciones...</p>
        ) : publicaciones.length > 0 ? (
          publicaciones.map((publication) => (
            <div key={publication._id} className="publication-card">
              <h4 className="publication-card-title">{publication.title}</h4>
              <p className="publication-card-description">{publication.description}</p>
              <small className="publication-card-date">
                {new Date(publication.date).toLocaleString()}
              </small>
              <button onClick={() => handleCommentClick(publication._id)}>Comentario</button>
            </div>
          ))
        ) : (
          <p className="publication-message">No hay publicaciones aún.</p>
        )}
      </div>

      <div className="comments-panel" style={{ flex: 1 }}>
        {activeInputId && (
          <CommentPanel
            comments={comments}
            loading={loadingComments}
            nombre={nombre}
            contenido={contenido}
            setNombre={setNombre}
            setContenido={setContenido}
            onSend={handleSendComentario}
          />
        )}
      </div>
    </div>
  );
};
