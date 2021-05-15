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
