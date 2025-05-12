export const validateCommentForm = ({ nombre, contenido }) => {
  if (!nombre.trim()) return "El nombre es obligatorio";
  if (!contenido.trim()) return "El comentario no puede estar vacío";
  if (contenido.length > 800) return "El comentario no debe exceder 100 caracteres";
  return null;
};
