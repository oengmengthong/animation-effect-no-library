# 09 — Text Reveal on Scroll

Text blocks slide in with a `clip-path` mask and subtle fade/translate animation as they enter the viewport using Intersection Observer.

## Accessibility
- Elements reveal instantly when `prefers-reduced-motion` is detected.
- Observer unobserves after revealing to avoid unnecessary work.
