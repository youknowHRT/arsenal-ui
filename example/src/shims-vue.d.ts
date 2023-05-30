declare module "*.vue" {
  import { DefineComponent } from "vue";
  const components: DefineComponent<{}, {}, any>;
  export default components;
}