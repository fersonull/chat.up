import { Input } from "../ui/input"
import { SendHorizontalIcon, FolderPlusIcon } from "lucide-react"
import { Button } from "../ui/button"

export default function HeroChatInput() {
    return (
        <div className="flex gap-2 bg-accent p-2 rounded-md shadow-md border">
            <Button variant="outline"><FolderPlusIcon /></Button>
            <Input type="text" placeholder="Type a message..." className="bg-background" />
            <Button variant="outline"><SendHorizontalIcon /></Button>
        </div>
    )
}
