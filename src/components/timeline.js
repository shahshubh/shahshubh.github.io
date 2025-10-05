import React, { Component } from "react";
import { FaReact, FaGraduationCap, FaExternalLinkAlt, FaGithub, FaBriefcase } from "react-icons/fa";
// import { MdWork } from "react-icons/md";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
	constructor() {
		super();
		this.state = {
			work_list: [
				{
					role: "SDE Intern",
					company: "Numocity",
					time: "Jul 2022 - Dec 2022",
					description: [
						"Developing features for Charging Management System (CMS) web and mobile application.",
					],
					icon: <FaBriefcase />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					borderTopColor: "#0078ff",
					skills: ["Flutter"],
				},
				{
					role: "Github Extern'22",
					company: "Numocity",
					time: "Jan 2022 - Apr 2022",
					description: [
						"Developed a performance tool which would run on over 20+ repositories of the company to alert onsignificant change in performance and assisted developing admin portal UI in Flutter.",
					],

					icon: <FaGithub />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					borderTopColor: "#0078ff",
					link: "https://www.numocity.com/",
					skills: ["NodeJS", "Flutter" ]
				},
				{
					role: "Web Development Intern",
					company: "QDS Pro",
					time: "May 2020 - Jun 2020",
					description: [
						"Enhanced and optimized their main websites with responsive design.",
					],
					icon: <FaReact />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					link: "/files/QDSPro_Intership_Certificate.pdf",
					skills: ["NextJS", "ReactJS" ]
				},
				{
					role: "B.Tech",
					company: "K.J. Somaiya College of Engineering (KJSCE)",
					time: "Sep 2018 - Jun 2022",
					description: ["Computer Science (CSE)", "9.25 CGPA"],
					icon: <FaGraduationCap />,
					iconBackgroundColor: "rgb(16, 204, 82)",
					iconColor: "#fff",
				},
				{
					role: "HSC - 12th",
					company: "K.J. Somaiya College of Science and Commerce",
					time: "Jul 2016 - Jun 2018",
					description: ["88.50 %"],
					icon: <FaGraduationCap />,
					iconBackgroundColor: "rgb(16, 204, 82)",
					iconColor: "#fff",
				},
			],
			isLoading: false,
		};
	}

	componentDidMount() {
		this.fetchWorkList();
	}

	fetchWorkList = async () => {
		this.setState({ isLoading: true });
		try {
			const directLink = `https://raw.githubusercontent.com/shahshubh/shahshubh.github.io/refs/heads/source/work_exp.json`;
			const response = await fetch(directLink);
			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`);
			}
			const fetchedData = await response.json();
			// Process the icons from string representations to actual components
			const iconTypeToComponentMap = {
				'github': <FaGithub />,
				'react': <FaReact />,
				'education': <FaGraduationCap />,
				'work': <FaBriefcase />,
			};
			const processedData = fetchedData.map(item => {
				const icon = iconTypeToComponentMap[item.icon] || <FaBriefcase />;
				return { ...item, icon };
			});
			if (processedData.length > 0) {
				this.setState({ work_list: processedData, isLoading: false });
			}
		} catch (error) {
			console.error("Error fetching work list:", error);
		} finally {
			this.setState({ isLoading: false });
		}
	};

	loader = () => {
		return (
			<div className="text-center" style={{ padding: "2rem" }}>
				<div className="loader" style={{
					border: "4px solid #f3f3f3",
					borderTop: "4px solid #0078ff",
					borderRadius: "50%",
					width: "32px",
					height: "32px",
					animation: "spin 1s linear infinite",
					margin: "0 auto"
				}} />
				<style>
					{`
						@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
						}
					`}
				</style>
			</div>
		);
	}

	render() {
		return (
			<section id="timeline" className="timeline-section">
				<div className="container">
					<div className="title-box text-center">
						<h3 className="title-a-timeline">Work Experience & Education</h3>
						<div className="line-mf-timeline"></div>
					</div>

					{this.state.isLoading ? (
						this.loader()
					) : (
						<VerticalTimeline>
							{this.state.work_list.map((item, i) => (
								<VerticalTimelineElement
									key={i}
									className="vertical-timeline-element--work"
									date={item.time}
									icon={item.icon}
									iconStyle={{
										background: item.iconBackgroundColor,
										color: item.iconColor,
									}}
									contentStyle={{
										borderTop: `3px solid ${item.borderTopColor ? item.borderTopColor : item.iconBackgroundColor}`,
									}}
								>
									<h3 className="vertical-timeline-element-title">
										{item.role}{" "}
									</h3>
									<h5 className="vertical-timeline-element-subtitle mt-2 ">
										{item.company}
										{item.link && (
											<a target="_blank" rel="noopener noreferrer" className="ml-2 timeline-link-icon" href={item.link}>
												<FaExternalLinkAlt />
											</a>
										)}
									</h5>
									<ul>
										{item.description.map((d, i) => (
											<li key={i} >{d} </li>
										))}
									</ul>
									{item.skills && item.skills.length > 0 && (
										<div className="tech-stack-pills" style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
											{item.skills.map((tech, idx) => (
												<span
													key={idx}
													className="tech-pill"
													style={{
														padding: "0.3em 0.8em",
														borderRadius: "16px",
														fontSize: "0.85em",
														background: "var(--pill-bg, #e3e3e3)",
														color: "var(--pill-color, #222)",
														border: "1px solid var(--pill-border, #ccc)",
														fontWeight: 500,
														transition: "background 0.2s, color 0.2s"
													}}
												>
													{tech}
												</span>
											))}
										</div>
									)}
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
					)}
				</div>
			</section>
		);
	}
}

export default Timeline;