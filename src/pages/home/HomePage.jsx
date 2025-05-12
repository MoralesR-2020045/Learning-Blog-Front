import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Publication } from "../../components/Publication";
import "./homePage.css";

export const HomePage = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  return (
    <div className="homepage-container">
      <Sidebar onSelectCourse={setSelectedCourseId} />
      <Publication uid={selectedCourseId} />
    </div>
  );
};
