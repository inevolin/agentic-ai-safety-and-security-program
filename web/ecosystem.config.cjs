module.exports = {
  apps: [
    {
      name: "ai-safety-program",
      cwd: __dirname,
      script: "bun",
      args: "run start",
      autorestart: true,
      log_date_format: "HH:mm:ss",
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: "3100",
      },
    },
  ],
};
