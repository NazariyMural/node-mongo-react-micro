# Run project 
docker-compose up

# See running containers
docker ps
docker ps -a

# Run container
docker run -i -p 3000:3000 microservices-example_web

# Inspect Images
docker images

# Inspect Containers
docker ps -a

# Build image
docker build --rm -f "web/Dockerfile" -t microservicesexample:latest "web"

# Build image ( no-cache )
docker build --rm --no-cache  -f "web/Dockerfile" -t microservicesexample:latest "web"