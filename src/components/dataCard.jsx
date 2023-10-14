import * as Cards from '@radix-ui/themes';

export default function DataCard(mainHeader, secondHeader, bodyText) {
console.log("MAIN HEADER"+ mainHeader);
return (
<Cards.Card  className='data-card'>
    
  <Cards.Inset clip="padding-box" side="top" pb="current">
    <h2>{mainHeader}</h2>
  </Cards.Inset>
  <Cards.Text as="p" size="3" className='card-text'>
    <Cards.Strong>{secondHeader}</Cards.Strong> 
    {bodyText}
  </Cards.Text>
</Cards.Card>



);}

