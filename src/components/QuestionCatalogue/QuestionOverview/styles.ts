import styled from '@emotion/native'
import { TouchableHighlight } from 'react-native'
import { theme } from '../../../theme'

const QuestionOverviewBox = styled.View`
  width: 20%;
  aspect-ratio: 1;
  padding: 2px;
`

const QuestionOverviewBoxInner = styled(TouchableHighlight)`
  position: relative;
  flex: 1;
  background-color: ${theme.colors.midGrey};
  align-items: center;
  justify-content: center;
`

export { QuestionOverviewBox, QuestionOverviewBoxInner }
