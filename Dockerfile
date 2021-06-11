FROM node:15.11.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]


FROM nginx
EXPOSE 80
ENV SKIP_PREFLIGHT_CHECK=true
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
