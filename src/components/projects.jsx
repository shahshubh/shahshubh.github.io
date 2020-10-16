import React, { useState } from 'react';


const Projects = (props) => {

    const support_format_webp = () => {
        let elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            // setIsWebP(isSupported);
        }
        else {
            // very old browser like IE 8, canvas not supported
            // setIsWebP(false);
            return false;
        }
    }

    const [isSupported, setIsSupported] = useState(support_format_webp());

    const ProjectDiv = ({project, index}) => (
        <div key={index} className="col-md-4 s-project">
            <div className="work-box">
                <a href={project.image} data-lightbox={project.dataLightbox}>
                    <div style={{ maxHeight: "200px" }} className="work-img">
                        <picture>
                            <source srcSet={project.imageWebP} type="image/webp" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="img-fluid"
                            />
                        </picture>
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
                            
                        </div>
                        <div className="col-sm-4">
                            <a
                                href= {isSupported ? project.imageWebP1 : project.image1}
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
                            <div className="w-more mb-3" style={{ fontSize: "16px" }} >
                                <span>{project.description} </span>
                            </div>
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
                
                { isSupported ? project.imagesWebP.map((img, ind) => (
                    <a key={ind} href={img} data-lightbox={project.dataLightbox} style={{ display: "none" }} >
                    </a>
                )) : 
                project.images.map((img, ind) => (
                    <a key={ind} href={img} data-lightbox={project.dataLightbox} style={{ display: "none" }} >
                    </a>
                ))}
            </div>
        </div>
    )


    return(
			<div className="row">
                { props.type === "All" ? (
                    props.projects.map((project, index) => (
                        <ProjectDiv key={index} project={project} index={index} />
                    ))
                ) : (
                    props.projects.filter(p => p.type === props.type).map((project, index) => (
                        <ProjectDiv key={index} project={project} index={index} />
                    ))
                ) }
				
			</div>
		);
	}

export default Projects;
