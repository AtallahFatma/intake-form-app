import { FormField, Input, Select, Button } from "@AtallahFatma/design-system";
import { useState } from "react";

type Values = {
  name: string;
  email: string;
  country: string;
};

type Props = {
  initialValues?: Values;
  onNext: (values: Values) => void;
};

const countryOptions = [
  { label: "Select an option...", value: "" },
  { label: "France", value: "fr" },
  { label: "London", value: "uk" },
  { label: "United States", value: "us" },
];

export const StepPersonalInfo = ({ initialValues, onNext }: Props) => {
  const [values, setValues] = useState<Values>({
    name: initialValues?.name ?? "",
    email: initialValues?.email ?? "",
    country: initialValues?.country ?? "",
  });

  const [errors, setErrors] = useState<Partial<Values>>({});

  function validate(): boolean {
    const nextErrors: Partial<Values> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      console.log("VALIDATING EMAIL", values.email);
      nextErrors.email = "Enter a valid email address";
    }

    if (!values.country) {
      nextErrors.country = "Please select a country";
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
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormField label="Full Name" error={errors.name} >
          <Input
            placeholder="Jane Doe"
            value={values.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, name: e.target.value })
            }
            className="w-full"
          />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <Input
            value={values.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues((v) => ({ ...v, email: e.target.value }))
            }
            placeholder="jane@example.com"
            className="w-full"
          />
        </FormField>
        <FormField label="Country" error={errors.country}>
          <Select
            options={countryOptions}
            value={values.country}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setValues({ ...values, country: e.target.value })
            }
            className="w-full"
          />
        </FormField>
        <div className="flex justify-end">
          <Button type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
