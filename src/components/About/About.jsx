import React from "react";
import styles from "./About.module.css";
import getAge from "../../functions/getAge";
import { MdPersonSearch } from "react-icons/md";

import mydata from "../../data/mydata";

export default function About() {

	const birthday = new Date(mydata.birthday).toLocaleDateString('en-us', { day:"numeric", year:"numeric", month:"short"});

	return (
		<div id="about" className="container">
			
			<h3 className="mb-2">{mydata.name}</h3>

			<h4 className="mb-2">I'm a <span className="txt-blue">{mydata.role}</span> from <span className="txt-blue">{mydata.country}</span></h4>

			<p className="mb-2">{mydata.shortbio}</p>

			<div className={styles.about_list}>

				<div className={styles.item}>
					<p className="">Birthday</p>
					<p>{birthday}</p>
				</div>
				<div className={styles.item}>
					<p className="">Age</p>
					<p>{getAge(mydata.birthday)}</p>
				</div>
				<div className={styles.item}>
					<p className="">Phone</p>
					<p>{mydata.phone}</p>
				</div>
				<div className={styles.item}>
					<p className="">E-mail</p>
					<p>{mydata.email}</p>
				</div>
				<div className={styles.item}>
					<p className="">Phone</p>
					<p>{mydata.phone}</p>
				</div>
				<div className={styles.item}>
					<p className="">Phone</p>
					<p>{mydata.phone}</p>
				</div>
			</div>

			{/* <h1 className="mb-2">About</h1> */}
			{/* <div className="card">
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
			</div> */}
		</div>
	);
}
