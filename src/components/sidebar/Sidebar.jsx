import React from "react";
import { useCourse } from "../../shared/hooks/useCourse";

export const Sidebar = () => {
  const { courses, loading } = useCourse();

  return (
    <div style={{ width: '250px', padding: '1rem', borderRight: '1px solid #ccc' }}>
      <h2>Home</h2>
      <h3>Cursos</h3>

      {loading ? (
        <p>Cargando cursos...</p>
      ) : Array.isArray(courses) && courses.length > 0 ? (
        <ul>
          {courses.map((curso) => (
            <li key={curso._id}>
              {curso.nameCourse}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay cursos disponibles</p>
      )}
    </div>
  );
};
