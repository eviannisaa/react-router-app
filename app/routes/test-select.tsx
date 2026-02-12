import { PageSelect } from "~/page-select";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
     return [
          { title: "Page Test Select" },
          { name: "description", content: "Welcome to Page Test Select!" },
     ];
}

export default function TestSelect() {
     return <PageSelect />;
}
