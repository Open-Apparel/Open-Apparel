FROM oven/bun AS base
WORKDIR /usr/src/app

FROM base AS builder

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY src src
COPY static static
COPY svelte.config.js ./
COPY tsconfig.json ./
COPY vite.config.ts ./

ARG PUBLIC_COMMIT_HASH
ENV PUBLIC_COMMIT_HASH=${PUBLIC_COMMIT_HASH}

ENV NODE_ENV=production
RUN bun run build

FROM base

COPY --from=builder /usr/src/app/build ./build

RUN apt update && apt install curl -y
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000 || exit 1

LABEL org.opencontainers.image.source=https://github.com/open-apparel/open-apparel

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "build/index.js" ]