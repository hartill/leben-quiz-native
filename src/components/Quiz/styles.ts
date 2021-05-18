import styled from '@emotion/native'

const ContentHeaderLeft = styled.View`
  flex-basis: 64px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
`

const ContentHeaderMain = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-left: 15px;
`

const QuestionContainer = styled.View`
  padding-bottom: 0px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
`

export { ContentHeaderLeft, ContentHeaderMain, QuestionContainer }
