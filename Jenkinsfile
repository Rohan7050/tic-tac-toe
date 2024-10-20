pipeline {
    agent any
    stages {
        environment {
            BUILD_DIR = 'dist' // The React build directory
            ZIP_FILE = 'dist.zip' // The file name for the zipped build directory
        }
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
                sh '''
                if [ -d "${BUILD_DIR}" ]; then
                    zip -r ${ZIP_FILE} ${BUILD_DIR}
                else
                    echo "Error: Build directory does not exist."
                    exit 1
                fi
                '''
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
