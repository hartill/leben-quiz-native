import React from 'react'
import { FlatList } from 'react-native'
import { ContentContainer } from '../../Layout'
import { theme } from '../../../theme'
import QuestionOverviewBox from './QuestionOverviewBox'

interface IQuestionOverview {
  numberOfQuestions: number
  progress: any
  incorrect: any
}

const QuestionOverview: React.FC<IQuestionOverview> = ({ numberOfQuestions, progress, incorrect }) => {
  let listData = []
  for (let i = 1; i < numberOfQuestions + 1; i++) {
    let questionId = i.toString()
    let correctCount = false
    if (progress) {
      correctCount = progress.indexOf(questionId) < 0 ? false : true
    }
    let incorrectCount = 0
    if (incorrect) {
      if (incorrect.indexOf(questionId) >= 0) {
        incorrectCount = incorrect.reduce(function (n: number, item: any) {
          return n + (item === questionId ? 1 : 0)
        }, 0)
      }
    }

    let backgroundColor = theme.colors.midGrey

    if (correctCount) {
      backgroundColor = theme.colors.green
    }

    listData.push({
      questionId: questionId,
      backgroundColor: backgroundColor,
      incorrectCount: incorrectCount,
    })
  }

  return (
    <ContentContainer>
      <FlatList
        numColumns={5}
        data={listData}
        renderItem={({ item, index }) => (
          <QuestionOverviewBox
            backgroundColor={item.backgroundColor}
            incorrectCount={item.incorrectCount}
            questionId={item.questionId}
            key={index}
          />
        )}
      />
    </ContentContainer>
  )
}

export default QuestionOverview
