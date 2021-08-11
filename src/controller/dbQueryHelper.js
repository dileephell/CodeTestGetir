const Record = require('../model/Record')

// Extract documents from database with date filters
exports.filterFromDate = async (startDate, endDate) => {
  let documents = await Record.find({
    createdAt: {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  })
  if (documents.length === 0) {
    throw new Error('No document found within given date boundary.')
  }
  return documents
}

// Filter extracted documents with count filters
exports.filterDocsCount = (documents, minCount, maxCount) => {
  let filteredRecords = []
  documents.forEach((document) => {
    let totalCount = 0
    document._doc.counts.forEach((value) => {
      totalCount += value
    })
    if (totalCount >= minCount && totalCount <= maxCount) {
      filteredRecords.push({
        key: document._doc.key,
        createdAt: document._doc.createdAt,
        totalCount: totalCount,
      })
    }
  })
  if (filteredRecords.length === 0) {
    throw new Error('No document found within given count boundary.')
  }
  return filteredRecords
}
