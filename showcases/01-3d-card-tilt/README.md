# 01 — 3D Card Tilt on Cursor

CSS perspective with JavaScript pointer tracking for a subtle 3D tilt.
Move the pointer across the card to see it tilt toward the cursor.

## Accessibility
- Resets transform when pointer leaves so it doesn't stay rotated.
- Honors `prefers-reduced-motion` by disabling the tilt animation.
