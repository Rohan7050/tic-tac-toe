pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building on branch... $$AWS_ACCESS_KEY'
                sh './deploy.sh'
            }
        }
    }
}
