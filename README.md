Animation Effect — No Library (100 Modern Web UI Animations)

A curated playground of 100 single-page animation demos using only HTML, CSS, and vanilla JavaScript. No frameworks, no animation libraries—just clean, modern, performant UI motion you can copy-paste into real projects.
	•	Focus: micro-interactions, component motion, page transitions, parallax, SVG/CSS tricks
	•	Style: modern, smooth, and accessible where possible
	•	Constraint: no external libraries (no GSAP, no jQuery, no Tailwind). Pure web platform.

⸻

🚀 Getting Started

# clone
git clone [https://github.com/your-org/animation-effect-no-library.git](https://github.com/oengmengthong/animation-effect-no-library)
cd animation-effect-no-library

# open the index
# or use any static server
python3 -m http.server 8080

Each showcase is a standalone page in showcases/<number>-<slug>/, with:

index.html
styles.css
script.js
README.md  # short notes: technique, perf, accessibility


⸻

📁 Suggested Structure

/
├─ index.html                 # gallery of all 100 demos
├─ shared/                    # tiny helpers (variables.css, reset.css)
└─ showcases/
   ├─ 01-3d-card-tilt/
   ├─ 02-glassmorphism-cards/
   └─ ...


⸻

🧭 The 100 Showcases

Folder format: showcases/NN-slug/
Each line: Title — what it demonstrates.

	1.	3D Card Tilt on Cursor — CSS perspective + JS pointer tracking.
	2.	Glassmorphism Cards — blur backdrop + subtle float/hover.
	3.	Neumorphic Toggle — soft shadows, press animation, ARIA labels.
	4.	Liquid Button Hover — SVG gooey filter / CSS clip-path.
	5.	Magnetic Buttons — cursor proximity attraction.
	6.	Morphing Hamburger Menu — SVG path + CSS transitions.
	7.	Animated Gradient Background — CSS variables + keyframes.
	8.	Shimmer Skeleton Loader — gradient shimmer for placeholders.
	9.	Text Reveal on Scroll — intersection observer + clip-path.
	10.	Split Text Line Stagger — word/char splitting with CSS vars.
	11.	Parallax Hero Layers — mouse and scroll parallax combo.
	12.	Sticky Section Transitions — sticky container + transform scenes.
	13.	Curtain Page Reveal — two-panel curtain intro animation.
	14.	Card Stack Swipe — z-index stack with throwaway motion.
	15.	Elastic Tabs — underline spring illusion using easing.
	16.	Floating Action Button (FAB) Fan — radial menu expansion.
	17.	Breadcrumb Progress Bar — animated step transitions.
	18.	Confetti Button Success — canvas confetti burst on click.
	19.	Toast Notification In/Out — slide + opacity + queue.
	20.	Pull to Refresh (Web) — drag indicator + elastic snap.
	21.	Circular Progress with Tick — SVG stroke + check morph.
	22.	Interactive Rating Stars — hover fill wave + click persist.
	23.	Accordion with Smooth Height — content reveal without jank.
	24.	Tabs with Ink Ripple — ripple effect using pseudo-elements.
	25.	Input Focus Glow — focus-within with breathing glow.
	26.	Password Strength Meter — color/width morph + hints.
	27.	Search Autocomplete Pop — scale+fade with keyboard nav.
	28.	Animated Placeholder Labels — floating labels + error shake.
	29.	Stepper Form with Slide — multi-step wizard transitions.
	30.	Drag & Drop Sortable List — native DnD + reorder animation.
	31.	Swipeable Carousel — momentum swipe, snap points.
	32.	Ken Burns Hero — slow pan/zoom on background images.
	33.	Image Compare Slider — draggable handle reveal.
	34.	Masonry Grid Appear — staggered cards with transforms.
	35.	Flip Card on Hover/Focus — 3D flip with backface control.
	36.	Progress on Scroll (Reading Bar) — sticky progress indicator.
	37.	Sticky Sidebar Table of Contents — active section highlight.
	38.	Floating Labels for Textarea — resize-safe animation.
	39.	Tag Chips with Enter Animation — add/remove chip transitions.
	40.	Notification Bell Shake + Badge — attention grab micro-motion.
	41.	Tooltip with Smart Placement — flip on viewport edges.
	42.	Popover Spring Open — origin-based scale and blur.
	43.	Hover Card with Preview — delayed hover intent + fade.
	44.	Context Menu Custom — right-click menu with reveal.
	45.	Command Palette (⌘K) — overlay with fuzzy list animation.
	46.	Animated Scrollspy Nav — smooth scroll + indicator.
	47.	Sticky Header Shrink — scroll threshold size morph.
	48.	Breadcrumb Trail Shine — subtle sheen moving across.
	49.	Data Table Row Expand — details panel slide-down.
	50.	Copy to Clipboard Feedback — success sparkle micro-anim.
	51.	Hover Intent Image Zoom — progressive scale with mask.
	52.	Card Hover Depth Ladder — multi-shadow elevation on hover.
	53.	Dynamic Blob Background — animated SVG blobs + mix-blend.
	54.	Gooey Menu Toggle — filter: url(#goo) shape merging.
	55.	Lottie-like Path Drawing — pure SVG stroke-dasharray.
	56.	Particle Background (Canvas) — connect-the-dots motion.
	57.	Cursor-Follower Dot — trailing delay path.
	58.	Magnetic Cursor Halo — springing halo + blend modes.
	59.	Noise Overlay Film — animated grain for texture.
	60.	Text Scramble Effect — random chars resolve into text.
	61.	Typewriter with Caret — CSS steps + caret blink.
	62.	Gradient Text Shine — masked gradient sweep.
	63.	Section Divider Waves — SVG wave transitions on scroll.
	64.	Diagonal Reveal Panels — skewed masks sliding in.
	65.	Timeline with Scroll Progress — nodes light up as you pass.
	66.	Card Stack Depth on Scroll — translateZ + perspective shift.
	67.	3D Coverflow Gallery — rotateY with snap.
	68.	Tilted Content Sections — subtle skew + parallax bg.
	69.	Sticky Image Gallery — one image swaps as text scrolls.
	70.	Scroll-Triggered Counter — odometer-like number roll.
	71.	SVG Icon Micro-Interactions — hover morphs (path morph).
	72.	Checkbox to Confetti — playful task complete.
	73.	Switch Toggle with Spring — cubic-bezier bounce illusion.
	74.	Like Button Burst — particles radiate + heart fill.
	75.	Bookmark Ribbon Fold — 3D fold/unfold corner.
	76.	Animated Avatars Group — overlap + hover fan-out.
	77.	Wave Loading Bars — gradient bars in wave offset.
	78.	Circular Menu Orbit — items orbit on expand.
	79.	SVG Path Scroll Indicator — path length equals progress.
	80.	Hover Reveal Mask Gallery — spotlight follows pointer.
	81.	Ambient Light Card Shadow — shadow direction via cursor.
	82.	Perspective Modal — page tilts back, modal pops.
	83.	Bottom Sheet Drag — snap points with velocity.
	84.	Toast Stack Physics-ish — overlap push + slide.
	85.	Emoji Reaction Picker — long-press pop row.
	86.	“Add to Cart” Fly to Cart — cloned node flies to icon.
	87.	Breadcrumb Crumbs Crumble — playful remove animation.
	88.	SVG Line Chart Draw-in — stroke animation on mount.
	89.	Bar Chart Grow + Hover — height ease + tooltip.
	90.	Pie/Donut Chart Sweep — conic-gradient with animation.
	91.	Progress Ring with Dashes — dashed stroke animating.
	92.	Animated Empty State — gentle character/shape motion.
	93.	404 Glitch Effect — CSS filters + keyframe glitch.
	94.	Neon Sign Flicker — text-shadow + randomized flicker.
	95.	Frosted Dock App Icons — bounce + hover magnify.
	96.	Windowed Spotlight Intro — masked viewport reveal.
	97.	Scroll-Snapped Slides — full-page sections with nav dots.
	98.	Curtain Reveal on Images — per-image wipe on in-view.
	99.	Perspective Card Fan on Hover — multiple cards fan out.
	100.	Page Transition Router Mock — fade/slide between “routes”.

⸻

♿ Accessibility & UX Notes (per demo)
	•	Respect prefers-reduced-motion to reduce/disable animations.
	•	Maintain focus states and keyboard access (e.g., tooltips/popovers).
	•	Avoid motion that causes parallax sickness; keep amplitudes small.
	•	Use ARIA roles and aria-live for toasts/feedback where relevant.

⸻

⚡ Performance Guidelines
	•	Favor transform and opacity for 60fps; avoid layout thrash.
	•	Use will-change sparingly; add/remove just in time.
	•	Keep SVG path counts low; precompute lengths.
	•	Throttle scroll/mousemove with requestAnimationFrame.
	•	Use Intersection Observer for on-demand animations.

⸻

🔧 Dev Notes
	•	No external CSS/JS libraries. System fonts recommended.
	•	Keep JS modular and minimal; comment techniques.
	•	Each demo <10KB CSS/JS where feasible; inline critical bits in HTML.

⸻

✅ Roadmap
	•	Add dark/light variants.
	•	Add “copy code” buttons.
	•	Add perf test toggles & reduced-motion switch.
	•	Document alternative approaches (CSS-only vs JS-assisted).

⸻

📜 License

MIT. Use in your projects freely.

⸻

🙌 Contributing
	1.	Pick a number and slug not yet used.
	2.	Follow the folder template and rules.
	3.	Keep the demo self-contained and documented in its README.md.
	4.	Submit PR with a short preview GIF (optional).
