// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { v7 as uuidv7 } from "uuid";

import { Analytics } from "~/components";
import { SecurityHeader } from "~/lib/security";
import { ThemeHeaderScript } from "~/lib/theme";

export default createHandler(
  () => (
    <StartServer
      document={({ assets, children, scripts }) => (
        <>
          <SecurityHeader />
          <html
            lang="en"
            class="h-full w-full"
            style={{ "color-scheme": "dark" }}
            data-mode="dark"
          >
            <head>
              <meta charset="utf-8" />
              <meta
                name="description"
                content="Display Revit file information in the browser"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" sizes="48x48" />
              <link rel="icon" href="/Phi.svg" sizes="any" type="image/svg+xml" />
              <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <title>rvt.app</title>
              <ThemeHeaderScript />
              {assets}
            </head>
            <body class="bg-surface-dim text-on-surface flex h-full w-full flex-col text-base antialiased">
              <noscript class="mx-2 my-4 flex flex-col items-center gap-2">
                <span class="text-title-lg text-center">
                  This app requires JavaScript ⚡
                </span>
                <span>Please enable it in your browser settings.</span>
              </noscript>
              <div class="flex flex-1" id="app">
                {children}
              </div>
              {scripts}
              <Analytics />
            </body>
          </html>
        </>
      )}
    />
  ),
  () => {
    const nonce = uuidv7();
    return { nonce };
  }
);
