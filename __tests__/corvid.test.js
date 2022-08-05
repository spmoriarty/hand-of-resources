const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('Corvids Suite', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get all corvid birds from #get', async () => {
    const res = await request(app).get('/corvids');
    // eslint-disable-next-line
    const expected = [{
      id: '1',
      name: 'Raven',
      color: 'Black'
    },
    {
      id: '2',
      name: 'Crow',
      color: 'Black'
    },
    {
      id: '3',
      name: 'Jay',
      color: 'Blue'
    },
    {
      id: '4',
      name: 'Cardinal',
      color: 'Red'
    },
    {
      id: '5',
      name: 'Magpie',
      color: 'Black and White'
    }];
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'Raven',
      color: 'Black'
    },
    );
  
  });
  it('get a corvid from #get/1', async () => {
    const resp = await request(app).get('/corvids/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: expect.any(String),
      color: expect.any(String),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
