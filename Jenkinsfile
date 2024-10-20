pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building on branch... $$AWS_ACCESS_KEY'
                sh 'chmod +x ./deploy.sh'
                sh './deploy.sh'
            }
        }
    }
}
