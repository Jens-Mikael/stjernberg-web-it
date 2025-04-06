export default function FieldError({ error }: { error: string }) {
  return <span className="text-red-500 text-sm font-medium">{error}</span>;
}
