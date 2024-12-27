import { CompanyInfo } from '../types/form';
import { FormField } from './FormField';
import { Input } from './Input';
import { Button } from './Button';

interface CompanyInfoFormProps {
  data: CompanyInfo;
  onNext: (data: CompanyInfo) => void;
}

export function CompanyInfoForm({ data, onNext }: CompanyInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Legal Business Name" required>
        <Input
          type="text"
          value={data.businessName}
          onChange={(e) => onNext({ ...data, businessName: e.target.value })}
          required
        />
      </FormField>

      <FormField label="DBA (if applicable)">
        <Input
          type="text"
          value={data.dba}
          onChange={(e) => onNext({ ...data, dba: e.target.value })}
        />
      </FormField>

      <FormField label="Primary Business Address" required>
        <Input
          type="text"
          value={data.address}
          onChange={(e) => onNext({ ...data, address: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Website">
        <Input
          type="url"
          value={data.website}
          onChange={(e) => onNext({ ...data, website: e.target.value })}
        />
      </FormField>

      <FormField label="Industry" required>
        <Input
          type="text"
          value={data.industry}
          onChange={(e) => onNext({ ...data, industry: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Number of Employees" required>
        <Input
          type="number"
          min="1"
          value={data.employees}
          onChange={(e) => onNext({ ...data, employees: parseInt(e.target.value) })}
          required
        />
      </FormField>

      <FormField label="Annual Revenue Range" required>
        <div className="space-y-2">
          {['$0-$500K', '$500K-$1M', '$1M-$5M', '$5M+'].map((range) => (
            <label key={range} className="flex items-center space-x-2">
              <input
                type="radio"
                name="revenueRange"
                value={range}
                checked={data.revenueRange === range}
                onChange={(e) => onNext({ ...data, revenueRange: e.target.value })}
                className="text-green-500 focus:ring-green-500"
              />
              <span>{range}</span>
            </label>
          ))}
        </div>
      </FormField>

      <div className="mt-8 flex justify-end">
        <Button type="submit">Next Step</Button>
      </div>
    </form>
  );
}