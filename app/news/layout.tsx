import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Prop = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Prop) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
