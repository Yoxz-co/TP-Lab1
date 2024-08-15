const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración del middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Añade tu contraseña de MySQL aquí
    database: 'olympic_medals'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Crear base de datos y tabla si no existen
db.query(`
    CREATE DATABASE IF NOT EXISTS olympic_medals;
    USE olympic_medals;
    CREATE TABLE IF NOT EXISTS medals (
        id INT AUTO_INCREMENT PRIMARY KEY,
        country VARCHAR(255) NOT NULL,
        gold INT NOT NULL,
        silver INT NOT NULL,
        bronze INT NOT NULL
    );
`, (err) => {
    if (err) throw err;
});

// Ruta para registrar medallas
app.post('/api/medals', (req, res) => {
    const { country, gold, silver, bronze } = req.body;
    
    const sql = 'INSERT INTO medals (country, gold, silver, bronze) VALUES (?, ?, ?, ?)';
    db.query(sql, [country, gold, silver, bronze], (err, result) => {
        if (err) throw err;
        res.json({ success: true, medal: { country, gold, silver, bronze } });
    });
});

// Ruta para obtener medallas
app.get('/api/medals', (req, res) => {
    const sql = 'SELECT * FROM medals';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ medals: results });
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
