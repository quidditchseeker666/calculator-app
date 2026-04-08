FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="calculator-app" \
      org.opencontainers.image.description="Calculator web app served by nginx" \
      org.opencontainers.image.source="https://github.com/quidditchseeker666/calculator-app" \
      org.opencontainers.image.authors="quidditchseeker666"

COPY index.html style.css script.js /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1
