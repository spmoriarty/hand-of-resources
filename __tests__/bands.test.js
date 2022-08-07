const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Bands Suite', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get all bands from table', async () => {
    const res = await request(app).get('/bands');
    // eslint-disable-next-line
        const expected = [{
      id: '1',
      name: 'Tool',
      founded: 1990,
    },
    {
      id: '2',
      name: 'Linkin Park',
      founded: 1996
    }];

    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'Tool',
      founded: 1990,
    });
  });

   


  
  //NEW TEST HERE

  afterAll(() => {
    pool.end();
  });
});
