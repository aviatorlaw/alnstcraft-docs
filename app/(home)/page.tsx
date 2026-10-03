import { Layout } from 'fumadocs-ui/layouts/home'; // Custom single-page home layout
import { Heading } from 'fumadocs-ui/components/heading';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

export default function RulesPage() {
  return (
    <Layout nav={{ title: 'ALNSTCRAFT' }}>
      <main className="container max-w-3xl py-12 px-4 mx-auto">
        <Heading as="h1" className="text-4xl font-bold mb-4 text-center">
          Server Rules & Regulations
        </Heading>
        <Accordions type="single" defaultValue="rule-1" className="space-y-4">
          <Accordion id="rule-1" title="1. No Griefing or Stealing">
            <p>Prohibited block destruction.</p>
          </Accordion>
          <Accordion id="rule-2" title="2. Respectful Behavior">
            <p>No chat toxicity.</p>
          </Accordion>
          <Accordion id="rule-3" title="3. No Hacked Clients">
            <p>Vanilla clients or approved performance mods only.</p>
          </Accordion>
        </Accordions>
      </main>
    </Layout>
  );
}