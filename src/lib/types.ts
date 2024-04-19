export interface CalculatorInputT {
  ref: string;
  label: string;
  type: "number" | "boolean" | "choice";
  default?: string | number | boolean;
  unit?: string;
}
