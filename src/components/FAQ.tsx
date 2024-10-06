import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

function FAQ() {
  return (
    <div className="py-32 grid grid-cols-[30%,70%]">
        <div>
            <p className="text-[42px] lora">Frequently</p>
            <p className="text-[42px] lora">Asked</p>
            <p className="text-[42px] lora">Questions</p>
        </div>
        <div>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to close on a house?</AccordionTrigger>
                <AccordionContent>
                The time it takes to close on a house can vary depending on the type of loan you have, the type of property you’re buying, and the state you live in. On average, it takes 30-45 days to close on a house. However, some loans can close in as little as two weeks, while others can take up to 60 days or more. Your real estate agent and lender can give you a better idea of how long it will take to close on your house. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What is a property, and why is it?</AccordionTrigger>
                <AccordionContent>
                A property is a piece of land or real estate that is owned by someone. It can be a house, an apartment, a commercial building, or even a piece of vacant land. Properties are valuable because they can be used for a variety of purposes, such as living in, renting out, or selling for a profit. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What is the role of a real estate agent?</AccordionTrigger>
                <AccordionContent>
                A real estate agent is a licensed professional who helps people buy, sell, and rent properties. They act as intermediaries between buyers and sellers, helping them navigate the complex process of buying or selling a property. Real estate agents are experts in their local market and can provide valuable advice and guidance to their clients. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>How do I choose the right neighborhood?</AccordionTrigger>
                <AccordionContent>
                Choosing the right neighborhood is a personal decision that depends on your lifestyle, budget, and preferences. Some factors to consider when choosing a neighborhood include the cost of living, the quality of schools, the crime rate, and the proximity to work, shopping, and entertainment. Your real estate agent can help you find neighborhoods that meet your criteria and show you properties in those areas. 
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
}

export default FAQ;