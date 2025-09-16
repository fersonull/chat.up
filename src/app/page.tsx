import HomeNavbar from "@/components/home/home-navbar"
import { Button } from "@/components/ui/button"
import HeroMessageMainWrapper from "@/components/home/hero-mess-main-wrapper"

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <HomeNavbar />

      <main className="lg:px-24 flex-1 my-10">
        <div className="h-full grid md:grid-cols-3 grid-cols-1 items-center">

          {/* Left */}
          <div className="max-w-lg col-span-2">
            <h4 className="text-4xl font-bold tracking-tighter">Be bored with someone. Discuss what's up.</h4>
            <p className="font-medium text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>

            <Button className="mt-4">Get started</Button>
          </div>

          {/* Right */}
          <div className="w-md">
            <HeroMessageMainWrapper />
          </div>
        </div>
      </main>
    </div>
  )
}
