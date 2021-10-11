import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentCard from "../components/ContentCard";
import AccordionInfo from "../components/AccordionInfo";
import Register from "../components/Register";
import Footer from "../components/Footer";

import tvImage from "../public/tv.png";
import boxShotImage from "../public/boxshot.png";
import mobileImage from "../public/mobile.jpeg";
import devicePileImage from "../public/device-pile.png";
import netflixKidsContentImage from "../public/netflix-kids-content.png";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <section className="bg-black">
      <div
        className="bg-cover sm:h-screen"
        style={{
          "background-image":
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/banner.jpg)",
        }}
      >
        <Header />
        <Hero />
      </div>
      <div className="text-white">

      {!session && (
        <>
          Not signed in <br />
          {/*<button onClick={() => signIn()}>Sign in</button>*/}
          <button onClick={() => signIn("github")}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      </div>
      <ContentCard
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={tvImage}
      />
      <ContentCard
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        img={mobileImage}
      >
        <Image src={boxShotImage} width="150" height="150" />
      </ContentCard>
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
      <h1 className="text-center text-3xl bg-black text-white border-t-8 border-actual-gray sm:p-5  ">
        <div className="mt-2 p-4 sm:text-4xl text-bold lg:text-5xl">
          {" "}
          Frequently Asked Questions{" "}
        </div>
      </h1>
      <AccordionInfo
        faqQuestion="What is Netflix?"
        faqAnswer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
      />
      <AccordionInfo faqQuestion="What is Netflix?" faqAnswer="123" />
      <AccordionInfo faqQuestion="What is Netflix?" faqAnswer="123" />
      <AccordionInfo faqQuestion="What is Netflix?" faqAnswer="123" />
      <AccordionInfo faqQuestion="What is Netflix?" faqAnswer="123" />
      <AccordionInfo faqQuestion="What is Netflix?" faqAnswer="123" />
      <div className="mt-8 border-b-8 border-actual-gray">
        <Register />
      </div>
      <Footer />
    </section>
  );
}
