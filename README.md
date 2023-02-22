# vidstack-example-bug

When you run these steps

1. `yarn`
2. `yarn start`

You should get this error

```
@parcel/core: Failed to resolve 'vidstack' from './node_modules/@vidstack/react/dist/prod.js'

  /home/vlady/code/vidstack-example-bug/node_modules/@vidstack/react/dist/prod.js:149:49
    148 | import { useReactContext as useReactContext5 } from "maverick.js/react";
  > 149 | import { sliderStore, sliderStoreContext } from "vidstack";
  >     |                                                 ^^^^^^^^^^
    150 | function useSliderStore(ref) {
    151 |   const $store = useReactContext5(sliderStoreContext);
```
