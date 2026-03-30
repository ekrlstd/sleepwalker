# sleepwalker

> A GitHub App built with [Probot](https://github.com/probot/probot) that Detects stale references in AGENTS.md, CLAUDE.md, and .cursorrules and opens PRs to fix them. No AI, no guesswork, only logic.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t sleepwalker .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> sleepwalker
```

## Contributing

If you have suggestions for how sleepwalker could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2026 ekrlstd
