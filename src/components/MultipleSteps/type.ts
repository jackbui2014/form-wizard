export interface IStep {
  id: string | number;
  component: string;
  progressBar?: string | number;
}
export interface ISteps {
  items: IStep[];
  currentStep: string;
}
