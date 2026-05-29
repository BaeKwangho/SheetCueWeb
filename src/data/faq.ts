import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Does ${siteDetails.siteName} upload my score PDFs?`,
        answer: 'No. The current build stores imported score PDFs, rendered page images, cropped measure images, and preset metadata locally on the user\'s device.',
    },
    {
        question: `Is ${siteDetails.siteName} available in app stores now?`,
        answer: 'SheetCue is preparing for public store release. Store links will be added to this page when the app is available.',
    },
    {
        question: 'Does the current build create accounts?',
        answer: 'No. The MVP is local-first and does not include user accounts, cloud sync, or remote score storage.'
    },
    {
        question: 'Is this automatic audio score following?',
        answer: 'No. SheetCue focuses on editable measure cues and user-controlled playback flow, not audio-based real-time score following.',
    },
    {
        question: 'Does the app use network services?',
        answer: 'Score processing does not require a backend service. The app includes Google Mobile Ads and Google UMP consent handling as documented in the privacy policy.'
    }
];
