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
						"Tech: Flutter",
					],
					icon: <FaBriefcase />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					borderTopColor: "#0078ff",
				},
				{
					role: "Github Extern'22",
					company: "Numocity",
					time: "01/2022 - 04/2022",
					description: [
						"Developed a performance tool which would run on over 20+ repositories of the company to alert onsignificant change in performance and assisted developing admin portal UI in Flutter.",
						"Tech: NodeJS, Flutter"
					],

					icon: <FaGithub />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					borderTopColor: "#0078ff",
					link: "https://www.numocity.com/"
				},
				{
					role: "Web Development Intern",
					company: "QDS Pro",
					time: "05/2020 - 06/2020",
					description: [
						"Enhanced and optimized their main websites with responsive design.",
						"Tech: NextJS, ReactJS",
					],
					icon: <FaReact />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					link: "/files/QDSPro_Intership_Certificate.pdf"
				},
				{
					role: "B.Tech",
					company: "K.J. Somaiya College of Engineering (KJSCE)",
					time: "08/2018 - 06/2022",
					description: ["Computer Science (CSE)", "9.25 CGPA"],
					icon: <FaGraduationCap />,
					iconBackgroundColor: "rgb(16, 204, 82)",
					iconColor: "#fff",
				},
				{
					role: "HSC - 12th",
					company: "K.J. Somaiya College of Science and Commerce",
					time: "07/2016 - 06/2018",
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