import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';
import Navbar from "@/components/Navbar/navbar";

export const metadata = {
  title: 'Handy Finder',
  description: 'Handy-Finder is an innovative mobile and web application\
   designed to connect you with skilled repair professionals\
    quickly and easily. Whether you need a plumber, electrician,\
    carpenter, or any other handyman service, Handy-Finder allows \
    you to browse profiles, read reviews, and choose the right repair \
    person for your needs. With a user-friendly interface and real-time\
     tracking, Handy-Finder ensures that help is just a few taps away. \
     Say goodbye to home repair hassles and hello to convenient, reliable service with Handy-Finder.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/mechanic.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>Handy Finder</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
            <Navbar/>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}
