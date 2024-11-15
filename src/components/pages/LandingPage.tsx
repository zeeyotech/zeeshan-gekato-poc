import axios from "axios";
import { useState } from "react";

import { Routes } from "react-router-dom";
import { ChainConfig } from "../ChainConfig";
import { Sidebar } from "../Sidebar";

function LandingPage() {
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
        selectedDataLayer,
      };
      const res = await axios.post("", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data);
      console.log("Response:", res.data); // Log the response data for debugging
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const disabled = [
    chainName,
    selectedFramework,
    selectedSettlement,
    selectedDataLayer,
  ].some((item) => item.length <= 0);

  return (
    <div className="min-h-screen bg-background">
      <Routes>
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
              setChainName={setChainName}
            />
          </div>
          <Sidebar disabled={disabled} submit={submit} />
        </div>
      </Routes>
    </div>
  );
}

export default LandingPage;
