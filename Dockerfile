FROM node:18-alpine

WORKDIR /app

COPY app/package*.json .

RUN npm install && rm -rf /tmp/*

COPY app/ .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD npx sequelize-cli db:migrate && node app.js