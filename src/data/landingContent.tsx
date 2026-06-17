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

export const supportedLocales: Locale[] = ["en", "ko", "ja", "de", "fr", "es", "zh-TW"];

export const localeRoutes: Array<{ code: Locale; nativeLabel: string; path: string }> = [
    { code: "en", nativeLabel: "English", path: "/" },
    { code: "ko", nativeLabel: "한국어", path: "/ko/" },
    { code: "ja", nativeLabel: "日本語", path: "/ja/" },
    { code: "de", nativeLabel: "Deutsch", path: "/de/" },
    { code: "fr", nativeLabel: "Français", path: "/fr/" },
    { code: "es", nativeLabel: "Español", path: "/es/" },
    { code: "zh-TW", nativeLabel: "繁體中文", path: "/zh-TW/" },
];

export const localePathFor = (locale: Locale): string => {
    return localeRoutes.find((route) => route.code === locale)?.path ?? "/";
};

export const getLocaleFromPathname = (pathname: string | null | undefined): Locale => {
    const path = pathname?.toLowerCase() ?? "/";

    if (path.startsWith("/zh-tw")) {
        return "zh-TW";
    }

    const match = supportedLocales.find((locale) => locale !== "en" && path.startsWith(`/${locale.toLowerCase()}`));
    return match ?? "en";
};

const policyLocaleFor = (locale: Locale): "en" | "ko" => (locale === "ko" ? "ko" : "en");
const policyUrl = (locale: Locale) => withBasePath(`/privacy/privacy-policy.html#${policyLocaleFor(locale)}`);
const supportUrl = (locale: Locale) => withBasePath(`/privacy/support.html#${policyLocaleFor(locale)}`);
const playStoreUrlByLocale: Record<Locale, string> = {
    en: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=en_US&gl=US",
    ko: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=ko&gl=KR",
    ja: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=ja&gl=JP",
    de: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=de&gl=DE",
    fr: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=fr&gl=FR",
    es: "https://play.google.com/store/apps/details?id=com.sheetcue&hl=es&gl=ES",
    "zh-TW": "https://play.google.com/store/apps/details?id=com.sheetcue&hl=zh_TW&gl=TW",
};
const appStoreUrlByLocale: Record<Locale, string> = {
    en: "https://apps.apple.com/us/app/sheetcue/id6773944737",
    ko: "https://apps.apple.com/kr/app/sheetcue/id6773944737",
    ja: "https://apps.apple.com/jp/app/sheetcue/id6773944737",
    de: "https://apps.apple.com/de/app/sheetcue/id6773944737",
    fr: "https://apps.apple.com/fr/app/sheetcue/id6773944737",
    es: "https://apps.apple.com/es/app/sheetcue/id6773944737",
    "zh-TW": "https://apps.apple.com/tw/app/sheetcue/id6773944737",
};

const storeBadgeAssetsByLocale: Record<
    Locale,
    {
        playStoreSrc: string;
        playStoreAlt: string;
        appStoreSrc: string;
        appStoreAlt: string;
    }
> = {
    en: {
        playStoreSrc: "/assets/store-badges/en-google-play.png",
        playStoreAlt: "Get it on Google Play",
        appStoreSrc: "/assets/store-badges/en-app-store.svg",
        appStoreAlt: "Download on the App Store",
    },
    ko: {
        playStoreSrc: "/assets/store-badges/ko-google-play.png",
        playStoreAlt: "Google Play에서 받기",
        appStoreSrc: "/assets/store-badges/ko-app-store.svg",
        appStoreAlt: "App Store에서 다운로드하기",
    },
    ja: {
        playStoreSrc: "/assets/store-badges/ja-google-play.png",
        playStoreAlt: "Google Play で手に入れよう",
        appStoreSrc: "/assets/store-badges/ja-app-store.svg",
        appStoreAlt: "App Store からダウンロード",
    },
    de: {
        playStoreSrc: "/assets/store-badges/de-google-play.png",
        playStoreAlt: "Jetzt bei Google Play",
        appStoreSrc: "/assets/store-badges/de-app-store.svg",
        appStoreAlt: "Laden im App Store",
    },
    fr: {
        playStoreSrc: "/assets/store-badges/fr-google-play.png",
        playStoreAlt: "Disponible sur Google Play",
        appStoreSrc: "/assets/store-badges/fr-app-store.svg",
        appStoreAlt: "Télécharger dans l'App Store",
    },
    es: {
        playStoreSrc: "/assets/store-badges/es-google-play.png",
        playStoreAlt: "Disponible en Google Play",
        appStoreSrc: "/assets/store-badges/es-app-store.svg",
        appStoreAlt: "Descárgalo en el App Store",
    },
    "zh-TW": {
        playStoreSrc: "/assets/store-badges/zh-TW-google-play.png",
        playStoreAlt: "立即前往 Google Play",
        appStoreSrc: "/assets/store-badges/zh-TW-app-store.svg",
        appStoreAlt: "從 App Store 下載",
    },
};

type LocaleCopy = {
    metadata: ILandingContent["metadata"];
    nav: {
        menuItems: ILandingContent["nav"]["menuItems"];
        releaseCta: string;
        languageMenuLabel: string;
    };
    hero: Omit<
        ILandingContent["hero"],
        | "primaryCtaUrl"
        | "appStoreCtaUrl"
        | "secondaryCtaUrl"
        | "playStoreBadgeSrc"
        | "playStoreBadgeAlt"
        | "appStoreBadgeSrc"
        | "appStoreBadgeAlt"
        | "centerImageSrc"
        | "imageAlt"
    > & {
        imageAlt: string;
    };
    stats: Array<{ title: string; description: string }>;
    benefits: Array<{
        title: string;
        description: string;
        bullets: Array<{ title: string; description: string }>;
    }>;
    workflow: ILandingContent["workflow"];
    privacy: ILandingContent["privacy"];
    faq: Omit<ILandingContent["faq"], "supportUrl">;
    cta: Omit<
        ILandingContent["cta"],
        | "releaseUrl"
        | "privacyUrl"
        | "playStoreUrl"
        | "playStoreLabel"
        | "playStoreBadgeSrc"
        | "playStoreBadgeAlt"
        | "appStoreUrl"
        | "appStoreLabel"
        | "appStoreBadgeSrc"
        | "appStoreBadgeAlt"
    >;
    footer: Omit<ILandingContent["footer"], "email" | "telephone" | "socials">;
};

