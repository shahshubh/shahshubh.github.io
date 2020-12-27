import React from "react";
import $ from "jquery";

import logo1 from "../img/logo-white.png";
import logo2 from "../img/logo-blue.png";

import { DarkModeSwitch } from 'react-toggle-dark-mode';


class Navbar extends React.Component {
	constructor(props) {
		super();
		this.state = {
			logo: logo1,
			isDarkTheme: props.currTheme === "light" ? false : true
		};
		console.log(props.currTheme);
	}


	componentDidMount() {
		const nav = $("nav");
		let navHeight = nav.outerHeight();

		$(".navbar-toggler").on("click", function () {
			if (!$("#mainNav").hasClass("navbar-reduce")) {
				$("#mainNav").addClass("navbar-reduce");
				if(this.state.logo === logo1){
					this.setState({ logo: logo2 })
				}
			}
		}.bind(this));

		$("body").scrollspy({
			target: "#mainNav",
			offset: navHeight,
		});

		$(".js-scroll").on("click", function () {
			$(".navbar-collapse").collapse("hide");
		});

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 50) {
				document
					.querySelector(".navbar-expand-md")
					.classList.add("navbar-reduce");
				document
					.querySelector(".navbar-expand-md")
					.classList.remove("navbar-trans");
				this.setState({ logo: logo2 });
			} else {
				document
					.querySelector(".navbar-expand-md")
					.classList.add("navbar-trans");
				document
					.querySelector(".navbar-expand-md")
					.classList.remove("navbar-reduce");
				this.setState({ logo: logo1 });
			}
		});

		$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (
				window.location.pathname.replace(/^\//, "") ===
					this.pathname.replace(/^\//, "") &&
				window.location.hostname === this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html, body").animate(
						{
							scrollTop: target.offset().top - navHeight + 5,
						},
						1000,
						"easeInExpo"
					);
					return false;
				}
			}
		});

		$(".js-scroll").on("click", function () {
			$(".navbar-collapse").collapse("hide");
		});
	}

	onThemeChange(){
		this.props.toggleTheme();
		this.setState({
			isDarkTheme: !this.state.isDarkTheme
		});
	}

	render() {
		return (
			<nav
				className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
				id="mainNav"
			>
				<div className="container">
					<a className="navbar-brand js-scroll" href="#page-top">
						
						<img
							src={this.state.isDarkTheme ? logo1 : this.state.logo}
							alt="logo"
							style={{ maxWidth: "120px" }}
							
						/>

					</a>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarDefault"
						aria-controls="navbarDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div
						className="navbar-collapse collapse justify-content-end"
						id="navbarDefault"
					>
						<ul className="navbar-nav">
							
							<li className="nav-item">
								<a className="nav-link js-scroll active" href="#home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll" href="#about">
									About
								</a>
							</li>
                            <li className="nav-item">
								<a className="nav-link js-scroll" href="#work">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll" href="#timeline">
									Work
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll" href="#contact">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<div className="nav-link theme-toggler">
									{/* { this.state.isDarkTheme ? <FaSun /> : <FaMoon /> } */}
									<DarkModeSwitch
										checked={this.state.isDarkTheme}
										onChange={this.onThemeChange.bind(this)}
										size={25}
										sunColor={null}
									/>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
