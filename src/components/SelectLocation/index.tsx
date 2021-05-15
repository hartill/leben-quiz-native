import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Picker } from 'react-native'
import { theme } from '../../theme'
import RenderText from '../RenderText'
import {
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
} from './styles'

interface ISelectLocation {
  modalOpen: boolean
  handleChangeOfLocation: Function
  closeModal: Function
  userLocation: string
}

const SelectLocation: React.FC<ISelectLocation> = ({ handleChangeOfLocation, modalOpen, closeModal, userLocation }) => {
  const [userSelectedLocation, setUserSelectedLocation] = useState<string>(userLocation)

  const handleLocationSelection = (value: string) => {
    setUserSelectedLocation(value)
  }

  const cancelLocationSelection = () => {
    setUserSelectedLocation(userLocation)
    closeModal()
  }

  return (
    <StyledModal
      visible={modalOpen}
      animationType={'slide'}
      onRequestClose={() => {
        closeModal()
      }}
    >
      <StyledSafeAreaView>
        <SelectionListView>
          <PickerContainer>
            <Picker selectedValue={userSelectedLocation} onValueChange={(value: string) => handleLocationSelection(value)} mode="dropdown">
              <Picker.Item label="keiner" value="none" />
              <Picker.Item label="Baden-Württemberg" value="badenWurttemberg" />
              <Picker.Item label="Bayern" value="bayern" />
              <Picker.Item label="Berlin" value="berlin" />
              <Picker.Item label="Brandenburg" value="brandenburg" />
              <Picker.Item label="Bremen" value="bremen" />
              <Picker.Item label="Hamburg" value="hamburg" />
              <Picker.Item label="Hessen" value="hessen" />
              <Picker.Item label="Mecklenburg-Vorpommern" value="mecklenburgVorpommern" />
              <Picker.Item label="Niedersachsen" value="niedersachsen" />
              <Picker.Item label="Nordrhein-Westfalen" value="nordrheinWestfalen" />
              <Picker.Item label="Rheinland-Pfalz" value="rheinlandPfalz" />
              <Picker.Item label="Saarland" value="saarland" />
              <Picker.Item label="Sachsen" value="sachsen" />
              <Picker.Item label="Sachsen-Anhalt" value="sachsenAnhalt" />
              <Picker.Item label="Schleswig-Holstein" value="schleswigHolstein" />
              <Picker.Item label="Thüringen" value="thuringen" />
            </Picker>
          </PickerContainer>
          <ConfirmationTextButtonContainer>
            <ConfirmationButtonContainer>
              <ConfirmationButtonOuter underlayColor={theme.colors.primary} onPress={() => handleChangeOfLocation(userSelectedLocation)}>
                <ConfirmationButton>
                  <View>
                    <RenderText style="p2" text={userSelectedLocation !== userLocation ? 'Bestätigen*' : 'Bestätigen'} />
                  </View>
                  <ConfirmationButtonIcon>
                    <MaterialIcons name="done" size={16} color="#fff" />
                  </ConfirmationButtonIcon>
                </ConfirmationButton>
              </ConfirmationButtonOuter>
              <ConfirmationButtonOuter underlayColor="#23212b" onPress={() => cancelLocationSelection()}>
                <ConfirmationButton>
                  <View>
                    <RenderText style="p2" text="Abbrechen" />
                  </View>
                  <ConfirmationButtonIcon>
                    <MaterialIcons name="cancel" size={16} color="#fff" />
                  </ConfirmationButtonIcon>
                </ConfirmationButton>
              </ConfirmationButtonOuter>
            </ConfirmationButtonContainer>
            <ConfirmationText>
              {userSelectedLocation !== userLocation ? <RenderText style="pSmall" text="*Ihr Fortschritt wird zurückgesetzt" /> : null}
            </ConfirmationText>
          </ConfirmationTextButtonContainer>
        </SelectionListView>
      </StyledSafeAreaView>
    </StyledModal>
  )
}

export default SelectLocation
