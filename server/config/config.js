// ========================
// Puerto
// ========================

process.env.PORT = process.env.PORT || 3000;


// ========================
// Entorno
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev')
    urlDB = 'mongodb://localhost:27017/cafe';
else
    urlDB = 'mongodb://cafe-user:123456abc@ds255258.mlab.com:55258/cafe';

process.env.URLDB = urlDB;