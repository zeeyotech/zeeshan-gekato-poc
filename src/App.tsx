import axios from "axios";
import {useEffect, useState} from "react";

import { ChainConfig } from "./components/ChainConfig";
import { Sidebar } from "./components/Sidebar";
import {BASE_URL} from "@/constants.tsx";
import {useNavigate} from "react-router-dom";
import {generateSlug} from "@/lib/string.ts";

function App() {
  const [, setResponse] = useState(null);
  const [chainName, setChainName] = useState("");
  const [chainId, setChainId] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("arbitrum-orbit");
  const [selectedSettlement, setSelectedSettlement] = useState("ethereum");
  const [selectedDataLayer, setSelectedDataLayer] = useState("ethereum");
  const navigate = useNavigate();

  async function submit(e: any) {
    e.preventDefault();

    // try {
    //   const response = await apiRequest({
    //     url: "/users",
    //     method: "POST",
    //     body: { name: "John Doe", email: "john@example.com" },
    //   });
    //   console.log("Post Response:", response.data);
    // } catch (error) {
    //   console.error("Post Error:", error);
    // }

    // try {
      const data = {
        chainName,
        selectedFramework,
        selectedSettlement,
        selectedDataLayer,
      };
      console.log("here is data", data);

      const res = await axios.post(`${BASE_URL}/run-script`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data);
    navigate(`/${chainId}`)
      console.log("Response:", res.data); // Log the response data for debugging
    // } catch (error) {
    //   console.error("Error posting data:", error);
    // }
  }

  const disabled = [
    chainName,
    selectedFramework,
    selectedSettlement,
    selectedDataLayer,
  ].some((item) => item.length <= 0);

  useEffect(() => {
    setChainId(generateSlug(chainName));
  }, [chainName]);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <div className="flex">
        <div className="flex-1">
          <ChainConfig
              chainId={chainId}
            selectedDataLayer={selectedDataLayer}
            selectedFramework={selectedFramework}
            selectedSettlement={selectedSettlement}
            setSelectedDataLayer={setSelectedDataLayer}
            setSelectedFramework={setSelectedFramework}
            setSelectedSettlement={setSelectedSettlement}
            chainName={chainName}
            setChainName={setChainName}
          />
        </div>
        <Sidebar disabled={disabled} submit={submit} />
      </div>
    </div>
  );
}

export default App;
