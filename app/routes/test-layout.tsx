import { PageLayout } from "~/page-layout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
     return [
          { title: "Page Test Layout" },
          { name: "description", content: "Welcome to Page Test Layout!" },
     ];
}

export default function TestLayout() {
     return <PageLayout />;
}
