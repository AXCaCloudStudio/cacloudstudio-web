FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy entire app
COPY . .

# Build static app
RUN ["npm", "run", "build"]

# Serve build with Nginx
FROM nginx:stable-alpine

# Copy built files from previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]