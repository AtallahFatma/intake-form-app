
import './App.css'
import { StepPersonalInfo } from './steps/StepPersonalInfo';

export default function App() {
  return (
    <main className="p-8">
      <h2>Client Intake</h2>
       
      <StepPersonalInfo
        onNext={(values) => {
          console.log("STEP 1 VALUES", values);
        }}
      />
    </main>
  );
}

