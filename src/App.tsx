import { ThemeProvider } from "next-themes";
import { ChainConfig } from "./components/ChainConfig";
import { Sidebar } from "./components/Sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          {/* <Navbar /> */}
          <div className="flex">
            <div className="flex-1">
              <ChainConfig />
            </div>
            <Sidebar />
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
