import '@src/styles/globals.css'

export const metadata = {
    title: "PromptPilot",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            {children}
          </main>
      </body>
    </html>
  );

export default RootLayout