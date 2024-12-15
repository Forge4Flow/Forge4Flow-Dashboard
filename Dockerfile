# Stage 1: Build the frontend
FROM node:18 AS frontend-builder

WORKDIR /forge4flow
COPY . .
RUN npm run build

# Stage 2: Create the final image
FROM alpine:3.21.0

RUN apk add --update nodejs npm

RUN addgroup -S forge4flow-dashboard && adduser -S forge4flow-dashboard -G forge4flow-dashboard
USER forge4flow-dashboard

WORKDIR /forge4flow
COPY --from=frontend-builder /forge4flow/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]
