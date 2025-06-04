### Użycie przez CDN

```html
<!-- Wersja IIFE (globalna zmienna) -->
<script src="https://cdn.jsdelivr.net/gh/karolkalinowski/javascript-utilities@main/dist/index.global.js"></script>
<script>
  console.log(JSUtils.sum(5, 10));
</script>

<!-- Wersja ESM -->
<script type="module">
  import { sum } from "https://cdn.jsdelivr.net/gh/karolkalinowski/javascript-utilities@main/dist/index.mjs";
  console.log(sum(5, 10));
</script>
```