const copyByLocale: Record<Locale, LocaleCopy> = {
    en: {
        metadata: {
            title: "SheetCue: PDF Score Viewer",
            description: "View PDF sheet music and practice measure by measure. Import a score PDF, adjust measures and timing, then follow your playback order.",
        },
        nav: {
            menuItems: [
                { text: "Features", url: "#features" },
                { text: "Workflow", url: "#workflow" },
                { text: "Privacy", url: "#privacy" },
                { text: "Stores", url: "#release" },
            ],
            releaseCta: "Download",
            languageMenuLabel: "Language",
        },
        hero: {
            eyebrow: "PDF score viewer",
            heading: "View PDF sheet music and practice measure by measure.",
            subheading: "Import a score PDF, review detected measures, adjust boxes and timing, then build the playback order you want to follow.",
            secondarySubheading: "Landscape practice mode moves through the score measure by measure so you can keep your place while practicing.",
            primaryCta: "Get it on Google Play",
            secondaryCta: "Read privacy policy",
            imageAlt: "Sketch of importing a score PDF, editing measure boxes, and rehearsing from playback cues",
        },
        stats: [
            { title: "Editable", description: "Measure detection is paired with correction tools, not hidden automation." },
            { title: "Local-first", description: "Score PDFs, page images, measure crops, and presets stay on device." },
            { title: "No accounts", description: "The current MVP does not add login, sync, or remote score storage." },
        ],
        benefits: [
            {
                title: "Editable measure cues",
                description: "Detection helps with setup, but the user stays in control. SheetCue is built around fast inspection and correction.",
                bullets: [
                    { title: "Move and resize boxes", description: "Correct measure boundaries when detection needs a human eye." },
                    { title: "Split and merge measures", description: "Fix the structure without restarting the import workflow." },
                    { title: "Visible cue order", description: "Keep the playback sequence readable before rehearsal starts." },
                ],
            },
            {
                title: "Practice flow from a static PDF",
                description: "Turn a score page into a sequence that can handle repeats, order, timing, and current or next cues.",
                bullets: [
                    { title: "Import from device", description: "Choose the score PDF you already use for practice." },
                    { title: "Arrange repeats", description: "Follow the rehearsal order instead of only the printed page order." },
                    { title: "Rehearse with cues", description: "See the current measure and prepare for what comes next." },
                ],
            },
            {
                title: "Local-first score handling",
                description: "The current build is designed without accounts, cloud sync, or score uploads.",
                bullets: [
                    { title: "Score assets stay local", description: "Imported PDFs, rendered pages, measure crops, and preset metadata stay on device." },
                    { title: "No account requirement", description: "The MVP keeps rehearsal setup local and direct." },
                    { title: "Clear policy surface", description: "Privacy, support, and open-source notices stay linked from the public page." },
                ],
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
            items: [
                { question: "Does SheetCue upload my score PDFs?", answer: "No. The current build stores imported score PDFs, rendered page images, cropped measure images, and preset metadata locally on the user's device." },
                { question: "Is SheetCue available in app stores now?", answer: "Yes. Use the store buttons on this page to open the current Google Play and App Store listings for SheetCue." },
                { question: "Does the current build create accounts?", answer: "No. The MVP is local-first and does not include user accounts, cloud sync, or remote score storage." },
                { question: "Is this automatic audio score following?", answer: "No. SheetCue focuses on editable measure cues and user-controlled playback flow, not audio-based real-time score following." },
                { question: "Does the app use network services?", answer: "Score processing does not require a backend service. The app includes Google Mobile Ads and Google UMP consent handling as documented in the privacy policy." },
            ],
        },
        cta: {
            heading: "Download SheetCue from the app stores.",
            subheading: "Get the free app on Google Play or the App Store. Imported scores and generated measure images stay on your device unless you export or share them.",
            releaseLabel: "Google Play",
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
                { text: "Stores", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    ko: {
        metadata: {
            title: "SheetCue: PDF 악보 뷰어",
            description: "PDF 악보를 보며 마디 단위로 연습하세요. 악보 PDF를 가져오고, 마디와 타이밍을 조정한 뒤 원하는 재생 순서를 따라갑니다.",
        },
        nav: {
            menuItems: [
                { text: "기능", url: "#features" },
                { text: "흐름", url: "#workflow" },
                { text: "개인정보", url: "#privacy" },
                { text: "스토어", url: "#release" },
            ],
            releaseCta: "다운로드",
            languageMenuLabel: "언어",
        },
        hero: {
            eyebrow: "PDF 악보 뷰어",
            heading: "PDF 악보를 보며 마디 단위로 연습하세요.",
            subheading: "악보 PDF를 가져오고, 감지된 마디를 확인하고, 박스와 타이밍을 조정한 뒤 원하는 재생 순서를 만듭니다.",
            secondarySubheading: "가로 연습 모드는 악보를 마디 단위로 넘겨 주어 연습 중 위치를 놓치지 않도록 돕습니다.",
            primaryCta: "Google Play에서 받기",
            secondaryCta: "개인정보처리방침 보기",
            imageAlt: "PDF 악보를 가져와 마디 박스를 편집하고 재생 큐로 연습하는 흐름 스케치",
        },
        stats: [
            { title: "편집 가능", description: "마디 감지는 자동화에 숨기지 않고 직접 보정할 수 있는 도구와 함께 제공됩니다." },
            { title: "로컬 우선", description: "PDF 악보, 페이지 이미지, 마디 이미지, 프리셋은 사용자의 기기에 저장됩니다." },
            { title: "계정 없음", description: "현재 MVP에는 로그인, 동기화, 원격 악보 저장 기능이 없습니다." },
        ],
        benefits: [
            {
                title: "편집 가능한 마디 큐",
                description: "감지는 설정을 돕지만 최종 제어권은 사용자에게 있습니다. SheetCue는 빠르게 확인하고 보정하는 흐름을 중심으로 설계되었습니다.",
                bullets: [
                    { title: "박스 이동과 크기 조정", description: "감지가 놓친 마디 경계를 직접 바로잡을 수 있습니다." },
                    { title: "마디 분할과 병합", description: "가져오기 과정을 다시 시작하지 않고 구조를 수정합니다." },
                    { title: "보이는 큐 순서", description: "연습을 시작하기 전에 재생 순서를 읽기 쉽게 확인합니다." },
                ],
            },
            {
                title: "정적인 PDF에서 연습 흐름으로",
                description: "악보 페이지를 반복, 순서, 박자, 현재/다음 큐를 다룰 수 있는 시퀀스로 바꿉니다.",
                bullets: [
                    { title: "기기에서 가져오기", description: "이미 연습에 쓰고 있는 PDF 악보를 선택합니다." },
                    { title: "반복 순서 정리", description: "인쇄된 페이지 순서가 아니라 실제 연습 순서를 따릅니다." },
                    { title: "큐를 보며 연습", description: "현재 마디를 보고 다음 마디를 미리 준비합니다." },
                ],
            },
            {
                title: "로컬 우선 악보 처리",
                description: "현재 빌드는 계정, 클라우드 동기화, 악보 업로드 없이 동작하도록 설계되었습니다.",
                bullets: [
                    { title: "악보 자산은 기기 안에", description: "가져온 PDF, 렌더링된 페이지, 마디 이미지, 프리셋 메타데이터는 기기에 남습니다." },
                    { title: "계정 불필요", description: "MVP는 연습 설정을 로컬에서 바로 끝내는 흐름을 유지합니다." },
                    { title: "명확한 정책 링크", description: "개인정보, 지원, 오픈소스 고지는 공개 페이지에서 확인할 수 있습니다." },
                ],
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
            items: [
                { question: "SheetCue가 제 PDF 악보를 업로드하나요?", answer: "아니요. 현재 빌드는 가져온 PDF 악보, 렌더링된 페이지 이미지, 잘라낸 마디 이미지, 프리셋 메타데이터를 사용자의 기기에 로컬로 저장합니다." },
                { question: "SheetCue를 지금 앱 스토어에서 받을 수 있나요?", answer: "네. 이 페이지의 스토어 버튼으로 SheetCue의 Google Play와 App Store 등록 페이지를 열 수 있습니다." },
                { question: "현재 빌드에서 계정을 만드나요?", answer: "아니요. MVP는 로컬 우선 방식이며 사용자 계정, 클라우드 동기화, 원격 악보 저장 기능을 포함하지 않습니다." },
                { question: "자동 오디오 악보 추적 기능인가요?", answer: "아니요. SheetCue는 오디오 기반 실시간 악보 추적이 아니라 편집 가능한 마디 큐와 사용자가 제어하는 재생 흐름에 집중합니다." },
                { question: "앱이 네트워크 서비스를 사용하나요?", answer: "악보 처리는 백엔드 서비스가 필요하지 않습니다. 앱에는 개인정보처리방침에 설명된 Google Mobile Ads와 Google UMP 동의 처리가 포함됩니다." },
            ],
        },
        cta: {
            heading: "앱 스토어에서 SheetCue를 받으세요.",
            subheading: "Google Play 또는 App Store에서 무료 앱을 받을 수 있습니다. 가져온 악보와 생성된 마디 이미지는 직접 내보내거나 공유하지 않는 한 기기에 남습니다.",
            releaseLabel: "Google Play",
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
                { text: "스토어", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    ja: {
        metadata: {
            title: "SheetCue: PDF楽譜ビューア",
            description: "PDF楽譜を表示し、小節ごとに練習できます。楽譜PDFを取り込み、小節とタイミングを調整して、設定した再生順に沿って練習します。",
        },
        nav: {
            menuItems: [
                { text: "機能", url: "#features" },
                { text: "フロー", url: "#workflow" },
                { text: "プライバシー", url: "#privacy" },
                { text: "ストア", url: "#release" },
            ],
            releaseCta: "ダウンロード",
            languageMenuLabel: "言語",
        },
        hero: {
            eyebrow: "PDF楽譜ビューア",
            heading: "PDF楽譜を表示し、小節ごとに練習。",
            subheading: "楽譜PDFを取り込み、検出された小節を確認し、ボックスとタイミングを調整して、練習したい再生順を作成します。",
            secondarySubheading: "横向きの練習モードでは、楽譜が小節ごとに進むため、練習中に位置を見失いにくくなります。",
            primaryCta: "Google Playで入手",
            secondaryCta: "プライバシーポリシーを見る",
            imageAlt: "PDF楽譜を取り込み、小節ボックスを編集し、再生キューで練習する流れのスケッチ",
        },
        stats: [
            { title: "編集可能", description: "小節検出は隠れた自動化ではなく、修正ツールと一緒に使えます。" },
            { title: "ローカル優先", description: "PDF楽譜、ページ画像、小節画像、プリセットは端末内に保存されます。" },
            { title: "アカウント不要", description: "現在のMVPにはログイン、同期、リモート楽譜保存はありません。" },
        ],
        benefits: [
            {
                title: "編集できる小節キュー",
                description: "検出は準備を助けますが、最終的な制御はユーザーにあります。SheetCueは素早い確認と修正を中心に設計されています。",
                bullets: [
                    { title: "ボックスを移動・サイズ変更", description: "検出に人の目が必要な小節境界を修正できます。" },
                    { title: "小節を分割・結合", description: "取り込みをやり直さずに構造を直せます。" },
                    { title: "見えるキュー順", description: "練習前に再生順を読みやすく確認できます。" },
                ],
            },
            {
                title: "静的PDFから練習フローへ",
                description: "楽譜ページを、リピート、順序、拍、現在と次のキューを扱えるシーケンスに変えます。",
                bullets: [
                    { title: "端末から取り込み", description: "普段の練習で使っているPDF楽譜を選べます。" },
                    { title: "リピートを整理", description: "印刷順だけでなく実際の練習順に沿って進めます。" },
                    { title: "キューで練習", description: "現在の小節を見ながら次の小節に備えられます。" },
                ],
            },
            {
                title: "ローカル優先の楽譜処理",
                description: "現在のビルドはアカウント、クラウド同期、楽譜アップロードなしで動く設計です。",
                bullets: [
                    { title: "楽譜データは端末内", description: "取り込んだPDF、描画ページ、小節画像、プリセット情報は端末に残ります。" },
                    { title: "アカウント不要", description: "MVPは練習設定をローカルで直接完結させます。" },
                    { title: "明確なポリシー導線", description: "プライバシー、サポート、オープンソース通知は公開ページから確認できます。" },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "静的PDFから小節キューへ。",
            description: "楽譜を取り込み、小節ボックスを修正し、リピートとタイミングを整えて、現在と次のキューで練習します。",
            steps: [
                { number: "1", title: "取り込み", description: "端末からPDF楽譜を選びます。" },
                { number: "2", title: "修正", description: "検出された小節ボックスを手で編集します。" },
                { number: "3", title: "整理", description: "リピート、再生順、BPM、拍を設定します。" },
                { number: "4", title: "練習", description: "現在と次の小節キューに沿って進めます。" },
            ],
        },
        privacy: {
            id: "privacy",
            title: "楽譜処理はローカル優先です。",
            description: "取り込んだPDF楽譜、描画されたページ、切り出した小節画像、プリセット情報はユーザーの端末に保存されます。現在のビルドはアカウントを作成せず、楽譜ファイルをアップロードしません。",
            points: ["アカウント不要", "楽譜アップロードなし", "Google AdsとUMP同意"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "よくある質問",
            supportPrompt: "ポリシーやサポート情報が必要ですか？",
            supportLink: "SheetCueサポート",
            items: [
                { question: "SheetCueはPDF楽譜をアップロードしますか？", answer: "いいえ。現在のビルドでは、取り込んだPDF楽譜、描画ページ画像、切り出した小節画像、プリセット情報をユーザーの端末にローカル保存します。" },
                { question: "SheetCueは今アプリストアで入手できますか？", answer: "はい。このページのストアボタンからSheetCueのGoogle PlayおよびApp Store掲載ページを開けます。" },
                { question: "現在のビルドはアカウントを作成しますか？", answer: "いいえ。MVPはローカル優先で、ユーザーアカウント、クラウド同期、リモート楽譜保存は含みません。" },
                { question: "自動の音声追従機能ですか？", answer: "いいえ。SheetCueは音声ベースのリアルタイム追従ではなく、編集できる小節キューとユーザーが制御する再生フローに集中しています。" },
                { question: "アプリはネットワークサービスを使いますか？", answer: "楽譜処理にバックエンドサービスは必要ありません。アプリにはプライバシーポリシーに記載されたGoogle Mobile AdsとGoogle UMP同意処理が含まれます。" },
            ],
        },
        cta: {
            heading: "アプリストアからSheetCueを入手。",
            subheading: "Google PlayまたはApp Storeで無料アプリを入手できます。取り込んだ楽譜と生成された小節画像は、自分で書き出しまたは共有しない限り端末内に残ります。",
            releaseLabel: "Google Play",
            privacyLabel: "プライバシーポリシーを見る",
        },
        footer: {
            subheading: "PDF楽譜リハーサルのための編集できる小節キュー。",
            quickLinksTitle: "クイックリンク",
            trustLinksTitle: "信頼リンク",
            privacyPolicy: "プライバシーポリシー",
            support: "サポート",
            contact: "お問い合わせ",
            quickLinks: [
                { text: "機能", url: "#features" },
                { text: "フロー", url: "#workflow" },
                { text: "プライバシー", url: "#privacy" },
                { text: "ストア", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    de: {
        metadata: {
            title: "SheetCue: PDF-Notenviewer",
            description: "PDF-Noten ansehen und Takt für Takt üben. Importiere eine PDF-Partitur, passe Takte und Timing an und folge deiner Wiedergabereihenfolge.",
        },
        nav: {
            menuItems: [
                { text: "Funktionen", url: "#features" },
                { text: "Ablauf", url: "#workflow" },
                { text: "Datenschutz", url: "#privacy" },
                { text: "Stores", url: "#release" },
            ],
            releaseCta: "Download",
            languageMenuLabel: "Sprache",
        },
        hero: {
            eyebrow: "PDF-Notenviewer",
            heading: "PDF-Noten ansehen und Takt für Takt üben.",
            subheading: "Importiere eine PDF-Partitur, prüfe erkannte Takte, passe Boxen und Timing an und erstelle die Wiedergabereihenfolge, der du folgen möchtest.",
            secondarySubheading: "Im Querformat-Übungsmodus bewegt sich SheetCue Takt für Takt durch die Partitur, damit du beim Üben deine Stelle behältst.",
            primaryCta: "Bei Google Play herunterladen",
            secondaryCta: "Datenschutzerklärung lesen",
            imageAlt: "Skizze des Imports einer PDF-Partitur, der Bearbeitung von Taktboxen und des Übens mit Playback-Cues",
        },
        stats: [
            { title: "Editierbar", description: "Taktdetektion wird mit Korrekturwerkzeugen kombiniert, nicht hinter Automatisierung versteckt." },
            { title: "Lokal zuerst", description: "PDF-Partituren, Seitenbilder, Taktbilder und Presets bleiben auf dem Gerät." },
            { title: "Keine Konten", description: "Das aktuelle MVP enthält keine Anmeldung, Synchronisierung oder Remote-Speicherung von Partituren." },
        ],
        benefits: [
            {
                title: "Editierbare Takt-Cues",
                description: "Die Erkennung hilft beim Einrichten, aber die Kontrolle bleibt beim Nutzer. SheetCue ist auf schnelles Prüfen und Korrigieren ausgelegt.",
                bullets: [
                    { title: "Boxen verschieben und skalieren", description: "Korrigiere Taktgrenzen, wenn die Erkennung ein menschliches Auge braucht." },
                    { title: "Takte teilen und verbinden", description: "Repariere die Struktur, ohne den Import neu zu starten." },
                    { title: "Sichtbare Cue-Reihenfolge", description: "Prüfe die Abspielsequenz lesbar, bevor die Probe beginnt." },
                ],
            },
            {
                title: "Übungsablauf aus statischer PDF",
                description: "Mache aus einer Notenseite eine Sequenz für Wiederholungen, Reihenfolge, Timing sowie aktuelle und nächste Cues.",
                bullets: [
                    { title: "Vom Gerät importieren", description: "Wähle die PDF-Partitur, die du bereits zum Üben nutzt." },
                    { title: "Wiederholungen anordnen", description: "Folge dem Probenablauf statt nur der gedruckten Seitenreihenfolge." },
                    { title: "Mit Cues üben", description: "Sieh den aktuellen Takt und bereite dich auf den nächsten vor." },
                ],
            },
            {
                title: "Lokaler Umgang mit Partituren",
                description: "Der aktuelle Build ist ohne Konten, Cloud-Sync oder Partitur-Uploads konzipiert.",
                bullets: [
                    { title: "Notendaten bleiben lokal", description: "Importierte PDFs, gerenderte Seiten, Taktbilder und Preset-Metadaten bleiben auf dem Gerät." },
                    { title: "Kein Konto nötig", description: "Das MVP hält die Probeneinrichtung lokal und direkt." },
                    { title: "Klare Richtlinien", description: "Datenschutz, Support und Open-Source-Hinweise bleiben von der öffentlichen Seite verlinkt." },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "Von statischer PDF zu Takt-Cues.",
            description: "Importiere eine Partitur, korrigiere Taktboxen, ordne Wiederholungen und Timing und übe mit aktuellem und nächstem Cue.",
            steps: [
                { number: "1", title: "Importieren", description: "Wähle eine PDF-Partitur von deinem Gerät." },
                { number: "2", title: "Korrigieren", description: "Bearbeite die erkannten Taktboxen von Hand." },
                { number: "3", title: "Anordnen", description: "Lege Wiederholungen, Abspielreihenfolge, BPM und Schläge fest." },
                { number: "4", title: "Üben", description: "Folge den aktuellen und nächsten Takt-Cues." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "Partiturverarbeitung bleibt lokal-first.",
            description: "Importierte PDF-Partituren, gerenderte Seiten, zugeschnittene Taktbilder und Preset-Metadaten werden auf dem Gerät des Nutzers gespeichert. Der aktuelle Build erstellt keine Konten und lädt keine Partiturdateien hoch.",
            points: ["Kein Konto nötig", "Keine Partitur-Uploads", "Google Ads mit UMP-Zustimmung"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "Häufige Fragen",
            supportPrompt: "Brauchst du Richtlinien- oder Supportdetails?",
            supportLink: "SheetCue-Support",
            items: [
                { question: "Lädt SheetCue meine PDF-Partituren hoch?", answer: "Nein. Der aktuelle Build speichert importierte PDF-Partituren, gerenderte Seitenbilder, zugeschnittene Taktbilder und Preset-Metadaten lokal auf dem Gerät des Nutzers." },
                { question: "Ist SheetCue schon in App-Stores verfügbar?", answer: "Ja. Die Store-Schaltflächen auf dieser Seite öffnen die aktuellen Google Play- und App Store-Einträge für SheetCue." },
                { question: "Erstellt der aktuelle Build Konten?", answer: "Nein. Das MVP ist local-first und enthält keine Nutzerkonten, keinen Cloud-Sync und keine Remote-Speicherung von Partituren." },
                { question: "Ist das automatisches Audio-Score-Following?", answer: "Nein. SheetCue konzentriert sich auf editierbare Takt-Cues und einen nutzergesteuerten Playback-Ablauf, nicht auf audiobasiertes Echtzeit-Following." },
                { question: "Nutzt die App Netzwerkdienste?", answer: "Die Partiturverarbeitung benötigt keinen Backend-Dienst. Die App enthält Google Mobile Ads und Google UMP-Zustimmung, wie in der Datenschutzerklärung beschrieben." },
            ],
        },
        cta: {
            heading: "SheetCue aus den App-Stores laden.",
            subheading: "Die kostenlose App ist bei Google Play und im App Store verfügbar. Importierte Partituren und erzeugte Taktbilder bleiben auf deinem Gerät, sofern du sie nicht selbst exportierst oder teilst.",
            releaseLabel: "Google Play",
            privacyLabel: "Datenschutzerklärung lesen",
        },
        footer: {
            subheading: "Editierbare Takt-Cues für die Probe mit PDF-Partituren.",
            quickLinksTitle: "Schnelllinks",
            trustLinksTitle: "Vertrauenslinks",
            privacyPolicy: "Datenschutzerklärung",
            support: "Support",
            contact: "Kontakt",
            quickLinks: [
                { text: "Funktionen", url: "#features" },
                { text: "Ablauf", url: "#workflow" },
                { text: "Datenschutz", url: "#privacy" },
                { text: "Stores", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    fr: {
        metadata: {
            title: "SheetCue : lecteur de partitions PDF",
            description: "Consultez vos partitions PDF et entraînez-vous mesure par mesure. Importez une partition PDF, ajustez les mesures et le timing, puis suivez votre ordre de lecture.",
        },
        nav: {
            menuItems: [
                { text: "Fonctionnalités", url: "#features" },
                { text: "Parcours", url: "#workflow" },
                { text: "Confidentialité", url: "#privacy" },
                { text: "Stores", url: "#release" },
            ],
            releaseCta: "Télécharger",
            languageMenuLabel: "Langue",
        },
        hero: {
            eyebrow: "Lecteur de partitions PDF",
            heading: "Consultez vos partitions PDF et travaillez mesure par mesure.",
            subheading: "Importez une partition PDF, vérifiez les mesures détectées, ajustez les cadres et le timing, puis créez l'ordre de lecture à suivre.",
            secondarySubheading: "En mode paysage, SheetCue avance dans la partition mesure par mesure afin de vous aider à garder votre place pendant l'entraînement.",
            primaryCta: "Télécharger sur Google Play",
            secondaryCta: "Lire la politique de confidentialité",
            imageAlt: "Croquis d'import d'une partition PDF, de modification des cadres de mesure et de répétition avec repères de lecture",
        },
        stats: [
            { title: "Modifiable", description: "La détection des mesures s'accompagne d'outils de correction, sans automatisation opaque." },
            { title: "Local d'abord", description: "PDF, images de page, extraits de mesure et préréglages restent sur l'appareil." },
            { title: "Sans compte", description: "Le MVP actuel n'ajoute ni connexion, ni synchronisation, ni stockage distant des partitions." },
        ],
        benefits: [
            {
                title: "Repères de mesure modifiables",
                description: "La détection aide à démarrer, mais l'utilisateur garde le contrôle. SheetCue est conçu pour vérifier et corriger rapidement.",
                bullets: [
                    { title: "Déplacer et redimensionner", description: "Corrigez les limites de mesure lorsque la détection a besoin d'un regard humain." },
                    { title: "Diviser et fusionner", description: "Réparez la structure sans recommencer l'import." },
                    { title: "Ordre des repères visible", description: "Gardez la séquence de lecture lisible avant de commencer à répéter." },
                ],
            },
            {
                title: "D'un PDF statique à un parcours",
                description: "Transformez une page de partition en séquence qui gère reprises, ordre, timing et repères actuels ou suivants.",
                bullets: [
                    { title: "Importer depuis l'appareil", description: "Choisissez le PDF que vous utilisez déjà pour travailler." },
                    { title: "Organiser les reprises", description: "Suivez l'ordre de répétition plutôt que le seul ordre imprimé." },
                    { title: "Répéter avec des repères", description: "Voyez la mesure actuelle et préparez la suivante." },
                ],
            },
            {
                title: "Traitement local des partitions",
                description: "La version actuelle est conçue sans comptes, synchronisation cloud ni téléversement de partitions.",
                bullets: [
                    { title: "Les fichiers restent locaux", description: "PDF importés, pages rendues, extraits de mesure et métadonnées de préréglage restent sur l'appareil." },
                    { title: "Aucun compte requis", description: "Le MVP garde la configuration de répétition locale et directe." },
                    { title: "Politiques claires", description: "Confidentialité, support et mentions open source restent accessibles depuis la page publique." },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "Du PDF statique aux repères de mesure.",
            description: "Importez une partition, corrigez les cadres de mesure, organisez reprises et timing, puis répétez avec les repères actuel et suivant.",
            steps: [
                { number: "1", title: "Importer", description: "Choisissez une partition PDF depuis votre appareil." },
                { number: "2", title: "Corriger", description: "Modifiez à la main les cadres de mesure détectés." },
                { number: "3", title: "Organiser", description: "Réglez reprises, ordre de lecture, BPM et temps." },
                { number: "4", title: "Répéter", description: "Suivez les repères de mesure actuel et suivant." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "Le traitement des partitions reste local d'abord.",
            description: "Les PDF importés, pages rendues, images de mesure découpées et métadonnées de préréglage sont stockés sur l'appareil de l'utilisateur. La version actuelle ne crée pas de comptes et ne téléverse pas les fichiers de partition.",
            points: ["Aucun compte requis", "Aucun téléversement de partition", "Google Ads avec consentement UMP"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "Questions fréquentes",
            supportPrompt: "Besoin de détails sur les politiques ou le support ?",
            supportLink: "Support SheetCue",
            items: [
                { question: "SheetCue téléverse-t-il mes PDF de partition ?", answer: "Non. La version actuelle stocke localement sur l'appareil les PDF importés, pages rendues, images de mesure découpées et métadonnées de préréglage." },
                { question: "SheetCue est-il déjà disponible dans les app stores ?", answer: "Oui. Les boutons de cette page ouvrent les fiches Google Play et App Store actuelles de SheetCue." },
                { question: "La version actuelle crée-t-elle des comptes ?", answer: "Non. Le MVP est local-first et n'inclut ni comptes utilisateur, ni synchronisation cloud, ni stockage distant des partitions." },
                { question: "Est-ce un suivi automatique de partition par audio ?", answer: "Non. SheetCue se concentre sur les repères de mesure modifiables et le parcours de lecture contrôlé par l'utilisateur, pas sur le suivi audio en temps réel." },
                { question: "L'app utilise-t-elle des services réseau ?", answer: "Le traitement des partitions ne nécessite pas de service backend. L'app inclut Google Mobile Ads et le consentement Google UMP, comme décrit dans la politique de confidentialité." },
            ],
        },
        cta: {
            heading: "Télécharger SheetCue depuis les app stores.",
            subheading: "L'app gratuite est disponible sur Google Play et l'App Store. Les partitions importées et les images de mesure générées restent sur votre appareil, sauf export ou partage de votre part.",
            releaseLabel: "Google Play",
            privacyLabel: "Lire la politique de confidentialité",
        },
        footer: {
            subheading: "Repères de mesure modifiables pour répéter avec une partition PDF.",
            quickLinksTitle: "Liens rapides",
            trustLinksTitle: "Liens de confiance",
            privacyPolicy: "Politique de confidentialité",
            support: "Support",
            contact: "Contact",
            quickLinks: [
                { text: "Fonctionnalités", url: "#features" },
                { text: "Parcours", url: "#workflow" },
                { text: "Confidentialité", url: "#privacy" },
                { text: "Stores", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    es: {
        metadata: {
            title: "SheetCue: visor de partituras PDF",
            description: "Ve partituras PDF y practica compás por compás. Importa una partitura PDF, ajusta compases y timing, y sigue tu orden de reproducción.",
        },
        nav: {
            menuItems: [
                { text: "Funciones", url: "#features" },
                { text: "Flujo", url: "#workflow" },
                { text: "Privacidad", url: "#privacy" },
                { text: "Tiendas", url: "#release" },
            ],
            releaseCta: "Descargar",
            languageMenuLabel: "Idioma",
        },
        hero: {
            eyebrow: "Visor de partituras PDF",
            heading: "Ve partituras PDF y practica compás por compás.",
            subheading: "Importa una partitura PDF, revisa los compases detectados, ajusta cajas y timing, y crea el orden de reproducción que quieres seguir.",
            secondarySubheading: "En modo horizontal, SheetCue avanza por la partitura compás por compás para ayudarte a mantener tu posición mientras practicas.",
            primaryCta: "Descargar en Google Play",
            secondaryCta: "Leer política de privacidad",
            imageAlt: "Boceto de importar una partitura PDF, editar cajas de compás y practicar con pistas de reproducción",
        },
        stats: [
            { title: "Editable", description: "La detección de compases viene con herramientas de corrección, no con automatización oculta." },
            { title: "Local primero", description: "PDF, imágenes de página, recortes de compás y presets permanecen en el dispositivo." },
            { title: "Sin cuentas", description: "El MVP actual no añade inicio de sesión, sincronización ni almacenamiento remoto de partituras." },
        ],
        benefits: [
            {
                title: "Pistas de compás editables",
                description: "La detección ayuda a preparar, pero el usuario mantiene el control. SheetCue está diseñado para revisar y corregir rápido.",
                bullets: [
                    { title: "Mover y redimensionar cajas", description: "Corrige límites de compás cuando la detección necesita criterio humano." },
                    { title: "Dividir y unir compases", description: "Arregla la estructura sin reiniciar la importación." },
                    { title: "Orden de pistas visible", description: "Mantén legible la secuencia de reproducción antes de practicar." },
                ],
            },
            {
                title: "Flujo de práctica desde un PDF",
                description: "Convierte una página de partitura en una secuencia con repeticiones, orden, timing y pistas actuales o siguientes.",
                bullets: [
                    { title: "Importar desde el dispositivo", description: "Elige el PDF que ya usas para practicar." },
                    { title: "Ordenar repeticiones", description: "Sigue el orden del ensayo, no solo el orden impreso." },
                    { title: "Practicar con pistas", description: "Ve el compás actual y prepárate para el siguiente." },
                ],
            },
            {
                title: "Manejo local de partituras",
                description: "La versión actual está diseñada sin cuentas, sincronización en la nube ni subidas de partituras.",
                bullets: [
                    { title: "Los archivos quedan locales", description: "PDF importados, páginas renderizadas, recortes de compás y metadatos de presets quedan en el dispositivo." },
                    { title: "No requiere cuenta", description: "El MVP mantiene la preparación del ensayo local y directa." },
                    { title: "Políticas claras", description: "Privacidad, soporte y avisos open source siguen enlazados desde la página pública." },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "De PDF estático a pistas de compás.",
            description: "Importa una partitura, corrige cajas de compás, organiza repeticiones y timing, y practica con pistas actuales y siguientes.",
            steps: [
                { number: "1", title: "Importar", description: "Elige una partitura PDF desde tu dispositivo." },
                { number: "2", title: "Corregir", description: "Edita manualmente las cajas de compás detectadas." },
                { number: "3", title: "Ordenar", description: "Configura repeticiones, orden, BPM y tiempos." },
                { number: "4", title: "Practicar", description: "Sigue las pistas del compás actual y siguiente." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "El manejo de partituras es local primero.",
            description: "Las partituras PDF importadas, páginas renderizadas, imágenes de compás recortadas y metadatos de presets se guardan en el dispositivo del usuario. La versión actual no crea cuentas ni sube archivos de partitura.",
            points: ["Sin cuenta requerida", "Sin subidas de partituras", "Google Ads con consentimiento UMP"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "Preguntas frecuentes",
            supportPrompt: "¿Necesitas detalles de políticas o soporte?",
            supportLink: "Soporte de SheetCue",
            items: [
                { question: "¿SheetCue sube mis partituras PDF?", answer: "No. La versión actual guarda localmente en el dispositivo las partituras PDF importadas, imágenes de página renderizadas, recortes de compás y metadatos de presets." },
                { question: "¿SheetCue ya está disponible en las tiendas?", answer: "Sí. Los botones de esta página abren las fichas actuales de SheetCue en Google Play y App Store." },
                { question: "¿La versión actual crea cuentas?", answer: "No. El MVP es local-first y no incluye cuentas de usuario, sincronización en la nube ni almacenamiento remoto de partituras." },
                { question: "¿Es seguimiento automático de partitura por audio?", answer: "No. SheetCue se centra en pistas de compás editables y un flujo de reproducción controlado por el usuario, no en seguimiento de audio en tiempo real." },
                { question: "¿La app usa servicios de red?", answer: "El procesamiento de partituras no requiere backend. La app incluye Google Mobile Ads y consentimiento Google UMP, como se documenta en la política de privacidad." },
            ],
        },
        cta: {
            heading: "Descarga SheetCue desde las tiendas.",
            subheading: "La app gratuita está disponible en Google Play y App Store. Las partituras importadas y las imágenes de compás generadas permanecen en tu dispositivo salvo que las exportes o compartas.",
            releaseLabel: "Google Play",
            privacyLabel: "Leer política de privacidad",
        },
        footer: {
            subheading: "Pistas de compás editables para ensayar con partituras PDF.",
            quickLinksTitle: "Enlaces rápidos",
            trustLinksTitle: "Enlaces de confianza",
            privacyPolicy: "Política de privacidad",
            support: "Soporte",
            contact: "Contacto",
            quickLinks: [
                { text: "Funciones", url: "#features" },
                { text: "Flujo", url: "#workflow" },
                { text: "Privacidad", url: "#privacy" },
                { text: "Tiendas", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    "zh-TW": {
        metadata: {
            title: "SheetCue：PDF 樂譜檢視器",
            description: "查看 PDF 樂譜並逐小節練習。匯入樂譜 PDF，調整小節與時間設定，然後依照你的播放順序練習。",
        },
        nav: {
            menuItems: [
                { text: "功能", url: "#features" },
                { text: "流程", url: "#workflow" },
                { text: "隱私", url: "#privacy" },
                { text: "商店", url: "#release" },
            ],
            releaseCta: "下載",
            languageMenuLabel: "語言",
        },
        hero: {
            eyebrow: "PDF 樂譜檢視器",
            heading: "查看 PDF 樂譜並逐小節練習。",
            subheading: "匯入樂譜 PDF，檢查偵測到的小節，調整框線與時間設定，然後建立你想跟隨的播放順序。",
            secondarySubheading: "橫向練習模式會讓 SheetCue 逐小節推進樂譜，協助你在練習時不迷失位置。",
            primaryCta: "在 Google Play 取得",
            secondaryCta: "閱讀隱私權政策",
            imageAlt: "匯入 PDF 樂譜、編輯小節框，並依播放提示練習的流程草圖",
        },
        stats: [
            { title: "可編輯", description: "小節偵測會搭配修正工具，而不是藏在自動化之後。" },
            { title: "本機優先", description: "PDF 樂譜、頁面影像、小節裁切圖與預設都會留在裝置上。" },
            { title: "無需帳號", description: "目前 MVP 不加入登入、同步或遠端樂譜儲存。" },
        ],
        benefits: [
            {
                title: "可編輯的小節提示",
                description: "偵測能協助設定，但控制權仍在使用者手中。SheetCue 以快速檢查和修正為核心。",
                bullets: [
                    { title: "移動與調整框線", description: "當偵測需要人工判斷時，可修正小節邊界。" },
                    { title: "分割與合併小節", description: "不用重新匯入，也能修正結構。" },
                    { title: "清楚的提示順序", description: "練習開始前，先確認可讀的播放順序。" },
                ],
            },
            {
                title: "從靜態 PDF 到練習流程",
                description: "把樂譜頁面轉成能處理反覆、順序、時間，以及目前/下一個提示的序列。",
                bullets: [
                    { title: "從裝置匯入", description: "選擇你已經用於練習的 PDF 樂譜。" },
                    { title: "安排反覆", description: "依照實際排練順序，而不是只照印刷頁面順序。" },
                    { title: "依提示練習", description: "看見目前小節，並提前準備下一小節。" },
                ],
            },
            {
                title: "本機優先的樂譜處理",
                description: "目前版本設計為不需要帳號、雲端同步或樂譜上傳。",
                bullets: [
                    { title: "樂譜資料留在本機", description: "匯入的 PDF、渲染頁面、小節裁切圖與預設中繼資料都會留在裝置上。" },
                    { title: "不需要帳號", description: "MVP 讓排練設定保持本機且直接。" },
                    { title: "清楚的政策入口", description: "隱私、支援與開源聲明都可從公開頁面連結查看。" },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "從靜態 PDF 到小節提示。",
            description: "匯入樂譜、修正小節框、安排反覆與時間，然後依目前與下一個提示練習。",
            steps: [
                { number: "1", title: "匯入", description: "從裝置選擇 PDF 樂譜。" },
                { number: "2", title: "修正", description: "手動編輯偵測到的小節框。" },
                { number: "3", title: "安排", description: "設定反覆、播放順序、BPM 與拍號。" },
                { number: "4", title: "練習", description: "跟著目前與下一個小節提示練習。" },
            ],
        },
        privacy: {
            id: "privacy",
            title: "樂譜處理以本機優先。",
            description: "匯入的 PDF 樂譜、渲染頁面、裁切的小節影像與預設中繼資料會儲存在使用者裝置上。目前版本不建立帳號，也不上傳樂譜檔案。",
            points: ["無需帳號", "不會上傳樂譜", "Google Ads 與 UMP 同意"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "常見問題",
            supportPrompt: "需要政策或支援資訊嗎？",
            supportLink: "SheetCue 支援",
            items: [
                { question: "SheetCue 會上傳我的 PDF 樂譜嗎？", answer: "不會。目前版本會將匯入的 PDF 樂譜、渲染頁面影像、裁切的小節影像與預設中繼資料本機儲存在使用者裝置上。" },
                { question: "SheetCue 現在可在應用程式商店下載嗎？", answer: "可以。本頁的商店按鈕會開啟 SheetCue 目前的 Google Play 與 App Store 頁面。" },
                { question: "目前版本會建立帳號嗎？", answer: "不會。MVP 採本機優先，不包含使用者帳號、雲端同步或遠端樂譜儲存。" },
                { question: "這是自動音訊跟譜功能嗎？", answer: "不是。SheetCue 專注於可編輯的小節提示與使用者控制的播放流程，而非音訊式即時跟譜。" },
                { question: "應用程式會使用網路服務嗎？", answer: "樂譜處理不需要後端服務。應用程式包含隱私權政策中說明的 Google Mobile Ads 與 Google UMP 同意處理。" },
            ],
        },
        cta: {
            heading: "從應用程式商店取得 SheetCue。",
            subheading: "可在 Google Play 或 App Store 取得免費 App。匯入的樂譜與產生的小節影像會留在你的裝置上，除非你自行匯出或分享。",
            releaseLabel: "Google Play",
            privacyLabel: "閱讀隱私權政策",
        },
        footer: {
            subheading: "為 PDF 樂譜排練提供可編輯的小節提示。",
            quickLinksTitle: "快速連結",
            trustLinksTitle: "信任連結",
            privacyPolicy: "隱私權政策",
            support: "支援",
            contact: "聯絡",
            quickLinks: [
                { text: "功能", url: "#features" },
                { text: "流程", url: "#workflow" },
                { text: "隱私", url: "#privacy" },
                { text: "商店", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
};

const statIcons = [
    <FiEdit3 key="editable" size={34} className="text-teal-600" />,
    <FiHardDrive key="local" size={34} className="text-teal-600" />,
    <FiSlash key="accounts" size={34} className="text-teal-600" />,
];

const benefitIcons = [
    [<FiEdit3 key="edit" size={26} />, <FiSliders key="sliders" size={26} />, <FiList key="list" size={26} />],
    [<FiUpload key="upload" size={26} />, <FiRepeat key="repeat" size={26} />, <FiVolume2 key="volume" size={26} />],
    [<FiLock key="lock" size={26} />, <FiTarget key="target" size={26} />, <FiFileText key="file" size={26} />],
];

const promoImages = {
    hero: "/assets/raw-release/hero-playback-landscape.webp",
    workflow: "/assets/raw-release/workflow-raw-sequence.webp",
    benefits: [
        "/assets/raw-release/feature-crop-edit.webp",
        "/assets/raw-release/feature-flow-editor.webp",
        "/assets/raw-release/feature-local-privacy.webp",
    ],
};

const buildContent = (locale: Locale, copy: LocaleCopy): ILandingContent => ({
    locale,
    metadata: copy.metadata,
    nav: copy.nav,
    hero: {
        ...copy.hero,
        primaryCtaUrl: playStoreUrlByLocale[locale],
        appStoreCtaUrl: appStoreUrlByLocale[locale],
        secondaryCtaUrl: policyUrl(locale),
        playStoreBadgeSrc: withBasePath(storeBadgeAssetsByLocale[locale].playStoreSrc),
        playStoreBadgeAlt: storeBadgeAssetsByLocale[locale].playStoreAlt,
        appStoreBadgeSrc: withBasePath(storeBadgeAssetsByLocale[locale].appStoreSrc),
        appStoreBadgeAlt: storeBadgeAssetsByLocale[locale].appStoreAlt,
        centerImageSrc: withBasePath(promoImages.hero),
    },
    stats: copy.stats.map((stat, index) => ({
        ...stat,
        icon: statIcons[index],
    })),
    benefits: copy.benefits.map((benefit, benefitIndex) => ({
        ...benefit,
        imageSrc: withBasePath(promoImages.benefits[benefitIndex] ?? promoImages.hero),
        bullets: benefit.bullets.map((bullet, bulletIndex) => ({
            ...bullet,
            icon: benefitIcons[benefitIndex][bulletIndex],
        })),
    })),
    workflow: {
        ...copy.workflow,
        imageSrc: withBasePath(promoImages.workflow),
        imageAlt: copy.workflow.title,
    },
    privacy: copy.privacy,
    faq: {
        ...copy.faq,
        supportUrl: supportUrl(locale),
    },
    cta: {
        ...copy.cta,
        releaseUrl: playStoreUrlByLocale[locale],
        privacyUrl: policyUrl(locale),
        playStoreUrl: playStoreUrlByLocale[locale],
        playStoreLabel: copy.cta.releaseLabel,
        playStoreBadgeSrc: withBasePath(storeBadgeAssetsByLocale[locale].playStoreSrc),
        playStoreBadgeAlt: storeBadgeAssetsByLocale[locale].playStoreAlt,
        appStoreUrl: appStoreUrlByLocale[locale],
        appStoreLabel: "App Store",
        appStoreBadgeSrc: withBasePath(storeBadgeAssetsByLocale[locale].appStoreSrc),
        appStoreBadgeAlt: storeBadgeAssetsByLocale[locale].appStoreAlt,
    },
    footer: {
        ...copy.footer,
        email: "",
        telephone: "",
        socials: {},
    },
});

export const landingContent: Record<Locale, ILandingContent> = supportedLocales.reduce(
    (content, locale) => ({
        ...content,
        [locale]: buildContent(locale, copyByLocale[locale]),
    }),
    {} as Record<Locale, ILandingContent>,
);
