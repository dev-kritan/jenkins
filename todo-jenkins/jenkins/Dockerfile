FROM docker.io/jenkins/jenkins

USER root

RUN apt-get update \
    && apt-get install -y podman \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

USER jenkins