import React, { Component } from "react";
import { FaReact, FaGraduationCap, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
				// {
				// 	role: "Software Engineering Virtual Internship",
				// 	company: "JPMorgan Chase & Co.",
				// 	time: "06/2020",
				// 	description: [
				// 		"Throughout the virtual experience, I got to know about the JPMorgan Chase frameworks",
				// 		"Generating patch files",
				// 		"Applying technical skills to a hypothetical request from the firm’s trading floor to analyze and visualize data in a new way.",
				// 	],

				// 	icon: <MdWork />,
				// 	iconBackgroundColor: "rgb(233, 30, 99)",
				// 	iconColor: "#fff",
				// 	link:
				// 		"https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_2Ap99mtz77SRfiiC5_completion_certificate.pdf",
				// },
				{
					role: "Github Extern'22",
					company: "Numocity",
					time: "01/2022 - 04/2022",
					description: [
						"I was responsible for developing a performance tool to alert on significant change in performance",
						"Also worked on developing an admin portal."
					],

					icon: <FaGithub />,
					iconBackgroundColor: "#000",
					iconColor: "#fff",
					borderTopColor: "#ff4a4a",
					link: "https://www.numocity.com/"
				},
				{
					role: "Web Development Intern",
					company: "QDS Pro",
					time: "05/2020 - 06/2020",
					description: [
						"Maintaining & adding new features to QDS Pro main website",
						"Developing an E-Learning platform",
						"Optimizing user experience",
						"Making responsive designs",
						"NextJS, ReactJS",
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
					description: ["Computer Engg.", "9.18 CGPA (Aggregate)"],
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
		};
	}

	render() {
		return (
			<section id="timeline" className="timeline-section">
				<div className="container">
					<div className="title-box text-center">
						<h3 className="title-a-timeline">Work Experience & Education</h3>

						<div className="line-mf-timeline"></div>
					</div>

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
				</div>
			</section>
		);
	}
}

export default Timeline;
