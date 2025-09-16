import React from 'react'
import { Card, CardContent } from '../ui/card'
import HomeMessageWrapper from './home-message-wrapper'
import HeroChatInput from './hero-chat-input'

export default function HeroMessageMainWrapper() {
    return (
        <div className='relative'>
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
