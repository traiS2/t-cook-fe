"use client";
import { BreadcrumbNavigation } from "@/app/components";
import { FirstStep, SecondStep, ThirdStep } from "@/app/components";
import clsx from "clsx";
import { useState } from "react";

export default function Page() {
  interface Navigation {
    name: string;
    href: string;
    current: boolean;
  }

  const navigations: Navigation[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      current: false,
    },
    {
      name: "Blog",
      href: "/dashboard/blog",
      current: false,
    },
    {
      name: "Create",
      href: "/dashboard/blog/create",
      current: true,
    },
  ];

  interface Step {
    id: number;
    name: string;
    component: JSX.Element;
  }

  const steps: Step[] = [
    { id: 1, name: "Bước 1", component: <FirstStep /> },
    {
      id: 2,
      name: "Bước 2",
      component: <SecondStep />,
    },
    {
      id: 3,
      name: "Bước 3",
      component: <ThirdStep />,
    },
  ];

  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  const handleClickedStep = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <div className="w-full h-auto p-2 bg-sixth-color rounded-md">
      <BreadcrumbNavigation navigations={navigations} />
      <div className="flex items-center justify-evenly w-full h-auto rounded-md p-2 bg-primary-color">
        {steps.map((step, index) => (
          <button
            key={index}
            className="group flex items-center justify-center border border-second-color rounded-md px-2"
            onClick={() => handleClickedStep(step)}
          >
            <div className="flex flex-row w-full gap-2 items-center justify-center text-fourth-color">
              <div
                className={clsx(
                  "w-4 h-4 bg-second-color rounded-full group-hover:bg-third-color",
                  {
                    "!bg-third-color ": currentStep.id === step.id,
                  }
                )}
              ></div>
              <p
                className={clsx("", {
                  "font-bold": currentStep.id === step.id,
                })}
              >
                {step.name}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="w-full min-h-[82vh] mt-2 py-2 px-1 rounded-md bg-primary-color">
        {currentStep.component}
      </div>
    </div>
  );
}
