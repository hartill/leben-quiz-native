import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
  // Location
  async storeLocation(location: string) {
    try {
      await AsyncStorage.setItem('@LID:location', location)
    } catch (e) {
      console.error('Error saving data')
      console.error(e)
    }
  }

  async getLocation() {
    try {
      const value = await AsyncStorage.getItem('@LID:location')
      if (value !== null) {
        return value
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteLocation() {
    try {
      await AsyncStorage.removeItem('@LID:location')
    } catch (e) {
      console.error(e)
    }
  }

  // Progress
  async storeProgress(progress: string[]) {
    try {
      const jsonValue = JSON.stringify(progress)
      await AsyncStorage.setItem('@LID:progress', jsonValue)
    } catch (e) {
      console.error('Error saving data')
      console.error(e)
    }
  }

  async getProgress() {
    try {
      const value = await AsyncStorage.getItem('@LID:progress')
      if (value !== null) {
        return JSON.parse(value)
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteProgress() {
    try {
      await AsyncStorage.removeItem('@LID:progress')
    } catch (e) {
      console.error(e)
    }
  }

  // Incorrect
  async storeIncorrect(incorrect: string[]) {
    try {
      const jsonValue = JSON.stringify(incorrect)
      await AsyncStorage.setItem('@LID:incorrect', jsonValue)
    } catch (e) {
      console.error('Error saving data')
      console.error(e)
    }
  }

  async getIncorrect() {
    try {
      const value = await AsyncStorage.getItem('@LID:incorrect')
      if (value !== null) {
        return JSON.parse(value)
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteIncorrect() {
    try {
      await AsyncStorage.removeItem('@LID:incorrect')
    } catch (e) {
      console.error(e)
    }
  }

  // Exam Progress
  async storeExamProgress(examProgress: string[]) {
    try {
      const jsonValue = JSON.stringify(examProgress)
      await AsyncStorage.setItem('@LID:examProgress', jsonValue)
    } catch (e) {
      console.error('Error saving data')
      console.error(e)
    }
  }

  async getExamProgress() {
    try {
      const value = await AsyncStorage.getItem('@LID:examProgress')
      if (value !== null) {
        return JSON.parse(value)
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteExamProgress() {
    try {
      await AsyncStorage.removeItem('@LID:examProgress')
    } catch (e) {
      console.error(e)
    }
  }

  // Exam Questions
  async storeExamQuestions(examQuestions: string[]) {
    try {
      const jsonValue = JSON.stringify(examQuestions)
      await AsyncStorage.setItem('@LID:examQuestions', jsonValue)
    } catch (e) {
      console.error('Error saving data')
      console.error(e)
    }
  }

  async getExamQuestions() {
    try {
      const value = await AsyncStorage.getItem('@LID:examQuestions')
      if (value !== null) {
        return JSON.parse(value)
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteExamQuestions() {
    try {
      await AsyncStorage.removeItem('@LID:examQuestions')
    } catch (e) {
      console.error(e)
    }
  }
}

export default Storage
