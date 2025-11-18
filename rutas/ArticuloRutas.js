const express = require("express");
const router = express.Router();
const ArticuloController = require("../controladores/ArticuloControlador");
const multer = require('multer');

// Configuración de almacenamiento para multer
const almacenamiento = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img/articulos/');
    },
    filename: function (req, file, cb) {
        cb(null, "articulo_" + Date.now() + "_" + file.originalname);
    }
});

const subidas = multer({ storage: almacenamiento });

// =====================
// RUTAS CORREGIDAS
// =====================

// Pruebas
router.get("/ruta-de-pruebas", ArticuloController.prueba);
router.get("/curso", ArticuloController.curso);

// CRUD Artículos
router.post("/crear", ArticuloController.crear);
router.get("/articulos/:ultimos?", ArticuloController.listar);  // corregido
router.get("/articulo/:id", ArticuloController.mostrarUno);      // corregido
router.delete("/articulo/:id", ArticuloController.borrar);       // corregido
router.put("/articulo/:id", ArticuloController.editar);

// Subir imagen
router.post("/subir-imagen/:id", subidas.single("archivo0"), ArticuloController.subirImagen);

// Mostrar imagen
router.get("/imagen/:fichero", ArticuloController.mostrarImagen);

// Buscador
router.get("/buscar/:busqueda", ArticuloController.buscador);

module.exports = router;
