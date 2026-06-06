"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { revealDelay } from "./revealMotion";
import { ILandingContent } from "@/types";

interface Props {
    faq: ILandingContent["faq"];
}

const FAQ: React.FC<Props> = ({ faq }) => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <Reveal className="lg:w-[34%]">
                    <p className="hidden lg:block text-foreground-accent">{faq.eyebrow}</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">{faq.title}</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        {faq.supportPrompt}
                    </p>
                    <a href={faq.supportUrl} className="mt-3 block text-center text-xl font-semibold text-secondary hover:underline lg:text-left lg:text-3xl">{faq.supportLink}</a>
                </Reveal>

                <div className="mx-auto w-full border-b border-line lg:max-w-2xl">
                    {faq.items.map((item, index) => (
                        <Reveal key={item.question} delay={0.08 + revealDelay(index, 0.06)} y={16} className="mb-7">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between gap-5 border-t border-line px-4 pt-7 text-left text-lg">
                                            <span className="text-xl font-semibold leading-7">{item.question}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 leading-7 text-foreground-accent">
                                            {item.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
