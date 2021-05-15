import React from 'react'
import { FlatList } from 'react-native'
import { theme } from '../../../theme'
import { ContentContainer } from '../../Layout'

import RenderText from '../../RenderText'
import { QuestionOverviewBox, QuestionOverviewBoxInner } from './styles'

interface IQuestionOverview {
  question: any
  numberOfQuestions: number
  handleQuestionSelected: Function
}
const QuestionOverview: React.FC<IQuestionOverview> = ({ question, numberOfQuestions, handleQuestionSelected }) => {
  let markup = []
  for (let i = 1; i < numberOfQuestions + 1; i++) {
    const questionId = i
    const boxStyle = parseFloat(question.id) === questionId ? theme.colors.darkPrimary : 'rgba(0,0,0,0.3)'

    markup.push({ key: questionId, boxStyle: boxStyle })
  }

  return (
    <ContentContainer>
      <FlatList
        style={{ flex: 1 }}
        numColumns={5}
        data={markup}
        renderItem={({ item }) => (
          <QuestionOverviewBox key={item.key}>
            <QuestionOverviewBoxInner
              onPress={() => {
                handleQuestionSelected(item.key)
              }}
              style={{ backgroundColor: item.boxStyle }}
              underlayColor={theme.colors.primary}
            >
              <RenderText style="p2" text={item.key} />
            </QuestionOverviewBoxInner>
          </QuestionOverviewBox>
        )}
      />
    </ContentContainer>
  )
}

export default QuestionOverview
