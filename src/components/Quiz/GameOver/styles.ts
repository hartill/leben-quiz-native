import styled from '@emotion/native'
import { theme } from '../../../theme'

const FlagContainer = styled.View`
  flex-basis: 50%;
  align-items: stretch;
  justify-content: center;
`

const FlagBlack = styled.View`
  flex-basis: 33.333%;
  background-color: #${theme.colors.darkFont};
`

const FlagYellow = styled.View`
  flex-basis: 33.333%;
  background-color: ${theme.colors.yellow};
`

const FlagRed = styled.View`
  flex-basis: 33.333%;
  background-color: ${theme.colors.red};
`

export { FlagContainer, FlagBlack, FlagYellow, FlagRed }
