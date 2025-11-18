// C:\Users\luisg\OneDrive\Escritorio\Desplieguea\api-res-7a-full\index.js

const { conexion } = require('./basedatos/conexion');
const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de Node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
// Configuración clave para Render: Usar el puerto de entorno (PORT) si está disponible, sino usar 3900
const puerto = process.env.PORT || 3900; 

// Configurar CORS
app.use(cors());

// Convertir body a objeto JS (Middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* RUTAS */
const rutas_articulo = require("./rutas/ArticuloRutas");

// Cargar rutas
app.use("/api", rutas_articulo);
/* FIN RUTAS */

// Ruta de prueba hardcodeada
app.get("/probando", (req, res) => {

    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).json([
        {
            curso: "Master en React",
            autor: "Manuel Hernandez Herrera",
            url: "manuelhernandezweb.com.mx/master-react-pro"
        },
        {
            curso: "Master en React Native",
            autor: "Manuel Hernandez Herrera",
            url: "manuelhernandezweb.com.mx/master-react-native"
        }
    ]);
});

// Ruta principal
app.get("/", (req, res) => {
    return res.send(`
        <h1>Empezando un API REST con Node</h1>
    `);
});

// Iniciar servidor
// Corrección clave para Render: Escuchar en la dirección '0.0.0.0' y en el puerto configurado.
app.listen(puerto, '0.0.0.0', () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});