import React from 'react'
import { FlatList } from 'react-native'
import { ContentContainer } from '../../Layout'
import { QuestionOverviewBox, StyledTouchableHighlight, IncorrectCircle, QuestionOverviewBoxInner } from './styles'

import RenderText from '../../RenderText'
import { theme } from '../../../theme'

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
      key: questionId,
      backgroundColor: backgroundColor,
      incorrectCount: incorrectCount,
    })
  }

  const renderIncorrectCount = (count: number) => {
    return (
      <IncorrectCircle>
        <RenderText style="pSmall" text={count + 'x'} />
      </IncorrectCircle>
    )
  }

  return (
    <ContentContainer>
      <FlatList
        numColumns={5}
        data={listData}
        renderItem={({ item }) => (
          <QuestionOverviewBox key={item.key}>
            <StyledTouchableHighlight style={{ backgroundColor: item.backgroundColor }}>
              <QuestionOverviewBoxInner>
                <RenderText style="p2" text={item.key} />
                {item.incorrectCount > 0 ? renderIncorrectCount(item.incorrectCount) : null}
              </QuestionOverviewBoxInner>
            </StyledTouchableHighlight>
          </QuestionOverviewBox>
        )}
      />
    </ContentContainer>
  )
}

export default QuestionOverview
