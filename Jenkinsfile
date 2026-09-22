pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = 'todo-prod'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test & Typecheck') {
            steps {
                echo 'Running TypeScript compile checks and tests...'
                // Runs within ephemeral node containers to avoid polluting Jenkins host
                sh '''
                    docker run --rm -v $(pwd)/backend:/app -w /app node:20-alpine sh -c "npm ci && npm run build"
                    docker run --rm -v $(pwd)/frontend:/app -w /app node:20-alpine sh -c "npm ci && npm run build"
                '''
            }
        }

        stage('Build Containers') {
            steps {
                echo 'Building production Docker images...'
                sh 'docker compose build --no-cache'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Restarting application stack...'
                sh 'docker compose down --remove-orphans'
                sh 'docker compose up -d'
            }
        }

        stage('Health Check') {
            steps {
                sleep 5
                sh 'curl -f http://localhost:80 || exit 1'
            }
        }
    }

    post {
        always {
            // Clean up untagged hanging build layers to save disk space
            sh 'docker image prune -f'
        }
        success {
            echo 'Pipeline completed and application deployed successfully.'
        }
        failure {
            echo 'Deployment failed! Check the console logs.'
        }
    }
}