import React, { useEffect, useState } from 'react'
import { StatusBar, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SelectLocation from '../../components/SelectLocation'
import Header from '../../components/Header'
import RenderText from '../../components/RenderText'
import { AppContainer, PaddedContentContainer, ButtonContainer, Button, ButtonText, ButtonIcon } from '../../components/Layout/index'
import { theme } from '../../theme'
import Storage from '../../storage'

import quizQuestions from '../../../data/quizQuestions'
import badenWurttembergQuestions from '../../../data/badenWurttembergQuestions'
import bayernQuestions from '../../../data/bayernQuestions'
import berlinQuestions from '../../../data/berlinQuestions'
import brandenburgQuestions from '../../../data/brandenburgQuestions'
import bremenQuestions from '../../../data/bremenQuestions'
import hamburgQuestions from '../../../data/hamburgQuestions'
import hessenQuestions from '../../../data/hessenQuestions'
import mecklenburgVorpommernQuestions from '../../../data/mecklenburgVorpommernQuestions'
import niedersachsenQuestions from '../../../data/niedersachsenQuestions'
import nordrheinWestfalenQuestions from '../../../data/nordrheinWestfalenQuestions'
import rheinlandPfalzQuestions from '../../../data/rheinlandPfalzQuestions'
import saarlandQuestions from '../../../data/saarlandQuestions'
import sachsenQuestions from '../../../data/sachsenQuestions'
import sachsenAnhaltQuestions from '../../../data/sachsenAnhaltQuestions'
import schleswigHolsteinQuestions from '../../../data/schleswigHolsteinQuestions'
import thuringenQuestions from '../../../data/thuringenQuestions'

interface IStartScreen {}

const StartScreen: React.FC<IStartScreen> = () => {
  const storage = new Storage()
  const [userLocation, setUserLocation] = useState<string>('none')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [questions, setQuestions] = useState<any>(quizQuestions)
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(300)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const loadUserLocation = async () => {
    const userLocation = await storage.getLocation()
    if (userLocation) {
      setUserLocation(userLocation)
      setNumberOfQuestions(userLocation === 'none' ? 300 : 310)
    }
  }

  useEffect(() => {
    loadUserLocation()
    loadQuestionOptions()
  }, [])

  useEffect(() => {
    storage.storeLocation(userLocation)
    loadQuestionOptions()
  }, [userLocation])

  const handleChangeOfLocation = (value: string) => {
    if (userLocation !== value) {
      setUserLocation(value)
      storage.deleteProgress()
      storage.deleteIncorrect()
      storage.deleteExamProgress()
    }
    closeModal()
  }

  const loadQuestionOptions = () => {
    let newQuestions = quizQuestions
    let newNumberOfQuestions = 300
    if (userLocation !== 'none') {
      newNumberOfQuestions = 310
      let location = userLocation
      switch (location) {
        case 'badenWurttemberg':
          newQuestions = questions.concat(badenWurttembergQuestions)
          break
        case 'bayern':
          newQuestions = questions.concat(bayernQuestions)
          break
        case 'berlin':
          newQuestions = questions.concat(berlinQuestions)
          break
        case 'brandenburg':
          newQuestions = questions.concat(brandenburgQuestions)
          break
        case 'bremen':
          newQuestions = questions.concat(bremenQuestions)
          break
        case 'hamburg':
          newQuestions = questions.concat(hamburgQuestions)
          break
        case 'hessen':
          newQuestions = questions.concat(hessenQuestions)
          break
        case 'mecklenburgVorpommern':
          newQuestions = questions.concat(mecklenburgVorpommernQuestions)
          break
        case 'niedersachsen':
          newQuestions = questions.concat(niedersachsenQuestions)
          break
        case 'nordrheinWestfalen':
          newQuestions = questions.concat(nordrheinWestfalenQuestions)
          break
        case 'rheinlandPfalz':
          newQuestions = questions.concat(rheinlandPfalzQuestions)
          break
        case 'saarland':
          newQuestions = questions.concat(saarlandQuestions)
          break
        case 'sachsen':
          newQuestions = questions.concat(sachsenQuestions)
          break
        case 'sachsenAnhalt':
          newQuestions = questions.concat(sachsenAnhaltQuestions)
          break
        case 'schleswigHolstein':
          newQuestions = questions.concat(schleswigHolsteinQuestions)
          break
        case 'thuringen':
          newQuestions = questions.concat(thuringenQuestions)
          break
        default:
          newQuestions = questions.concat(sachsenQuestions)
      }
    }

    setQuestions(newQuestions)
    setNumberOfQuestions(newNumberOfQuestions)
  }

  let userLocationOutput = 'Standort wählen'
  if (userLocation === 'badenWurttemberg') {
    userLocationOutput = 'Baden-Württemberg'
  } else if (userLocation === 'bayern') {
    userLocationOutput = 'Bayern'
  } else if (userLocation === 'berlin') {
    userLocationOutput = 'Berlin'
  } else if (userLocation === 'brandenburg') {
    userLocationOutput = 'Brandenburg'
  } else if (userLocation === 'bremen') {
    userLocationOutput = 'Bremen'
  } else if (userLocation === 'hamburg') {
    userLocationOutput = 'Hamburg'
  } else if (userLocation === 'hessen') {
    userLocationOutput = 'Hessen'
  } else if (userLocation === 'mecklenburgVorpommern') {
    userLocationOutput = 'Mecklenburg-Vorpommern'
  } else if (userLocation === 'niedersachsen') {
    userLocationOutput = 'Niedersachsen'
  } else if (userLocation === 'nordrheinWestfalen') {
    userLocationOutput = 'Nordrhein-Westfalen'
  } else if (userLocation === 'rheinlandPfalz') {
    userLocationOutput = 'Rheinland-Pfalz'
  } else if (userLocation === 'saarland') {
    userLocationOutput = 'Saarland'
  } else if (userLocation === 'sachsen') {
    userLocationOutput = 'Sachsen'
  } else if (userLocation === 'sachsenAnhalt') {
    userLocationOutput = 'Sachsen-Anhalt'
  } else if (userLocation === 'schleswigHolstein') {
    userLocationOutput = 'Schleswig-Holstein'
  } else if (userLocation === 'thuringen') {
    userLocationOutput = 'Thüringen'
  }

  return (
    <AppContainer>
      <StatusBar hidden />
      <Header title="Leben In Deutschland Test" icons={false} />
      <PaddedContentContainer>
        <TouchableHighlight
          underlayColor="#23212b"
          onPress={() => {
            openModal()
          }}
        >
          <Button style={{ backgroundColor: theme.colors.secondary, marginTop: 25 }}>
            <ButtonText>
              <RenderText style="p2" text={userLocationOutput} />
            </ButtonText>
            <ButtonIcon>
              <Icon name="expand-more" size={16} color="#fff" />
            </ButtonIcon>
          </Button>
        </TouchableHighlight>
        <SelectLocation
          modalOpen={modalOpen}
          handleChangeOfLocation={handleChangeOfLocation}
          closeModal={closeModal}
          userLocation={userLocation}
        />
        <ButtonContainer>
          <TouchableHighlight
            underlayColor={theme.colors.primary}
            onPress={() =>
              Actions.practiceMode({
                questions: questions,
                numberOfQuestions: numberOfQuestions,
              })
            }
          >
            <Button style={{ backgroundColor: theme.colors.blue, marginTop: 25 }}>
              <ButtonText>
                <RenderText style="p2" text="Trainieren" />
              </ButtonText>
              <ButtonIcon>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </ButtonIcon>
            </Button>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#23212b"
            onPress={() =>
              Actions.mockExam({
                questions: questions,
                numberOfQuestions: numberOfQuestions === 300 ? 30 : 33,
              })
            }
          >
            <Button style={{ backgroundColor: theme.colors.red, marginTop: 25 }}>
              <ButtonText>
                <RenderText style="p2" text="Probeprüfung" />
              </ButtonText>
              <ButtonIcon>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </ButtonIcon>
            </Button>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={theme.colors.primary}
            onPress={() =>
              Actions.questionCatalogue({
                questions: questions,
                numberOfQuestions: numberOfQuestions,
              })
            }
          >
            <Button style={{ backgroundColor: theme.colors.green, marginTop: 25 }}>
              <ButtonText>
                <RenderText style="p2" text="Fragenkatalog" />
              </ButtonText>
              <ButtonIcon>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </ButtonIcon>
            </Button>
          </TouchableHighlight>
        </ButtonContainer>
      </PaddedContentContainer>
    </AppContainer>
  )
}

export default StartScreen
