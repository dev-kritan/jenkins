### get the initial password

podman exec my-jenkins-podman cat /var/je
nkins_home/secrets/initialAdminPassword

### run the jenkins

podman run -d --name my-jenkins-podman  
--restart=unless-stopped -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v "$XD
G_RUNTIME_DIR/podman/podman.sock:/var/run/podman/podman.sock" -e CONTAINER_HOST=unix:///var/run/podm
an/podman.sock my-jenkins-podman

### First get your runtime directory:

echo "$XDG_RUNTIME_DIR"
