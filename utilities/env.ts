import dotenv from "dotenv-defaults";

export const useEnvironmentVariables = () => {
  const paths: any = {
    development: ".dev",
    production: ".prod",
    default: "",
  };

  const configPath = (NODE_ENV: string) =>
    `./config/config${paths[NODE_ENV]}.env`;

  dotenv.config({
    path: configPath(process.env.NODE_ENV as string),
    defaults: configPath("default"),
  });
};
