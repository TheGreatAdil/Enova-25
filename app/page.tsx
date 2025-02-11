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
  HandshakeIcon,
  ShirtIcon,
  BrainIcon,
  SpeechIcon,
  Gamepad2Icon,
} from "lucide-react";
import { previousImages } from "@/lib/constants";
import TimeLeft from "@/components/TimeLeft";
import EventCard from "@/components/EventCard";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

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
    name: "Fashion Show",
    icon: <ShirtIcon className="size- md:size-20 " />,
    description: "watch as models take the stage to display fashion",
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
    name: "Mentalism",
    icon: <BrainIcon className="size- md:size-20 " />,
    description: "get your minds blown by the mentalist",
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
    name: "Panel Discussion",
    icon: <SpeechIcon className="size- md:size-20 " />,
    description: "gather knowledge as experts discuss",
  },
  {
    name: "Games",
    icon: <Gamepad2Icon className="size- md:size-20 " />,
    description: "compete with peers on various games",
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
                <Image
                  src={Enova}
                  width={200}
                  height={200}
                  alt="Enova logo"
                  priority
                />
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
                <div className="flex justify-between">
                  <h2>Time Left</h2>
                  <h2 className="text-accent">FEB 21, 22, 23</h2>
                </div>
                <div className="flex justify-center">
                  <TimeLeft />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center text-c">
          <p className="text-sm tracking-widest px-3 flex text-center">
            Enova &apos;25 is a three-day tech fest organized by IEDC MEA SB
            with a lot of exiciting events. Register now for an unforgettable
            experience!
          </p>
          <div className="flex justify-center">
            <ChevronDownIcon className="animate-bounce size-8 mt-10" />
          </div>
        </div>
      </main>

      <section className="min-h-screen justify-center" id="previous">
        <div className="flex justify-center py-8 pt-24 md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">previous edition</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-8xl flex justify-center">
            <div className="w-full max-w-4-xl grid gap-4 mt-24">
              <InfiniteSlider
                className="h-fit"
                durationOnHover={200}
                duration={50}
              >
                {previousImages.map((image, i) => (
                  <div
                    key={i}
                    className="relative w-44 h-44 md:w-64 md:h-64 rounded-xl border border-border shadow-lg "
                  >
                    <Image
                      fill
                      src={image.source}
                      alt={image.alt}
                      loading="lazy"
                      className="object-cover rounded-xl hover:scale-105 hover:opacity-100 transition-all duration-500 opacity-100 md:opacity-75 bg-black backdrop-blur-lg"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <InfiniteSlider
                className="h-fit"
                reverse
                durationOnHover={200}
                duration={50}
              >
                {previousImages.map((image, i) => (
                  <div
                    key={i}
                    className="relative w-44 h-44 md:w-64 md:h-64 rounded-xl border border-border shadow-lg"
                  >
                    <Image
                      fill
                      src={image.source}
                      alt={image.alt}
                      loading="lazy"
                      className="object-cover rounded-xl hover:scale-105 hover:opacity-100 transition-all duration-500 opacity-100 md:opacity-75 bg-black backdrop-blur-lg"
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen justify-center" id="events">
        <div className="flex justify-center py-8 pt-24 md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">events</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-8xl flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {events.map((event, i) => (
                <EventCard key={i} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen justify-center" id="tickets">
        <div className="flex justify-center py-8 pt-24 md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">tickets</h2>
        </div>

        <div className="mt-8 md:mt-16">
          <InfiniteSlider duration={25}>
            {Array(8)
              .fill("registrations open")
              .map((message, index) => (
                <h4
                  key={index}
                  className="text-accent text-center min-w-fit px-32"
                >
                  {message}
                </h4>
              ))}
          </InfiniteSlider>
        </div>

        <div className="flex justify-center">
          <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-10">
            <CardContainer>
              <CardBody className="w-86 h-[30rem] md:h-[32rem] bg-background/5 hover:shadow-2xl border border-border rounded-xl">
                <div className="absolute -z-20 min-w-full min-h-full backdrop-blur-lg rounded-xl" />
                <div className="p-6">
                  <CardItem translateZ="25" className="md:text-xl text-white">
                    MEMBERS TICKET
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-7xl md:text-8xl text-accent"
                  >
                    ₹899
                  </CardItem>
                  <CardItem
                    translateZ="25"
                    className="text-[12px] md:text-sm text-muted-foreground"
                  >
                    FOR IEDC MEMBERS
                  </CardItem>
                  <CardItem
                    translateZ={125}
                    className="w-full flex justify-center"
                  >
                    <Image
                      width={275}
                      height={100}
                      loading="lazy"
                      src="/members ticket.png"
                      alt="members ticket"
                      className="py-14"
                    />
                  </CardItem>
                  <div className="w-full flex justify-center mt-5">
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
              <CardBody className="w-86 h-[30rem] md:h-[32rem] bg-background/5 hover:shadow-2xl border border-border rounded-xl">
                <div className="absolute -z-20 min-w-full min-h-full backdrop-blur-lg rounded-xl" />
                <div className="p-6">
                  <CardItem translateZ="25" className="md:text-xl text-white">
                    GENERAL TICKET
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-7xl md:text-8xl text-accent"
                  >
                    ₹999
                  </CardItem>
                  <CardItem
                    translateZ="25"
                    className="text-[12px] md:text-sm text-muted-foreground"
                  >
                    FOR NON - IEDC MEMBERS
                  </CardItem>
                  <CardItem
                    translateZ={125}
                    className="w-full flex justify-center"
                  >
                    <Image
                      width={275}
                      height={100}
                      loading="lazy"
                      src="/non members ticket.png"
                      alt="non members ticket"
                      className="py-14"
                    />
                  </CardItem>
                  <div className="w-full flex justify-center mt-5">
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
      </section>

      <section className="min-h-screen justify-center" id="contact">
        <div className="flex justify-center py-8 pt-24 md:pt-32 md:mt-0">
          <h2 className="text-2xl md:text-6xl">contact</h2>
        </div>

        <div className="flex justify-center w-max-4xl mb-12 lg:mt-16">
          <div className="flex justify-center border-border border rounded-xl bg-background/5 backdrop-blur-lg shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="w-96 h-96 md:w-[30rem] md:h-[30rem] p-4 pb-2 md:pb-4 md:pr-2">
                <div className="w-full h-full rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0036305406115!2d76.2601200748089!3d11.038353989126797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba632af7ef31bdd%3A0xe97e8abadab1d29d!2sMEA%20Engineering%20College!5e0!3m2!1sen!2sin!4v1738994703709!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between p-4 m-4 mt-2 md:mt-4 md:ml-2 rounded-xl border border-border">
                <div>
                  <h3 className="text-4xl">contact us</h3>

                  <h4 className="text-xl text-accent mt-6">Call</h4>
                  <p className="tracking-widest">+91 85904 26086</p>
                  <p className="tracking-widest">+91 80890 93007</p>

                  <h4 className="text-xl text-accent mt-6">Mail</h4>
                  <p className="tracking-[0.2rem]">iedc@meaec.edu.in</p>
                  <h4 className="text-xl text-accent mt-6">Socials</h4>
                  <div className="flex gap-2 mt-1">
                    <a href="https://instagram.com/iedcmea">
                      <IconBrandInstagram />
                    </a>
                    <a href="https://linkedin.com/company/iedcmea/">
                      <IconBrandLinkedin />
                    </a>
                    <a href="https://wa.link/w5a8q8">
                      <IconBrandWhatsapp />
                    </a>
                  </div>
                </div>
                <div>
                  <CardContainer className="w-full mt-6 flex-1">
                    <CardBody className="w-full h-full bg-background/5 hover:shadow-2xl border border-border rounded-xl">
                      <div className="absolute -z-20 min-w-full min-h-full backdrop-blur-lg rounded-xl" />
                      <CardItem
                        translateZ={75}
                        className="w-full flex justify-between p-6"
                      >
                        <h4>Powered By</h4>
                        <Image
                          width={100}
                          height={100}
                          src="/sponsors/tascbar.png"
                          alt="tascbar logo"
                          loading="lazy"
                        />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
