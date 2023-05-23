import "./globals.css";

export const metadata = {
  title: "StayHub",
  description:
    "Discover your ideal home away from home with StayHub and embark on remarkable journeys filled with comfort, convenience, and authentic local experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
