import './globals.css'

export const metadata = {
  title: 'KC Ken Pierson | Recovery Educator, Speaker & Founder',
  description: 'Founder of Thought-Life Connection. Addiction recovery, cognitive awareness, and personal transformation through education, community, and compassionate guidance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0c0a08] text-[#ffffff] font-sans antialiased selection:bg-[#c9a45a] selection:text-[#0c0a08]">
        {children}
      </body>
    </html>
  )
}

