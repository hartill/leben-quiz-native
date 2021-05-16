import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { generateQuestionArray } from '../../helpers'
import QuizContainer from '../../components/Quiz/QuizContainer'
import QuizFooter from '../../components/Quiz/QuizFooter'
import ExamQuestionOverview from '../../components/MockExam/ExamQuestionOverview'
import Results from '../../components/MockExam/Results'
import Storage from '../../storage'
import { AppContainer } from '../../components/Layout'

interface IMockExam {
  questions: any[]
  images: any
  numberOfQuestions: number
}

const MockExam: React.FC<IMockExam> = ({ questions, images, numberOfQuestions }) => {
  const storage = new Storage()
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [examCompleted, setExamCompleted] = useState(false)
  const [viewProgress, setViewProgress] = useState(false)
  const [examProgress, setExamProgress] = useState<any[]>([])
  const [examQuestions, setExamQuestions] = useState<any[]>([])
  const [loadingExamProgress, setLoadingExamProgress] = useState(true)
  const [loadingExamQuestions, setLoadingExamQuestions] = useState(true)

  const loadExamProgress = () => {
    storage.getExamProgress().then((data) => {
      if (data) {
        setExamProgress(data)
      }
      setLoadingExamProgress(false)
    })
  }

  const loadQuestions = () => {
    storage.getExamQuestions().then((data) => {
      if (data) {
        setExamQuestions(data)
      }
      setLoadingExamQuestions(false)
    })
  }

  useEffect(() => {
    loadExamProgress()
    loadQuestions()
  }, [])

  useEffect(() => {
    if (!examQuestions?.length) {
      const newExamQuestions = generateQuestionArray(numberOfQuestions)
      setExamQuestions(newExamQuestions)
    }
  }, [numberOfQuestions, examQuestions?.length])

  useEffect(() => {
    storage.storeExamQuestions(examQuestions)
  }, [examQuestions])

  useEffect(() => {
    storage.storeExamProgress(examProgress)
  }, [examProgress])

  if (loadingExamProgress || loadingExamQuestions) {
    return null
  }

  const restart = () => {
    storage.deleteExamProgress()
    storage.deleteExamQuestions()

    const newExamQuestions = generateQuestionArray(numberOfQuestions)
    setExamQuestions(newExamQuestions)
    setExamProgress([])
    setQuestion(questions[newExamQuestions[0]])
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
    setExamCompleted(false)
  }

  const checkForRestart = () => {
    if (numberOfQuestions === 30 && examQuestions && examQuestions.length > 30) {
      restart()
    }
    if (numberOfQuestions === 33 && examQuestions && examQuestions.length < 33) {
      restart()
    }
  }

  checkForRestart()

  const onAnswerSelected = (key: number, order: string, questionId: number) => {
    let questionCategory = questions[questionId - 1].category
    setSelectedAnswer(order)
    setShowAnswer(true)

    const newProgressData = {
      questionId: questionId,
      userScore: key === 1 ? 1 : 0,
      category: questionCategory,
    }

    setExamProgress([...examProgress, newProgressData])
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    if (examProgress.length >= numberOfQuestions) {
      setExamCompleted(true)
    } else {
      setQuestion(questions[examQuestions[examProgress.length]])
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  if (!question && !examCompleted) {
    setQuestion(questions[examQuestions[examProgress.length]])
    return null
  }

  const renderContent = () => {
    let renderOutput = []
    if (viewProgress) {
      renderOutput.push(<ExamQuestionOverview numberOfQuestions={numberOfQuestions} examProgress={examProgress} key="qo1" />)
    } else if (examCompleted) {
      renderOutput.push(<Results examProgress={examProgress} numberOfQuestions={numberOfQuestions} key="qo3" />)
    } else {
      renderOutput.push(
        <QuizContainer
          question={question}
          onAnswerSelected={onAnswerSelected}
          selectedAnswer={selectedAnswer}
          showAnswer={showAnswer}
          images={images}
          key="qo2"
          mode={2}
        />
      )
    }
    return renderOutput
  }

  let title = viewProgress ? 'Fragenübersicht' : 'Probeprüfung'
  return (
    <AppContainer>
      <Header
        title={title}
        icons={true}
        viewProgress={viewProgress}
        handleViewProgress={handleViewProgress}
        renderHomeButton={!viewProgress}
      />
      {renderContent()}
      <QuizFooter
        showAnswer={showAnswer}
        nextQuestion={nextQuestion}
        progress={examProgress}
        viewProgress={viewProgress}
        completed={examCompleted}
        numberOfQuestions={numberOfQuestions}
        restart={restart}
        mode={2}
      />
    </AppContainer>
  )
}

export default MockExam
