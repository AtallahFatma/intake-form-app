import { Button } from "@AtallahFatma/design-system";
import type { FormData } from "../MultiStepForm";

type Props = {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
};

export function StepReview({
  data,
  onBack,
  onSubmit,
  isSubmitting,
}: Props) {
  const { personalInfo, details } = data;

  return (
    <div className="flex flex-col gap-4">

      {/* Personal Info */}
      <Section title="Personal Information">
        <Row label="Full name" value={personalInfo?.name} />
        <Row label="Email" value={personalInfo?.email} />
        <Row label="Country" value={personalInfo?.country} />
      </Section>

      {/* Details */}
      <Section title="Details">
        <Row label="Role" value={details?.role} />
        <Row label="Company size" value={details?.companySize} />
        <Row label="Primary goal" value={details?.goal} />
        <Row label="Notes" value={details?.notes || "—"} />
      </Section>

      <div className="flex justify-between pt-4">
        <Button variant="secondary" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>

        <Button onClick={onSubmit} isLoading={isSubmitting}>
          Confirm & Submit
        </Button>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-6 flex flex-col gap-4">
      <h3 className="font-medium text-lg">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}: {' '}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

