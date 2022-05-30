import React from "react";
import TextLoop from "react-text-loop";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {

	const myCV = "https://drive.google.com/file/d/1gQblZ6LEPeU0gLBQQn52SJIXh65C5Fbe/view?usp=sharing"

	return (
		<div id="home" className="container">
			<Navbar />

			<h1 className={styles.presentation}>
				<span>Hi,</span>
				<span>I'm Jorge Vargas a</span>
				<div>
					<TextLoop interval={2000}>
						<span className="txt-blue">Front-end</span>
						<span className="txt-green">Back-end</span>
					</TextLoop>{" "}
					<span>Developer</span>
				</div>
				<div className={styles.buttons_section}>
					<a className={`button ${styles.button}`} href="#about">
						<span>See Who I'm</span>
					</a>
					<a className={`button ${styles.button +" "+styles.button2}`} href={myCV} target="_blank">
						<span>See My CV</span>
					</a>
				</div>
			</h1>
		</div>
	);
}
