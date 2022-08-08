const pool = require('../utils/pool');

module.exports = class Veggie {

  id;
  name;
  type;

  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM vegetables;`
    );
    return rows.map((row) => new Veggie(row));
  }
};
