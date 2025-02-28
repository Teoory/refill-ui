# Refill UI

![npm version](https://img.shields.io/npm/v/refill-ui?style=flat-square)
![license](https://img.shields.io/npm/l/refill-ui?style=flat-square)
![downloads](https://img.shields.io/npm/dt/refill-ui?style=flat-square)
![jsdelivr](https://data.jsdelivr.com/v1/package/npm/refill-ui/badge)
![stars](https://img.shields.io/github/stars/Teoory/refill-ui?style=flat-square)
![issues](https://img.shields.io/github/issues/Teoory/refill-ui?style=flat-square)
![contributors](https://img.shields.io/github/contributors/Teoory/refill-ui?style=flat-square)
![commit activity](https://img.shields.io/github/commit-activity/m/Teoory/refill-ui?style=flat-square)
![commit activity weekly](https://img.shields.io/github/commit-activity/w/Teoory/refill-ui?style=flat-square)
![commit activity yearly](https://img.shields.io/github/commit-activity/y/Teoory/refill-ui?style=flat-square)



## Refill UI

Modern, özelleştirilebilir React UI bileşenleri kütüphanesi. Web Components desteği ile birlikte gelir.

### Bağlantılar

- [NPM Package](https://www.npmjs.com/package/refill-ui)
- [GitHub Repository](https://github.com/Teoory/refill-ui)
- [Discord](https://discord.gg/8pT6yjhuMt)
- [Docs](https://refill-ui-docs.vercel.app/)

## Hızlı Başlangıç

### Kurulum

```sh
npm install refill-ui
```

### Kullanım

```jsx
import { RfButton, RfIcon, RfBadge, RfInput, RfAlert, RfDropdown, RfDropdownItem } from 'refill-ui';
import 'refill-ui/style';

function App() {
  return (
    <div>
      <RfButton>Hello World</RfButton>
      <RfIcon icon="info" size={24} />
      <RfBadge color="red" size="small">
        Badge
      </RfBadge>
      <RfInput label="Name" placeholder="Enter Your Name" />
      <RfAlert color="success" title="Success" description="This is a success alert" />
      <RfDropdown header="Dropdown Button">
        <RfDropdownItem>Action 1</RfDropdownItem>
        <RfDropdownItem>Action 2</RfDropdownItem>
      </RfDropdown>
    </div>
  );
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/refill-ui@latest/dist/refill-ui.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/refill-ui@latest/dist/refill-ui.min.css">

<refill-button>Hello World</refill-button>
<refill-icon icon="info" size="24"></refill-icon>
<refill-badge color="red" size="small">Badge</refill-badge>
<refill-input label="Name" placeholder="Enter Your Name"></refill-input>
<refill-alert color="success" title="Success" description="This is a success alert"></refill-alert>
```

## Özellikler

✅ **Modern Tasarım** - Güncel tasarım trendlerine uygun, modern ve şık komponentler.

✅ **Web Components** - Framework bağımsız kullanım için Web Components desteği.

✅ **Özelleştirilebilir** - SCSS değişkenleri ile kolay özelleştirme imkanı.

✅ **TypeScript Desteği** - Tam TypeScript desteği ile tip güvenliği.

Daha fazla bilgi için [dokümantasyona göz atın](https://refill-ui-docs.vercel.app/).