import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Editable measure cues for PDF score rehearsal.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Workflow",
            url: "#workflow"
        },
        {
            text: "Privacy",
            url: "#privacy"
        },
        {
            text: "Release Status",
            url: "#release"
        }
    ],
    email: '',
    telephone: '',
    socials: {
    }
}
