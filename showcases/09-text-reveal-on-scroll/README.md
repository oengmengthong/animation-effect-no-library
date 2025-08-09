# 09 — Text Reveal on Scroll

Text blocks reveal with a sliding clip-path as they enter the viewport using Intersection Observer.

## Accessibility
- Elements reveal instantly when `prefers-reduced-motion` is detected.
- Observer unobserves after revealing to avoid unnecessary work.
