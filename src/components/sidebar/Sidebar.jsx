import React from "react";
import { useCourse } from "../../shared/hooks/useCourse";
import logo from "../../assets/img/logo2.png"

export const Sidebar = ({ onSelectCourse }) => {
  const { courses, loading } = useCourse();

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" width={200} />
      <h2 onClick={() => onSelectCourse(null)} style={{ cursor: "pointer" }}>Home</h2>
      <h3>Cursos</h3>

      {loading ? (
        <p>Cargando cursos...</p>
      ) : Array.isArray(courses) && courses.length > 0 ? (
        <ul>
          {courses.map((curso) => (
            <li
              key={curso._id}
              onClick={() => onSelectCourse(curso._id)}
              style={{ cursor: "pointer" }}
            >
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
