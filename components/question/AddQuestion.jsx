import React from "react"
import {createQuestion, getSubjects} from "../../utils/QuizService.jsx";

const AddQuestion = () => {
    const [question, setQuestionText] = useState("")
    const [questionType, setQuestionType] = useState("single")
    const [choices, setChoices] = useState([""])
    const [correctAnswers, setCorrectAnswers] = useState([""])
    const [subject, setSubject] = useState("")
    const [newSubject, setNewSubject] = useState("")
    const [subjectOptions, setSubjectOptions] = useState([""])

    const fetchSubjects = async () => {
        try {
            const subjectsData = await getSubjects()
            setSubjectOptions(subjectsData)
        } catch (error) {
            console.error(error)
        }
    }

    const handleAddChoice = async () => {
        const lastChoice = choices[choices.length - 1]
        const lastChoiceLetter = lastChoice ? lastChoice.charAt(0) : "A"
        const newChoiceLetter = String.fromCharCode(lastChoiceLetter.charCodeAt(0) + 1)
        const newChoice = `${newChoiceLetter}.`
        setChoices([...choices, newChoice])
    }

    const handleRemoveChoice = async (index) => {
        setChoices(choices.filter((choice, i) => i !== index))
    }

    const handleChoiceChange = async (index, value) => {
        setChoices(choices.map((choice, i) => (i === index ? value : choice)))
    }

    const handleCorrectAnswerChange = async (index, value) => {
        setCorrectAnswers(correctAnswers.map((answer, i) => (i === index ? value :answer)))
    }

    const handleCorrectAnswer = () => {
        setCorrectAnswers([...correctAnswers, ""])
    }

    const handleRemoveCorrectAnswer = (index) => {
        setCorrectAnswers(correctAnswers.filter((answer, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const result = {
                question,
                questionType,
                choices,
                correctAnswers: correctAnswers.map((answer) => {
                    const choiceLetter = answer.charAt(0)
                    const choiceIndex = choiceLetter.charCodeAt(0) - 65
                    return choiceIndex >= 0 && choiceIndex < choices.length ? choiceLetter : null
                }),
                subject
            }
            await createQuestion(result)
            setQuestionText("")
            setQuestionType("single")
            setChoices([""])
            setCorrectAnswers([""])
            setSubject("")
        }catch (error){
            console.error(error)
        }
    }

    const handleAddSubject = async () => {
        if (newSubject.trim() !== "") {
            setSubject(newSubject.trim())
            setSubjectOptions([...subjectOptions, newSubject.trim()])
            setSubject("")
        }
    }

    return(
        <div>

        </div>
    )
}

export default AddQuestion