import React, { useRef } from "react";
import CreateProjectModal from "./CreateProjectModal";
import { motion } from "motion/react";

export default function SideNav({
  projects,
  activeProjectIdx,
  requestCreateProject,
  setCurrIdx,
}) {
  const createModalRef = useRef();

  function tabClickHandler(e) {
    setCurrIdx(parseInt(e.target.dataset.idx));
  }
  return (
    <nav className="bg-primary-200 p-6 px-8 rounded-tr-xl rounded-br-xl">
      <div className="space-y-3 mb-6">
        <h2 className="text-white/80 text-xl">Your Projects</h2>
        <button
          className="block py-2.5 px-6 rounded bg-white/10 text-sm text-white/70"
          onClick={() => createModalRef.current.open()}
        >
          <i className="fa-solid fa-add mr-2"></i>Create Project
        </button>
        <CreateProjectModal
          ref={createModalRef}
          requestCreateProject={requestCreateProject}
        />
      </div>
      <ul className="font-light space-y-1">
        {projects.map((prj, i) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={prj.id}
          >
            <button
              className={`w-full text-left text-white/70 px-2 py-3 hover:bg-black/30 transition-colors cursor-pointer ${
                activeProjectIdx === i ? "bg-black/30" : ""
              }`}
              data-idx={i}
              onClick={tabClickHandler}
            >
              {prj.title}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
