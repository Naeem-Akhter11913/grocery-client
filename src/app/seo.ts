const home = {
  title: "Home",
  description:
    "Discover Intolap Pvt Ltd's mission, team, and dedication to delivering the best services in pricing, variety, delivery, and satisfaction.",
  keywords: [
    "About Intolap",
    "Intolap Pvt Ltd",
    "Best Prices",
    "Easy Returns",
    "Free Delivery",
    "Wide Assortment",
    "Our Team",
    "Company Performance",
    "Satisfaction Guarantee",
  ],
  openGraph: {
    title: "All Blogs",
    description:
      "Explore the vision, values, and team behind company. Learn what makes us a trusted name in quality service and performance.",
    url: "https://yourdomain.com/about",
    type: "website",
    images: [
      {
        url: "/og-image/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "company Team and Services Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "Get to know the story, services, and people behind Intolap Pvt Ltd. Our commitment to quality and satisfaction drives everything we do.",
    images: ["/og-image/about-us.jpg"],

  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
};

export default home;
