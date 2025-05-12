import React from "react";
import { CommentList } from "./CommentList";
import { Input } from "./Input";
import PropTypes from "prop-types";

export const CommentPanel = ({
  comments,
  loading,
  nombre,
  contenido,
  setNombre,
  setContenido,
  onSend,
}) => {
  return (
    <div className="comments-panel">
      <h3>Comentarios</h3>
      {loading ? <p>Cargando comentarios...</p> : <CommentList comments={comments} />}

      <hr />

      <Input
        value={nombre}
        onChange={(valor) => setNombre(valor.target.value)}
        placeholder="Tu nombre"
      />

      <textarea
        className="comment-textarea"
        placeholder="Escribe tu comentario..."
        value={contenido}
        onChange={(valor) =>
          valor.target.value.length <= 800 && setContenido(valor.target.value)
        }
        rows={4}
      />
      <small style={{ float: "right", color: "#666" }}>
        {contenido.length}/800
      </small>
      <br />

      <button onClick={onSend} style={{ marginTop: "0.5rem" }}>
        Enviar comentario
      </button>
    </div>
  );
};
CommentPanel.propTypes = {
  comments: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  nombre: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  setNombre: PropTypes.func.isRequired,
  setContenido: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};
