# jalasoftchallenge

1.INSTRUCCIONES PARA EJECUTAR EL PROYECTO:

Descargar el zip del repositorio Jalasoft challenge
Descomprimir y abrir carpeta en VS Code.
Ejecutar el comando yarn para reconstruir los modulos de node
Ejecutar el comando node app para correr el servidor en el puerto 8080
En el navegador ir a la dirección http://localhost:8080/



2.CONSIDERACIONES DEL PROYECTO:
VER BASE DE DATOS
En la base de datos ya estan registradas las 5 preguntas por categoria para poder iniciar el juego.
Si desea hacer modificaciones en la base de datos, puede acceder al link guardado en la variable de entorno -DB_CNN en el archivo .env ubicado en la raiz
del proyecto.
Una vez obtenido el link puede ingresarlo en mongodbcompass, para verificar el estado de las dos colecciones que componenen la BD.


3.EJECUTAR PROYECTO DESDE EL FRONTEND(VERSION DESARROLLO)
Este proyecto es un servidor hecho con Node el cual sirve el build de produccion del frontend hecho en React.
Si desea analizar el front end en version de desarrollo, puede descargar la carpeta FrontEnd(Incluida en la raiz del repositorio), abrirla con
VS code, ejecutar el comando -yarn para reconstruir los modulos de node y luego -yarn start si desea ejecutar el proyecto(debe tener tambien el servidor activo, es decir
todo lo del punto 1).
