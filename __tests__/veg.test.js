const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Bands Suite', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get all vegetables from table', async () => {
    const res = await request(app).get('/veggies');
    const expected = [{
      id: '1',
      name: 'Potato',
      type: 'Starch',
    },
    {
      id: '2',
      name: 'Lettuce',
      type: 'Leafy',
    }];

    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: 'Potato',
      type: 'Starch',
    });

  });



  //TEST GO HERE

  afterAll(() => {
    pool.end();
  });
});
