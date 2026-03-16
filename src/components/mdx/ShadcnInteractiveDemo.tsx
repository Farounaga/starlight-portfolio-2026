import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function ShadcnInteractiveDemo() {
  return (
    <>
      <Tabs defaultValue="presentation" className="mt-6">
        <TabsList>
          <TabsTrigger value="presentation">Presentation</TabsTrigger>
          <TabsTrigger value="veille">Veille</TabsTrigger>
        </TabsList>
        <TabsContent value="presentation">Contenu de la section présentation.</TabsContent>
        <TabsContent value="veille">Contenu de la section veille.</TabsContent>
      </Tabs>

      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Pourquoi ce setup ?</AccordionTrigger>
          <AccordionContent>
            Pour te laisser écrire du contenu rapidement sans te battre avec l'UI.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
