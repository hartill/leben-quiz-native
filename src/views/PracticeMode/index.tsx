import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Quiz from '../../components/Quiz'
import QuizFooter from '../../components/Footer/PracticeFooter'
import QuestionOverview from '../../components/Quiz/QuestionOverview'
import GameOver from '../../components/Quiz/GameOver'
import { generateNextRandomQuestion } from '../../helpers'
import { AppContainer } from '../../components/Layout'
import Storage from '../../storage'
import { StatusBar } from 'react-native'
import { theme } from '../../theme'

interface IPracticeQuiz {
  questions: any[]
  numberOfQuestions: number
  images: any[]
}

const PracticeQuiz: React.FC<IPracticeQuiz> = ({ questions, numberOfQuestions, images }) => {
  const storage = new Storage()
  const [completed, setCompleted] = useState(false)
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [viewProgress, setViewProgress] = useState<boolean>(false)
  const [progress, setProgress] = useState<any>([])
  const [incorrect, setIncorrect] = useState<any>([])
  const [loadingProgress, setLoadingProgress] = useState<boolean>(true)
  const [loadingIncorrect, setLoadingIncorrect] = useState<boolean>(true)

  const loadProgress = () => {
    storage.getProgress().then((data) => {
      if (data) {
        setProgress(data)
      }
      setLoadingProgress(false)
    })
  }

  const loadIncorrect = () => {
    storage.getIncorrect().then((data) => {
      if (data) {
        setIncorrect(data)
      }
      setLoadingIncorrect(false)
    })
  }

  useEffect(() => {
    loadProgress()
    loadIncorrect()
  }, [])

  if (loadingProgress || loadingIncorrect) {
    return null
  }

  const addToProgress = (questionId: string) => {
    let newProgress = [...progress, questionId]
    const sortedProgress = newProgress?.sort(function (a: any, b: any) {
      return a - b
    })
    setProgress(sortedProgress)
    storage.storeProgress(sortedProgress)
  }

  const addToIncorrect = (questionId: string) => {
    let newIncorrect = [...incorrect, questionId]
    const sortedIncorrect = newIncorrect?.sort(function (a: any, b: any) {
      return a - b
    })
    setIncorrect(sortedIncorrect)
    storage.storeIncorrect(sortedIncorrect)
  }

  const onAnswerSelected = (key: number, order: string, questionId: string) => {
    setSelectedAnswer(order)
    setShowAnswer(true)
    if (key === 1) {
      addToProgress(questionId)
    } else {
      addToIncorrect(questionId)
    }
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    if (progress.length >= numberOfQuestions) {
      setCompleted(true)
    } else {
      setQuestion(generateNextRandomQuestion(questions, progress, numberOfQuestions))
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  const displayAnswers = () => {
    setShowAnswer(true)
  }

  const restart = () => {
    storage.deleteProgress()
    storage.deleteIncorrect()
    setProgress([])
    setIncorrect([])
    setCompleted(false)
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
  }

  if (!question && !completed) {
    if (progress.length >= numberOfQuestions) {
      setCompleted(true)
    } else {
      const nextQuestion = generateNextRandomQuestion(questions, progress, numberOfQuestions)
      setQuestion(nextQuestion)
    }
    return null
  }

  const renderContent = () => {
    let renderOutput = []
    if (viewProgress) {
      renderOutput.push(<QuestionOverview numberOfQuestions={numberOfQuestions} progress={progress} incorrect={incorrect} key="qo1" />)
    } else if (completed) {
      renderOutput.push(<GameOver key="qo3" />)
    } else {
      renderOutput.push(
        <Quiz
          headerColor={theme.colors.blue}
          question={question}
          onAnswerSelected={onAnswerSelected}
          selectedAnswer={selectedAnswer}
          showAnswer={showAnswer}
          images={images}
          key="qo2"
        />
      )
    }
    return renderOutput
  }

  let title = viewProgress ? 'Fragenübersicht' : 'Trainieren'
  if (completed) {
    title = 'Fertig!'
  }
  return (
    <AppContainer>
      <StatusBar hidden />
      <Header
        title={title}
        icons={true}
        viewProgress={viewProgress}
        handleViewProgress={handleViewProgress}
        withHomeButton={!viewProgress}
      />
      {renderContent()}
      <QuizFooter
        showAnswer={showAnswer}
        nextQuestion={nextQuestion}
        progress={progress}
        viewProgress={viewProgress}
        completed={completed}
        numberOfQuestions={numberOfQuestions}
        restart={restart}
        displayAnswers={displayAnswers}
      />
    </AppContainer>
  )
}

export default PracticeQuiz
