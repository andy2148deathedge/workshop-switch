import "tailwindcss/tailwind.css";

const metadata = {
  title: "Switch Workshop",
  description: "For Component Workshop demo",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="h-screen relative">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;