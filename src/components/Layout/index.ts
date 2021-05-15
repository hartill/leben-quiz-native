import styled from '@emotion/native'

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
  background-color: #23212b;
  padding: 15px;
`

const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: #23212b;
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
`

const Button = styled.View`
  flex-basis: 50px;
  background-color: #37b1e3;
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
  ButtonIcon
}
