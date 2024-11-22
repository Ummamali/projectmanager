import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Modal from "../Utils/Modal";
import FormGroup from "../Utils/FormGroup";
import { createProject } from "../../utilFuncs/project";

const CreateProjectModal = forwardRef(({ requestCreateProject }, ref) => {
  const [opened, setOpened] = useState(false);
  const formRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => setOpened(true),
    close: () => setOpened(false),
  }));

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const newProject = createProject(
      formDataObj.title,
      formDataObj.description
    );
    requestCreateProject(newProject);
    setOpened(false);
  }
  return (
    opened && (
      <Modal close={() => setOpened(false)}>
        <h2 className="text-xl mb-4">Create Project</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <FormGroup
            id="title"
            label="Title"
            placeholder="Enter title of the project...."
          />
          <FormGroup
            id="description"
            label="Desctiption"
            placeholder="Enter description of the project...."
          />
          <button
            type="submit"
            className="block bg-primary-100 text-white/70 px-6 py-2 rounded-sm"
          >
            Create Project
          </button>
        </form>
      </Modal>
    )
  );
});

export default CreateProjectModal;
