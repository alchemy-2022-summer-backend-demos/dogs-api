const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { dogs } = require('../data/dogs');

describe('dogs-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    expect(res.body).toEqual(dogs);
  });

  it('/dogs/:id should return dog details', async () => {
    const res = await request(app).get('/dogs/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Benny',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
