# Source: https://javascript.plainenglish.io/build-a-production-ready-node-express-api-with-docker-9a45443427a0

ARG PORT=8080
FROM node:14-alpine AS node

# Builder stage
FROM node AS builder
# Use /app as the CWD
WORKDIR /app            
# Copy package.json and yarn.lock to /app
COPY package.json yarn.lock ./   
# Install all dependencies
RUN yarn install               
# Copy the rest of the code
COPY . .                
# Invoke the build script to transpile code to js
RUN yarn build       

# Final stage
FROM node AS final
# Prepare a destination directory for js files
RUN mkdir -p /app/dist                  
# Use /app as CWD
WORKDIR /app                            
# Copy package.json and yarn.lock
COPY package.json yarn.lock ./                   
# Install only production dependencies
RUN yarn install --only=production             
# Copy transpiled js from builder stage into the final image
COPY --from=builder /app/build ./dist
# Open desired port
EXPOSE ${PORT}
# Use js files to run the application
ENTRYPOINT ["node", "./dist/index.js"]