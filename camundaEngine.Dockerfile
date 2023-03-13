FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ADD /target/Payment-Process-1.0.0-SNAPSHOT.jar app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]