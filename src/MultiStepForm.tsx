import { useState } from "react";
import { StepPersonalInfo } from "./steps/StepPersonalInfo";
import { StepDetails } from "./steps/StepDetails";
import { StepNavigation } from "./components/StepNavigation";
import { StepReview } from "./steps/StepReview";

type PersonalInfo = {
  name: string;
  email: string;
  country: string;
};

type Details = {
  role: string;
  companySize: string;
  goal: string;
  notes: string;
};

export type FormData = {
  personalInfo?: PersonalInfo;
  details?: Details;
};

export function MultiStepForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = ["Personal Info", "Details", "Review"];

  function next() {
    setStepIndex((prev) => prev + 1);
  }

  function back() {
    setStepIndex((prev) => prev - 1);
  }

  function handleFinalSubmit() {
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      console.log("FINAL SUBMIT", data);
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    }, 1000);
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <StepNavigation steps={steps} currentStep={stepIndex} />
      <div className="my-8">
        {stepIndex === 0 && (
          <StepPersonalInfo
            initialValues={data.personalInfo}
            onNext={(values) => {
              setData((d) => ({ ...d, personalInfo: values }));
              next();
            }}
          />
        )}

        {stepIndex === 1 && (
          <StepDetails
            initialValues={data.details}
            onBack={back}
            onNext={(values) => {
              setData((d) => ({ ...d, details: values }));
              next();
            }}
          />
        )}

        {stepIndex === 2 && (
          <StepReview
            data={data}
            onBack={back}
            onSubmit={handleFinalSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
}
