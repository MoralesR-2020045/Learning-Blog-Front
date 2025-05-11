import { useState, useEffect } from "react";
import  toast from "react-hot-toast";
import { getComments  } from "../../services";

export const useComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

const listComents = async (uid) => {
  setLoading(true);
  try {
    const response = await getComments(uid);
    const data = response?.data?.comments;

    setComments(Array.isArray(data) ? data : []);
  } catch (error) {
    toast.error(error.message || "Error al obtener los cursos");
    setCourses([]);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    listComents();
  }, []);

  return { comments, loading };
};