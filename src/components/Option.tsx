import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

const Option = ({option: framework}:{option:OptionType}) => {
  return (
    <Tooltip key={framework.id}>
      <TooltipTrigger asChild>
        <Label
          className={`flex items-center h-[50px] rounded-md border-2 border-muted bg-transparent p-4 
              ${
                framework.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              }`}
        >
          <RadioGroupItem
            value={framework.id}
            className="sr-only"
            disabled={framework.disabled}
          />
          <span className="text-2xl mr-2">{framework.logo}</span>
          <span className="text-sm font-medium leading-none">
            {framework.name}
          </span>
        </Label>
      </TooltipTrigger>
      {framework.disabled && (  
        <TooltipContent>
          <p>{framework?.disabledReason}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export default Option;
