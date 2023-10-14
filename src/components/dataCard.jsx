import * as Cards from '@radix-ui/themes';

export default function DataCard() {

return (
<Cards.Card size="2" style={{ maxWidth: 240 }} className='data-card'>
    
  <Cards.Inset clip="padding-box" side="top" pb="current">
    <h2>Hello</h2>
  </Cards.Inset>
  <Cards.Text as="p" size="3" className='card-text'>
    <Cards.Strong>Typography</Cards.Strong> is the art and technique of arranging type to
    make written language legible, readable and appealing when displayed.is the art and technique of arranging type to
    make written language legible, readable and appealing when displayed
  </Cards.Text>
</Cards.Card>



);}

