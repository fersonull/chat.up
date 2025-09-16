import clsx from "clsx";

interface HeroMessageCardProps {
    content: string;
    date: string;
    sender: boolean
}

export default function HeroMessageCard({ content, date, sender }: HeroMessageCardProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className={clsx("border p-3 rounded-lg bg-accent", { "rounded-bl-none": !sender, "rounded-br-none bg-blue-600 text-white": sender })}>
                <p className=''>{content}</p>
            </div>

            <div className="text-end text-xs text-muted-foreground">
                {date && <p>Sent {date}.</p>}
            </div>
        </div>
    )
}
