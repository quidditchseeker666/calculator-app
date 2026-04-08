# Pinned version = reproducible builds and usually satisfies lint rules better
FROM nginx:1.27-alpine

# OCI labels (cleaner than "maintainer")
LABEL org.opencontainers.image.title="calculator-app" \
      org.opencontainers.image.description="Static calculator web app served by Nginx" \
      org.opencontainers.image.source="https://github.com/quidditchseeker666/calculator-app"

# Copy static files into Nginx web root
COPY index.html style.css script.js /usr/share/nginx/html/

EXPOSE 80

# Healthcheck (busybox wget exists in alpine images)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1
