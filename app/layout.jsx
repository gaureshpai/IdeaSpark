import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon:
      [
        'favicon.ico?v=4',
      ],
    apple: [
      'apple-touch-icon.png?v=4',
    ],
    shortcut: [
      'apple-touch-icon.png?v'
    ]
  },
  manifest: '/site.webmanifest'
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        
      </Provider>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
