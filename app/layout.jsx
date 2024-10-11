import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { ThemeProvider } from "@components/ThemeProvider";
import ThemeSwitcher from "@components/ThemeSwitcher";

export const metadata = {
  title: "IdeaSpark",
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
      <ThemeProvider>
      <Provider>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        
      </Provider>
      <ThemeSwitcher/>
      </ThemeProvider>    
    </body>
  </html>
);

export default RootLayout;
