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
};
