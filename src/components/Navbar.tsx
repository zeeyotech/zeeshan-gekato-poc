import { Button } from "@/components/ui/button";
import { CircuitBoard } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <div className="flex items-center space-x-4">
          <CircuitBoard className="h-6 w-6" />
          <span className="font-semibold">Chain Deploy</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </nav>
  );
}