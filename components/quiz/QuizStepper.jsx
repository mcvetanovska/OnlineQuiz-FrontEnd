import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSubjects } from "../../utils/QuizService"
import "./QuizStepper.css"

 const QuizStepper = () => {
		const [currentStep, setCurrentStep] = useState(1)
		const [selectedSubject, setSelectedSubject] = useState("")
		const [selectedNumQuestions, setSelectedNumQuestions] = useState("")
		const [subjects, setSubjects] = useState([])
		const navigate = useNavigate()

		useEffect(() => {
			fetchSubjectData()
		}, [])

		const fetchSubjectData = async () => {
			try {
				const subjectsData = await getSubjects()
				setSubjects(subjectsData)
			} catch (error) {
				console.error(error)
			}
		}

		const handleNext = () => {
			if (currentStep === 3) {
				if (selectedSubject && selectedNumQuestions) {
					navigate("/take-quiz", { state: { selectedNumQuestions, selectedSubject } })
				} else {
					alert("Please select a subject and number of questions.")
				}
			} else {
				setCurrentStep((prevStep) => prevStep + 1)
			}
		}

		const handlePrevious = () => {
			setCurrentStep((prevStep) => prevStep - 1)
		}

		const handleSubjectChange = (event) => {
			setSelectedSubject(event.target.value)
		}

		const handleNumQuestionsChange = (event) => {
			setSelectedNumQuestions(event.target.value)
		}

		const renderStepContent = () => {
			switch (currentStep) {
				case 1:
					return (
						<div>
							<h3 className="text-info mb-2">I want to take a quiz on :</h3>
							<select
								className="form-select"
								value={selectedSubject}
								onChange={handleSubjectChange}>
								<option value="">Select a subject</option>
								{subjects.map((subject) => (
									<option key={subject} value={subject}>
										{subject}
									</option>
								))}
							</select>
						</div>
					)
				case 2:
					return (
						<div>
							<h4 className="text-info mb-2">How many questions would you like to attempt ?</h4>
							<input
								type="number"
								className="form-control"
								value={selectedNumQuestions}
								onChange={handleNumQuestionsChange}
								placeholder="Enter the number of questions"
							/>
						</div>
					)
				case 3:
					return (
						<div>
							<h2>Confirmation</h2>
							<p>Subject: {selectedSubject}</p>
							<p>Number of Questions: {selectedNumQuestions}</p>
						</div>
					)
				default:
					return null
			}
		}

		return (
			<section className="mt-5 stepper-container">
				<div className="card">
					<div className="card-body">
						{renderStepContent()}
						<div className="d-flex justify-content-between mt-4">
							{currentStep > 1 && (
								<button className="nav-button prev-button" onClick={handlePrevious}>
									Previous
								</button>
							)}
							{currentStep < 3 && (
								<button
									className="nav-button next-button"
									onClick={handleNext}
									disabled={
										(currentStep === 1 && !selectedSubject) ||
										(currentStep === 2 && !selectedNumQuestions)
									}>
									Next
								</button>
							)}
							{currentStep === 3 && (
								<button className="nav-button submit-button" onClick={handleNext}>
									Start Quiz
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		)
 }

 export default QuizStepper
