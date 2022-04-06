# Información

Este es el backend de mi aplicación, el mantenimiento de profesores y alumnos. Está desarrollado
en Java 11 con spring boot. He utilizado H2 e Hibernate para el manejo de la base de datos en memoria.

## Instalación

Para instalar las dependencias, ejecutar los siguientes comandos:

```bash
mvn clean
mvn install
```

Para lanzar la aplicación se utilizará el siguiente comando:
```
mvn spring-boot:run
```

Esto permitirá levantar la aplicación en el puerto 8080.

## Endpoints

```
| Metodo   |                   URL                |
|----------|--------------------------------------|
| GET      | /profesores                          |
| GET      | /profesores/{id}                     |
| POST     | /profesores                          |
| PUT      | /profesores/{id}                     |
| DELETE   | /profesores/{id}                     |
| GET      | /estudiantes                         |
| GET      | /profesores/{profesorId}/estudiantes |
| GET      | /estudiantes/{id}                    |
| POST     | /profesores/{profesorId}/estudiantes |
| PUT      | /estudiantes/{id}                    |
| DELETE   | /estudiantes/{id}                    |

```

## Licencia
&copy;Luis Felipe Salazar\
Todos los derechos reservados.