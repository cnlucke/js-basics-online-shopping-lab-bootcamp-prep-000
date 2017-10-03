function find(array, criteriaFn) {

  let current = array
  let next

  while (current) {
    if (criteriaFn(current)) {
      return current
    }

    // Put child arrays into next
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }

      current = next.shift()

    } else if ((typeof current)) === "object") {
      nextObj = Object.assign(current)
      //make array of
      next = Object.keys(nextObj)

      current = next.shift()
      current = {[next.shift()]: person[keysArray[0]]}
    }


  }

  return null
}
