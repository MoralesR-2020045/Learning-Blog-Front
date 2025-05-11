import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getPublications } from "../../services";

export const usePublication = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPublicaciones = async () => {
    setLoading(true);
    try {
      const response = await getPublications();
      console.log(response);
      const data = response?.data?.publications;
      setPublicaciones(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.message || "Error al obtener las publicaciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  return { 
    publicaciones, 
    loading 
};
};
