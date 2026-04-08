<div align="center">

# 🧮 Calculator Web Application (Docker + CI/CD)

A simple calculator web app built with **HTML/CSS/JavaScript**, served by **Nginx**, fully containerized using **Docker**, and automatically built & deployed using **GitHub Actions CI/CD**.

![CI/CD](https://github.com/quidditchseeker666/calculator-app/actions/workflows/docker-build.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?logo=nginx&logoColor=white)

</div>

---

## ✅ What this project proves (DevOps)
- Dockerfile: package a static web app into a container
- Nginx: serve static files efficiently inside the container
- Docker Compose: run locally with one command
- GitHub Actions CI/CD:
  - Lint Dockerfile (Hadolint)
  - Build Docker image
  - Run container + HTTP test
  - Push image to Docker Hub automatically

---

## 📦 Tech Stack
- Frontend: **HTML**, **CSS**, **JavaScript**
- Web Server: **Nginx (Alpine)**
- Containerization: **Docker**
- Orchestration: **Docker Compose**
- CI/CD: **GitHub Actions**
- Registry: **Docker Hub**

---

## 📁 Repository Structure

> Note: The app files are inside the `calculator/` folder.calculator-app/
├── .github/workflows/docker-build.yml # CI/CD workflow
└── calculator/
├── Dockerfile # Docker image definition
├── docker-compose.yml # Local run (compose)
├── index.html # UI
├── style.css # Styling
└── script.js # Calculator logic
---
