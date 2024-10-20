pipeline {
    agent any
    // tools {
    //     nodejs "NodeJS_20" // The name configured in Global Tool Configuration
    // }
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install Node.js using NodeSource on a Linux agent (Ubuntu/Debian)
                    sh '''
                    # Check if Node.js is installed
                    if ! command -v node > /dev/null 2>&1; then
                        echo "Node.js is not installed. Installing Node.js..."
                        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                    else
                        echo "Node.js is already installed."
                    fi

                    # Verify Node.js installation
                    node -v
                    npm -v
                    '''
                }
            }
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
