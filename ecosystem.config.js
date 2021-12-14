module.exports = {
    apps: [
        {
            name: "NodeServer",
            version: "1.0.0",
            script: "npm",
            automation: false,
            args: "npm run electron-dev",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}