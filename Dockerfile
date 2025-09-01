FROM docker.io/node:22-alpine

ENV HOST=0.0.0.0
ENV PORT=11235

WORKDIR /app

RUN addgroup --system md-proxy && \
          adduser --system -G md-proxy md-proxy

COPY dist /app/
RUN chown -R md-proxy:md-proxy .


CMD [ "node", "main.cjs" ]