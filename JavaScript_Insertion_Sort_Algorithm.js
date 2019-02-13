//5, 9, 13, 4, 1, 6 // the only sorted part is the first item
//5, 9, 13, 4, 1, 6 // 9 > 5 so we don't move it
//5, 9, 13, 4, 1, 6 // 13 > 9 we don't move it
//4, 5, 9, 13, 1, 6 // compare all to 4, until we reach the head 
//1, 4, 5, 9, 13, 6 // compare all to 1, until we reach the head
//1, 4, 5, 6, 9, 13 // first smaller item is 5, place 6 before it


function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return list
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]