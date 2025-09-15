import Link from "next/link";
import { Button } from "../ui/button"
import { LogInIcon, ZapIcon, BookCopyIcon } from "lucide-react"

export default function NavActions() {
    const authed: boolean = false;

    if (!authed) return (
        <div className="flex items-center justify-center gap-4">
            <Link href="/login">
                <Button variant="ghost">
                    Login
                </Button>
            </Link>
            <Button variant="outline">
                <ZapIcon />
                Get started
            </Button>
        </div>
    )

    return (
        <div className="flex items-center justify-center">
            <Button variant="outline">
                <BookCopyIcon />
                Dashboard
            </Button>
        </div>
    )
}
