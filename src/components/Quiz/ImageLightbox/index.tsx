import React, { useState } from 'react'
import { View, Modal } from 'react-native'
import { LightboxContainer, LightboxContainerInner, LightboxImage, DisplayImageButton } from './styles'

import RenderText from '../../RenderText'
import { theme } from '../../../theme'

interface IImageLightBox {
  question: any
  images: any
}

const ImageLightBox: React.FC<IImageLightBox> = ({ question, images }) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false)
  const imageKey = 'image_' + question.image

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <View>
      <Modal
        visible={lightboxOpen}
        animationType={'slide'}
        onRequestClose={() => {
          closeLightbox()
        }}
      >
        <LightboxContainer
          underlayColor={theme.colors.primary}
          onPress={() => {
            closeLightbox()
          }}
        >
          <LightboxContainerInner>
            <LightboxImage source={images[imageKey]} resizeMode={'contain'} />
          </LightboxContainerInner>
        </LightboxContainer>
      </Modal>
      <DisplayImageButton
        underlayColor={theme.colors.lightGrey}
        onPress={() => {
          openLightbox()
        }}
      >
        <RenderText style="p" text="Bild Ansehen" />
      </DisplayImageButton>
    </View>
  )
}

export default ImageLightBox
