pipeline {
    agent any
    tools {
        nodejs "NodeJs_20.9.0" // The name configured in Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the Git repository
                git branch: 'main', url: 'https://github.com/Rohan7050/tic-tac-toe'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies for React
                sh 'npm install'
            }
        }

        stage('Build React Project') {
            steps {
                // Run the React build process
                sh 'npm run build'
            }
        }

        stage('Zip Build Directory') {
            steps {
                // Zip the build directory
                sh 'zip -r $dist.zip dist'
            }
        }
        stage('upload to s3') {
            steps {
                echo 'Building on branch... $$AWS_ACCESS_KEY'
                sh 'chmod +x ./deploy.sh'
                sh './deploy.sh'
            }
        }
    }
}
