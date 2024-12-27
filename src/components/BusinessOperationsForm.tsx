import { BusinessOperations } from '../types/form';
import { FormField } from './FormField';
import { Input } from './Input';
import { Button } from './Button';

interface BusinessOperationsFormProps {
  data: BusinessOperations;
  onBack: () => void;
  onNext: (data: BusinessOperations) => void;
}

export function BusinessOperationsForm({ data, onBack, onNext }: BusinessOperationsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Customer Service Hours">
        <Input
          type="text"
          value={data.customerServiceHours}
          onChange={(e) => onNext({ ...data, customerServiceHours: e.target.value })}
          placeholder="e.g., Mon-Fri 9AM-6PM EST"
        />
      </FormField>

      <FormField label="Average Daily Customer Inquiries">
        <Input
          type="number"
          min="0"
          value={data.dailyInquiries}
          onChange={(e) => onNext({ ...data, dailyInquiries: parseInt(e.target.value) })}
        />
      </FormField>

      <div className="mt-8 flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Next Step</Button>
      </div>
    </form>
  );
}