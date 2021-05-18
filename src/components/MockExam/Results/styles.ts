import styled from '@emotion/native'
import { theme } from '../../../theme'

const ContentHeaderMain = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ContentBody = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px;
`

const ResultRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`

const ResultFinalPercentage = styled.View`
  flex-basis: 20%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`

const CorrectAnswers = styled.View`
  flex-basis: 20%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${theme.colors.green};
`

const IncorrectAnswers = styled.View`
  flex-basis: 20%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${theme.colors.red};
`

export { ContentHeaderMain, ContentBody, ResultRow, ResultFinalPercentage, CorrectAnswers, IncorrectAnswers }
