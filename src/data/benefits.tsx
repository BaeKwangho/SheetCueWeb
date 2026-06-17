import { FiEdit3, FiFileText, FiList, FiLock, FiRepeat, FiSliders, FiTarget, FiUpload, FiVolume2 } from "react-icons/fi";

import { IBenefit } from "@/types"
import { withBasePath } from "./paths";

export const benefits: IBenefit[] = [
    {
        title: "Editable measure cues",
        description: "Detection helps with setup, but the user stays in control. SheetCue is built around fast inspection and correction.",
        bullets: [
            {
                title: "Move and resize boxes",
                description: "Correct measure boundaries when detection needs a human eye.",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Split and merge measures",
                description: "Fix the structure without restarting the import workflow.",
                icon: <FiSliders size={26} />
            },
            {
                title: "Visible cue order",
                description: "Keep the playback sequence readable before rehearsal starts.",
                icon: <FiList size={26} />
            }
        ],
        imageSrc: withBasePath("/images/sheetcue-hero.png")
    },
    {
        title: "Practice flow from a static PDF",
        description: "Turn a score page into a sequence that can handle repeats, order, timing, and current or next cues.",
        bullets: [
            {
                title: "Import from device",
                description: "Choose the score PDF you already use for practice.",
                icon: <FiUpload size={26} />
            },
            {
                title: "Arrange repeats",
                description: "Follow the rehearsal order instead of only the printed page order.",
                icon: <FiRepeat size={26} />
            },
            {
                title: "Rehearse with cues",
                description: "See the current measure and prepare for what comes next.",
                icon: <FiVolume2 size={26} />
            }
        ],
        imageSrc: withBasePath("/images/sheetcue-hero.png")
    },
    {
        title: "Local-first score handling",
        description: "The current build is designed without accounts, cloud sync, or score uploads.",
        bullets: [
            {
                title: "Score assets stay local",
                description: "Imported PDFs, rendered pages, measure crops, and preset metadata stay on device.",
                icon: <FiLock size={26} />
            },
            {
                title: "No account requirement",
                description: "The MVP keeps rehearsal setup local and direct.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Clear policy surface",
                description: "Privacy, support, and open-source notices stay linked from the public page.",
                icon: <FiFileText size={26} />
            }
        ],
        imageSrc: withBasePath("/images/sheetcue-hero.png")
    },
]
