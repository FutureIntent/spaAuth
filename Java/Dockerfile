FROM maven:3.9.9-eclipse-temurin-21-jammy

WORKDIR /app/projects/spaAuth

COPY ./spaAuth/.mvn/ .mvn
COPY ./spaAuth/mvnw ./spaAuth/pom.xml ./
RUN ./mvnw dependency:go-offline

COPY ./spaAuth/src ./src

EXPOSE 8080

# CMD ["./mvnw", "spring-boot:run"]