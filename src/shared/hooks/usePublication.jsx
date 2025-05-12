import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getPublications, getPublication } from "../../services";

export const usePublication = (uid = null) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = uid
        ? await getPublication(uid)
        : await getPublications();

        

      const data = response?.data?.publications;
      setPublicaciones(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.message || "Error al obtener publicaciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [uid]);

  return { publicaciones, loading };
};
