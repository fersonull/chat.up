import HeroMessageCard from './hero-message-card'
import clsx from 'clsx'

interface HeroMessageCardProps {
    content: string
    date: string
    sender: boolean
}

export default function HomeMessageWrapper({ content, date, sender = true }: HeroMessageCardProps) {
    return (
        <div className={clsx('flex flex-col gap-4', sender ? 'items-end' : 'items-start')}>
            <HeroMessageCard content={content} date={date} sender={sender} />
        </div>
    )
}
