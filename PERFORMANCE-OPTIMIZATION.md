# Portfolio Performance Optimization

Applied for the Vercel Speed Insights desktop Real Experience Score issue.

## Changes

- Removed GSAP and `@gsap/react` from runtime code and dependencies.
- Replaced hero entrance animation with CSS compositor-friendly animation.
- Replaced GSAP ScrollTrigger section reveals with `IntersectionObserver` + CSS animation.
- Replaced continuous JavaScript mouse animation with CSS transforms and pointer-driven CSS variables.
- Replaced persistent backdrop blur on the desktop navigation and DevOps visual cards with opaque/translucent surfaces.
- Reduced expensive blur/shadow work in the above-the-fold DevOps visual.
- Kept Vercel Analytics and Speed Insights enabled.
- Preserved reduced-motion support.
- Removed unused starter assets.

## Validation

- ESLint passes for `src/`.
- The source no longer imports GSAP or ScrollTrigger.
- The production build should be run by Vercel after deployment.

## Expected result

The changes reduce JavaScript animation work and GPU/compositing pressure, especially on desktop. The Vercel RES score must be re-measured from real visitors after deployment; the existing sample of 3 visitors is too small to guarantee a particular score.


## Second performance pass

- Removed hero entrance delays so the primary heading can render immediately for faster LCP.
- Removed the continuous pointer-tracking JavaScript from the desktop DevOps visual.
- Stopped decorative orbit animations to reduce compositor work.
- Enabled `content-visibility: auto` for below-the-fold sections to defer off-screen rendering work.
- Kept Vercel Analytics and Speed Insights enabled.
