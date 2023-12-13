Doc oficial express-validator
https://express-validator.github.io/docs/guides/getting-started


-------------------------------------
express.urlencoded
 express.urlencoded:  actúa como middleware al procesar los datos enviados desde el cliente al servidor a través de formularios HTML o solicitudes POST.

 express.urlencoded es un ejemplo de un middleware que se encarga de analizar los datos enviados en el cuerpo (body) de una solicitud y convertirlos en un formato utilizable.

 Aquí, el parámetro extended se establece en false para indicar que solo se analizarán datos simples, no objetos complejos. Si se establece en true, también se analizarán objetos anidados.

---------------------------------------------------------------------------------------------------

La función express.json() es una función de middleware integrada en Express. Analiza las requests entrantes con cargas JSON y se basa en body-parser .
express.json() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como un Objeto JSON. Este método se llama middleware en su aplicación utilizando el código: app.use(express.json());

--------------------------------------------------------------------------------------------------
 express.json() y express.urlencoded
¿Qué es el middleware? Son esos métodos / funciones / operaciones los que se denominan ENTRE procesar la Solicitud y enviar la Respuesta en su método de solicitud.

Cuando hablando de express.json() y express.urlencoded() piense específicamente sobre las solicitudes POST ( i.e. el objeto de solicitud .post ) y las solicitudes PUT ( i.e. el objeto de solicitud .put )

NO NECESITAS express.json() y express.urlencoded() para obtener solicitudes o solicitudes de DELETE.

NECESITAS express.json() y express.urlencoded() para solicitudes POST y PUT, porque en ambas solicitudes estás envío de datos (en forma de algún objeto de datos) al servidor y usted está pidiendo al servidor que acepte o almacene esos datos (objeto), que están encerrados en el cuerpo (es decir. req.body) de esa solicitud (POST o PUT)

Express le proporciona middleware para tratar los datos (entrantes) (objeto) en el cuerpo de la solicitud.

a. express.json() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como un Objeto JSON. Este método se llama middleware en su aplicación utilizando el código: app.use(express.json());

b. express.urlencoded() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como cadenas o matrices. Este método se llama middleware en su aplicación utilizando el código: app.use(express.urlencoded());

-----------------------------------------------------------------------------------------
express.json() es un middleware express integrado que convierte el cuerpo de la solicitud a JSON. 

express.urlencoded() al igual que express.json() convierte el cuerpo de la solicitud a JSON, también lleva a cabo otras funcionalidades como: convertir datos de formulario a JSON, etc.
​

------------------------
https://getbootstrap.com/docs/5.3/getting-started/introduction/