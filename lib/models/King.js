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

  static async insert({ name, country }) {
    const { rows } = await pool.query(`
    INSERT INTO king (name, country)
    VALUES ($1, $2)
    RETURNING *`,
    [name, country]
    );
    return new King(rows[0]);
  }

  static async upDateKing(id, newAtt) {
    const king = await King.getById(id);
    if (!king) return null;
    const updatedKing = { ...king, ...newAtt };
    const { rows } = await pool.query(`
    UPDATE king
    SET name =$2, country = $3
    WHERE id = $1
    RETURNING *;`,
    [id,
      updatedKing.name,
      updatedKing.country,
    ]
    );
    return new King(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(`
    DELETE FROM king
    WHERE id = $1
    RETURNING *`, 
    [id]);
    return new King(rows[0]);
  }


};
