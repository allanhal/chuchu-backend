const { Sequelize } = require('sequelize');

require('dotenv').config();

// URI
// DATABASE STRING
const connection = new Sequelize('postgresql://postgres.nqkovlfofgdgfgubydmw:banco-maravilha@aws-0-sa-east-1.pooler.supabase.com:6543/postgres');

module.exports = connection;
