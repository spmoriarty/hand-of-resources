const pool = require('../utils/pool');

module.exports = class Corvid {

  id;
  name;
  color;

  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.color = row.color;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM corvid;'
    );
    return rows.map((row) => new Corvid(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM corvid
        WHERE id = $1`, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Corvid(rows[0]);
  }

};
