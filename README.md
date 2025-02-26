# Refill UI

Modern, özelleştirilebilir React UI bileşenleri kütüphanesi. Web Components desteği ile birlikte gelir.

## Iconlar
```jsx
<RfButton icon="info">With Icon</RfButton>
<RfButton icon="check">With Icon</RfButton>
<RfButton icon="close">With Icon</RfButton>
<RfButton icon="arrow-left">With Icon</RfButton>
<RfButton icon="arrow-right">With Icon</RfButton>
<RfButton icon="arrow-up">With Icon</RfButton>
<RfButton icon="arrow-down">With Icon</RfButton>
```




## Kurulum

```bash
npm install refill-ui
```

## Kullanım

### React ile kullanım

```jsx
import { RfButton, RfIcon } from 'refill-ui';
import 'refill-ui/style';

function App() {
  return (
    <div>
      {/* Temel Kullanım */}
      <RfIcon icon="info" size={24} />
      <RfButton>Primary Button</RfButton>
      <RfButton variant="secondary">Secondary Button</RfButton>
      <RfButton variant="tertiary">Tertiary Button</RfButton>

      {/* Acts Özelliği */}
      <RfButton acts="success">Success Button</RfButton>
      <RfButton acts="danger">Danger Button</RfButton>

      {/* Icon Kullanımı */}
      <RfButton icon="info">With Icon</RfButton>
      <RfButton variant="tertiary" icon="info">Tertiary with Icon</RfButton>
      <RfButton acts="danger" icon="info">Danger with Icon</RfButton>

      {/* Sadece Icon */}
      <RfButton icon="info" label="active" />
      <RfButton acts="danger" icon="info" label="active" />

      {/* Boyut Çeşitleri */}
      <RfButton size="small">Small Button</RfButton>
      <RfButton size="medium">Medium Button</RfButton>
      <RfButton size="large">Large Button</RfButton>

      {/* Loading Durumu */}
      <RfButton loading>Loading Button</RfButton>
      <RfButton icon="info" size="small" loading>Loading</RfButton>

      {/* Disabled Durumu */}
      <RfButton disabled>Disabled Button</RfButton>

      {/* Link Olarak Kullanım */}
      <RfButton href="#" variant="tertiary">Link Button</RfButton>
    </div>
  );
}
```

### HTML ile Kullanım (Web Components)

```html
<!-- Temel Kullanım -->
<rf-icon icon="info" size="24"></rf-icon>
<rf-button>Primary Button</rf-button>
<rf-button variant="secondary">Secondary Button</rf-button>
<rf-button variant="tertiary">Tertiary Button</rf-button>

<!-- Acts Özelliği -->
<rf-button acts="success">Success Button</rf-button>
<rf-button acts="danger">Danger Button</rf-button>

<!-- Icon Kullanımı -->
<rf-button icon="info">With Icon</rf-button>
<rf-button variant="tertiary" icon="info">Tertiary with Icon</rf-button>
<rf-button acts="danger" icon="info">Danger with Icon</rf-button>

<!-- Sadece Icon -->
<rf-button icon="info" label="active"></rf-button>
<rf-button acts="danger" icon="info" label="active"></rf-button>

<!-- Boyut Çeşitleri -->
<rf-button size="small">Small Button</rf-button>
<rf-button size="medium">Medium Button</rf-button>
<rf-button size="large">Large Button</rf-button>

<!-- Loading Durumu -->
<rf-button loading>Loading Button</rf-button>
<rf-button icon="info" size="small" loading>Loading</rf-button>

<!-- Disabled Durumu -->
<rf-button disabled>Disabled Button</rf-button>

<!-- Link Olarak Kullanım -->
<rf-button href="#" variant="tertiary">Link Button</rf-button>
```

## Button Özellikleri

| Özellik  | Tip      | Varsayılan | Açıklama                                    |
|----------|----------|------------|---------------------------------------------|
| variant  | string   | 'primary'  | 'primary', 'secondary', 'tertiary'          |
| acts     | string   | -          | 'success', 'danger'                         |
| size     | string   | 'medium'   | 'small', 'medium', 'large'                 |
| icon     | string   | -          | Icon adı                                    |
| label    | boolean  | -          | Sadece icon gösterimi için                  |
| loading  | boolean  | false      | Loading durumu                              |
| disabled | boolean  | false      | Disabled durumu                             |
| href     | string   | -          | Link olarak kullanım için                   |

## Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretime hazır paket oluştur
npm run build
```

## Lisans

MIT