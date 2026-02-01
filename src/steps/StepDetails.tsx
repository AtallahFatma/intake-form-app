import { useState } from "react";
import {
  FormField,
  Select,
  Textarea,
  Button,
} from "@AtallahFatma/design-system";

type Values = {
  role: string;
  companySize: string;
  goal: string;
  notes: string;
};

type Props = {
  initialValues?: Values;
  onBack: () => void;
  onNext: (values: Values) => void;
};

const roleOptions = [
    { label: "Select a role...", value: "" },
  { label: "Founder", value: "founder" },
  { label: "Product Manager", value: "pm" },
  { label: "Developer", value: "developer" },
  { label: "Designer", value: "designer" },
  { label: "Other", value: "other" },
];

const companySizeOptions = [
  { label: "Select a company size...", value: "" },
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "200+", value: "200+" },
];

const goalOptions = [
  { label: "Select a primary goal...", value: "" },
  { label: "Improve productivity", value: "productivity" },
  { label: "Increase revenue", value: "revenue" },
  { label: "Automate processes", value: "automation" },
  { label: "Explore new tools", value: "explore" },
];

export function StepDetails({ initialValues, onBack, onNext }: Props) {
  const [values, setValues] = useState<Values>({
    role: initialValues?.role ?? "",
    companySize: initialValues?.companySize ?? "",
    goal: initialValues?.goal ?? "",
    notes: initialValues?.notes ?? "",
  });

  const [errors, setErrors] = useState<Partial<Values>>({});

  function validate(): boolean {
    const nextErrors: Partial<Values> = {};

    if (!values.role) {
      nextErrors.role = "Please select your role";
    }

    if (!values.companySize) {
      nextErrors.companySize = "Please select company size";
    }

    if (!values.goal) {
      nextErrors.goal = "Please select your primary goal";
    }

    if (values.notes && values.notes.length > 300) {
      nextErrors.notes = "Notes must be 300 characters or fewer";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      onNext(values);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      noValidate
    >
      <FormField label="Role" error={errors.role}>
        <Select
          options={roleOptions}
          value={values.role}
          onChange={(e) =>
            setValues((v) => ({ ...v, role: e.target.value }))
          }
          className="w-full"
        />
      </FormField>

      <FormField label="Company size" error={errors.companySize}>
        <Select
          options={companySizeOptions}
          value={values.companySize}
          onChange={(e) =>
            setValues((v) => ({ ...v, companySize: e.target.value }))
          }
          className="w-full"
        />
      </FormField>

      <FormField label="Primary goal" error={errors.goal}>
        <Select
          options={goalOptions}
          value={values.goal}
          onChange={(e) =>
            setValues((v) => ({ ...v, goal: e.target.value }))
          }
          className="w-full"
        />
      </FormField>

      <FormField label="Additional notes" error={errors.notes}>
        <Textarea
          rows={4}
          value={values.notes}
          onChange={(e) =>
            setValues((v) => ({ ...v, notes: e.target.value }))
          }
          placeholder="Optional (max 300 characters)"
          className="w-full"
        />
      </FormField>

      <div className="flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>

        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
