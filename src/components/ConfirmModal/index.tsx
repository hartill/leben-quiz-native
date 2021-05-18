import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableHighlight, Modal } from 'react-native'
import RenderText from '../RenderText'
import { ModalContainer, ModalContainerInner, ModalContainerTitle, ModalButtons } from './styles'

interface IConfirmModal {
  isOpen: boolean
  onClose: Function
  title: string
  onConfirm: Function
}

const ConfirmModal: React.FC<IConfirmModal> = ({ isOpen, onClose, title, onConfirm }) => {
  return (
    <Modal
      visible={isOpen}
      animationType={'slide'}
      onRequestClose={() => {
        onClose()
      }}
    >
      <ModalContainer>
        <ModalContainerInner>
          <ModalContainerTitle>
            <RenderText style="h2" text={title} />
          </ModalContainerTitle>
          <ModalButtons>
            <TouchableHighlight
              onPress={() => {
                onConfirm()
              }}
            >
              <Icon name="check" size={32} color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                onClose()
              }}
            >
              <Icon name="cancel" size={32} color="#fff" />
            </TouchableHighlight>
          </ModalButtons>
        </ModalContainerInner>
      </ModalContainer>
    </Modal>
  )
}

export default ConfirmModal
