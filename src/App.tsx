import axios from "axios";
import {useState} from "react";
import {ThemeProvider} from "next-themes";
import {ChainConfig} from "./components/ChainConfig";
import {Sidebar} from "./components/Sidebar";
import {TooltipProvider} from "@/components/ui/tooltip";

function App() {
  const [, setResponse] = useState(null);
  const [chainName, setChainName] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("arbitrum-orbit");
  const [selectedSettlement, setSelectedSettlement] = useState("ethereum");
  const [selectedDataLayer, setSelectedDataLayer] = useState("ethereum");

  async function submit(e: any) {
    e.preventDefault();

    try {
      const data = {
        chainName,
        selectedFramework,
        selectedSettlement,
        selectedDataLayer
      }
      const res = await axios.post('', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResponse(res.data);
      console.log('Response:', res.data);  // Log the response data for debugging
    } catch (error) {
      console.error('Error posting data:', error);
    }

  }

  const disabled = [chainName, selectedFramework, selectedSettlement, selectedDataLayer].some((item) => item.length <= 0);

  return (
      <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          {/* <Navbar /> */}
          <div className="flex">
            <div className="flex-1">
              <ChainConfig
                  selectedDataLayer={selectedDataLayer}
                  selectedFramework={selectedFramework}
                  selectedSettlement={selectedSettlement}
                  setSelectedDataLayer={setSelectedDataLayer}
                  setSelectedFramework={setSelectedFramework}
                  setSelectedSettlement={setSelectedSettlement}
                  chainName={chainName}
                  setChainName={setChainName}/>
            </div>
            <Sidebar disabled={disabled} submit={submit}/>
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
