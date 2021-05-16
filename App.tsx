import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { useFonts } from 'expo-font'
import StartScreen from './src/views/StartScreen'
import PracticeMode from './src/views/PracticeMode'
import MockExam from './src/views/MockExam'
import QuestionCatalogue from './src/views/QuestionCatalogue'
import { StyledSafeAreaView } from './styles'

const App = () => {
  const [loaded] = useFonts({
    montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  const images = {
    image21: require('./assets/images/021.png'),
    image55: require('./assets/images/055.png'),
    image70: require('./assets/images/070.png'),
    image130: require('./assets/images/130.png'),
    image176: require('./assets/images/176.png'),
    image181: require('./assets/images/181.png'),
    image187: require('./assets/images/187.png'),
    image209: require('./assets/images/209.png'),
    image216: require('./assets/images/216.png'),
    image226: require('./assets/images/226.png'),
    image235: require('./assets/images/235.png'),
    image301: require('./assets/images/badenWurttemberg/301.png'),
    image308: require('./assets/images/badenWurttemberg/308.png'),
    image311: require('./assets/images/bayern/311.png'),
    image318: require('./assets/images/bayern/318.png'),
    image321: require('./assets/images/berlin/321.png'),
    image328: require('./assets/images/berlin/328.png'),
    image331: require('./assets/images/brandenburg/331.png'),
    image338: require('./assets/images/brandenburg/338.png'),
    image341: require('./assets/images/bremen/341.png'),
    image348: require('./assets/images/bremen/348.png'),
    image351: require('./assets/images/hamburg/351.png'),
    image358: require('./assets/images/hamburg/358.png'),
    image361: require('./assets/images/hessen/361.png'),
    image368: require('./assets/images/hessen/368.png'),
    image371: require('./assets/images/mecklenburgVorpommern/371.png'),
    image378: require('./assets/images/mecklenburgVorpommern/378.png'),
    image381: require('./assets/images/niedersachsen/381.png'),
    image388: require('./assets/images/niedersachsen/388.png'),
    image391: require('./assets/images/nordrheinWestfalen/391.png'),
    image398: require('./assets/images/nordrheinWestfalen/398.png'),
    image401: require('./assets/images/rheinlandPfalz/401.png'),
    image408: require('./assets/images/rheinlandPfalz/408.png'),
    image411: require('./assets/images/saarland/411.png'),
    image418: require('./assets/images/saarland/418.png'),
    image421: require('./assets/images/sachsen/421.png'),
    image428: require('./assets/images/sachsen/428.png'),
    image431: require('./assets/images/sachsenAnhalt/431.png'),
    image438: require('./assets/images/sachsenAnhalt/438.png'),
    image441: require('./assets/images/schleswigHolstein/441.png'),
    image448: require('./assets/images/schleswigHolstein/448.png'),
    image451: require('./assets/images/thuringen/451.png'),
    image458: require('./assets/images/thuringen/458.png'),
  }

  return (
    <StyledSafeAreaView>
      <Router
        getSceneStyle={() => ({
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        })}
      >
        <Stack key="root" hideNavBar={true}>
          <Scene key="startScreen" component={StartScreen} direction="RightToleft" initial />
          <Scene key="practiceMode" component={PracticeMode} images={images} />
          <Scene key="mockExam" component={MockExam} images={images} />
          <Scene key="questionCatalogue" component={QuestionCatalogue} images={images} />
        </Stack>
      </Router>
    </StyledSafeAreaView>
  )
}

export default App
