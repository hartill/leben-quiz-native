export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export const generateThreeQuestionsFromState = () => {
  let stateQuestions = []
  let maxNumber = 10
  let minNumber = 1
  let randNumber1 = Math.floor(Math.random() * maxNumber + minNumber)
  let randomNumbersIndex1 = 300 + (randNumber1 - 1)
  stateQuestions.push(randomNumbersIndex1)

  let randNumber2 = Math.floor(Math.random() * maxNumber + minNumber)
  while (randNumber2 === randNumber1) {
    randNumber2 = Math.floor(Math.random() * maxNumber + minNumber)
  }
  let randomNumbersIndex2 = 300 + (randNumber2 - 1)
  stateQuestions.push(randomNumbersIndex2)

  let randNumber3 = Math.floor(Math.random() * maxNumber + minNumber)
  while (randNumber3 === randNumber2 || randNumber3 === randNumber1) {
    randNumber3 = Math.floor(Math.random() * maxNumber + minNumber)
  }
  let randomNumbersIndex3 = 300 + (randNumber3 - 1)
  stateQuestions.push(randomNumbersIndex3)
  return stateQuestions
}

export const generateQuestionArray = (numberOfQuestions: number) => {
  let output = []
  for (let n = 0; n < 300; n++) {
    output.push(n)
  }
  shuffleArray(output)
  let QuestionArray = output.slice(0, 30)
  if (numberOfQuestions === 33) {
    let stateQuestions = generateThreeQuestionsFromState()
    QuestionArray.push.apply(QuestionArray, stateQuestions)
    shuffleArray(QuestionArray)
  }
  return QuestionArray
}

export function generateNextRandomQuestion(questions: any[], progress: any[], numberOfQuestions: number) {
  let correctAnswers = progress
  let maxNumber = numberOfQuestions - correctAnswers.length
  let minNumber = 1
  let randNumber = Math.floor(Math.random() * maxNumber + minNumber)
  for (let i = 0; i < correctAnswers.length; i++) {
    if (randNumber >= correctAnswers[i]) {
      randNumber += 1
    }
  }
  let randomNumbersIndex = randNumber - 1
  return questions[randomNumbersIndex]
}
