import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
     index("routes/home.tsx"),
     route("test-layout", "routes/test-layout.tsx"),
     route("test-layout-form", "routes/test-layout-form.tsx"),
     route("test-select", "routes/test-select.tsx"),
] satisfies RouteConfig;
