import React from "react";
import Image from "../../assets/no-projects.png";

export default function NoProject() {
  return (
    <div className="text-center pt-32">
      <img src={Image} alt="No Projects" className="max-w-20 mx-auto mb-8" />
      <h2 className="text-xl">No Project Selected</h2>
      <p className="text-gray-500 mb-4">
        Select a Project or get started by creating a new one
      </p>
      <button className="py-2 px-6 rounded-sm bg-primary-100 text-white/70">
        Create Project
      </button>
    </div>
  );
}
