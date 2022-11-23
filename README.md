## React Routing Navigation
### React-router-dom versión 6
> Ejemplo de una aplicación ReactJS con react router dom en su versión 6.4.3 a diferencia de la versión 5 de esta libreria, se agregaron atributos a los elementos, que simplifican la implementación.

### Puntos a tener en cuenta

- En nuestro archivo App tendremos que envolver nuestra aplicación con el componente `<BrowserRouter>` .
- Si va a trabajar con links de navegación deben estar contenidos por el mismo componente.
### Componente Routes y Route
En nuestro componente App debemos envolver el manejo de rutas con el componente Routes, este componente se encarga de verificar la url actual en la que se encuentra y renderizar el componente correspondiente a esa url, si no hay coincidencia retorna null.

Por ejemplo:
```javascript 
  	<BrowserRouter>
      	<NavBar
        	items={["inicio", "about", "contact"]}
      	/>
      <Routes>
        <Route exact path="/inicio" element={<Home titulo="Pagina Home" />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
```
Notese que se agrego el atributo element al componente Route, el cual se encargara de recibir el componente a renderizar, con sus respectivas props.

### Ejecutar la aplicación
- Ejecuta el comando `npm install` el cual se encargará de descargar e instalar las dependencias necesarias para ejecutar el proyecto.
- Ejecute el comando `npm start` con este comando se iniciará su proyecto el su entorno local, puerto por defecto `3000`.