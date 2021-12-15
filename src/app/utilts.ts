export const lenghOfString = (text: string, symbols: number = 100) => {
  if (text.length > symbols) {
    let counter = 0
    let oldString = text.split(" ")
    let last = "..."
    let newString = []
    let lastWord
    for (let i = 0; i < oldString.length; i++) {
      counter += oldString[i].length
      if (counter > symbols) {
        let buffer: string[] = []
        counter -= oldString[i].length
        let word = oldString[i].split("")
        for (let j = 0; j < word.length; j++) {
          counter += 1
          if (counter === symbols) {
            newString.push(buffer.join(""))
          } else {
            buffer.push(word[j])
          }
        }
      } else {
        newString.push(oldString[i])
      }
    }
    lastWord = newString.length - 1
    newString[lastWord] = newString[lastWord] + last
    return newString.join(" ")
  }
}

export const formatDate = (date: string): string => {
  let formDate = new Date(date)
  let monthDate: number = formDate.getDate()
  let monthNumber: number = formDate.getMonth()
  let day
  let month
  switch (monthDate) {
    case 1:
      day = monthDate + "st"
      break
    case 2:
      day = monthDate + "nd"
      break
    case 3:
      day = monthDate + "rd"
      break
    default:
      day = monthDate + "th"
  }
  switch (monthNumber) {
    case 0:
      month = "Jan"
      break
    case 1:
      month = "Feb"
      break
    case 2:
      month = "Mar"
      break
    case 3:
      month = "Apr"
      break
    case 4:
      month = "May"
      break
    case 5:
      month = "Jun"
      break
    case 6:
      month = "Jul"
      break
    case 7:
      month = "Aug"
      break
    case 8:
      month = "Sep"
      break
    case 9:
      month = "Oct"
      break
    case 10:
      month = "Nov"
      break
    case 11:
      month = "Dec"
      break
  }

  return `${month} ${day}, ${formDate.getFullYear()}`
}
