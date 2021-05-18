import React from 'react'
import { FlatList } from 'react-native'
import { theme } from '../../../theme'
import { ContentContainer } from '../../Layout'
import QuestionOverviewBox from '../../Quiz/QuestionOverview/QuestionOverviewBox'

interface IMockExamReview {
  examProgress: any
  numberOfQuestions: number
}

const MockExamReview: React.FC<IMockExamReview> = ({ examProgress, numberOfQuestions }) => {
  let listData = []
  for (let i = 0; i < examProgress.length; i++) {
    let questionId = examProgress[i].questionId
    let userScore = examProgress[i].userScore
    let backgroundColor = theme.colors.red
    if (userScore) {
      backgroundColor = theme.colors.green
    }

    listData.push({
      key: questionId,
      questionId: questionId,
      backgroundColor: backgroundColor,
    })
  }

  for (let i = 0; i < numberOfQuestions - examProgress.length; i++) {
    listData.push({
      key: i,
      questionId: '?',
      backgroundColor: theme.colors.midGrey,
    })
  }

  return (
    <ContentContainer>
      <FlatList
        numColumns={5}
        data={listData}
        renderItem={({ item, index }) => (
          <QuestionOverviewBox
            key={index}
            questionId={item.questionId.toString()}
            backgroundColor={item.backgroundColor}
            incorrectCount={0}
          />
        )}
      />
    </ContentContainer>
  )
}

export default MockExamReview
