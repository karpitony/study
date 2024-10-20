import '../styles/globals.css';
import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata:Metadata = {
  title: {
    template: "%s | Nextfilx",
    default: "Nextfilx",
  },
  description: 'The best movies on the best framework.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
