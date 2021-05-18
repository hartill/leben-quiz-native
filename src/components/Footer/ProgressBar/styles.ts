import styled from '@emotion/native'
import { TouchableHighlight } from 'react-native'
import { theme } from '../../../theme'

const ProgressContainer = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ProgressIndicator = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${theme.colors.green};
`

export { ProgressContainer, ProgressIndicator }
