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

  static async insert({ name, color }) {
    const { rows } = await pool.query(
      `INSERT INTO corvid (name, color)
          VALUES ($1, $2)
          RETURNING *`,
      [name, color]
    );
    return new Corvid(rows[0]);
  }

  static async updateBirdId(id, newAtt) {
    const corvid = await Corvid.getById(id);
    if (!corvid) return null;
    const upDatedBird = { ...corvid, ...newAtt };
    const { rows } = await pool.query(
      `UPDATE corvid
        SET name = $2, color = $3
        WHERE id = $1
        RETURNING *;`,
      [
        id,
        upDatedBird.name,
        upDatedBird.color,
      ]
    );
    return new Corvid(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(`
      DELETE FROM corvid
      WHERE id = $1
      RETURNING *`,
    [id]
    );
    return new Corvid(rows[0]);
  }


  
};
