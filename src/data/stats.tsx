import { FiEdit3, FiHardDrive, FiSlash } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "Editable",
        icon: <FiEdit3 size={34} className="text-teal-600" />,
        description: "Measure detection is paired with correction tools, not hidden automation."
    },
    {
        title: "Local-first",
        icon: <FiHardDrive size={34} className="text-teal-600" />,
        description: "Score PDFs, page images, measure crops, and presets stay on device."
    },
    {
        title: "No accounts",
        icon: <FiSlash size={34} className="text-teal-600" />,
        description: "The current MVP does not add login, sync, or remote score storage."
    }
];
