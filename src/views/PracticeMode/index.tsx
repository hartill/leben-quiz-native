import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

import Header from '../../components/Header'

import QuizContainer from '../../components/Quiz/QuizContainer'
import QuizFooter from '../../components/Quiz/QuizFooter'
import QuestionOverview from '../../components/Quiz/QuestionOverview'
import Gameover from '../../components/Quiz/Gameover'
import { generateNextRandomQuestion } from '../../helpers'
import { AppContainer } from '../../components/Layout'

interface IPracticeQuiz {
  questions: any[]
  numberOfQuestions: number
  images: any[]
  removeProgress: Function
  removeIncorrect: Function
}

const PracticeQuiz: React.FC<IPracticeQuiz> = ({
  questions,
  numberOfQuestions,
  images,
  removeProgress,
  removeIncorrect,
}) => {
  const [completed, setCompleted] = useState(false)
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [viewProgress, setViewProgress] = useState<Boolean>(false)
  const [progress, setProgress] = useState<string[]>([])
  const [incorrect, setIncorrect] = useState<string[]>([])
  const [loadingData, setLoadingData] = useState<Boolean>(true)

  const getProgress = async () => {
    try {
      let value = await AsyncStorage.getItem('@LebenStore:progress').then((req) => req ? JSON.parse(req) : null)
      if (value) {
        setProgress(value)
      }
    } catch (error) {
      console.log('Error retrieving data' + error)
    } finally {
      setLoadingData(false)
    }
  }

  const getIncorrect = async() => {
    try {
      const value = await AsyncStorage.getItem('@LebenStore:incorrect').then((req) => req ? JSON.parse(req) : null)
      if (value) {
        setIncorrect(value)
      }
    } catch (error) {
      console.log('Error retrieving data' + error)
    } finally {
      setLoadingData(false)
    }
  }

  if(loadingData) {
    getProgress()
    getIncorrect()
    return null
  }

  const saveProgress = async (progress: any[]) => {
    setProgress(progress)
    try {
      await AsyncStorage.setItem('@LebenStore:progress', JSON.stringify(progress))
    } catch (error) {
      console.log('Error saving data' + error)
    }
  }

  const saveIncorrect = async(incorrect: any[]) => {
    setIncorrect(incorrect)
    try {
      await AsyncStorage.setItem('@LebenStore:incorrect', JSON.stringify(incorrect))
    } catch (error) {
      console.log('Error saving data' + error)
    }
  }

  const addToProgress = (questionId: string) => {
    let newProgress = [...progress, questionId]
    const sortedProgress = newProgress?.sort(function (a: any, b: any) {
      return a - b
    })
    setProgress(sortedProgress)
    saveProgress(sortedProgress)
  }

  const addToIncorrect = (questionId: string) => {
    let newIncorrect = [...incorrect, questionId]
    const sortedIncorrect = newIncorrect?.sort(function (a: any, b: any) {
      return a - b
    })
    setIncorrect(sortedIncorrect)
    saveIncorrect(sortedIncorrect)
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
    removeProgress()
    removeIncorrect()
    setProgress([])
    setIncorrect([])
    setCompleted(false)
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
  }

  if (!question && !completed) {
    const nextQuestion = generateNextRandomQuestion(questions, progress, numberOfQuestions)
    setQuestion(nextQuestion)
    return null
  }

  const renderContent = () => {
    let renderOutput = []
    if (viewProgress) {
      renderOutput.push(<QuestionOverview numberOfQuestions={numberOfQuestions} progress={progress} incorrect={incorrect} key="qo1" />)
    } else if (completed) {
      renderOutput.push(<Gameover key="qo3" />)
    } else {
      renderOutput.push(
        <QuizContainer
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
