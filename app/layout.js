import Providers from "./providers";

export const metadata = {
  title: "OutreachPro",
  description: "Email Marketing for Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
