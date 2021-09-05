//=============================================
// Application settings
//=============================================
process.env.PORT = process.env.PORT || 3001;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';  // Enviroment


//=============================================
// Token settings
//=============================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.TOKEN_EXPIRATION = '1d';
process.env.SEED = process.env.SEED || 'CodeMono-Environment-Seed';  // Environment Seed


//=============================================
// Database server settings MySQL
//=============================================
process.env.MYSQL_HOST = 'localhost';
process.env.MYSQL_PORT = '3306';
process.env.MYSQL_DATABASE = 'dev_Jkas';
process.env.MYSQL_USER = 'tempuser';
process.env.MYSQL_PASSWORD = '12344';

