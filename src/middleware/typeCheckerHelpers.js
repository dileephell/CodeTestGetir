// Make sure all fields are entered
exports.checkNotNull = (object) => {
  if (
    !object.startDate ||
    !object.endDate ||
    !object.minCount ||
    !object.maxCount
  ) {
    throw new Error(
      'Make sure you entered all filter options.'
    )
  }
}

// Verify count filters are in right format
exports.checkDateFromString = (date) => {
  const dateFormatted = new Date(date)
  if (!dateFormatted instanceof Date || isNaN(dateFormatted)) {
    throw new Error('Make sure your dates are in correct type YYYY-MM-DD.')
  }
  return dateFormatted
}

// Verify date filters are in right format
exports.checkType = (minCount, maxCount) => {
  if (typeof minCount != 'number' || typeof maxCount != 'number') {
    throw new Error('Make sure your count limit options are in correct number format.')
  }
}

// Validate that filter min and max values are in order
exports.checkNumberOrder = (minCount, maxCount) => {
  if (minCount < 0 || maxCount < 0) {
    throw new Error('Please enter positive numbers for count limits.')
  }
  if (minCount > maxCount) {
    throw new Error(
      'Please make sure the min count is smaller than or equal to your max count.'
    )
  }
}
exports.checkDateOrder = (start, end) => {
  if (start > end) {
    throw new Error(
      'Please make sure your start date is not pointing a time after your end date.'
    )
  }
}
