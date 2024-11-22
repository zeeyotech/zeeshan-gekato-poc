import {useEffect, useState} from "react";
import axios from "axios";

import {Card} from "@/components/ui/card";
import {RadioGroup} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Option from "./Option";

const frameworks: OptionType[] = [
  {
    id: "op-stack",
    name: "OP Stack",
    logo: "🔴"
  },
  {
    id: "arbitrum-orbit",
    name: "Arbitrum Orbit",
    logo: "🔵",
    disabled: false,
  },
  {
    id: "polygon-cdk",
    name: "Polygon CDK",
    logo: "💜",
    disabled: true,
    disabledReason: "Available in Q2 2024",
  },
];

const settlementLayers: OptionType[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    logo: "🔷",
  },
  {
    id: "base",
    name: "Base",
    logo: "🔵",
    disabled: true,
    disabledReason: "Coming soon",
  },
  {
    id: "arbitrum-one",
    name: "Arbitrum One",
    logo: "🔵",
    disabled: true,
    disabledReason: "Coming soon",
  },
];

const dataLayers: OptionType[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    logo: "🔷",
  },
  {
    id: "anytrust",
    name: "Anytrust",
    logo: "🔵",
    disabled: true,
    disabledReason: "Coming soon",
  },
  {
    id: "celestia",
    name: "Celestia",
    logo: "🟣",
    disabled: true,
    disabledReason: "Coming soon",
  },
  {
    id: "eigen-da",
    name: "Eigen DA",
    logo: "⚪",
    disabledReason: "Coming soon",
    disabled: true
  },
];
type Props =  {
  selectedFramework: string,
  selectedSettlement: string,
  selectedDataLayer: string,
  setSelectedFramework: any,
  setSelectedSettlement: any,
  setSelectedDataLayer: any,
  chainName: string,
  chainId: string,
  setChainName: any
}
export function ChainConfig(props: Props) {
  const {
    chainName,
    chainId,
    setChainName,
    selectedFramework,
    selectedSettlement,
    selectedDataLayer,
    setSelectedDataLayer,
    setSelectedSettlement,
    setSelectedFramework
  } = props
  const [, setLogs] = useState(null);

  const handleFrameworkChange = (value: string) => {
    setSelectedFramework(value);
  };

  const handleSettlementChange = (value: string) => {
    setSelectedSettlement(value);
  };

  const handleDataLayerChange = (value: string) => {
    setSelectedDataLayer(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('');
        console.log('API Response:', response.data);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container py-6 px-10">
      {/* <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Chain</h1>
          <p className="text-muted-foreground">Configure your chain</p>
        </div>
         <Button variant="ghost">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button> 
      </div> */}

      <Card className="p-6 max-h-[450px] overflow-x-auto">
        <div className="space-y-6">
          <div className="flex gap-5">
          <div className="space-y-1 w-[70%]">
            <Label>Chain name</Label>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter chain name"
                value={chainName}
                onChange={(e) => setChainName(e.target.value)}
              />
              {/*<Button variant="outline" size="icon">*/}
              {/*  <RefreshCw className="h-4 w-4" />*/}
              {/*</Button>*/}
            </div>
            <p className="text-sm text-muted-foreground">
              Rollup name and Chain ID cannot be changed after deploying
            </p>
          </div>
            <div className="space-y-1 w-[30%]">
              <Label className={'text-muted-foreground'}>Chain id</Label>
              <div className="flex space-x-2">
                <Input
                    readOnly
                    disabled
                    value={chainId}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Chain id is auto generated
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Framework</Label>
            <RadioGroup
                className="grid grid-cols-3 gap-4"
              value={selectedFramework}
              onValueChange={handleFrameworkChange}
            >
              {frameworks.map((framework) => (
                <Option key={framework.id} option={framework} />
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Label>Settlement Layer</Label>
            <RadioGroup
              className="grid grid-cols-3 gap-4"
              value={selectedSettlement}
              onValueChange={handleSettlementChange}
            >
              {settlementLayers.map((layer) => (
                <Option key={layer.id} option={layer} />
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Label>Data Availability Layer</Label>
            <RadioGroup
              className="grid grid-cols-4 gap-4"
              value={selectedDataLayer}
              onValueChange={handleDataLayerChange}
            >
              {dataLayers.map((layer) => (
                <Option key={layer.id} option={layer} />
              ))}
            </RadioGroup>
          </div>
        </div>
      </Card>
    </div>
  );
}
