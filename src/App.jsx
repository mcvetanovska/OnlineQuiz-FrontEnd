import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import QuizStepper from "../components/quiz/QuizStepper"
import Quiz from "../components/quiz/Quiz"
import QuizResult from "../components/quiz/QuizResult"
import GetAllQuiz from "../components/quiz/GetAllQuiz"
import AddQuestion from "../components/question/AddQuestion"
import UpdateQuestion from "../components/question/UpdateQuestion"
import Navbar from "../components/layout/NavBar"
import Admin from "../components/Admin"
import BackgroundQuiz from "../components/BackgroundQuiz"

function App() {
	return (
		<main className="container pt-5 pb-5 w-100 h-100">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz-stepper" element={
						<BackgroundQuiz>
						<QuizStepper /></BackgroundQuiz>} />
					<Route path="/take-quiz" element={<BackgroundQuiz><Quiz /></BackgroundQuiz>} />
					<Route path="/admin" element={<Admin />} />
					
					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<BackgroundQuiz><QuizResult /></BackgroundQuiz>} />
				</Routes>
			</Router>
		</main>
	)
}

export default App
