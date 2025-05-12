import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getComments, postComment } from "../../services";

export const useComment = (uid) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    if (!uid) return;
    setLoading(true);
    try {
      const response = await getComments(uid);
      const data = response?.data?.comments;
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.message || "Error al obtener comentarios");
    } finally {
      setLoading(false);
    }
  };

  const sendComment = async (payload) => {
    try {
      const res = await postComment(payload);
      console.log(payload.publication);
      if (!res.error) {
        setComments((prev) => [...prev, res.data.comment]);
        toast.success("Comentario agregado");
      }
    } catch (err) {
      toast.error("No se pudo enviar el comentario");
    }
  };

  useEffect(() => {
    fetchComments();
  }, [uid]);

  return {
    comments,
    loading,
    sendComment
  };
};
