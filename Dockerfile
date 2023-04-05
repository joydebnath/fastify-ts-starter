# Common build for all stages
ARG IMAGE_VERSION=18-alpine3.16
FROM node:${IMAGE_VERSION} AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Dev stage
FROM base AS dev
RUN echo "Running in development mode"
ENV NODE_ENV=development
ENV PORT=3000
EXPOSE 3000
CMD [ "npm", "run", "dev" ]


# Prod stage
FROM base AS prod
RUN echo "Running in production mode"
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "run", "start" ]


