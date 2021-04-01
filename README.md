# Proyecto CrESI

## Pasos para clonar proyecto y formas de trabajar

1.  Ir al boton de 'code'(verde) y copiar el link el cual seria este => https://github.com/GermanSaracca/CrESI.git
2.  Crear carpeta en local (pueden ubicarla en el escritorio o donde deseen) y dentro de la misma abrir el gitbash.
3.  En el gitbash tipear git clone + el link. Ej => `git clone https://github.com/GermanSaracca/CrESI.git`
4.  Una vez clonado el proyecto, abrir la carpeta cresi en VsCode o IDE de preferencia y abrir la terminal del mismo.
5.  Ahi dirigirse a la carpeta cresi y tipear `npm install`. Esto instalara todas las dependencias instaladas en el proyecto original para que el proyecto corra en tu computadora normalmente.
6.  Una vez terminada de instalar las dependencias, tipear `npm start` en la misma terminal del IDE siempre parado en la carpeta cresi.
7.  Si todo esta bien deberian ver lo siguiente (puede tardar unos minutos a veces) =>

    `Compiled successfully!`

    `You can now view cresi in the browser. `

    `Local: http://localhost:3000`
    `On Your Network: http://192.168.0.15:3000 `

    `Note that the development build is not optimized.`
    `To create a production build, use yarn build. `

8.Una vez compilado deberia automaticamente abrirles una pestaña en su navegador con la app corriendo.( no modificar la rama develop )

<br/>

`#ATENCIÓN`

- Lo que ustedes hicieron ahi mismo fue clonarse el repo, instalar dependencias (unica vez) y correrlo, pero no deben hacer cambios dentro de la rama `develop` la cual por defecto sera en la que esten parados.
- Nosotros iremos haciendo cambios a la rama `develop` que es la rama para desarrollo pero desde nuestra ramas creadas localmente.
- Para eso estando parados en la carpeta cresi en cualquier terminal CMD o terminal del visual studio, tipear => `git checkout -b nombre-rama`
- Ejemplo => `git checkout -b recursos` => esto creara una rama local llamada recursos y los switcheara a esa rama, una vez que abran el proyecto en vscode veran debajo a la izquierda que estara el nombre de la rama que crearon y a la que se movieron, todos los cambios realizados estaran solo en su rama de manera local en su computadora.
