const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto items-center px-4">
      {children}
    </section>
  );
};

export default SectionContainer;
