type Props = {
  steps: string[];
  currentStep: number;
};

export function StepNavigation({ steps, currentStep }: Props) {
  return (
   <div className="mb-10">
      <div className="flex items-center justify-between relative">
        {/* Divider line */}
        <div className="absolute top-4 left-0 right-0 h-px bg-gray-200" />

        {steps.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={label}
              className="relative flex flex-col items-center flex-1"
            >
              {/* Circle */}
              <div
                className={`z-10 w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    isCompleted
                      ? "bg-primary text-white"
                      : isActive
                      ? "border-2 border-primary text-primary bg-white"
                      : "bg-white border border-gray-300 text-gray-400"
                  }
                `}
              >
                {index + 1}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-xs text-center transition-colors duration-200
                  ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-gray-400"
                  }
                `}
              >
                {label}
              </span>

              {/* Underline for active step */}
              {isActive && (
                <div className="mt-2 w-6 h-0.5 bg-primary rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
