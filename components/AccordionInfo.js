import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { PlusIcon } from "@heroicons/react/outline";

const AccordionInfo = (props) => {
  const faqData = [
    {
      faqQuestion: "What Is Netflix?",
      faqAnswer: ` Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
         You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    { faqQuestion: "What Is Netflix?", faqAnswer: "456" },
    { faqQuestion: "What Is Netflix?", faqAnswer: "456" },
    { faqQuestion: "What Is Netflix?", faqAnswer: "456" },
    { faqQuestion: "What Is Netflix?", faqAnswer: "456" },
  ];
  return (
    <div className="flex flex-col text-white  sm:px-14 lg:justify-center lg:items-center">
      <Accordion
        allowZeroExpanded
        className=" text-lg bg-actual-gray lg:w-3/5 lg:text-3xl "
      >
        {faqData.map((faqData) => (
          <AccordionItem className="border-b-2 border-black px-2 py-3">
            <AccordionItemHeading>
              <AccordionItemButton className="flex mb-2 justify-between items-center lg:px-6 lg:py-1 ">
                {faqData.faqQuestion}
                <PlusIcon className="h-7 w-7 text-gray-300" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mb-2">
              <p className="border-t-2 border-black -mx-2 p-6 lg:px-8">
                {faqData.faqAnswer}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionInfo;
