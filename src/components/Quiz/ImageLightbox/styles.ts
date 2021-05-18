import styled from '@emotion/native'
import { Dimensions, Image, TouchableHighlight } from 'react-native'
import { theme } from '../../../theme'

const deviceWidth = Dimensions.get('window').width

const LightboxContainer = styled(TouchableHighlight)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  z-index: 5;
  align-items: center;
  justify-content: center;
`

const LightboxContainerInner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const LightboxImage = styled(Image)`
  flex: 1;
  width: ${deviceWidth};
`

const DisplayImageButton = styled(TouchableHighlight)`
  margin-top: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightGrey};
`

export { LightboxContainer, LightboxContainerInner, LightboxImage, DisplayImageButton }
