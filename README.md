<div align="center">

# 🧮 Calculator Web Application

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 🐳 A simple, elegant calculator **containerized with Docker** and served via Nginx

[![Docker Ready](https://img.shields.io/badge/Docker-Ready-success?logo=docker)](https://github.com/quidditchseeker666/calculator-app)
[![GitHub](https://img.shields.io/badge/Repo-GitHub-blue?logo=github)](https://github.com/quidditchseeker666/calculator-app)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[Features](#-features) • [Quick Start](#-quick-start-with-docker) • [Documentation](#-documentation) • [DevOps Skills](#-devops-skills-demonstrated)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Why This Project?](#-why-this-project)
- [Features](#-features)
- [Quick Start with Docker](#-quick-start-with-docker)
- [Docker Architecture](#-docker-architecture)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [DevOps Skills Demonstrated](#-devops-skills-demonstrated)
- [Technologies Used](#️-technologies-used)
- [Docker Commands Reference](#-docker-commands-reference)
- [Deployment Options](#-deployment-options)
- [Screenshots](#-screenshots)
- [What I Learned](#-what-i-learned)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This project is a **fully functional web-based calculator** demonstrating **Docker containerization** for DevOps learning. The application is built with vanilla HTML, CSS, and JavaScript, containerized using Docker, and served through an optimized Nginx web server.

**Purpose:** Learn and demonstrate Docker fundamentals, container orchestration, version control, and DevOps best practices.

---

## 💡 Why This Project?

### For Learning
- ✅ Hands-on Docker experience
- ✅ Understanding containerization concepts
- ✅ Learning Nginx configuration
- ✅ Git/GitHub workflow mastery
- ✅ DevOps documentation skills

### For Portfolio
- ✅ Demonstrates real-world DevOps skills
- ✅ Shows ability to containerize applications
- ✅ Professional documentation
- ✅ Production-ready deployment setup
- ✅ Interview-ready talking points

---

## ✨ Features

### Application Features
- ✅ Basic arithmetic operations (Add, Subtract, Multiply, Divide)
- ✅ Clean, modern, responsive UI
- ✅ Keyboard and mouse support
- ✅ Works on desktop and mobile
- ✅ Fast and lightweight

### DevOps Features
- 🐳 **Dockerized** with optimized Dockerfile
- 🚀 **Docker Compose** for easy orchestration
- 🏥 **Health checks** for container monitoring
- 📦 **Small image size** (~23.5 MB)
- ⚡ **Fast startup** (<1 second)
- 🔒 **Production-ready** configuration
- 📝 **Comprehensive documentation**

---

## 🚀 Quick Start with Docker

### Prerequisites
- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Git installed (optional, for cloning)

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/quidditchseeker666/calculator-app.git
cd calculator-app

# Start the application
docker-compose up -d

# Open in browser
# http://localhost:8080
# Build the image
docker build -t calculator-app .

# Run the container
docker run -d -p 8080:80 --name calculator calculator-app

# Open in browser
# http://localhost:8080
# Pull pre-built image
docker pull quidditchseeker666/calculator-app:latest

# Run
docker run -d -p 8080:80 quidditchseeker666/calculator-app:latest# Using Docker Compose
docker-compose down

# Using Docker CLI
docker stop calculator
docker rm calculator┌─────────────────────────────────────────┐
│     Host Machine (Your Computer)        │
│          Port: 8080                     │
└──────────────┬──────────────────────────┘
               │
               │ Port Mapping
               │ (8080 → 80)
               │
┌──────────────▼──────────────────────────┐
│       Docker Container                  │
│   ┌─────────────────────────────────┐  │
│   │   Nginx Web Server (Alpine)     │  │
│   │         Port: 80                │  │
│   │                                 │  │
│   │   ┌─────────────────────────┐   │  │
│   │   │   Calculator Files      │   │  │
│   │   │   • index.html          │   │  │
│   │   │   • style.css           │   │  │
│   │   │   • script.js           │   │  │
│   │   └─────────────────────────┘   │  │
│   │                                 │  │
│   │   Health Check: ✓ Running      │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Base Image: nginx:alpine              │
│   Size: ~23.5 MB                        │
│   Startup: <1 second                    │
└─────────────────────────────────────────┘calculator-app/
│
├── 🐳 Docker Configuration
│   ├── Dockerfile              # Container image definition
│   ├── docker-compose.yml      # Orchestration configuration
│   └── .dockerignore          # Build optimization rules
│
├── 🌐 Web Application
│   ├── index.html              # Calculator interface
│   ├── style.css               # Styling and layout
│   └── script.js               # Calculator logic
│
├── 📚 Documentation
│   ├── README.md               # This file
│   ├── LICENSE                 # MIT License
│   └── .gitignore             # Git ignore rules
│
└── 📊 Assets (optional)
    └── screenshots/            # Project screenshots# Clone repository
git clone https://github.com/quidditchseeker666/calculator-app.git
cd calculator-app

# Start simple HTTP server
python3 -m http.server 8000

# Open browser
# http://localhost:8000# Build image
docker build -t calculator-app .

# Run with volume mount (for live editing)
docker run -d -p 8080:80 \
  -v $(pwd):/usr/share/nginx/html \
  --name calculator \
  nginx:alpine

# Make changes to files
# Refresh browser to see changes
