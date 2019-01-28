FROM node:9.8-alpine
COPY . /var/lib/siteminder/
WORKDIR /var/lib/siteminder
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
