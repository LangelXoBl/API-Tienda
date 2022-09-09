# API-Tienda
Api basica de una tienda

## Installation

Para instalar en un entorno local:
```
$ git clone https://example.com
$cd API-Tienda
$ npm install
$ npm rund dev
```
Asegurese de estar dentro de la carpeta API-Tienda y que el puerto 3000 este disponible

## Consumir API
Los __field name__ que la API espera en el body son:
- "name" : es requerido y de tipo string
- "precio" : es requerido y de tipo num
- "descripcion" : no es requerido y maximo 250 caracteres.

### Endpoints
Para consumir la Api en un entorno local use los siguientes Endpoint: 
- GET ``` http://localhost:3000/productos ``` para ver todos los productos
- POST ``` http://localhost:3000/productos ``` para crear un nuevo producto
- PUT ``` http://localhost:3000/productos/:id ``` para actualizar un producto
- DELETE ``` http://localhost:3000/productos/:id ``` para eliminar un id
> Asegurese de que el field name y el valor cumpla con lo descrito anteriormente