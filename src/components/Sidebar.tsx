import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Sidebar({
  disabled,
  submit,
}: {
  disabled: boolean;
  submit: (e: any) => void;
}) {
  return (
    <div className="w-80 border-l bg-muted/10 p-6 space-y-4">
      {/*<div>
        <h3 className="text-lg font-semibold">Testnet Stack</h3>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="text-lg">🔵</div>
            <span className="text-sm">Arbitrum Orbit Framework</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-lg">🔷</div>
            <span className="text-sm">Ethereum Settlement layer</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-lg">🔷</div>
            <span className="text-sm">Ethereum DA layer</span>
          </div>
        </div>
      </div>

      <Separator />*/}

      <div>
        <h3 className="text-lg font-semibold">Native Token</h3>
        <div className="flex items-center space-x-2">
          <div className="text-lg">🔷</div>
          <span className="text-sm">ETH</span>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold">Others</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Customizable block explorer</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Best in class tx debugger, tracer and simulator</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Canonical + cross chain bridge</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Private RPC with nodes autoscale</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Priority support</span>
          </div>
        </div>
      </div>

      <Card className="mt-auto p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Deployment cost</span>
              <span className="font-semibold">FREE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Time to deploy</span>
              <span className="font-semibold">~30 mins</span>
            </div>
            <Separator />
            {/*<div className="flex items-center justify-between">*/}
            {/*  <span className="text-sm">Monthly cost</span>*/}
            {/*  <span className="font-semibold">$99</span>*/}
            {/*</div>*/}
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={(e) => (disabled ? () => {} : submit(e))}
              disabled={disabled}
              className={`${disabled ? "cursor-not-allowed" : ""}`}
            >
              Deploy
              <span className="ml-2">→</span>
            </Button>
          </div>
          <div className="mt-6 flex justify-end">
            <Button className="p-0 m-0 text-red-500 underline bg-transparent border-none shadow-none hover:bg-transparent hover:no-underline appearance-none">
              Destroy
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
