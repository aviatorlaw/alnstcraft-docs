import { Layout } from 'fumadocs-ui/layout';
import { Heading } from 'fumadocs-ui/components/heading';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

export default function RulesPage() {
  return (
    <Layout 
      sidebar={{ enabled: false }} // Removes side document trees for a sleek single page
      nav={{ title: '⚔️ AlnstCraft' }}
    >
      <main className="container max-w-3xl py-12 px-4 mx-auto">
        <div className="text-center mb-12">
          <Heading as="h1" className="text-4xl font-bold mb-4 tracking-tight">
            Server Rules & Regulations
          </Heading>
          <p className="text-muted-foreground text-lg">
            Please read and follow these rules to keep our community safe and fair.
          </p>
        </div>

        <Accordions type="single" defaultValue="rule-1" className="space-y-4">
          <Accordion id="rule-1" title="1. No Griefing or Stealing">
            <p className="text-muted-foreground">
              Modifying or destroying blocks placed by other players without explicit permission is strictly prohibited. 
              Taking items from chests that do not belong to you will result in an immediate ban.
            </p>
          </Accordion>

          <Accordion id="rule-2" title="2. Respectful Behavior & Chat Rules">
            <p className="text-muted-foreground">
              Hate speech, toxicity, harassment, and excessive spamming in public chat are completely intolerable. 
              Be welcoming to new players!
            </p>
          </Accordion>

          <Accordion id="rule-3" title="3. No Hacked Clients or Unfair Advantages">
            <p className="text-muted-foreground">
              The use of fly hacks, X-Ray texture packs, killauras, or automated macros is strictly forbidden. 
              Only vanilla clients and approved performance-enhancing mods (like OptiFine or Sodium) are allowed.
            </p>
          </Accordion>
        </Accordions>

        <div className="mt-12 text-center p-6 bg-fd-muted border rounded-xl">
          <p className="font-medium text-sm">
            IP Address: <code className="bg-fd-background px-2 py-1 border rounded text-emerald-500">://alnstcraft.com</code>
          </p>
        </div>
      </main>
    </Layout>
  );
}
