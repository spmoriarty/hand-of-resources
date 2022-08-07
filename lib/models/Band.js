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

  
};
