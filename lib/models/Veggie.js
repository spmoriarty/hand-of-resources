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



  static async getById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM vegetables
      WHERE id = $1;`, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Veggie(rows[0]);
  }
};
