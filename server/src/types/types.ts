export interface EnvConfig {
  database: string | undefined;
  username: string;
  password: string | null | undefined;
  host: string;
  dialect: string;
}

export interface Config {
  [env: string]: EnvConfig;
}