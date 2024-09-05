import React from 'react';
import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * RootLayout component serves as the root layout for the application.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The props object containing children.
 * @returns {JSX.Element} The JSX element representing the root layout of the application.
 */
const metadata = {
  title: 'Smart test task',
  description: 'JUNIOR FRONTEND DEVELOPER ASSIGNMENT',
};

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}


