const pool = require('../utils/pool');


module.exports = class Band {

  id;
  name;
  founded;
    
  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.founded = row.founded;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM bands`);
    return rows.map((row) => new Band(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM bands
      WHERE id = $1`, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Band(rows[0]);
  }

  static async insert({ name, founded }) {
    const { rows } = await pool.query(`
      INSERT INTO bands (name, founded)
      VALUES ($1, $2) 
      RETURNING *`,
    [name, founded]
    );
    return new Band(rows[0]);
  }
};
