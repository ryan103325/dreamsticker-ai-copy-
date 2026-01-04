export type LanguageCode = 'zh' | 'en';

export const translations = {
    zh: {
        // Landing Page
        landingTitle: "打造您的專屬 Line 貼圖 IP",
        landingSubtitle: "從 0 到 1 打造您的專屬貼圖完整教學",
        apiKeyLabel: "Google Gemini API Key",
        apiKeyPlaceholder: "請輸入您的 API KEY...",
        startBtn: "開始創作",
        noKey: "沒有 API Key?",
        getKey: "前往 Google AI Studio 免費獲取",
        localSave: "為了您的資訊安全，Key 僅保留於本次連線 (Session)，重整網頁後需重新輸入。",
        invalidKey: "請輸入有效的 API Key",

        // Navbar
        changeKey: "更換 Key",
        confirmChangeKey: "確定要更換 API Key 嗎？這將會清除目前的連線設定。",

        // Main App
        backStep: "返回上一步",
        mainTitle: "創造您的專屬 IP 角色",
        mainSubtitle: "選擇一種方式開始，AI 將為您打造獨一無二的貼圖主角",

        // Modes
        stickerMode: "一般貼圖 (Stickers)",
        emojiMode: "LINE 表情貼 (Emojis)",
        emojiNote: "＊表情貼模式：尺寸 180x180 px，無白邊，適合連續輸入",

        // Input Modes
        modePhoto: "照片轉 IP",
        modePhotoDesc: "支援單人、雙人、多人合照，自動轉換為卡通形象。",
        modeExisting: "延伸現有 IP",
        modeExistingDesc: "上傳一張角色圖，AI 幫您畫出不同動作的貼圖。",
        modeText: "文字生成 IP",
        modeTextDesc: "輸入文字描述，AI 為您從零設計全新角色。",
        modeUtility: "上傳底圖 (切割工具)",
        modeUtilityDesc: "已有拼圖底稿？純粹使用自動切割與打包功能。",

        // Common
        styleSetting: "畫風設定",
        startDesign: "開始設計角色 ✨",
        processing: "AI 設計中...",
    },
    en: {
        // Landing Page
        landingTitle: "Create Your Exclusive Line Sticker IP",
        landingSubtitle: "A complete guide to building your sticker pack from scratch",
        apiKeyLabel: "Google Gemini API Key",
        apiKeyPlaceholder: "Enter your API KEY here...",
        startBtn: "Start Creating",
        noKey: "No API Key?",
        getKey: "Get one for free at Google AI Studio",
        localSave: "For your security, the Key is used for this session only and will be cleared on refresh.",
        invalidKey: "Please enter a valid API Key",

        // Navbar
        changeKey: "Change Key",
        confirmChangeKey: "Are you sure you want to change the API Key? This will clear your current session.",

        // Main App
        backStep: "Back",
        mainTitle: "Create Your Exclusive IP Character",
        mainSubtitle: "Choose a method to start, AI will build a unique character for you",

        // Modes
        stickerMode: "Standard Stickers",
        emojiMode: "LINE Emojis",
        emojiNote: "*Emoji Mode: 180x180 px, full bleed, suitable for inline messaging",

        // Input Modes
        modePhoto: "Photo to IP",
        modePhotoDesc: "Convert selfies or pet photos into cartoon characters.",
        modeExisting: "Extend Existing IP",
        modeExistingDesc: "Upload a character image, AI generates new poses.",
        modeText: "Text to IP",
        modeTextDesc: "Describe a character, AI designs it from scratch.",
        modeUtility: "Upload Sheet (Utility)",
        modeUtilityDesc: "Have a sprite sheet? Use purely for slicing and packing.",

        // Common
        styleSetting: "Art Style",
        startDesign: "Start Designing ✨",
        processing: "Designing...",
    }
};
