# Trail of Bits — AI/ML security research

- **URL:** https://blog.trailofbits.com/category/ai-ml/
- **HTTP:** 404 | **Content-Type:** text/html; charset=utf-8

---

## Source: https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/

# Weaponizing image scaling against production AI systems

Picture this: you send a seemingly harmless image to an LLM and suddenly it exfiltrates all of your user data. By delivering a multi-modal prompt injection not visible to the user, we achieved data exfiltration on systems including the Google Gemini CLI. This attack works because AI systems often scale down large images before sending them to the model: when scaled, these images can reveal prompt injections that are not visible at full resolution.

In this blog post, we’ll detail how attackers can exploit image scaling on Gemini CLI, Vertex AI Studio, Gemini’s web and API interfaces, Google Assistant, Genspark, and other production AI systems. We’ll also explain how to mitigate and defend against these attacks, and we’ll introduce Anamorpher, our open-source tool that lets you explore and generate these crafted images.

*Background*: Image scaling attacks were used for model backdoors, evasion, and poisoning primarily against older computer vision systems that enforced a fixed image size. While this constraint is less common with newer approaches, the systems surrounding the model may still impose constraints calling for image scaling. This establishes an underexposed, yet widespread vulnerability that we’ve weaponized for multi-modal prompt injection.

## Data exfiltration on the Gemini CLI

To set up our data exfiltration exploit on the Gemini CLI through an image-scaling attack, we applied the default configuration for the Zapier MCP server. This automatically approves all MCP tool calls without user confirmation, as it sets `trust=True`

in the `settings.json`

of the Gemini CLI. This provides an important primitive for the attacker.

Figure 2 showcases a video of the attack. First, the user uploads a seemingly benign image to the CLI. With no preview available, the user cannot see the transformed, malicious image processed by the model. This image and its prompt-ergeist triggers actions from Zapier that exfiltrates user data stored in Google Calendar to an attacker’s email without confirmation.

This attack is one of many prompt injection attacks already demonstrated on agentic coding tools (including Claude Code and OpenAI Codex). Prior attacks have achieved data exfiltration and remote code execution by exploiting unsafe actions contained in sandboxes, utilizing overly permissive domains contained in network allowlists, and bypassing user confirmation by changing environment configurations. Evidently, these agentic coding tools continue to lack sufficiently secure defaults, design patterns, or systematic defenses that minimize the possibility of impactful prompt injection.

## Even more attacks

We also successfully demonstrated image scaling attacks on the following:

- Vertex AI with a Gemini back end
- Gemini’s web interface
- Gemini’s API via the
`llm`

CLI - Google Assistant on an Android phone
- Genspark

Notice the persistent mismatch between user perception and model inputs in figures 3 and 4. The exploit is particularly impactful on Vertex AI Studio because the front-end UI shows the high-resolution image instead of the downscaled image perceived by the model.

Our testing confirmed that this attack vector is widespread, extending far beyond the applications and systems documented here.

## Sharpening the attack surface

These image scaling attacks exploit downscaling algorithms (or image resampling algorithms), which perform interpolation to turn multiple high resolution pixel values into a single low resolution pixel value.

There are three major downscaling algorithms: nearest neighbor interpolation, bilinear interpolation, and bicubic interpolation. Each algorithm requires a different approach to perform an image scaling attack. Furthermore, these algorithms are implemented differently across libraries (e.g., Pillow, PyTorch, OpenCV, TensorFlow), with varying anti-aliasing, alignment, and kernel phases (in addition to distinct bugs that historically have plagued model performance). These differences also impact the techniques necessary for an image scaling attack. Therefore, exploiting production systems required us to fingerprint each system’s algorithm and implementation.

