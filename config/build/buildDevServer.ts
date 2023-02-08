import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types/config";



export function buildDevServer({port}: IBuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: path.join(__dirname, 'public'),
    },

    port: port,
    open: true
  }
}