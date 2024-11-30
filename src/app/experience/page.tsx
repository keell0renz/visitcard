import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Experience</Heading>
      <WorkHistory />
    </Container>
  );
}
