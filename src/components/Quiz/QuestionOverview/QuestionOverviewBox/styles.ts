import styled from '@emotion/native'
import { TouchableHighlight } from 'react-native'
import { theme } from '../../../../theme'

const QuestionBox = styled.View`
  width: 20%;
  aspect-ratio: 1;
  padding: 2px;
`

const StyledTouchableHighlight = styled(TouchableHighlight)`
  flex: 1;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`

const QuestionOverviewBoxInner = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const IncorrectCircle = styled.View`
  position: absolute;
  bottom: 2px;
  right: 2px;
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.red};
  border-radius: 25px;
`

export { QuestionBox, StyledTouchableHighlight, QuestionOverviewBoxInner, IncorrectCircle }
