const pool = require('../lib/utils/pool');
const setup = require('../data/setup');

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

  it('#Push a corvid into table', async () => {
    const newCorvid = {
      name: 'Scrub Jay',
      color: 'Blue',
    };
    const res = await request(app).post('/corvids').send(newCorvid);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newCorvid,
    });  
  });

  it('#Update should update a entry based on id', async () => {
    const res = await request(app).put('/corvids/1').send({
      color: 'Blue and White',
    });
    // expect(res.status).toBe(200);
    expect(res.body.color).toBe('Blue and White');
  });
  
  it('#DELETE should remove a corvid by id', async () => {
    const resp = await request(app).delete('/corvids/1');
    expect(resp.status).toBe(200);
    const corvidResp = await request(app).get('/corvids/1');
    expect(corvidResp.status).toBe(404);
  });
  
  //NEW TEST HERE

  afterAll(() => {
    pool.end();
  });
});
