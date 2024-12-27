import { Check, Circle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: { title: string; completed: boolean }[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-center">
          <div className="relative">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                step.completed
                  ? 'bg-green-500 border-green-500'
                  : index === currentStep
                  ? 'border-green-500 text-green-500'
                  : 'border-gray-300 text-gray-300'
              }`}
            >
              {step.completed ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium">
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-20 h-0.5 ${
                step.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}