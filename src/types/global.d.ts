
export {};

declare global {
    type OptionType = {
        id: string;
        name: string;
        logo: string;
        disabled?: boolean;
        disabledReason?: string
      }
      
}