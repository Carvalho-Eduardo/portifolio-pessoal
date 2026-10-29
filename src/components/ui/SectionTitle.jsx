function SectionTitle({ children }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {children}
      </h2>

      <div className="mt-3 h-1 w-16 rounded-full bg-blue-500" />
    </div>
  );
}

export default SectionTitle;
