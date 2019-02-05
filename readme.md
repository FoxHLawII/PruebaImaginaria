# Prueba imaginaria

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Para probar
IDCLIENTE: 5c59961f84014d001763e0fa
IDDRIVER: 5c59961e84014d001763e0f9

### Urls disponibles
#### Crear orden
[POST] https://pruebaimaginaria.herokuapp.com/Orders/{IDCLIENTE}
```sh
EJ: https://pruebaimaginaria.herokuapp.com/Orders/5c59961f84014d001763e0fa
{
	"address": "Cra 104 b # 10-10",
	"date": "2019-01-01"
}
```

#### Obtener Ordenes por fecha
[GET] https://pruebaimaginaria.herokuapp.com/drivers/{IDDRIVER}/{DATE}
```sh
EJ: https://pruebaimaginaria.herokuapp.com/drivers/5c59961e84014d001763e0f9/2019-01-01
```