import React from 'react';
import ProjectTile from './projectTile';


const Projects = (props) => {
    return(
			<div className="row">
                { props.type === "All" ? (
                    props.projects.map((project, index) => (
                        <ProjectTile key={index} project={project} index={index} />
                    ))
                ) : (
                    props.projects.filter(p => p.type === props.type).map((project, index) => (
                        <ProjectTile key={index} project={project} index={index} />
                    ))
                ) }
				
			</div>
		);
	}

export default Projects;
