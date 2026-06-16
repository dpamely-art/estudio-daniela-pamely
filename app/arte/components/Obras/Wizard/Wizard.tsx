"use client";

import { useState } from "react";

import StepIdentity from "./StepIdentity";
import StepCuratorship from "./StepCuratorship";
import StepProduction from "./StepProduction";
import StepCommercial from "./StepCommercial";
import StepPreview from "./StepPreview";
import WizardNavigation from "./WizardNavigation";
import { WizardProvider } from "./WizardContext";

export default function Wizard() {
  const [step, setStep] = useState(0);

  return (
  <WizardProvider>
      {step === 0 && <StepIdentity />}

      {step === 1 && <StepCuratorship />}

      {step === 2 && <StepProduction />}

      {step === 3 && <StepCommercial />}

      {step === 4 && <StepPreview />}

            <WizardNavigation
        step={step}
        setStep={setStep}
      />
    </WizardProvider>
  );
}