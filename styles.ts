import styled from '@emotion/native'
import { SafeAreaView } from 'react-native'
import { theme } from './src/theme'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.primary};
  font-family: montserrat-regular;
`

export { StyledSafeAreaView }
