const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { get } = require('../lib/app');
const { dogs } = require('../data/dogs');

describe('dogs-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    expect(res.body).toEqual(dogs);
  });

  afterAll(() => {
    pool.end();
  });
});
