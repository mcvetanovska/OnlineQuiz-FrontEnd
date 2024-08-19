import React from "react"
import { useLocation} from "react-router-dom"
import "./QuizResult.css"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

		const handleRetakeQuiz = () => {
			alert("Oops! this functionality was not implemented!!!")
		}

		return (
			<section className="container mt-5 results-container">
				<div className="card">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="nav-button" onClick={handleRetakeQuiz}>
					Retake this quiz
				</button>
				</div>
			</section>
		)
 }

 export default QuizResult
