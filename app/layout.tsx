
export const metadata = {
  title: "Qubit Advisory",
  description: "AML compliance support for Tranche 2 businesses"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