We developed a custom test suite and methodology to fingerprint downscaling algorithms across different implementations. Core components of this test suite include images with checkerboard patterns, concentric circles, vertical and horizontal bands, Moiré patterns, and slanted edges. These would reveal artifacts such as ringing, blurring, edge handling, aliasing, and inconsistencies in color caused by the underlying downscaling algorithm. This typically provided a sufficient amount of information to determine the algorithm and implementation, enabling us to choose from one of our crafted attacks.

## Nyquist’s nightmares

To understand why image downscaling attacks are possible, imagine that you have a long ribbon with an intricate yet regular pattern on it. As this ribbon is pulled past you, you’re trying to recreate the pattern by grabbing samples of the ribbon at regular intervals. If the pattern changes rapidly, you need to grab samples very frequently to capture all the details. If you’re too slow, you’ll miss crucial parts between grabs, and when you try to reconstruct the pattern from your samples, it looks completely different from the original.

In this analogy, your hand is the sampler, and if the sampling rate falls below a certain threshold (i.e., your hand isn’t fast enough), you cannot unambiguously reconstruct the pattern. This aliasing effect is a consequence of the Nyquist–Shannon sampling theorem. Exploiting this ambiguity by manipulating specific pixels such that a target pattern emerges is exactly what image scaling attacks do. Refer to Quiring et al. for a more detailed explanation.

## Anamorpher and the attacker’s darkroom

Currently, Anamorpher (named after anamorphosis) can develop crafted images for the aforementioned three major methods. Let’s explore how Anamorpher exploits bicubic interpolation frame by frame.

Bicubic interpolation considers the 16 pixels (from 4x4 sampling) around each target pixel, using cubic polynomials to calculate smooth transitions between pixel values. This method creates a predictable mathematical relationship that can be exploited. Specifically, the algorithm assigns different weights to pixels in the neighborhood, creating pixels that contribute more to the final output, which are known as high-importance pixels. Therefore, the total luma (brightness) of dark areas of an image will increase if specific high-importance pixels are higher luma than their surroundings.

Therefore, to exploit this, we can carefully craft high-resolution pixels and solve the inverse problem. First, we select a decoy image with large dark areas to hide our payload. Then, we adjust pixels in dark regions and push the downsampled result toward a red background using least-squares optimization. These adjustments in the dark areas cause the background to turn red while text areas remain largely unmodified and appear black, creating much stronger contrast than visible at full resolution. While this approach is most effective on bicubic downscaling, it also works on specific implementations of bilinear downscaling.

Anamorpher provides users with the ability to visualize and craft image scaling attacks against specific algorithms and implementations through a front-end interface and Python API. In addition, it comes with a modular back end, which enables users to customize their own downscaling algorithm.

## Mitigation and defense

While some downscaling algorithms are more vulnerable than others, attempting to identify the least vulnerable algorithm and implementation is not a robust approach. This is especially true since image scaling attacks are not restricted to the aforementioned three algorithms.

For a secure system, we recommend not using image downscaling and simply limiting the upload dimensions. For any transformation, but especially if downscaling is necessary, the end user should always be provided with a preview of the input that the model is actually seeing, even in CLI and API tools.

The strongest defense, however, is to implement secure design patterns and systematic defenses that mitigate impactful prompt injection beyond multi-modal prompt injection. Inputs, but especially text within an image, should not be able to initiate sensitive tool calls without explicit user confirmation. Refer to our prior guidance on securing agentic systems.

## Now what?

Image scaling attacks may be even more impactful on mobile and edge devices where fixed image sizes are more frequently enforced and suboptimal downscaling algorithms are readily available within the default frameworks and tools. Future work should examine the impact on these devices as well as the additional attack surface introduced by voice AI. It would also be useful to explore more effective fingerprinting approaches, semantic prompt injection, factorized diffusion, polyglots, and additional artifact exploitation, especially any typically chained with upscaling (such as dithering).

Anamorpher is currently in beta, so feel free to reach out with feedback and suggestions as we continue to improve this tool. Stay tuned for more work on the security of multi-modal, agentic, and multi-agentic AI systems!
