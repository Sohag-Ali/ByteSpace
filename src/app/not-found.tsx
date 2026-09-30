import type { Metadata } from "next";
import NotFoundClientView from "./NotFoundClientView";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return <NotFoundClientView />;
}
