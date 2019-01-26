# Use an official ubuntu runtime as a parent image
FROM node:8.11.3-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

ENV HOST="0.0.0.0"

# Install any needed packages specified in requirements.txt
RUN npm install sails -g
RUN npm install

CMD ["node", "/app/app.js"]