// components/Section.tsx
interface SectionProps{ //interface for defining the props of the Section component
  title: string | string[] //string | string[] คือสามารถส่งค่าเป็น string หรือ array ของ string ก็ได้
  children: React.ReactNode
}

//Object destructuring
export default  function Section({title,children}: SectionProps) {
  return (
    <div className="mb-8 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">{title}</h2> 
      {children}
    </div>
  );
};

