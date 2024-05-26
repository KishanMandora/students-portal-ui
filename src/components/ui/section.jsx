function Section({ children }) {
  return (
    <section className="min-h-screen w-full dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 px-12">
      {children}
    </section>
  );
}

export default Section;
