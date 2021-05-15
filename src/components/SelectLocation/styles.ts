import styled from '@emotion/native'
import { Modal, SafeAreaView, TouchableHighlight } from 'react-native'

const StyledModal = styled(Modal)`
  flex: 1;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: #3e4651;
`

const SelectionListView = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 15px;
`

const PickerContainer = styled.View`
  background-color: #fff;
`

const ConfirmationButtonContainer = styled.View`
  flex-basis: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
`

const ConfirmationButtonOuter = styled(TouchableHighlight)`
  flex-basis: 48%;
`

const ConfirmationButton = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #fff;
  border-width: 1px;
`

const ConfirmationButtonIcon = styled.View`
  padding-left: 8px;
`

const ConfirmationText = styled.View`
  flex-basis: 15px;
  margin-top: 10px;
`

const ConfirmationTextButtonContainer = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export {
  StyledModal,
  StyledSafeAreaView,
  SelectionListView,
  PickerContainer,
  ConfirmationButtonContainer,
  ConfirmationButtonOuter,
  ConfirmationButton,
  ConfirmationButtonIcon,
  ConfirmationText,
  ConfirmationTextButtonContainer,
}
