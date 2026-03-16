import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import './radix-showcase.css';

export default function RadixShowcase() {
  return (
    <section className="radix-demo">
      <h3>Composants Radix UI (démo)</h3>

      <Tabs.Root className="rt-tabs" defaultValue="presentation">
        <Tabs.List className="rt-tablist" aria-label="Sections">
          <Tabs.Trigger className="rt-trigger" value="presentation">Presentation</Tabs.Trigger>
          <Tabs.Trigger className="rt-trigger" value="veille">Veille</Tabs.Trigger>
          <Tabs.Trigger className="rt-trigger" value="documents">Documents</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="rt-content" value="presentation">
          Structure profil, parcours, projets et portfolio.
        </Tabs.Content>
        <Tabs.Content className="rt-content" value="veille">
          Publications techniques avec flux RSS.
        </Tabs.Content>
        <Tabs.Content className="rt-content" value="documents">
          Fichiers téléchargeables: CV, annexes et supports.
        </Tabs.Content>
      </Tabs.Root>

      <Accordion.Root className="ra-root" type="single" collapsible>
        <Accordion.Item className="ra-item" value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="ra-trigger">Pourquoi Radix ici ?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="ra-content">
            Pour utiliser des primitives accessibles et personnalisables (tabs, accordions, dialogs, etc.).
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="ra-item" value="item-2">
          <Accordion.Header>
            <Accordion.Trigger className="ra-trigger">Comment l'étendre ?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="ra-content">
            Ajouter d'autres composants Radix (Dialog, Dropdown, Toast) puis styliser avec tes tokens.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
