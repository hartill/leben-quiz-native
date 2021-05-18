import styled from '@emotion/native'
import { theme } from '../../theme'

const AppContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #fff;
`

const PaddedContentContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: ${theme.colors.primary};
  padding: 15px;
`

const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: ${theme.colors.primary};
`

const WhiteContentContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: #ffffff;
`

const ContentHeaderContainer = styled.View`
  flex-basis: 64px;
  flex-direction: row;
  background-color: ${theme.colors.blue};
  align-items: stretch;
  justify-content: center;
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
`

const Button = styled.View`
  flex-basis: 50px;
  background-color: ${theme.colors.blue};
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ButtonIcon = styled.View`
  position: absolute;
  right: 10px;
`

export {
  AppContainer,
  ContentContainer,
  PaddedContentContainer,
  ButtonContainer,
  Button,
  ButtonText,
  ButtonIcon,
  WhiteContentContainer,
  ContentHeaderContainer,
}
