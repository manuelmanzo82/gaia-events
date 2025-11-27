export const metadata = {
  title: "Gaia Events Studio",
  description: "Content Management System",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sanity-studio-wrapper" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
