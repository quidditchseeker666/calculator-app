# ═══════════════════════════════════════════════════════
# CALCULATOR APP - DOCKERFILE
# ═══════════════════════════════════════════════════════
# Description: Containerizes a simple calculator web app
# Base Image: nginx:alpine (lightweight web server)
# Author: Your Name
# Date: 2025
# ═══════════════════════════════════════════════════════

# Use official nginx image (Alpine Linux - small size)
FROM nginx:alpine

# Set metadata
LABEL maintainer="your.email@example.com"
LABEL description="Calculator Web Application"
LABEL version="1.0"

# Copy application files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 (HTTP)
EXPOSE 80

# Health check (optional but good practice)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
