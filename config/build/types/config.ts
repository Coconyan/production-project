export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
}

export interface IBuildOptions {
  paths: BuildPaths,
  mode: BuildMode
};
