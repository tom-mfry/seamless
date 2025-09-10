# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Development with Docker

This project is configured to run a development environment inside a Docker container, which is the recommended approach.

1.  **Start the Docker development server:**
    Run the following command from the project root. You may need to use `sudo` depending on your Docker installation.
    ```bash
    sudo docker compose up -d --build nuxt-dev
    ```
    This will start a container with a development server and hot-reloading enabled.

2.  **Access the website:**
    You can access the live development site from your computer at `http://localhost:3001`.

    To access it from another device on the same network (like your phone), you will need your computer's local IP address. The URL will be:
    `http://<your-computer-ip>:3001`