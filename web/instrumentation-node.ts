if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
  console.log("[tts-prebuild] GEMINI_API_KEY not set — skipping background audio prebuild");
} else {
  import("./lib/prebuild-audio")
    .then(({ runPrebuild }) => runPrebuild())
    .catch((err) => console.error("[tts-prebuild] fatal:", err));
}

export {};
