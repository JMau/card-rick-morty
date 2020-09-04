```js script
import { html } from '@open-wc/demoing-storybook';
import '../card-rick-morty.js';

export default {
  title: 'CardRickMorty',
  component: 'card-rick-morty',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# CardRickMorty

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add card-rick-morty
```

```js
import 'card-rick-morty/card-rick-morty.js';
```

```js preview-story
export const Simple = () => html`
  <card-rick-morty></card-rick-morty>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <card-rick-morty title="Hello World"></card-rick-morty>
`;
```
