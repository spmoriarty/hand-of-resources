const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('Kings Suite', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get all kings from table', async () => {
    const res = await request(app).get('/kings');
    // eslint-disable-next-line
    const expected = [{
      id: '1',
      name: 'Richard VIII',
      country: 'England'
    },
    {
      id: '2',
      name: 'Louis XIV',
      country: 'France'
    },
    {
      id: '3',
      name: 'Peter I',
      country: 'Russia'
    }];
    // expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'Richard VIII',
      country: 'England'
    });

    //INSERT NEW TEST HERE


  });
  afterAll(() => {
    pool.end();
  });
});
