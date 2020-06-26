import React from 'react';


const Projects = (props) => {

    const ProjectDiv = ({project, index}) => (
        <div key={index} className="col-md-4 s-project">
            <div className="work-box">
                <a href={project.image} data-lightbox={project.dataLightbox}>
                    <div style={{ maxHeight: "165px" }} className="work-img">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="img-fluid"
                        />
                    </div>
                </a>
                <div className="work-content">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2 className="w-title">
                                { project.webLink ? (
                                    <a href={project.webLink}>
                                        {project.title}
                                        <i
                                            style={{ fontSize: "24px", marginLeft: "10px" }}
                                            className="ion-link"
                                        ></i>
                                    </a>
                                ) : (
                                    project.title
                                ) }
                                
                                <a href={project.githubLink}>
                                    <i
                                        style={{ fontSize: "24px", marginLeft: "10px" }}
                                        className="ion-social-github"
                                    ></i>
                                </a>
                            </h2>
                            <div className="w-more mb-3">
                                <span>{project.description} </span>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a
                                href={project.image1}
                                data-lightbox={project.dataLightbox}
                            >
                                <div className="w-like">
                                    <span className="ion-ios-plus-outline"></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="w-more">
                                {project.stack.map((s, i) => (
                                    <span key={i} className="w-ctegory s-projects-tech">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {project.images.map((img, ind) => (
                    <a href={img} data-lightbox={project.dataLightbox} style={{ display: "none" }} />
                ))}
            </div>
        </div>
    )


    return(
			<div className="row">
                { props.type === "All" ? (
                    props.projects.map((project, index) => (
                        <ProjectDiv project={project} index={index} />
                    ))
                ) : (
                    props.projects.filter(p => p.type === props.type).map((project, index) => (
                        <ProjectDiv project={project} index={index} />
                    ))
                ) }
				
			</div>
		);
	}

export default Projects;
