### run the jenkins

docker run -d \
 --name my-jenkins \
 --restart=unless-stopped \
 -p 8080:8080 \
 -p 50000:50000 \
 -v jenkins_home:/var/jenkins_home \
 -v /var/run/docker.sock:/var/run/docker.sock \
 -e DOCKER_HOST=unix:///var/run/docker.sock \
 my-jenkins

### First get your runtime directory:

echo "$XDG_RUNTIME_DIR"
