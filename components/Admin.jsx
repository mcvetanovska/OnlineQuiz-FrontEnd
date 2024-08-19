import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
	return (
		<section className="container mt-5 admin-container">
			<div className='card'>
			<h3 className='welcome'>Welcome to admin home page</h3>
			<hr />
			<nav className="nav flex-column">
				<Link to={"/create-quiz"} className="nav-link">
					Create a New Quiz
				</Link>
				<Link to={"/all-quizzes"} className="nav-link">
					Manage existing Quizes
				</Link>
			</nav>
			</div>
		</section>
	)
}

export default Admin
