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

  it('get a single veggie from the table', async () => {
    const resp = await request(app).get('/veggies/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: expect.any(String),
      type: expect.any(String),
    });
  });
 
  it('#Push a veggie into the table', async () => {
    const newVeg = {
      name: 'Acorn Squash',
      type: 'Starch',
    };
    const res = await request(app).post('/veggies').send(newVeg);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newVeg,
    });
  });

  it('#Update should update a current veggie', async () => {
    const res = await request(app).put('/veggies/1').send({
      name: 'Sweet Potato',
    });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Sweet Potato');
  });
  //TEST GO HERE

  afterAll(() => {
    pool.end();
  });
});
