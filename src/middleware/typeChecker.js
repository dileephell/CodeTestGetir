const {
  checkNotNull,
  checkType,
  checkDateFromString,
  checkNumberOrder,
  checkDateOrder,
} = require('./typeCheckerHelpers');

const checkDataFormat = (req, res, next) => {
  try {
    // Make sure all fields are entered
    checkNotNull(req.body);

    const { startDate, endDate, minCount, maxCount } = req.body;

    // Verify date filters are in right format
    const startDateFormatted = checkDateFromString(startDate);
    const endDateFormatted = checkDateFromString(endDate);

    // Verify count filters are in right format
    checkType(minCount, maxCount);

    // Validate that filder min and max values are in order
    checkNumberOrder(minCount, maxCount);

    checkDateOrder(startDateFormatted, endDateFormatted);

    req.startDate = startDateFormatted;
    req.endDate = endDateFormatted;
    req.minCount = minCount;
    req.maxCount = maxCount;
  } catch (error) {
    return res.status(400).json({
      code: 400,
      msg: error.message,
    });
  }
  next();
};

module.exports = checkDataFormat;
