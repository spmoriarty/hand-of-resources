const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Bands Suite', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get all trees from table', async () => {
    const res = await request(app).get('/trees');
    // eslint-disable-next-line
     const expected = [{
      id: '1',
      name: 'Oak',
      type: 'Deciduous',
    },
    {
      id: '2',
      name: 'Maple',
      type: 'Deciduous',
    }];

    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: 'Oak',
      type: 'Deciduous',
    });
  });


  //Test goes here



  afterAll(() => {
    pool.end();
  });
});
