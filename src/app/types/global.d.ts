declare module "*.module.css";
declare module "*.module.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}
