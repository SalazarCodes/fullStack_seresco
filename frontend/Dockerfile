#### Paso 1: construimos la aplicación
FROM node as build

# Configurar el directorio principal dentro de la imagen.Configure the main working directory inside the docker image. 
# Este es el directorio base usado en cualquier comando de ahora en adelante.
WORKDIR /app

# Copiamos el archivo package.json y el archivo package-lock.json e instalamos las dependencias 
# Este es un paso aparte para que las dependencias queden en cache, a menos que se haga algún cambio a estos 2 archivos.
COPY package*.json ./
RUN npm install

# Copiamos la aplicación
COPY . ./

# Argumentos
ARG configuration=production

# Construimos la aplicación
RUN npm run build -- --outputPath=./dist/out --configuration $configuration

#### Usar la aplicación compilada, para ser desplegada con Nginx
FROM nginx

# Copiamos el build del paso 1
COPY --from=build /app/dist/out/ /usr/share/nginx/html

# Copiamos la configuración Ngnix
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


# Exponemos el puerto 80 del host Docker, para poder acceder desde fuera.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]