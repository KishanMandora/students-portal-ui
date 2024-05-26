function Section({ children }) {
  return (
    <section className="h-screen w-full dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 px-12">
      {children}
    </section>
  );
}

export default Section;
