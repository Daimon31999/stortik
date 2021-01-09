const fs = require('fs')

const getUniqueNames = (arr) => {
  let uniqueArr = []
  arr.forEach((el) => {
    let index = el.indexOf('_slide')
    let fileName = el.substring(0, index)
    // if unique
    if (uniqueArr.indexOf(fileName) === -1) {
      uniqueArr.push(fileName)
    }
  })
  return uniqueArr
}

const getSlidesByUniqueName = (arr, name) => {
  let tmp_arr = []
  arr.forEach((el) => {
    if (el.includes(name + '_slide')) {
      tmp_arr.push(el)
    }
  })
  return tmp_arr
}

const getSlides = (arr) => {
  var matches = arr.filter(function(s) {
    return s.indexOf('slide') !== -1
  })
  return matches
}

const arrayWithSlides = (type) => {
  let result_arr = []

  switch (type) {
    case 'best':
      fs.readdirSync('./src/assets/img/best_cakes').forEach((file) => {
        result_arr.push(file)
      })

      break
    case 'all':
      fs.readdirSync('./src/assets/img/cakes').forEach((file) => {
        result_arr.push(file)
      })
      break
  }

  const matches = getSlides(result_arr)
  const uniqueArr = getUniqueNames(matches)
  let result = []
  uniqueArr.forEach((el) => {
    result.push(getSlidesByUniqueName(result_arr, el))
  })

  // remove *_slides files
  result_arr = result_arr.filter((el) => {
    if (el.indexOf('slide') > -1) {
      return null
    } else return el
  })

  // add arrays with slides in result arr
  result.forEach((arr) => {
    result_arr.push(arr)
  })
  return result_arr
}

// console.log(arrayWithSlides('best'))
console.log(arrayWithSlides('all'))
