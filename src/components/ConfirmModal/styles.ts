import styled from '@emotion/native'
import { TouchableHighlight } from 'react-native'
import { theme } from '../../theme'

const ModalContainer = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: ${theme.colors.primary};
`

const ModalContainerInner = styled.View`
  margin-left: 10%;
  margin-right: 10%;
  flex-basis: 20%;
  align-items: stretch;
  justify-content: center;
  border-color: #ffffff;
  border-width: 1px;
`

const ModalContainerTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ModalButtons = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 20px;
`

export { ModalContainer, ModalContainerInner, ModalContainerTitle, ModalButtons }
