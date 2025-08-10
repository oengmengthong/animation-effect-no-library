# Popover Spring Open

Demonstrates a popover that springs open from the click origin using scale and blur.
Uses CSS variables to set `transform-origin` based on the trigger event, creating a
natural expansion effect.

## Notes
- Keyframe animation with overshoot gives a springy feel.
- Blur fades from 8px to clear as the popover scales in.
- Respects `prefers-reduced-motion` to show the popover without animation.
