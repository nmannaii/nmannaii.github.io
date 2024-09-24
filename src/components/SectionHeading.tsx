interface Props {
  children: React.ReactNode;
}
export default function SectionHeading({ children }: Props) {
  return (
    <h1 className="text-4xl text-center uppercase font-semibold tracking-widest text-white/75 mt-10 mb-5">
      {children}
    </h1>
  );
}
