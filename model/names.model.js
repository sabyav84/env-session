const bootDb = require('.');

exports.addName = async (name) => {
  const pool = await bootDb();
  await pool.query('INSERT INTO names ("id", "name") VALUES (default, $1)', [name]);
  return 'OK';
};
