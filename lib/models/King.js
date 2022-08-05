const pool = require('../utils/pool');

module.exports = class King {

  id;
  name;
  country;

  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM king;'
    );
    return rows.map((row) => new King(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM king
    WHERE id = $1`, [id]);
    if (rows.length === 0) {
      return null; 
    }
    return new King(rows[0]);
  }
};
