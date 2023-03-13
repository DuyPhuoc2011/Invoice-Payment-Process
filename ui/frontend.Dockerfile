#Stage 1
FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app 
COPY package.json /app
RUN npm install
COPY . /app
RUN npm update
RUN npm run build --omit=dev

#Stage 2

FROM nginx:latest
COPY --from=build-step /app/dist/user-portal /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf



