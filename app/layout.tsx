import "./globals.css";
import RootStyleRegistry from "~/lib/RootStyleRegistry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
