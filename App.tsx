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
    return null
  }

  const images = {
    image_021: require('./assets/images/021.png'),
    image_055: require('./assets/images/055.png'),
    image_070: require('./assets/images/070.png'),
    image_130: require('./assets/images/130.png'),
    image_176: require('./assets/images/176.png'),
    image_181: require('./assets/images/181.png'),
    image_187: require('./assets/images/187.png'),
    image_209: require('./assets/images/209.png'),
    image_216: require('./assets/images/216.png'),
    image_226: require('./assets/images/226.png'),
    image_235: require('./assets/images/235.png'),
    image_301: require('./assets/images/badenWurttemberg/301.png'),
    image_308: require('./assets/images/badenWurttemberg/308.png'),
    image_311: require('./assets/images/bayern/311.png'),
    image_318: require('./assets/images/bayern/318.png'),
    image_321: require('./assets/images/berlin/321.png'),
    image_328: require('./assets/images/berlin/328.png'),
    image_331: require('./assets/images/brandenburg/331.png'),
    image_338: require('./assets/images/brandenburg/338.png'),
    image_341: require('./assets/images/bremen/341.png'),
    image_348: require('./assets/images/bremen/348.png'),
    image_351: require('./assets/images/hamburg/351.png'),
    image_358: require('./assets/images/hamburg/358.png'),
    image_361: require('./assets/images/hessen/361.png'),
    image_368: require('./assets/images/hessen/368.png'),
    image_371: require('./assets/images/mecklenburgVorpommern/371.png'),
    image_378: require('./assets/images/mecklenburgVorpommern/378.png'),
    image_381: require('./assets/images/niedersachsen/381.png'),
    image_388: require('./assets/images/niedersachsen/388.png'),
    image_391: require('./assets/images/nordrheinWestfalen/391.png'),
    image_398: require('./assets/images/nordrheinWestfalen/398.png'),
    image_401: require('./assets/images/rheinlandPfalz/401.png'),
    image_408: require('./assets/images/rheinlandPfalz/408.png'),
    image_411: require('./assets/images/saarland/411.png'),
    image_418: require('./assets/images/saarland/418.png'),
    image_421: require('./assets/images/sachsen/421.png'),
    image_428: require('./assets/images/sachsen/428.png'),
    image_431: require('./assets/images/sachsenAnhalt/431.png'),
    image_438: require('./assets/images/sachsenAnhalt/438.png'),
    image_441: require('./assets/images/schleswigHolstein/441.png'),
    image_448: require('./assets/images/schleswigHolstein/448.png'),
    image_451: require('./assets/images/thuringen/451.png'),
    image_458: require('./assets/images/thuringen/458.png'),
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
