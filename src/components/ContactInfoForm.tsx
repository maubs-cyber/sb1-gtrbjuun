import { ContactInfo } from '../types/form';
import { FormField } from './FormField';
import { Input } from './Input';
import { Button } from './Button';

interface ContactInfoFormProps {
  data: ContactInfo;
  onBack: () => void;
  onNext: (data: ContactInfo) => void;
}

export function ContactInfoForm({ data, onBack, onNext }: ContactInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Name" required>
        <Input
          type="text"
          value={data.name}
          onChange={(e) => onNext({ ...data, name: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Title">
        <Input
          type="text"
          value={data.title}
          onChange={(e) => onNext({ ...data, title: e.target.value })}
        />
      </FormField>

      <FormField label="Email" required>
        <Input
          type="email"
          value={data.email}
          onChange={(e) => onNext({ ...data, email: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Phone" required>
        <Input
          type="tel"
          value={data.phone}
          onChange={(e) => onNext({ ...data, phone: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Preferred Communication Method">
        <select
          value={data.contactMethod}
          onChange={(e) => onNext({ ...data, contactMethod: e.target.value as 'email' | 'phone' | 'other' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="other">Other</option>
        </select>
      </FormField>

      <FormField label="Best Time to Contact">
        <Input
          type="text"
          value={data.bestTime}
          onChange={(e) => onNext({ ...data, bestTime: e.target.value })}
          placeholder="e.g., Weekdays 9AM-5PM EST"
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