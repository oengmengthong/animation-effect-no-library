# Tooltip with Smart Placement

Demonstrates a tooltip that flips its placement when it would otherwise overflow the viewport edges. Utilizes JavaScript to detect available space around the target element and updates a `data-placement` attribute consumed by CSS.

## Notes
- Uses `pointerenter`/`pointerleave` and `focus`/`blur` for accessibility.
- Flips between top and bottom, and left and right depending on viewport boundaries.
- Respects `prefers-reduced-motion` to disable animation.
