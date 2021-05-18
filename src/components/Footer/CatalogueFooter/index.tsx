import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FooterContainer, FullWidthNextButton } from '../styles'

interface IFooterCatalogue {
  nextQuestion: Function
}

const CatalogueFooter: React.FC<IFooterCatalogue> = ({ nextQuestion }) => {
  return (
    <FooterContainer>
      <FullWidthNextButton
        onPress={() => {
          nextQuestion()
        }}
        key="qf2"
      >
        <Icon name="arrow-forward" size={16} color="#fff" />
      </FullWidthNextButton>
    </FooterContainer>
  )
}

export default CatalogueFooter
