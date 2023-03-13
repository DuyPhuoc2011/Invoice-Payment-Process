FROM openjdk:17
VOLUME /tmp
EXPOSE 3000
ADD /target/InvoicePaymentManagement-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]