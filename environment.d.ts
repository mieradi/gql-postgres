declare global {
  namespace NodeJS {
    interface ProcessEnv {
        POSTGRES_HOST_DEV: string;
        PORT: number;
        POSTGRES_DB: string;
        POSTGRES_USER: string;
        POSTGRES_PASSWORD: string;
        ACCESS_TOKEN_SECRET: Secret;
        REFRESH_TOKEN_SECRET: Secret;
        ACCESS_TOKEN_LIFE: string;
        REFRESH_TOKEN_LIFE: string;
        DEV_URL: string;
        NODE_ENV: 'development' | 'production';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
