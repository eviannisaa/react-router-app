import { PageLayoutForm } from "~/page-layout-form";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
     return [
          { title: "Page Test Layout Form" },
          { name: "description", content: "Welcome to Page Test Layout Form!" },
     ];
}

export default function TestLayoutForm() {
     return <PageLayoutForm />;
}
