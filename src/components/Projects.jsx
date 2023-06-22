import React from 'react';
import ProjectItem from "./ProjectItem";
import karp from '../assets/karp.jpeg';
import scrum from '../assets/scrum.jpeg';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Aperiam, ex, perferendis exercitationem iure illo maiores aliquid aut fuga natus sapiente soluta labore 
            reiciendis vitae iusto blanditiis dignissimos nulla odio minus.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={karp} title="Parkingapp"/>
            <ProjectItem img={scrum} title="Scrum"/>
            
        </div>
    </div>
  );
};

export default Projects;
