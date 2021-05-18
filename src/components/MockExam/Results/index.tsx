import React from 'react'
import { theme } from '../../../theme'
import { ContentContainer, WhiteContentContainer, ContentHeaderContainer } from '../../Layout'
import RenderText from '../../RenderText'
import {
  ContentHeaderMain,
  ContentBody,
  ResultRow,
  ResultFinalPercentage,
  CorrectAnswers,
  IncorrectAnswers,
} from './styles'

interface IResults {
  examProgress: any
  numberOfQuestions: number
}

const Results: React.FC<IResults> = ({ examProgress, numberOfQuestions }) => {
  let output = []
  let correctAnswers = 0
  let incorrectAnswers = 0
  for (let i = 0; i < examProgress.length; i++) {
    examProgress[i].userScore === 1 ? (correctAnswers += 1) : (incorrectAnswers += 1)
  }
  let percentageCorrect = (correctAnswers / numberOfQuestions) * 100
  let testPassed = percentageCorrect >= 50 ? true : false
  let accentStyle = testPassed ? theme.colors.green : theme.colors.red
  output.push(
    <WhiteContentContainer key="res1">
      <ContentHeaderContainer style={{ backgroundColor: accentStyle }}>
        <ContentHeaderMain>
          {testPassed ? <RenderText style="h2" text="Du hast bestanden" /> : <RenderText style="h2" text="Du hast nicht bestanden" />}
        </ContentHeaderMain>
      </ContentHeaderContainer>
      <ContentBody>
        <ResultRow>
          <RenderText style="p" text="Ergebnis:" />
          <ResultFinalPercentage style={{ backgroundColor: accentStyle }}>
            <RenderText style="h2" text={percentageCorrect.toFixed(0) + '%'} />
          </ResultFinalPercentage>
        </ResultRow>
        <ResultRow>
          <RenderText style="p" text="Korrekte Antworten:" />
          <CorrectAnswers>
            <RenderText style="h2" text={correctAnswers.toString()} />
          </CorrectAnswers>
        </ResultRow>
        <ResultRow>
          <RenderText style="p" text="Falsche Antworten:" />
          <IncorrectAnswers>
            <RenderText style="h2" text={incorrectAnswers.toString()} />
          </IncorrectAnswers>
        </ResultRow>
      </ContentBody>
    </WhiteContentContainer>
  )

  return <ContentContainer>{output}</ContentContainer>
}

export default Results
