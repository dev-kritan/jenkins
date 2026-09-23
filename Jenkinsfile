pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend Test') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$PWD/todo-jenkins/backend:/app" \
                      -w /app \
                      node:22-alpine \
                      sh -c "npm ci && npm test"
                '''
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$PWD/todo-jenkins/frontend:/app" \
                      -w /app \
                      node:22-alpine \
                      sh -c "npm ci && npm run build"
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker compose build
                '''
            }
        }
    }
}