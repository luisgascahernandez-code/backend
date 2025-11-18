const { conexion } = require('./basedatos/conexion');
const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de Node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3900;

// Configurar CORS
app.use(cors());

// Convertir body a objeto JS
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
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});
