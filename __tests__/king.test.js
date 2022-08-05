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
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'Richard VIII',
      country: 'England'
    });
  });
  
  it('get a king from #get/1', async () => {
    const resp = await request(app).get('/kings/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: expect.any(String),
      country: expect.any(String),
    });
  });

  it('#Push a king into the table', async () => {
    const newKing = {
      name: 'Charlamange',
      country: 'Holy Roman Empire'
    };
    const res = await request(app).post('/kings').send(newKing);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newKing,
    });
  });
  it('#Update should update a entry based on id', async () => {
    const res = await request(app).put('/kings/1').send({
      country: 'United Kingdom',
    });
    expect(res.status).toBe(200);
    expect(res.body.country).toBe('United Kingdom');
  });

  afterAll(() => {
    pool.end();
  });
});
