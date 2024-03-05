import '@src/styles/globals.css'

import Nav from '@src/components/Nav';
import Provider from '@src/components/Provider';

export const metadata = {
    title: "PromptPilot",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return(
    <html lang='en'>
      <body>
        <Provider>
        <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>  
      </body>
    </html>
  );
}
  

export default RootLayout