import React from 'react'
import { QuestionBox, StyledTouchableHighlight, IncorrectCircle, QuestionOverviewBoxInner } from './styles'
import RenderText from '../../../RenderText'

interface IQuestionOverview {
  backgroundColor: string
  incorrectCount: number
  questionId: string
  onClick?: Function
}

export default class QuestionOverviewBox extends React.PureComponent<IQuestionOverview> {
  render() {
    const { backgroundColor, incorrectCount, questionId, onClick } = this.props
    const renderIncorrectCount = (count: number) => {
      return (
        <IncorrectCircle>
          <RenderText style="pSmall" text={count + 'x'} />
        </IncorrectCircle>
      )
    }

    if (onClick) {
      return (
        <QuestionBox>
          <StyledTouchableHighlight
            style={{ backgroundColor: backgroundColor }}
            onPress={() => {
              onClick(questionId)
            }}
          >
            <QuestionOverviewBoxInner>
              <RenderText style="p2" text={questionId} />
              {incorrectCount > 0 ? renderIncorrectCount(incorrectCount) : null}
            </QuestionOverviewBoxInner>
          </StyledTouchableHighlight>
        </QuestionBox>
      )
    } else {
      return (
        <QuestionBox>
          <QuestionOverviewBoxInner style={{ backgroundColor: backgroundColor }}>
            <RenderText style="p2" text={questionId} />
            {incorrectCount > 0 ? renderIncorrectCount(incorrectCount) : null}
          </QuestionOverviewBoxInner>
        </QuestionBox>
      )
    }
  }
}
