import path from "path";
import { Config } from "@remotion/cli/config";

// Workspace-specific settings (this sandbox blocks remotion.media and
// fonts.gstatic.com). Delete this file on a normal machine.

// 1. Use the preinstalled Playwright headless Chromium instead of downloading one.
Config.setBrowserExecutable(
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell"
);

// 2. Serve Google Fonts used by the compositions from local npm copies.
Config.overrideWebpackConfig((config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...(config.resolve?.alias ?? {}),
      "@remotion/google-fonts/SpaceGrotesk$": path.resolve(
        process.cwd(),
        "local-fonts/SpaceGrotesk.ts"
      ),
      "@remotion/google-fonts/PlayfairDisplay$": path.resolve(
        process.cwd(),
        "local-fonts/PlayfairDisplay.ts"
      ),
    },
  },
}));
