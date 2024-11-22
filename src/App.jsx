import React, { useState } from "react";
import SideNav from "./Components/SideNav/SideNav";
import MainSection from "./Components/MainSection/MainSection";
import "./App.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [currIdx, setCurrIdx] = useState(-1);

  function requestCreateProject(newProject) {
    setProjects((prev) => {
      const newProjectsList = structuredClone(prev);
      newProjectsList.push(newProject);
      return newProjectsList;
    });
  }

  function requestCreateTask(projectId, taskObject) {
    setProjects((prev) => {
      const newProjectsList = structuredClone(prev);
      const i = newProjectsList.findIndex((item) => item.id === projectId);
      newProjectsList[i].tasks.push(taskObject);
      return newProjectsList;
    });
  }

  function requestDeleteTask(projectId, taskId) {
    setProjects((prev) => {
      const newProjectsList = structuredClone(prev);
      const projectIdx = newProjectsList.findIndex(
        (item) => item.id === projectId
      );
      const taskIdx = newProjectsList[projectIdx].tasks.findIndex(
        (item) => item.id === taskId
      );
      newProjectsList[projectIdx].tasks.splice(taskIdx, 1);
      return newProjectsList;
    });
  }

  function requestDeleteProject(projectId) {
    setProjects((prev) => {
      const newProjectsList = structuredClone(prev);
      const i = newProjectsList.findIndex((item) => item.id === projectId);
      newProjectsList.splice(i, 1);
      return newProjectsList;
    });
    setCurrIdx(-1);
  }

  return (
    <div className="app max-w-application mx-auto min-h-screen bg-white">
      <SideNav
        projects={projects}
        activeProjectIdx={currIdx}
        setCurrIdx={setCurrIdx}
        requestCreateProject={requestCreateProject}
      />
      <MainSection
        project={projects[currIdx]}
        requestDeleteProject={requestDeleteProject}
        requestCreateTask={requestCreateTask}
        requestDeleteTask={requestDeleteTask}
      />
    </div>
  );
}
