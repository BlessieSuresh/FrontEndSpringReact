#!/usr/bin/env groovy

node {
    
    stage('checkout') {
        checkout scm
    }

    stage('install tools') {
        if (isUnix()) {
            sh "npm install"
        } else {
            bat(/npm install/)
        }
    }

    stage('build') {
        if (isUnix()) {
            sh "npm run build"
        } else {
            bat(/npm run build/)
        }
    }

    stage('Testing') {
        if (isUnix()) {
            sh "npm run test"
        } else {
            bat(/npm test -- --watchAll=false --passWithNoTests/)
        }
    }


}
