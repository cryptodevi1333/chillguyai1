import { Twitter, Send } from 'lucide-react'

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-4">
      <a 
        href="https://x.com/chillguyai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#52afe6] hover:text-[#e55d2d] transition-colors" 
        aria-label="X (Twitter)"
      >
        <Twitter size={28} />
      </a>
      <a 
        href="https://t.me/chillguyai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#52afe6] hover:text-[#e55d2d] transition-colors" 
        aria-label="Telegram"
      >
        <Send size={28} />
      </a>
    </div>
  )
}

