pipeline {
  agent any
    
  tools {nodejs "NodeJs"}
    
  stages {
        
    stage('Git') {
      steps {
        echo 'Fetching project from git'
        git 'https://github.com/VishnuBaliga/BITS_WebDev_Assignment2-Client.git'
      }
    }
     
    stage('Build') {
      steps {
        echo 'Starting Build Process..'
        echo 'Installing dependencies...'
        sh 'npm install'
        echo 'Running build command..'
        sh 'npm run build'
      }
    }  
            
    // stage('Test') {
    //   steps {
    //     echo 'Starting Test Process..'
    //     echo 'Running Test command..'
    //     sh 'npm test'
    //   }
    // }
    stage('Production') {
  steps {
    withAWS(region:'ap-south-1',credentials:'aws_bali_id') {
    s3Delete(bucket: 'react-app-jenkins', path:'**/*')
    s3Upload(bucket: 'react-app-jenkins', workingDir:'build', includePathPattern:'**/*');
            }
          }
    }
  }
}