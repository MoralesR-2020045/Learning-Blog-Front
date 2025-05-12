import { useState, useEffect } from "react";
import  toast from "react-hot-toast";
import { getCourses  } from "../../services";

export const useCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

const fetchCourses = async () => {
  setLoading(true);
  try {
    const response = await getCourses();
    const data = response?.data?.courses;

    setCourses(Array.isArray(data) ? data : []);
  } catch (error) {
    toast.error(error.message || "Error al obtener los cursos");
    setCourses([]);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading };
};