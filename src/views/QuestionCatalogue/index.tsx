import React, { useState } from 'react'
import { AppContainer } from '../../components/Layout'
import Header from '../../components/Header'
import QuizContainer from '../../components/Quiz/QuizContainer'
import QCFooter from '../../components/QuestionCatalogue/QCFooter'
import QuestionOverview from '../../components/QuestionCatalogue/QuestionOverview'

interface IQuestionCatalogue {
  questions: any[]
  images: any
  numberOfQuestions: number
}

const QuestionCatalogue: React.FC<IQuestionCatalogue> = ({ questions, images, numberOfQuestions }) => {
  const [question, setQuestion] = useState<any | undefined>(undefined)
  const [viewProgress, setViewProgress] = useState(false)
  const showAnswer = true

  const handleQuestionSelected = (questionId: number) => {
    setQuestion(questions[questionId - 1])
    setViewProgress(false)
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    if (question?.id) {
      let nextQuestion = parseFloat(question.id)
      if (nextQuestion >= numberOfQuestions) {
        nextQuestion = 0
      }
      setQuestion(questions[nextQuestion])
      setViewProgress(false)
    }
  }

  if (!question) {
    setQuestion(questions[0])
    return null
  }

  const renderContent = () => {
    let renderOutput = []
    if (viewProgress) {
      renderOutput.push(
        <QuestionOverview
          numberOfQuestions={numberOfQuestions}
          question={question}
          handleQuestionSelected={handleQuestionSelected}
          key="qo1"
        />
      )
    } else {
      renderOutput.push(<QuizContainer question={question} showAnswer={showAnswer} images={images} key="qo2" mode={3} />)
    }
    return renderOutput
  }

  let title = viewProgress ? 'Fragenübersicht' : 'Fragenkatalog'
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
      <QCFooter nextQuestion={nextQuestion} />
    </AppContainer>
  )
}

export default QuestionCatalogue
