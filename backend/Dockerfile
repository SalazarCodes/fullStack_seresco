#### Parte 1: counstruir la aplicación
FROM openjdk:11-jdk-slim as build

# Utilizar el directorio actual en la imagen
WORKDIR /app

# Copiar maven a la imagen
COPY mvnw .
COPY .mvn .mvn

# Copiamos el pom
COPY pom.xml .

# Construir todas las dependencias para trabajar offline.
# Este es un paso aparte, así las dependencias estarán en cache a menos que cambie el pom.xml .
RUN ./mvnw dependency:go-offline -B

# Copiar la fuente del proyecto
COPY src src

# Empacar la aplicación
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

#### parte 2: Una imagen de docker mínima para correr la app
FROM openjdk:11-jre-slim

ARG DEPENDENCY=/app/target/dependency

# Copiar las dependencias del proyecto
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java","-cp","app:app/lib/*","com.pe.seresco.backend.BackendApplication"]