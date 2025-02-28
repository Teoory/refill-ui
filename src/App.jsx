import React from 'react';
import { RfButton, RfIcon } from 'refill-ui';
import 'refill-ui/style';

function App() {
  return (
    <div className="container">

      <div>
        <RfIcon icon="info"/>
        <RfIcon icon="eye"/>        
      </div>

      
      <h1>Refill UI Button Examples</h1>
      
      <div>
        <h2>Variants</h2>
        <section>
          <RfButton>Primary Button</RfButton>
          <RfButton variant="secondary">Success Outline</RfButton>
          <RfButton variant="tertiary">Tertiary Button</RfButton>
        </section>
      </div>

      <div>
        <h2>Acts (States)</h2>
        <section>
          <RfButton acts="success">Success Button</RfButton>
          <RfButton acts="danger">Danger Button</RfButton>
          <RfButton variant="secondary" acts="success">Success Outline</RfButton>
          <RfButton variant="secondary" acts="danger">Danger Outline</RfButton>
          <RfButton variant="tertiary" acts="success">Success Text</RfButton>
          <RfButton variant="tertiary" acts="danger">Danger Text</RfButton>
        </section>
      </div>

      <div>
        <h2>Sizes</h2>
        <section>
          <RfButton size="small">Small Button</RfButton>
          <RfButton>Medium Button</RfButton>
          <RfButton size="large">Large Button</RfButton>
        </section>
      </div>

      <div>
        <h2>With Icons</h2>
        <section>
          <RfButton icon="info">With Icon</RfButton>
          <RfButton variant="secondary" icon="info">With Icon</RfButton>
          <RfButton variant="tertiary" icon="info">With Icon</RfButton>
          <RfButton acts="success" icon="check">Success with Icon</RfButton>
          <RfButton acts="danger" icon="close">Danger with Icon</RfButton>
        </section>
      </div>

      <div>
        <h2>Icon Only</h2>
        <section>
          <RfButton icon="info" label="Info"/>
          <RfButton variant="secondary" icon="info" label="Info"/>
          <RfButton variant="tertiary" icon="info" label="Info"/>
          <RfButton acts="success" icon="check" label="Success"/>
          <RfButton acts="danger" icon="close" label="Danger"/>
        </section>
      </div>

      <div>
        <h2>States</h2>
        <section>
          <RfButton loading>Loading Button</RfButton>
          <RfButton disabled>Disabled Button</RfButton>
          <RfButton loading size="small">Small Loading</RfButton>
          <RfButton loading size="large">Large Loading</RfButton>
        </section>
      </div>

      <div>
        <h2>Links</h2>
        <section>
          <RfButton href="#">Link Button</RfButton>
          <RfButton href="#" variant="secondary">Link Button</RfButton>
          <RfButton href="#" variant="tertiary">Link Button</RfButton>
          <RfButton href="#" acts="success">Success Link</RfButton>
          <RfButton href="#" acts="danger">Danger Link</RfButton>
        </section>
      </div>

      <div>
        <h2>Combined Examples</h2>
        <section>
          <RfButton size="small" acts="success" icon="check">Small Success</RfButton>
          <RfButton variant="secondary" acts="danger" icon="close" loading>Loading Danger</RfButton>
          <RfButton variant="tertiary" size="large" icon="info" href="#">Large Link</RfButton>
        </section>
      </div>
    </div>
  );
}

export default App;