import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentCard from "../components/ContentCard";
import Register from "../components/Register";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

import tvImage from "../public/tv.png";
import mobileImage from "../public/mobile.jpeg";
import devicePileImage from "../public/device-pile.png";
import netflixKidsContentImage from "../public/netflix-kids-content.png";

import { useSession, signIn, signOut } from "next-auth/client";

const faqQuestionArray = [
  {
    title: "What is Netflix?",
    answer: (
      <div
        dangerouslySetInnerHTML={{
          __html: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
<br><br>
          You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
        }}
      />
    ),
  },
  {
    title: "How much does Netflix Cost?",
    answer: (
      <div
        dangerouslySetInnerHTML={{
          __html: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from AED29 to AED56 a month. No extra costs, no contracts.`,
        }}
      />
    ),
  },
  {
    title: "Where can I watch?",
    answer: (
      <div
        dangerouslySetInnerHTML={{
          __html: ` Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
<br><br>
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        }}
      />
    ),
  },
  {
    title: "How do I cancel?",
    answer: (
      <div
        dangerouslySetInnerHTML={{
          __html: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
        }}
      />
    ),
  },
  {
    title: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    title: "Is Netflix good for Kids?",
    answer: (
      <div
        dangerouslySetInnerHTML={{
          __html: `    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
<br><br>
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
        }}
      />
    ),
  },
];

export default function Home() {
  return (
    <section className="bg-black">
      <div
        className="bg-cover lg:h-90v "
        style={{
          "background-image":
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/banner.jpg)",
        }}
      >
        <Header />
        <Hero />
      </div>

      <ContentCard
        title="Enjoy on your TV123."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={tvImage}
      />
      <ContentCard
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        img={mobileImage}
      />
      <ContentCard
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        img={devicePileImage}
      />
      <ContentCard
        title="Create profiles for kids."
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img={netflixKidsContentImage}
      />
      <h1 className="px-4 text-2xl text-center text-white bg-black border-t-8 border-actual-gray ">
        <div className="p-8 md:text-4xl text-bold lg:text-5xl">
          Frequently Asked Questions
        </div>
      </h1>
      <Accordion data={faqQuestionArray} />
      <div className="p-8 border-b-8 border-actual-gray">
        <Register />
      </div>
      <Footer />
    </section>
  );
}
