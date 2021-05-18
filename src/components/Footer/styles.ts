import styled from '@emotion/native'
import { TouchableHighlight } from 'react-native'
import { theme } from '../../theme'

const FooterContainer = styled.View`
  flex-basis: 64px;
  background-color: ${theme.colors.primary};
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
`

const FullWidthNextButton = styled(TouchableHighlight)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const FooterRight = styled(TouchableHighlight)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.red};
`

export { FooterContainer, FullWidthNextButton, FooterRight }
