import React from 'react'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../theme'
import RenderText from '../RenderText'
import { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight, HeaderLeftSpacer } from './styles'

interface IHeader {
  title: string
  withHomeButton?: Boolean
  icons?: Boolean
  viewProgress?: Boolean
  handleViewProgress?: Function
}

const Header: React.FC<IHeader> = ({ title, icons, viewProgress, handleViewProgress, withHomeButton }) => {
  const renderButtonLeft = () => {
    if (icons === true) {
      return (
        <HeaderLeft onPress={() => Actions.pop()}>
          <Icon name="home" size={20} color="#fff" />
        </HeaderLeft>
      )
    }
  }

  const renderSpacerLeft = () => {
    if (icons === true) {
      return <HeaderLeftSpacer />
    }
  }

  const renderButtonRight = () => {
    if (icons === true) {
      const iconName = viewProgress ? 'close' : 'view-list'
      return (
        <HeaderRight
          onPress={() => {
            handleViewProgress ? handleViewProgress() : null
          }}
        >
          <Icon name={iconName} size={20} color="#fff" />
        </HeaderRight>
      )
    }
  }

  return (
    <HeaderContainer>
      {withHomeButton ? renderButtonLeft() : renderSpacerLeft()}
      <HeaderCenter>
        <RenderText style="h1" text={title ? title : 'untitled'} />
      </HeaderCenter>
      {renderButtonRight()}
    </HeaderContainer>
  )
}

export default Header
