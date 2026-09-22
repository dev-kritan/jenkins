# docker run -d \
#   --name jenkins \
#   --restart=always \
#   -u root \
#   -p 8080:8080 \
#   -p 50000:50000 \
#   -v jenkins_home:/var/jenkins_home \
#   -v /var/run/docker.sock:/var/run/docker.sock \
#   jenkins/jenkins:lts-jdk17

docker run -d \
  --name jenkins \
  --restart=always \
  -u root \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  docker.io/jenkins/jenkins:lts-jdk17

#   installing the docker inside the jenkins container
docker exec -it jenkins bash -c "apt-get update && apt-get install -y docker.io docker-compose-plugin"