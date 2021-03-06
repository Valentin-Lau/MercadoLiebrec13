// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
app.listen(process.env.PORT || 3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.post("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.post("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
