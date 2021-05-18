import React from 'react'
import { FlatList } from 'react-native'
import { theme } from '../../../theme'
import { ContentContainer } from '../../Layout'
import QuestionOverviewBox from '../../Quiz/QuestionOverview/QuestionOverviewBox'

interface IQuestionOverview {
  question: any
  numberOfQuestions: number
  handleQuestionSelected: Function
}
const QuestionOverview: React.FC<IQuestionOverview> = ({ question, numberOfQuestions, handleQuestionSelected }) => {
  let markup = []
  for (let i = 1; i < numberOfQuestions + 1; i++) {
    const questionId = i
    const backgroundColor = parseFloat(question.id) === questionId ? theme.colors.blue : theme.colors.midGrey

    markup.push({ questionId: questionId, backgroundColor: backgroundColor })
  }

  return (
    <ContentContainer>
      <FlatList
        style={{ flex: 1 }}
        numColumns={5}
        data={markup}
        renderItem={({ item, index }) => (
          <QuestionOverviewBox
            key={index}
            questionId={item.questionId.toString()}
            backgroundColor={item.backgroundColor}
            incorrectCount={0}
            onClick={handleQuestionSelected}
          />
        )}
      />
    </ContentContainer>
  )
}

export default QuestionOverview
