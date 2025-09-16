import React from 'react'
import { Card, CardContent } from '../ui/card'
import HomeMessageWrapper from './home-message-wrapper'
import HeroChatInput from './hero-chat-input'
import { AvatarCircles } from '../ui/avatar-circles'

const avatars = [
    { imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", profileUrl: "/" },
    { imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", profileUrl: "/" },
    { imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", profileUrl: "/" },
]

export default function HeroMessageMainWrapper() {
    return (
        <div className='relative'>
            <div className="absolute -top-8 -right-10">
                <AvatarCircles numPeople={9} avatarUrls={avatars} />
            </div>

            <Card >
                <CardContent className="flex flex-col gap-4">
                    <HomeMessageWrapper content="sup bro, how are you?" sender={false} date="2 hrs ago" />
                    <HomeMessageWrapper content="i don't have money, man." sender={true} date="just now" />
                </CardContent>
            </Card>

            <div className="absolute bottom-2 -left-20">
                <HeroChatInput />
            </div>
        </div>
    )
}
