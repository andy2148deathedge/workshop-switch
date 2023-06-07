const metadata = {
  title: "Switch Workshop",
  description: "Switch Workshop",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;