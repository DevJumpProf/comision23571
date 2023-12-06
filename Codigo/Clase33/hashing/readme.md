app.use(express.urlencoded({extended:false}) )
// evita problemas en las peticiones y carga de datos
//urlencoded
//Con express.urlencoded, el proceso de recibir y procesar datos se vuelve más eficiente y rápido. Los desarrolladores ya no tienen que escribir código personalizado para analizar los datos de cada solicitud, lo que acelera el tiempo de desarrollo y reduce la posibilidad de errores.
//En lugar de lidiar con la tediosa tarea de analizar manualmente los datos enviados en el cuerpo de una solicitud, express.urlencoded automatiza este proceso


¿Qué es Middleware? Son esos métodos/funciones/operaciones los que se llaman ENTRE procesar la Solicitud y enviar la Respuesta en su método de solicitud.

Cuando se habla de express.json() y express.urlencoded() piense específicamente en las solicitudes POST (es decir, el objeto de solicitud .post) y las solicitudes PUT (es decir, el objeto de solicitud .put)

NO NECESITAS express.json() y express.urlencoded() para Solicitudes GET o Solicitudes DELETE.

NECESITAS express.json() y express.urlencoded() para solicitudes POST y PUT, porque en ambas solicitudes estás envío de datos (en forma de algún objeto de datos) al servidor y usted está pidiendo al servidor que acepte o almacene esos datos (objeto), que están encerrados en el cuerpo (es decir. req.body) de esa solicitud (POST o PUT)

Express le proporciona middleware para tratar los datos (entrantes) (objeto) en el cuerpo de la solicitud.

a. express.json() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como un Objeto JSON. Este método se llama middleware en su aplicación utilizando el código: app.use(express.json());

b. express.urlencoded() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como cadenas o matrices. Este método se llama middleware en su aplicación utilizando el código: app.use(express.urlencoded());


express.json ( ) es un middleware expreso construido que convierte el cuerpo de solicitud a JSON.

express.urlencoded ( ) al igual que express.json ( ) convierte el cuerpo de solicitud a JSON, también lleva a cabo algunas otras funcionalidades como: convertir datos de formulario a JSON, etc.


-----------------------------
Si me preguntas "qué es el diferencia entre express.urlencoded({extended: false}) y express.json()", bueno, la diferencia es:

express.json()
Si lo usas express.json() analizará el cuerpo de la solicitud posterior/fetch excepto del formulario de publicación html. No analizará la información del html publicar forma :

<form action="/" method="POST">
    <input type="text" name="username">
    <button>Submit</button>
</form>
Por ejemplo, si llena el formulario con "dean" y luego lo envía, Express no tendrá una idea de qué hay dentro del cuerpo con este código expreso:

const express = require('express')
const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post("/", (req, res) => {
    res.send(req.body)
})


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server Up in Port ${port}`);
})
Enviará {} después de hacer clic en enviar. Pero si no te sentiste app.use(express.urlencoded({extended: false})), entonces obtendrás {"username": "dean"}.

Entonces la diferencia es express.json() es un analizador de cuerpo para la solicitud posterior excepto formulario de publicación de Html y express.urlencoded({extended: false}) es un analizador de cuerpo para html post form.


¿Qué salt?
En criptografía, el salt es un agregado de random data que se concatena a una password antes de ser hasheada, con el objetivo de impedir ataques de fuerza bruta con diccionario

 se refiere a agregar datos aleatorios a la entrada de una función para garantizar una salida única, el hash, incluso cuando las entradas son las mismas. En la protección por contraseña, salt es una cadena de datos aleatoria que se utiliza para modificar un hash de contraseña.