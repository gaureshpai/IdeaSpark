import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}


const Rootlayout = ({Children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout;