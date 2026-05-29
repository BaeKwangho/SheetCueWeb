import {
    FiEdit3,
    FiFileText,
    FiHardDrive,
    FiList,
    FiLock,
    FiRepeat,
    FiSlash,
    FiSliders,
    FiTarget,
    FiUpload,
    FiVolume2,
} from "react-icons/fi";

import { ILandingContent, Locale } from "@/types";
import { withBasePath } from "./paths";

export const supportedLocales: Locale[] = ["en", "ko"];

export const getLocaleFromPathname = (pathname: string | null | undefined): Locale => {
    return pathname?.startsWith("/ko") ? "ko" : "en";
};

export const landingContent: Record<Locale, ILandingContent> = {
    en: {
        locale: "en",
        metadata: {
            title: "SheetCue | Editable PDF Score Practice Flow",
            description: "SheetCue turns PDF scores into editable measure cues for rehearsal. Import locally, correct measures, arrange repeats, and practice from playback cues.",
        },
        nav: {
            menuItems: [
                { text: "Features", url: "#features" },
                { text: "Workflow", url: "#workflow" },
                { text: "Privacy", url: "#privacy" },
                { text: "Release", url: "#release" },
            ],
            releaseCta: "Release status",
            languageLabel: "한국어",
            languageUrl: "/ko",
        },
        hero: {
            eyebrow: "Editable score rehearsal",
            heading: "Edit your PDF score into a practice flow.",
            subheading: "Mark measures, reorder repeats, adjust timing, and rehearse from cues you control.",
            secondarySubheading: "Not just a PDF viewer. SheetCue turns static pages into editable measure cues.",
            primaryCta: "Get release updates",
            secondaryCta: "Read privacy policy",
            secondaryCtaUrl: withBasePath("/privacy/privacy-policy.html#en"),
            centerImageSrc: withBasePath("/images/sheetcue-hero.png"),
            imageAlt: "Sketch of importing a score PDF, editing measure boxes, and rehearsing from playback cues",
        },
        stats: [
            {
                title: "Editable",
                icon: <FiEdit3 size={34} className="text-teal-600" />,
                description: "Measure detection is paired with correction tools, not hidden automation.",
            },
            {
                title: "Local-first",
                icon: <FiHardDrive size={34} className="text-teal-600" />,
                description: "Score PDFs, page images, measure crops, and presets stay on device.",
            },
            {
                title: "No accounts",
                icon: <FiSlash size={34} className="text-teal-600" />,
                description: "The current MVP does not add login, sync, or remote score storage.",
            },
        ],
        benefits: [
            {
                title: "Editable measure cues",
                description: "Detection helps with setup, but the user stays in control. SheetCue is built around fast inspection and correction.",
                bullets: [
                    {
                        title: "Move and resize boxes",
                        description: "Correct measure boundaries when detection needs a human eye.",
                        icon: <FiEdit3 size={26} />,
                    },
                    {
                        title: "Split and merge measures",
                        description: "Fix the structure without restarting the import workflow.",
                        icon: <FiSliders size={26} />,
                    },
                    {
                        title: "Visible cue order",
                        description: "Keep the playback sequence readable before rehearsal starts.",
                        icon: <FiList size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
            {
                title: "Practice flow from a static PDF",
                description: "Turn a score page into a sequence that can handle repeats, order, timing, and current or next cues.",
                bullets: [
                    {
                        title: "Import from device",
                        description: "Choose the score PDF you already use for practice.",
                        icon: <FiUpload size={26} />,
                    },
                    {
                        title: "Arrange repeats",
                        description: "Follow the rehearsal order instead of only the printed page order.",
                        icon: <FiRepeat size={26} />,
                    },
                    {
                        title: "Rehearse with cues",
                        description: "See the current measure and prepare for what comes next.",
                        icon: <FiVolume2 size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
            {
                title: "Local-first score handling",
                description: "The current build is designed without accounts, cloud sync, or score uploads.",
                bullets: [
                    {
                        title: "Score assets stay local",
                        description: "Imported PDFs, rendered pages, measure crops, and preset metadata stay on device.",
                        icon: <FiLock size={26} />,
                    },
                    {
                        title: "No account requirement",
                        description: "The MVP keeps rehearsal setup local and direct.",
                        icon: <FiTarget size={26} />,
                    },
                    {
                        title: "Clear policy surface",
                        description: "Privacy, support, and open-source notices stay linked from the public page.",
                        icon: <FiFileText size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
        ],
        workflow: {
            id: "workflow",
            title: "From static PDF to measure cues.",
            description: "Import a score, correct measure boxes, arrange repeats and timing, then rehearse from current and next cues.",
            steps: [
                { number: "1", title: "Import", description: "Choose a score PDF from your device." },
                { number: "2", title: "Correct", description: "Edit the detected measure boxes by hand." },
                { number: "3", title: "Arrange", description: "Set repeats, playback order, BPM, and beats." },
                { number: "4", title: "Rehearse", description: "Follow current and next measure cues." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "Score handling stays local-first.",
            description: "Imported score PDFs, rendered pages, cropped measure images, and preset metadata are stored on the user's device. The current build does not create accounts and does not upload score files.",
            points: ["No account requirement", "No score uploads", "Google Ads with UMP consent"],
        },
        faq: {
            eyebrow: "FAQ'S",
            title: "Frequently Asked Questions",
            supportPrompt: "Need policy or support details?",
            supportLink: "SheetCue support",
            supportUrl: withBasePath("/privacy/support.html#en"),
            items: [
                {
                    question: "Does SheetCue upload my score PDFs?",
                    answer: "No. The current build stores imported score PDFs, rendered page images, cropped measure images, and preset metadata locally on the user's device.",
                },
                {
                    question: "Is SheetCue available in app stores now?",
                    answer: "SheetCue is preparing for public store release. Store links will be added to this page when the app is available.",
                },
                {
                    question: "Does the current build create accounts?",
                    answer: "No. The MVP is local-first and does not include user accounts, cloud sync, or remote score storage.",
                },
                {
                    question: "Is this automatic audio score following?",
                    answer: "No. SheetCue focuses on editable measure cues and user-controlled playback flow, not audio-based real-time score following.",
                },
                {
                    question: "Does the app use network services?",
                    answer: "Score processing does not require a backend service. The app includes Google Mobile Ads and Google UMP consent handling as documented in the privacy policy.",
                },
            ],
        },
        cta: {
            heading: "SheetCue is preparing for public store release.",
            subheading: "Store links will be added here when the app is available. Until then, use this page for release status, privacy, and support.",
            releaseUrl: "#release",
            privacyUrl: withBasePath("/privacy/privacy-policy.html#en"),
            releaseLabel: "Check release status",
            privacyLabel: "Read privacy policy",
        },
        footer: {
            subheading: "Editable measure cues for PDF score rehearsal.",
            quickLinksTitle: "Quick Links",
            trustLinksTitle: "Trust Links",
            privacyPolicy: "Privacy Policy",
            support: "Support",
            contact: "Contact",
            quickLinks: [
                { text: "Features", url: "#features" },
                { text: "Workflow", url: "#workflow" },
                { text: "Privacy", url: "#privacy" },
                { text: "Release Status", url: "#release" },
            ],
            email: "",
            telephone: "",
            socials: {},
            copyright: "All rights reserved.",
        },
    },
    ko: {
        locale: "ko",
        metadata: {
            title: "SheetCue | PDF 악보를 연습 흐름으로 편집",
            description: "SheetCue는 PDF 악보를 마디 단위 연습 큐로 바꿉니다. 기기 안에서 가져오고, 마디를 보정하고, 반복 순서와 박자를 정해 연습하세요.",
        },
        nav: {
            menuItems: [
                { text: "기능", url: "#features" },
                { text: "흐름", url: "#workflow" },
                { text: "개인정보", url: "#privacy" },
                { text: "출시", url: "#release" },
            ],
            releaseCta: "출시 상태",
            languageLabel: "English",
            languageUrl: "/",
        },
        hero: {
            eyebrow: "편집 가능한 악보 연습",
            heading: "PDF 악보를 나만의 연습 흐름으로 편집하세요.",
            subheading: "마디를 표시하고, 반복 순서를 바꾸고, 박자와 타이밍을 조정한 뒤 직접 만든 큐로 연습합니다.",
            secondarySubheading: "단순한 PDF 뷰어가 아닙니다. SheetCue는 정적인 악보 페이지를 편집 가능한 마디 큐로 바꿉니다.",
            primaryCta: "출시 소식 확인",
            secondaryCta: "개인정보처리방침 보기",
            secondaryCtaUrl: withBasePath("/privacy/privacy-policy.html#ko"),
            centerImageSrc: withBasePath("/images/sheetcue-hero.png"),
            imageAlt: "PDF 악보를 가져와 마디 박스를 편집하고 재생 큐로 연습하는 흐름 스케치",
        },
        stats: [
            {
                title: "편집 가능",
                icon: <FiEdit3 size={34} className="text-teal-600" />,
                description: "마디 감지는 자동화에 숨기지 않고 직접 보정할 수 있는 도구와 함께 제공됩니다.",
            },
            {
                title: "로컬 우선",
                icon: <FiHardDrive size={34} className="text-teal-600" />,
                description: "PDF 악보, 페이지 이미지, 마디 이미지, 프리셋은 사용자의 기기에 저장됩니다.",
            },
            {
                title: "계정 없음",
                icon: <FiSlash size={34} className="text-teal-600" />,
                description: "현재 MVP에는 로그인, 동기화, 원격 악보 저장 기능이 없습니다.",
            },
        ],
        benefits: [
            {
                title: "편집 가능한 마디 큐",
                description: "감지는 설정을 돕지만 최종 제어권은 사용자에게 있습니다. SheetCue는 빠르게 확인하고 보정하는 흐름을 중심으로 설계되었습니다.",
                bullets: [
                    {
                        title: "박스 이동과 크기 조정",
                        description: "감지가 놓친 마디 경계를 직접 바로잡을 수 있습니다.",
                        icon: <FiEdit3 size={26} />,
                    },
                    {
                        title: "마디 분할과 병합",
                        description: "가져오기 과정을 다시 시작하지 않고 구조를 수정합니다.",
                        icon: <FiSliders size={26} />,
                    },
                    {
                        title: "보이는 큐 순서",
                        description: "연습을 시작하기 전에 재생 순서를 읽기 쉽게 확인합니다.",
                        icon: <FiList size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
            {
                title: "정적인 PDF에서 연습 흐름으로",
                description: "악보 페이지를 반복, 순서, 박자, 현재/다음 큐를 다룰 수 있는 시퀀스로 바꿉니다.",
                bullets: [
                    {
                        title: "기기에서 가져오기",
                        description: "이미 연습에 쓰고 있는 PDF 악보를 선택합니다.",
                        icon: <FiUpload size={26} />,
                    },
                    {
                        title: "반복 순서 정리",
                        description: "인쇄된 페이지 순서가 아니라 실제 연습 순서를 따릅니다.",
                        icon: <FiRepeat size={26} />,
                    },
                    {
                        title: "큐를 보며 연습",
                        description: "현재 마디를 보고 다음 마디를 미리 준비합니다.",
                        icon: <FiVolume2 size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
            {
                title: "로컬 우선 악보 처리",
                description: "현재 빌드는 계정, 클라우드 동기화, 악보 업로드 없이 동작하도록 설계되었습니다.",
                bullets: [
                    {
                        title: "악보 자산은 기기 안에",
                        description: "가져온 PDF, 렌더링된 페이지, 마디 이미지, 프리셋 메타데이터는 기기에 남습니다.",
                        icon: <FiLock size={26} />,
                    },
                    {
                        title: "계정 불필요",
                        description: "MVP는 연습 설정을 로컬에서 바로 끝내는 흐름을 유지합니다.",
                        icon: <FiTarget size={26} />,
                    },
                    {
                        title: "명확한 정책 링크",
                        description: "개인정보, 지원, 오픈소스 고지는 공개 페이지에서 확인할 수 있습니다.",
                        icon: <FiFileText size={26} />,
                    },
                ],
                imageSrc: withBasePath("/images/sheetcue-hero.png"),
            },
        ],
        workflow: {
            id: "workflow",
            title: "정적인 PDF에서 마디 큐까지.",
            description: "악보를 가져오고, 마디 박스를 보정하고, 반복과 타이밍을 정리한 뒤 현재/다음 큐를 보며 연습합니다.",
            steps: [
                { number: "1", title: "가져오기", description: "기기에서 PDF 악보를 선택합니다." },
                { number: "2", title: "보정", description: "감지된 마디 박스를 직접 수정합니다." },
                { number: "3", title: "정리", description: "반복, 재생 순서, BPM, 박자를 설정합니다." },
                { number: "4", title: "연습", description: "현재와 다음 마디 큐를 따라갑니다." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "악보 처리는 로컬 우선입니다.",
            description: "가져온 PDF 악보, 렌더링된 페이지, 잘라낸 마디 이미지, 프리셋 메타데이터는 사용자의 기기에 저장됩니다. 현재 빌드는 계정을 만들지 않고 악보 파일을 업로드하지 않습니다.",
            points: ["계정 필요 없음", "악보 업로드 없음", "Google Ads 및 UMP 동의 처리"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "자주 묻는 질문",
            supportPrompt: "정책이나 지원 정보가 필요하신가요?",
            supportLink: "SheetCue 지원",
            supportUrl: withBasePath("/privacy/support.html#ko"),
            items: [
                {
                    question: "SheetCue가 제 PDF 악보를 업로드하나요?",
                    answer: "아니요. 현재 빌드는 가져온 PDF 악보, 렌더링된 페이지 이미지, 잘라낸 마디 이미지, 프리셋 메타데이터를 사용자의 기기에 로컬로 저장합니다.",
                },
                {
                    question: "SheetCue를 지금 앱 스토어에서 받을 수 있나요?",
                    answer: "SheetCue는 공개 스토어 출시를 준비 중입니다. 앱을 사용할 수 있게 되면 이 페이지에 스토어 링크를 추가합니다.",
                },
                {
                    question: "현재 빌드에서 계정을 만드나요?",
                    answer: "아니요. MVP는 로컬 우선 방식이며 사용자 계정, 클라우드 동기화, 원격 악보 저장 기능을 포함하지 않습니다.",
                },
                {
                    question: "자동 오디오 악보 추적 기능인가요?",
                    answer: "아니요. SheetCue는 오디오 기반 실시간 악보 추적이 아니라 편집 가능한 마디 큐와 사용자가 제어하는 재생 흐름에 집중합니다.",
                },
                {
                    question: "앱이 네트워크 서비스를 사용하나요?",
                    answer: "악보 처리는 백엔드 서비스가 필요하지 않습니다. 앱에는 개인정보처리방침에 설명된 Google Mobile Ads와 Google UMP 동의 처리가 포함됩니다.",
                },
            ],
        },
        cta: {
            heading: "SheetCue는 공개 스토어 출시를 준비 중입니다.",
            subheading: "앱을 사용할 수 있게 되면 이곳에 스토어 링크를 추가합니다. 그 전까지는 이 페이지에서 출시 상태, 개인정보, 지원 정보를 확인할 수 있습니다.",
            releaseUrl: "#release",
            privacyUrl: withBasePath("/privacy/privacy-policy.html#ko"),
            releaseLabel: "출시 상태 확인",
            privacyLabel: "개인정보처리방침 보기",
        },
        footer: {
            subheading: "PDF 악보 연습을 위한 편집 가능한 마디 큐.",
            quickLinksTitle: "빠른 링크",
            trustLinksTitle: "정책 링크",
            privacyPolicy: "개인정보처리방침",
            support: "지원",
            contact: "문의",
            quickLinks: [
                { text: "기능", url: "#features" },
                { text: "흐름", url: "#workflow" },
                { text: "개인정보", url: "#privacy" },
                { text: "출시 상태", url: "#release" },
            ],
            email: "",
            telephone: "",
            socials: {},
            copyright: "All rights reserved.",
        },
    },
};
