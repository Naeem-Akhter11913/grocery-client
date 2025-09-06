// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import './globals.css';
// import 'react-toastify/dist/ReactToastify.css';
// import home from "./seo";
// import dynamic from "next/dynamic";
// import Loader from "@/components/loader/loader";
// import { Suspense } from "react";

// const Header = dynamic(() => import("@/components/header"), { loading: () => <Loader /> })
// const Footer = dynamic(() => import('@/components/footer'), { loading: () => <Loader /> });
// const ScondeNavebar = dynamic(() => import("@/components/scondNavebar"), { loading: () => <Loader /> })


// import { ToastContainer } from "react-toastify";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = home;

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
//         />
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossOrigin="anonymous"></script>
        
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossOrigin="anonymous" />
//       </head>
//       <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
//         <Suspense fallback={<Loader />}>
//           <Header />
//           <ScondeNavebar />
//           {children}
//           <Footer />
//         </Suspense>



//         <ToastContainer />

//         <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import home from "./seo";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/loader";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Script from "next/script"; // ✅ use Next.js Script

const Header = dynamic(() => import("@/components/header"), { loading: () => <Loader /> })
const Footer = dynamic(() => import('@/components/footer'), { loading: () => <Loader /> });
const ScondeNavebar = dynamic(() => import("@/components/scondNavebar"), { loading: () => <Loader /> })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        {/* ✅ keep only CSS in head */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" 
          rel="stylesheet"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossOrigin="anonymous" 
        />
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<Loader />}>
          <Header />
          <ScondeNavebar />
          {children}
          <Footer />
        </Suspense>

        <ToastContainer />

        {/* ✅ load JS here so hydration is not broken */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
