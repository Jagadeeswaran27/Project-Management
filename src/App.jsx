import Sidebar from "./Components/SideBar";
import NewProjects from "./Components/NewProjects";
import { useState, useRef } from "react";
import Default from "./Components/DefaultPage";
import SelectedProject from "./Components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((pre) => {
      const newTask = {
        text: text,
        projectId: projectState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...pre,
        tasks: [...pre.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        tasks: pre.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleSelectedProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: pre.projects.filter(
          (project) => project.id !== pre.selectedProjectId
        ),
      };
    });
  }
  function handleProjectStart() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelAddProject() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
      };
    });
  }
  function handleProjectAdd(projects) {
    setProjectState((pre) => {
      const newProjects = {
        ...projects,
        id: Math.random(),
      };
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: [...pre.projects, newProjects],
      };
    });
  }
  console.log(projectState);
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleProjectAdd} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <Default onClick={handleProjectStart} />;
  }
  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar
        onClick={handleProjectStart}
        projects={projectState.projects}
        onSelect={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
