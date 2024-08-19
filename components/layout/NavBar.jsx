import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const Navbar = () => {
	return (
		<nav className="header">
			<div className="inside">
			<NavLink to="/" className="logo"><img className="logo-img" src="/logo.png"/>QUIZTIME</NavLink>
			<nav className="nav">
				<a href="/admin">Admin</a>
				<a href="/quiz-stepper">Take Quiz</a>
				<a href="">Leaderboard</a>
			</nav>
			<button className="download-btn">Sign in</button>
			</div>
		</nav>
	)
}

export default Navbar
