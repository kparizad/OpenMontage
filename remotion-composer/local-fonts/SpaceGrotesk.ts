// Local stand-in for @remotion/google-fonts/SpaceGrotesk (fonts.gstatic.com is
// unreachable in this workspace). Same call shape: loadFont(style, opts).
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

export const fontFamily = "'Space Grotesk'";
export const loadFont = (..._args: unknown[]) => ({
  fontFamily,
  waitUntilDone: () => Promise.resolve(),
});
