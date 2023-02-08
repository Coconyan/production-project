export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}

export interface IBuildOptions {
  paths: BuildPaths,
  mode: BuildMode,
  isDev: boolean,
  port: number,
};
