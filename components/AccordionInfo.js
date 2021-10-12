import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { PlusIcon } from "@heroicons/react/outline";

const AccordionInfo = (props) => {
  return (
    <div className="flex flex-col text-white bg-black border-actual-gray sm:px-14 lg:justify-center lg:items-center">
      <Accordion
        allowZeroExpanded={true}
        className=" text-lg bg-actual-gray px-6 py-2 mt-2 lg:w-3/5 lg:text-3xl lg:px-8 lg:py-4 "
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="flex mb-2 justify-between items-center ">
              {props.faqQuestion}
              <PlusIcon className="h-7 w-7 text-gray-300" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="">
            <p className="border-t-2 border-black -mx-8 p-8">
              {props.faqAnswer}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionInfo;
