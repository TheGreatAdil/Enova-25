import { SplashCursor } from "@/components/ui/splash-cursor";
import Enova from "@/public/enova logo.png";
import Image from "next/image";
import {
  ChevronDownIcon,
  PodcastIcon,
  CarIcon,
  Music4Icon,
  BlocksIcon,
  LightbulbIcon,
  Gamepad2Icon,
  HandshakeIcon,
  ShirtIcon,
} from "lucide-react";
import { previousImages } from "@/lib/constants";
import TimeLeft from "@/components/TimeLeft";
import EventCard from "@/components/EventCard";
import Marquee from "@/components/ui/marquee";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const events = [
  {
    name: "Talk sessions",
    icon: <PodcastIcon className="size- md:size-20 " />,
    description: "talk sessions from renowned speakers",
  },
  {
    name: "Workshops",
    icon: <BlocksIcon className="size- md:size-20 " />,
    description: "level up your skills with amazing workshops",
  },
  {
    name: "Ideathon",
    icon: <LightbulbIcon className="size- md:size-20 " />,
    description: "test out your idea in the ideathon",
  },
  {
    name: "RC Show",
    icon: <CarIcon className="size- md:size-20 " />,
    description: "enjoy a thrilling show of RC cars and aircrafts",
  },

  {
    name: "Games",
    icon: <Gamepad2Icon className="size- md:size-20 " />,
    description: "compete with peers on various games",
  },
  {
    name: "Culturals",
    icon: <Music4Icon className="size- md:size-20 " />,
    description: "enjoy a night of amazing cultural activities",
  },
  {
    name: "Icebreaking",
    icon: <HandshakeIcon className="size- md:size-20 " />,
    description: "meet up and collaborate with new people",
  },
  {
    name: "Fashion Show",
    icon: <ShirtIcon className="size- md:size-20 " />,
    description: "watch as models take the stage to display fashion",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
        <SplashCursor />
      </div>

      <main className="min-h-screen" id="enova">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center pt-32 md:py-64">
            <div className="w-full max-w-2xl md:max-w-4xl grid md:flex justify-center md:justify-start items-end ">
              <div className="flex justify-center mb-8 md:mb-0">
                <Image src={Enova} width={200} height={200} alt="Enova logo" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-8xl font-bold">enova</h1>
                <p className="text-lg tracking-widest">AS DISTINCTIVE AS YOU</p>
              </div>
            </div>
          </div>

          <div className="pt-4 md:py-64">
            <div className="flex justify-center w-full max-w-2xl md:max-w-4xl">
              <div className="grid justify-center mb-8 md:mb-0 pt-12">
                <h2>Time Left</h2>
                <div className="flex justify-center">
                  <TimeLeft />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronDownIcon className="animate-bounce size-8 mt-8" />
        </div>
      </main>

      <section className="min-h-screen justify-center" id="previous">
        <div className="flex justify-center py-8 pt-16  md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">previous edition</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-8xl flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {previousImages.map((image, i) => (
                <div
                  key={i}
                  className="relative w-44 h-44 md:w-96 md:h-96 rounded-xl border border-border shadow-lg hover:scale-105 transition-all duration-500"
                >
                  <Image
                    fill
                    src={image.source}
                    alt={image.alt}
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen justify-center" id="events">
        <div className="flex justify-center py-8 pt-16  md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">events</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-8xl flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {events.map((event, i) => (
                <EventCard key={i} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen justify-center" id="tickets">
        <div className="flex justify-center pt-16  md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">tickets</h2>
        </div>

        <div className="py-12">
          <Marquee pauseOnHover={false} direction="left" speed={7}>
            {Array(8)
              .fill("early bird open")
              .map((message, index) => (
                <h4
                  key={index}
                  className="text-accent text-center min-w-fit px-32"
                >
                  {message}
                </h4>
              ))}
          </Marquee>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-8xl flex justify-center">
            <div className="grid md:grid-cols-2 md:gap-10">
              <CardContainer>
                <CardBody className="w-86 h-[32rem] bg-background/5 hover:shadow-2xl border border-border rounded-xl">
                  <div className="absolute -z-20 min-w-full min-h-full backdrop-blur-lg rounded-xl" />
                  <div className="p-6">
                    <CardItem translateZ="25" className="text-xl text-white">
                      EARLY BIRD
                    </CardItem>
                    <CardItem translateZ="50" className="text-8xl text-accent">
                      ₹799
                    </CardItem>
                    <CardItem
                      translateZ="25"
                      className="text-sm text-muted-foreground"
                    >
                      FOR IEDC MEMBERS
                    </CardItem>
                    <div className="w-full flex justify-center mt-64">
                      <CardItem
                        translateZ="75"
                        className="w-full flex justify-center"
                      >
                        <a
                          href="https://makemypass.com/enova-mea"
                          className="w-full h-16 flex justify-center text-2xl items-center border-border border hover:bg-accent rounded-lg transition-all duration-500"
                        >
                          get tickets
                        </a>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer>
                <CardBody className="w-86 h-[32rem] bg-background/5 hover:shadow-2xl border border-border rounded-xl">
                  <div className="absolute -z-20 min-w-full min-h-full backdrop-blur-lg rounded-xl" />
                  <div className="p-6">
                    <CardItem translateZ="25" className="text-xl text-white">
                      EARLY BIRD
                    </CardItem>
                    <CardItem translateZ="50" className="text-8xl text-accent">
                      ₹899
                    </CardItem>
                    <CardItem
                      translateZ="25"
                      className="text-sm text-muted-foreground"
                    >
                      FOR NON - IEDC MEMBERS
                    </CardItem>
                    <div className="w-full flex justify-center mt-64">
                      <CardItem
                        translateZ="75"
                        className="w-full flex justify-center"
                      >
                        <a
                          href="https://makemypass.com/enova-mea"
                          className="w-full h-16 flex justify-center text-2xl items-center border-border border hover:bg-accent rounded-lg transition-all duration-500"
                        >
                          get tickets
                        </a>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
