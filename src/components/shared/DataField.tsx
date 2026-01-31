interface DataFieldProps {
  label: string;
  value: string | number | null | undefined;
  className?: string;
}

export function DataField({ label, value, className = "" }: DataFieldProps) {
  const displayValue = value === null || value === undefined || value === "" 
    ? "Not Available" 
    : value;
  
  const isNotAvailable = displayValue === "Not Available";

  return (
    <div className={className}>
      <p className="data-label mb-1">{label}</p>
      <p className={`data-value ${isNotAvailable ? 'text-muted-foreground italic' : ''}`}>
        {displayValue}
      </p>
    </div>
  );
}
