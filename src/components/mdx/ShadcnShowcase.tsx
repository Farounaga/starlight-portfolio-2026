import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Progress } from '../ui/progress';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Textarea } from '../ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function ShadcnShowcase() {
  const [progress, setProgress] = useState(66);

  return (
    <div className='space-y-8'>
      <Card>
        <CardHeader>
          <CardTitle>Buttons + Badge + Avatar</CardTitle>
          <CardDescription>Éléments de base pour actions et identité visuelle.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex flex-wrap gap-2'>
            <Button>Default</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Badge>Badge</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
          </div>
          <div className='flex items-center gap-3'>
            <Avatar>
              <AvatarImage src='/images/placeholder-project.svg' alt='Avatar demo' />
              <AvatarFallback>VP</AvatarFallback>
            </Avatar>
            <p className='text-sm text-muted-foreground'>Avatar avec image + fallback.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form controls</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Nom</Label>
            <Input id='name' placeholder='Jean Dupont' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='role'>Rôle</Label>
            <Select defaultValue='dev'>
              <SelectTrigger id='role'>
                <SelectValue placeholder='Choisir un rôle' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='dev'>Développeur</SelectItem>
                <SelectItem value='designer'>Designer</SelectItem>
                <SelectItem value='pm'>Chef de projet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-2 md:col-span-2'>
            <Label htmlFor='bio'>Bio</Label>
            <Textarea id='bio' placeholder='Parle de ton parcours...' />
          </div>
          <div className='flex items-center gap-3'>
            <Checkbox id='newsletter' defaultChecked />
            <Label htmlFor='newsletter'>Recevoir les nouveautés</Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='notif' defaultChecked />
            <Label htmlFor='notif'>Notifications activées</Label>
          </div>
          <div className='space-y-2'>
            <Label>Disponibilité</Label>
            <RadioGroup defaultValue='open'>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='open' id='open' />
                <Label htmlFor='open'>Ouvert aux missions</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='busy' id='busy' />
                <Label htmlFor='busy'>Complet</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Table + Progress + Alert</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Projet</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Tech</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Portfolio</TableCell>
                <TableCell>En cours</TableCell>
                <TableCell>Astro / Tailwind</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dashboard</TableCell>
                <TableCell>Terminé</TableCell>
                <TableCell>React / API</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className='space-y-2'>
            <div className='flex items-center justify-between text-sm'>
              <span>Progression du portfolio</span>
              <button className='underline' onClick={() => setProgress((p) => (p >= 100 ? 25 : p + 10))}>+10%</button>
            </div>
            <Progress value={progress} />
          </div>

          <Alert>
            <AlertTitle>Conseil</AlertTitle>
            <AlertDescription>Commence en Markdown pur, puis ajoute des composants seulement quand nécessaire.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Tabs defaultValue='media'>
        <TabsList>
          <TabsTrigger value='media'>Media</TabsTrigger>
          <TabsTrigger value='faq'>FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value='media' className='space-y-4'>
          <img src='/images/placeholder-project.svg' alt='Exemple d’image projet' className='w-full max-w-md rounded-md border' />
          <video controls className='w-full max-w-md rounded-md border'>
            <source src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' type='video/mp4' />
          </video>
        </TabsContent>
        <TabsContent value='faq'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Dois-je utiliser tous les composants ?</AccordionTrigger>
              <AccordionContent>Non. Utilise seulement ceux qui servent ton contenu.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Puis-je rester en markdown ?</AccordionTrigger>
              <AccordionContent>Oui, totalement. C&apos;est même recommandé pour aller vite.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <Separator />
    </div>
  );
}
