import React from "react";
// import styles from "./About.module.css";
import { MdPersonSearch } from "react-icons/md";

import mydata from "../../data/mydata";

export default function About() {
	return (
		<div id="about" className="container">
			<h1 className="mb-2">About</h1>
			<div className="card">
				<div className="icon-circle mb-2">
					<MdPersonSearch />
				</div>
				<p>
					With over 2 years of experience as Front Developer, I have solid skills in {" "}
					<span className="tag tag-orange">HTML5</span>, {" "}
					<span className="tag tag-blue">CSS3</span>, {" "}
					<span className="tag tag-yellow">JS</span> and responsive design. In my last
					position I covered processes of front-end with Javascript and back-end in{" "}
					<span className="tag tag-purple">PHP</span> {" "}
					with <span className="tag tag-orange">MySQL</span>. You will find me to be a
					curious, analytical problem solver with a focus on continuous learning and
					keeping up to date on new technologies. I'm currently learning <span className="tag tag-blue">ReactJS</span>, {" "}
					<span className="tag tag-green">NodeJS</span>,{" "} <span className="tag tag-green">MongoDB</span>.
				</p>
			</div>
		</div>
	);
}
