FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy entire app
COPY . .

# Build static app
RUN npm run build


# Multistage build to ditch npm and node (lightweight image)
FROM nginx:stable-alpine

# Install envsubst for env variable substitution
RUN apk add --no-cache gettext

# Copy the React build output from the previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default Nginx conf file
RUN rm /etc/nginx/conf.d/default.conf

# Use nginx.conf.template for env variable substitution
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Expose port 80
EXPOSE 80

# Start Nginx as primary process so container stays alive
CMD ["nginx", "-g", "daemon off;"]
