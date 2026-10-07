// Local stand-in for @remotion/google-fonts/PlayfairDisplay (fonts.gstatic.com
// is unreachable in this workspace). Same call shape: loadFont(style, opts).
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/700-italic.css";

export const fontFamily = "'Playfair Display'";
export const loadFont = (..._args: unknown[]) => ({
  fontFamily,
  waitUntilDone: () => Promise.resolve(),
});
