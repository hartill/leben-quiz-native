import styled from '@emotion/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../theme'

const HeaderContainer = styled.View`
  flex-basis: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
`

const HeaderCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const HeaderLeft = styled(TouchableOpacity)`
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderLeftSpacer = styled.View`
  width: 64px;
`

const HeaderRight = styled(TouchableOpacity)`
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight, HeaderLeftSpacer }
