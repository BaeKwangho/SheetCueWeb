import {
    FiEdit3,
    FiFileText,
    FiHardDrive,
    FiList,
    FiLock,
    FiRepeat,
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

type LocaleCopy = {
    metadata: ILandingContent["metadata"];
    nav: {
        menuItems: ILandingContent["nav"]["menuItems"];
        releaseCta: string;
        languageMenuLabel: string;
    };
    hero: Omit<ILandingContent["hero"], "secondaryCtaUrl" | "centerImageSrc" | "imageAlt"> & {
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
    cta: Omit<ILandingContent["cta"], "releaseUrl" | "privacyUrl">;
    footer: Omit<ILandingContent["footer"], "email" | "telephone" | "socials">;
};

const copyByLocale: Record<Locale, LocaleCopy> = {
    en: {
        metadata: {
            title: "SheetCue | Editable PDF Score Practice Flow",
            description: "SheetCue helps musicians turn PDF sheet music into editable, measure-by-measure practice cues. Import locally, fix measures, arrange repeats, and rehearse with the next cue in view.",
        },
        nav: {
            menuItems: [
                { text: "Features", url: "#features" },
                { text: "Workflow", url: "#workflow" },
                { text: "Privacy", url: "#privacy" },
                { text: "Release", url: "#release" },
            ],
            releaseCta: "Release status",
            languageMenuLabel: "Language",
        },
        hero: {
            eyebrow: "For PDF score practice",
            heading: "Turn sheet-music PDFs into measure cues.",
            subheading: "For musicians rehearsing from PDFs: mark measures, fix repeats, adjust timing, and keep the next cue in view.",
            secondarySubheading: "Use SheetCue when a flat PDF cannot show where you are, what comes next, or how the rehearsal order should unfold.",
            primaryCta: "Check release status",
            secondaryCta: "Read privacy policy",
            imageAlt: "SheetCue screens showing a PDF score list, playback view, and measure-by-measure practice cues",
        },
        stats: [
            { title: "For musicians", description: "Built for the moment when PDF practice needs repeat order, timing, and next-measure context." },
            { title: "Editable cues", description: "Measure detection starts the setup, then you correct boxes, order, BPM, and beats by hand." },
            { title: "Local-first", description: "Score PDFs, page images, measure crops, and presets stay on device." },
        ],
        benefits: [
            {
                title: "Fix the measures before practice",
                description: "Detection gives you a starting point. The important part is being able to inspect the score and correct the cues before rehearsal starts.",
                bullets: [
                    { title: "Move and resize boxes", description: "Correct measure boundaries when the page layout needs a human eye." },
                    { title: "Split and merge measures", description: "Repair missed or combined measures without restarting the setup." },
                    { title: "Readable cue order", description: "Confirm the sequence before you start practicing from it." },
                ],
            },
            {
                title: "Build the actual rehearsal path",
                description: "Printed page order is not always the order you play. SheetCue lets you turn a static score into the path you actually follow.",
                bullets: [
                    { title: "Import from device", description: "Start with the PDF score you already use." },
                    { title: "Arrange repeats", description: "Follow the rehearsal order instead of only the printed layout." },
                    { title: "Rehearse with cues", description: "Keep the current measure and the next step visible." },
                ],
            },
            {
                title: "Practice without uploading scores",
                description: "The current build keeps score setup direct: no account, no cloud sync, and no remote score storage.",
                bullets: [
                    { title: "Score assets stay local", description: "Imported PDFs, rendered pages, measure crops, and preset metadata stay on device." },
                    { title: "No account requirement", description: "Set up rehearsal without login or remote score libraries." },
                    { title: "Clear policy surface", description: "Privacy, support, and open-source notices stay linked from the public page." },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "A quick setup path before rehearsal.",
            description: "Choose a PDF, check the detected measures, arrange the order you will actually play, then practice with the next cue visible.",
            steps: [
                { number: "1", title: "Choose the PDF", description: "Use the score file already on your device." },
                { number: "2", title: "Check measures", description: "Review and fix the detected measure boxes." },
                { number: "3", title: "Set the path", description: "Arrange repeats, playback order, BPM, and beats." },
                { number: "4", title: "Practice with context", description: "Follow the current cue while preparing for the next one." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "Your score files stay on your device.",
            description: "Imported PDFs, rendered pages, cropped measure images, and preset metadata are stored locally. The current build does not create accounts and does not upload score files.",
            points: ["No account requirement", "No score uploads", "Google Ads with UMP consent"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "Frequently Asked Questions",
            supportPrompt: "Need policy or support details?",
            supportLink: "SheetCue support",
            items: [
                { question: "Does SheetCue upload my score PDFs?", answer: "No. The current build stores imported score PDFs, rendered page images, cropped measure images, and preset metadata locally on the user's device." },
                { question: "Is SheetCue available in app stores now?", answer: "SheetCue is preparing for public store release. Store links will be added to this page when the app is available." },
                { question: "Does the current build create accounts?", answer: "No. The MVP is local-first and does not include user accounts, cloud sync, or remote score storage." },
                { question: "Is this automatic audio score following?", answer: "No. SheetCue focuses on editable measure cues and user-controlled playback flow, not audio-based real-time score following." },
                { question: "Does the app use network services?", answer: "Score processing does not require a backend service. The app includes Google Mobile Ads and Google UMP consent handling as documented in the privacy policy." },
            ],
        },
        cta: {
            heading: "SheetCue is preparing for public store release.",
            subheading: "Store links will be added here when the app is available. Until then, use this page for release status, privacy, and support.",
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
            copyright: "All rights reserved.",
        },
    },
    ko: {
        metadata: {
            title: "SheetCue | PDF 악보를 연습 흐름으로 편집",
            description: "SheetCue는 PDF 악보를 마디 단위 연습 큐로 바꿉니다. 기기 안에서 가져오고, 마디를 보정하고, 반복 순서와 박자를 정해 다음 큐를 보며 연습하세요.",
        },
        nav: {
            menuItems: [
                { text: "기능", url: "#features" },
                { text: "흐름", url: "#workflow" },
                { text: "개인정보", url: "#privacy" },
                { text: "출시", url: "#release" },
            ],
            releaseCta: "출시 상태",
            languageMenuLabel: "언어",
        },
        hero: {
            eyebrow: "PDF 악보 연습용",
            heading: "PDF 악보를 연습 큐로 바꾸세요.",
            subheading: "PDF로 연습하는 연주자를 위해 마디를 표시하고, 반복 순서를 고치고, 박자와 타이밍을 조정해 다음 큐를 보며 연습합니다.",
            secondarySubheading: "평평한 PDF만으로는 지금 어디를 연주 중인지, 다음이 무엇인지, 반복을 어떻게 따라가야 하는지 알기 어렵습니다. SheetCue는 그 흐름을 직접 만들게 해줍니다.",
            primaryCta: "출시 상태 확인",
            secondaryCta: "개인정보처리방침 보기",
            imageAlt: "PDF 악보 목록, 재생 화면, 마디 단위 연습 큐를 보여주는 SheetCue 화면",
        },
        stats: [
            { title: "연주자용", description: "PDF 연습에서 반복 순서, 타이밍, 다음 마디 맥락이 필요해지는 순간을 위해 만들었습니다." },
            { title: "편집 가능한 큐", description: "마디 감지는 시작점이고, 박스·순서·BPM·박자는 직접 보정합니다." },
            { title: "로컬 우선", description: "PDF 악보, 페이지 이미지, 마디 이미지, 프리셋은 사용자의 기기에 저장됩니다." },
        ],
        benefits: [
            {
                title: "연습 전에 마디를 바로잡기",
                description: "감지는 시작점을 만들어 줍니다. 중요한 것은 연습 전에 악보를 확인하고 큐를 직접 보정할 수 있다는 점입니다.",
                bullets: [
                    { title: "박스 이동과 크기 조정", description: "페이지 레이아웃 때문에 감지가 어긋난 마디 경계를 직접 바로잡습니다." },
                    { title: "마디 분할과 병합", description: "놓치거나 합쳐진 마디를 가져오기부터 다시 하지 않고 수정합니다." },
                    { title: "읽기 쉬운 큐 순서", description: "연습을 시작하기 전에 따라갈 순서를 확인합니다." },
                ],
            },
            {
                title: "실제 연습 경로 만들기",
                description: "인쇄된 페이지 순서가 곧 연주 순서는 아닙니다. SheetCue는 정적인 악보를 실제로 따라갈 연습 경로로 바꿉니다.",
                bullets: [
                    { title: "기기에서 가져오기", description: "이미 연습에 쓰고 있는 PDF 악보에서 시작합니다." },
                    { title: "반복 순서 정리", description: "인쇄된 배치가 아니라 실제 연습 순서를 따릅니다." },
                    { title: "큐를 보며 연습", description: "현재 마디와 다음에 갈 위치를 함께 봅니다." },
                ],
            },
            {
                title: "악보 업로드 없이 연습하기",
                description: "현재 빌드는 계정, 클라우드 동기화, 원격 악보 저장 없이 연습 설정을 바로 끝내도록 설계되었습니다.",
                bullets: [
                    { title: "악보 자산은 기기 안에", description: "가져온 PDF, 렌더링된 페이지, 마디 이미지, 프리셋 메타데이터는 기기에 남습니다." },
                    { title: "계정 불필요", description: "로그인이나 원격 악보 라이브러리 없이 연습 준비를 끝냅니다." },
                    { title: "명확한 정책 링크", description: "개인정보, 지원, 오픈소스 고지는 공개 페이지에서 확인할 수 있습니다." },
                ],
            },
        ],
        workflow: {
            id: "workflow",
            title: "연습 전 빠른 준비 흐름.",
            description: "PDF를 고르고, 감지된 마디를 확인하고, 실제로 연주할 순서를 정리한 뒤 다음 큐를 보며 연습합니다.",
            steps: [
                { number: "1", title: "PDF 선택", description: "기기에 있는 악보 파일을 사용합니다." },
                { number: "2", title: "마디 확인", description: "감지된 마디 박스를 검토하고 바로잡습니다." },
                { number: "3", title: "경로 설정", description: "반복, 재생 순서, BPM, 박자를 정리합니다." },
                { number: "4", title: "맥락 보며 연습", description: "현재 큐를 따라가면서 다음 위치를 준비합니다." },
            ],
        },
        privacy: {
            id: "privacy",
            title: "악보 파일은 기기에 남습니다.",
            description: "가져온 PDF, 렌더링된 페이지, 잘라낸 마디 이미지, 프리셋 메타데이터는 로컬에 저장됩니다. 현재 빌드는 계정을 만들지 않고 악보 파일을 업로드하지 않습니다.",
            points: ["계정 필요 없음", "악보 업로드 없음", "Google Ads 및 UMP 동의 처리"],
        },
        faq: {
            eyebrow: "FAQ",
            title: "자주 묻는 질문",
            supportPrompt: "정책이나 지원 정보가 필요하신가요?",
            supportLink: "SheetCue 지원",
            items: [
                { question: "SheetCue가 제 PDF 악보를 업로드하나요?", answer: "아니요. 현재 빌드는 가져온 PDF 악보, 렌더링된 페이지 이미지, 잘라낸 마디 이미지, 프리셋 메타데이터를 사용자의 기기에 로컬로 저장합니다." },
                { question: "SheetCue를 지금 앱 스토어에서 받을 수 있나요?", answer: "SheetCue는 공개 스토어 출시를 준비 중입니다. 앱을 사용할 수 있게 되면 이 페이지에 스토어 링크를 추가합니다." },
                { question: "현재 빌드에서 계정을 만드나요?", answer: "아니요. MVP는 로컬 우선 방식이며 사용자 계정, 클라우드 동기화, 원격 악보 저장 기능을 포함하지 않습니다." },
                { question: "자동 오디오 악보 추적 기능인가요?", answer: "아니요. SheetCue는 오디오 기반 실시간 악보 추적이 아니라 편집 가능한 마디 큐와 사용자가 제어하는 재생 흐름에 집중합니다." },
                { question: "앱이 네트워크 서비스를 사용하나요?", answer: "악보 처리는 백엔드 서비스가 필요하지 않습니다. 앱에는 개인정보처리방침에 설명된 Google Mobile Ads와 Google UMP 동의 처리가 포함됩니다." },
            ],
        },
        cta: {
            heading: "SheetCue는 공개 스토어 출시를 준비 중입니다.",
            subheading: "앱을 사용할 수 있게 되면 이곳에 스토어 링크를 추가합니다. 그 전까지는 이 페이지에서 출시 상태, 개인정보, 지원 정보를 확인할 수 있습니다.",
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
            copyright: "All rights reserved.",
        },
    },
    ja: {
        metadata: {
            title: "SheetCue | PDF楽譜を練習フローに編集",
            description: "SheetCueはPDF楽譜を編集できる小節キューに変えます。端末内で取り込み、小節を修正し、リピート順と拍を整えて練習できます。",
        },
        nav: {
            menuItems: [
                { text: "機能", url: "#features" },
                { text: "フロー", url: "#workflow" },
                { text: "プライバシー", url: "#privacy" },
                { text: "リリース", url: "#release" },
            ],
            releaseCta: "リリース状況",
            languageMenuLabel: "言語",
        },
        hero: {
            eyebrow: "編集できる楽譜リハーサル",
            heading: "PDF楽譜を自分用の練習フローに編集。",
            subheading: "小節をマークし、リピート順を並べ替え、テンポとタイミングを調整して、自分で管理するキューで練習できます。",
            secondarySubheading: "ただのPDFビューアではありません。SheetCueは静的なページを編集できる小節キューに変えます。",
            primaryCta: "リリース情報を見る",
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
                { question: "SheetCueは今アプリストアで入手できますか？", answer: "SheetCueは公開ストアでのリリース準備中です。利用可能になった時点で、このページにストアリンクを追加します。" },
                { question: "現在のビルドはアカウントを作成しますか？", answer: "いいえ。MVPはローカル優先で、ユーザーアカウント、クラウド同期、リモート楽譜保存は含みません。" },
                { question: "自動の音声追従機能ですか？", answer: "いいえ。SheetCueは音声ベースのリアルタイム追従ではなく、編集できる小節キューとユーザーが制御する再生フローに集中しています。" },
                { question: "アプリはネットワークサービスを使いますか？", answer: "楽譜処理にバックエンドサービスは必要ありません。アプリにはプライバシーポリシーに記載されたGoogle Mobile AdsとGoogle UMP同意処理が含まれます。" },
            ],
        },
        cta: {
            heading: "SheetCueは公開ストアでのリリース準備中です。",
            subheading: "アプリが利用可能になったら、ここにストアリンクを追加します。それまでは、このページでリリース状況、プライバシー、サポートを確認できます。",
            releaseLabel: "リリース状況を確認",
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
                { text: "リリース状況", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    de: {
        metadata: {
            title: "SheetCue | PDF-Partituren als Übungsablauf bearbeiten",
            description: "SheetCue macht aus PDF-Partituren editierbare Takt-Cues für die Probe. Lokal importieren, Takte korrigieren, Wiederholungen anordnen und mit Playback-Cues üben.",
        },
        nav: {
            menuItems: [
                { text: "Funktionen", url: "#features" },
                { text: "Ablauf", url: "#workflow" },
                { text: "Datenschutz", url: "#privacy" },
                { text: "Veröffentlichung", url: "#release" },
            ],
            releaseCta: "Release-Status",
            languageMenuLabel: "Sprache",
        },
        hero: {
            eyebrow: "Editierbare Notenprobe",
            heading: "Verwandle deine PDF-Partitur in einen Übungsablauf.",
            subheading: "Markiere Takte, ordne Wiederholungen neu, passe Tempo und Timing an und übe mit eigenen Cues.",
            secondarySubheading: "Mehr als ein PDF-Viewer. SheetCue verwandelt statische Seiten in editierbare Takt-Cues.",
            primaryCta: "Release-Updates ansehen",
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
                { question: "Ist SheetCue schon in App-Stores verfügbar?", answer: "SheetCue bereitet die öffentliche Store-Veröffentlichung vor. Store-Links werden auf dieser Seite ergänzt, sobald die App verfügbar ist." },
                { question: "Erstellt der aktuelle Build Konten?", answer: "Nein. Das MVP ist local-first und enthält keine Nutzerkonten, keinen Cloud-Sync und keine Remote-Speicherung von Partituren." },
                { question: "Ist das automatisches Audio-Score-Following?", answer: "Nein. SheetCue konzentriert sich auf editierbare Takt-Cues und einen nutzergesteuerten Playback-Ablauf, nicht auf audiobasiertes Echtzeit-Following." },
                { question: "Nutzt die App Netzwerkdienste?", answer: "Die Partiturverarbeitung benötigt keinen Backend-Dienst. Die App enthält Google Mobile Ads und Google UMP-Zustimmung, wie in der Datenschutzerklärung beschrieben." },
            ],
        },
        cta: {
            heading: "SheetCue bereitet die öffentliche Store-Veröffentlichung vor.",
            subheading: "Store-Links werden hier ergänzt, sobald die App verfügbar ist. Bis dahin findest du auf dieser Seite Release-Status, Datenschutz und Support.",
            releaseLabel: "Release-Status prüfen",
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
                { text: "Release-Status", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    fr: {
        metadata: {
            title: "SheetCue | Transformer une partition PDF en parcours d'entraînement",
            description: "SheetCue transforme les partitions PDF en repères de mesure modifiables. Import local, correction des mesures, ordre des reprises et entraînement avec des repères de lecture.",
        },
        nav: {
            menuItems: [
                { text: "Fonctionnalités", url: "#features" },
                { text: "Parcours", url: "#workflow" },
                { text: "Confidentialité", url: "#privacy" },
                { text: "Sortie", url: "#release" },
            ],
            releaseCta: "État de sortie",
            languageMenuLabel: "Langue",
        },
        hero: {
            eyebrow: "Répétition de partition modifiable",
            heading: "Transformez votre partition PDF en parcours d'entraînement.",
            subheading: "Marquez les mesures, réordonnez les reprises, ajustez le tempo et le timing, puis répétez avec des repères que vous contrôlez.",
            secondarySubheading: "Ce n'est pas un simple lecteur PDF. SheetCue transforme les pages statiques en repères de mesure modifiables.",
            primaryCta: "Voir les nouvelles de sortie",
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
                { question: "SheetCue est-il déjà disponible dans les app stores ?", answer: "SheetCue prépare sa sortie publique. Les liens vers les stores seront ajoutés à cette page lorsque l'app sera disponible." },
                { question: "La version actuelle crée-t-elle des comptes ?", answer: "Non. Le MVP est local-first et n'inclut ni comptes utilisateur, ni synchronisation cloud, ni stockage distant des partitions." },
                { question: "Est-ce un suivi automatique de partition par audio ?", answer: "Non. SheetCue se concentre sur les repères de mesure modifiables et le parcours de lecture contrôlé par l'utilisateur, pas sur le suivi audio en temps réel." },
                { question: "L'app utilise-t-elle des services réseau ?", answer: "Le traitement des partitions ne nécessite pas de service backend. L'app inclut Google Mobile Ads et le consentement Google UMP, comme décrit dans la politique de confidentialité." },
            ],
        },
        cta: {
            heading: "SheetCue prépare sa sortie publique.",
            subheading: "Les liens vers les stores seront ajoutés ici lorsque l'app sera disponible. En attendant, cette page regroupe l'état de sortie, la confidentialité et le support.",
            releaseLabel: "Vérifier l'état de sortie",
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
                { text: "État de sortie", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    es: {
        metadata: {
            title: "SheetCue | Convierte partituras PDF en flujo de práctica",
            description: "SheetCue convierte partituras PDF en pistas de compás editables. Importa localmente, corrige compases, ordena repeticiones y practica con pistas de reproducción.",
        },
        nav: {
            menuItems: [
                { text: "Funciones", url: "#features" },
                { text: "Flujo", url: "#workflow" },
                { text: "Privacidad", url: "#privacy" },
                { text: "Lanzamiento", url: "#release" },
            ],
            releaseCta: "Estado",
            languageMenuLabel: "Idioma",
        },
        hero: {
            eyebrow: "Ensayo de partitura editable",
            heading: "Convierte tu partitura PDF en un flujo de práctica.",
            subheading: "Marca compases, reordena repeticiones, ajusta tempo y timing, y practica con pistas que controlas.",
            secondarySubheading: "No es solo un visor PDF. SheetCue convierte páginas estáticas en pistas de compás editables.",
            primaryCta: "Ver novedades",
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
                { question: "¿SheetCue ya está disponible en las tiendas?", answer: "SheetCue se está preparando para el lanzamiento público. Los enlaces a las tiendas se añadirán a esta página cuando la app esté disponible." },
                { question: "¿La versión actual crea cuentas?", answer: "No. El MVP es local-first y no incluye cuentas de usuario, sincronización en la nube ni almacenamiento remoto de partituras." },
                { question: "¿Es seguimiento automático de partitura por audio?", answer: "No. SheetCue se centra en pistas de compás editables y un flujo de reproducción controlado por el usuario, no en seguimiento de audio en tiempo real." },
                { question: "¿La app usa servicios de red?", answer: "El procesamiento de partituras no requiere backend. La app incluye Google Mobile Ads y consentimiento Google UMP, como se documenta en la política de privacidad." },
            ],
        },
        cta: {
            heading: "SheetCue se prepara para el lanzamiento público.",
            subheading: "Los enlaces a las tiendas se añadirán aquí cuando la app esté disponible. Hasta entonces, usa esta página para estado de lanzamiento, privacidad y soporte.",
            releaseLabel: "Ver estado",
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
                { text: "Estado", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
    "zh-TW": {
        metadata: {
            title: "SheetCue | 將 PDF 樂譜編輯成練習流程",
            description: "SheetCue 將 PDF 樂譜轉成可編輯的小節提示。可在裝置內匯入、修正小節、安排反覆順序，並依播放提示練習。",
        },
        nav: {
            menuItems: [
                { text: "功能", url: "#features" },
                { text: "流程", url: "#workflow" },
                { text: "隱私", url: "#privacy" },
                { text: "發布", url: "#release" },
            ],
            releaseCta: "發布狀態",
            languageMenuLabel: "語言",
        },
        hero: {
            eyebrow: "可編輯的樂譜排練",
            heading: "將 PDF 樂譜編輯成你的練習流程。",
            subheading: "標記小節、重新排列反覆、調整速度與時間，並用你控制的提示來練習。",
            secondarySubheading: "不只是 PDF 檢視器。SheetCue 會把靜態頁面變成可編輯的小節提示。",
            primaryCta: "查看發布消息",
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
                { question: "SheetCue 現在可在應用程式商店下載嗎？", answer: "SheetCue 正在準備公開商店發布。當應用程式可用時，本頁會加入商店連結。" },
                { question: "目前版本會建立帳號嗎？", answer: "不會。MVP 採本機優先，不包含使用者帳號、雲端同步或遠端樂譜儲存。" },
                { question: "這是自動音訊跟譜功能嗎？", answer: "不是。SheetCue 專注於可編輯的小節提示與使用者控制的播放流程，而非音訊式即時跟譜。" },
                { question: "應用程式會使用網路服務嗎？", answer: "樂譜處理不需要後端服務。應用程式包含隱私權政策中說明的 Google Mobile Ads 與 Google UMP 同意處理。" },
            ],
        },
        cta: {
            heading: "SheetCue 正在準備公開商店發布。",
            subheading: "應用程式可用後，這裡會加入商店連結。在此之前，可用本頁查看發布狀態、隱私與支援資訊。",
            releaseLabel: "查看發布狀態",
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
                { text: "發布狀態", url: "#release" },
            ],
            copyright: "All rights reserved.",
        },
    },
};

const statIcons = [
    <FiTarget key="audience" size={30} className="text-primary" />,
    <FiEdit3 key="editable" size={30} className="text-secondary" />,
    <FiHardDrive key="local" size={30} className="text-correction" />,
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
        secondaryCtaUrl: policyUrl(locale),
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
        releaseUrl: "#release",
        privacyUrl: policyUrl(locale),
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
