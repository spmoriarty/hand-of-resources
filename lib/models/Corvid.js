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

};
