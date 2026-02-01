type Props = {
  steps: string[];
  currentStep: number;
};

export function StepNavigation({ steps, currentStep }: Props) {
  return (
    <div className="flex items-center">
      {steps.map((label, index) => (
        <div key={label} className="flex-1 text-center">
          <div
            className={`${
              index === currentStep ? "text-primary font-bold" : "text-sm text-gray-400 font-medium"
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
