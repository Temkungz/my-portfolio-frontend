// components/Section.tsx
interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Section({ title, children }: SectionProps) {
    return (
      <div className="mb-8 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    );
  }