const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Record = require('../src/model/Record');

describe('configuring test environment', () => {
  it('return true', () => {
    expect(true).toBe(true)
  });
});

beforeAll(async () => {
  await mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

describe('Fetch the count', () => {
  test('test to check the req payload', async () => {
    const response = await request(app).post('/api').send({
      minCount: 2700,
      maxCount: 3000,
      startDate: '2016-01-26',
      endDate: '2018-02-02',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe('Success');
    expect(response.body.code).toBe(0);
  })

});

