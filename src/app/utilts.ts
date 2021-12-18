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
  } else {
    return text
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


export const setRender = (state:any,action:any) =>{
  let search = new RegExp(action,'gi')
  let buffer = state.articles.reduce((acc: any, item: any) => {
    if (
      item.title.match(search) &&
      action.length > 3
    ) {
      if (!acc.name) {
        acc.name = [
          {
            ...item,
            summary: lenghOfString(item.summary),
            publishedAt: formatDate(item.publishedAt),
          },
        ]
      } else {
        acc.name.push({
          ...item,
          summary: lenghOfString(item.summary),
          publishedAt: formatDate(item.publishedAt),
        })
      }
    } else if (
      item.summary.match(search) &&
      action.length > 3
    ) {
      if (!acc.body) {
        acc.body = [ 
          {
            ...item,
            summary: lenghOfString(item.summary),
            publishedAt: formatDate(item.publishedAt),
          },
        ]
      } else {
        acc.body.push({
          ...item,
          summary: lenghOfString(item.summary),
          publishedAt: formatDate(item.publishedAt),
        })
      }
    } else {
      if (!acc.not) {
        acc.not = [
          {
            ...item,
            summary: lenghOfString(item.summary),
            publishedAt: formatDate(item.publishedAt),
          },
        ]
      } else {
        acc.not.push({
          ...item,
          summary: lenghOfString(item.summary),
          publishedAt: formatDate(item.publishedAt),
        })
      }
    }
    return acc
  }, {})
  if (buffer) {
    if (buffer.name && buffer.body) {
      state.result =(buffer.name.length + buffer.body.length)
      state.render =[...buffer.name, ...buffer.body]
    } else if (buffer.name) {
      state.result =(buffer.name.length)
      state.render =[...buffer.name]
    } else if (buffer.body) {
      state.result =buffer.body.length
      state.render = [...buffer.body]
    } else if (!buffer.name && !buffer.body) {
      state.result = 0
      state.render =[...buffer.not]
    }
  }

}