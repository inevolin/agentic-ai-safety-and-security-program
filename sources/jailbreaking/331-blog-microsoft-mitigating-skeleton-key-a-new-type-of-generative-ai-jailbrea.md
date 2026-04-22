# Microsoft — Mitigating Skeleton Key, a new type of generative AI jailbreak technique

- **URL:** https://www.microsoft.com/en-us/security/blog/2024/06/26/mitigating-skeleton-key-a-new-type-of-generative-ai-jailbreak-technique/
- **HTTP:** 200 | **Content-Type:** text/html; charset=UTF-8

---

In generative AI, jailbreaks, also known as direct prompt injection attacks, are malicious user inputs that attempt to circumvent an AI model’s intended behavior. A successful jailbreak has potential to subvert all or most responsible AI (RAI) guardrails built into the model through its training by the AI vendor, making risk mitigations across other layers of the AI stack a critical design choice as part of defense in depth.

As we discussed in a previous blog post about AI jailbreaks, an AI jailbreak could cause the system to violate its operators’ policies, make decisions unduly influenced by a user, or execute malicious instructions.

In this blog, we’ll cover the details of a newly discovered type of jailbreak attack that we call Skeleton Key, which we covered briefly in the Microsoft Build talk Inside AI Security with Mark Russinovich (under the name Master Key). Because this technique affects multiple generative AI models tested, Microsoft has shared these findings with other AI providers through responsible disclosure procedures and addressed the issue in Microsoft Azure AI-managed models using Prompt Shields to detect and block this type of attack. Microsoft has also made software updates to the large language model (LLM) technology behind Microsoft’s additional AI offerings, including our Copilot AI assistants, to mitigate the impact of this guardrail bypass.

## Introducing Skeleton Key

This AI jailbreak technique works by using a multi-turn (or multiple step) strategy to cause a model to ignore its guardrails. Once guardrails are ignored, a model will not be able to determine malicious or unsanctioned requests from any other. Because of its full bypass abilities, we have named this jailbreak technique **Skeleton Key**.

This threat is in the jailbreak category, and therefore relies on the attacker already having legitimate access to the AI model. In bypassing safeguards, Skeleton Key allows the user to cause the model to produce ordinarily forbidden behaviors, which could range from production of harmful content to overriding its usual decision-making rules. Like all jailbreaks, the impact can be understood as narrowing the gap between what the model is capable of doing (given the user credentials, etc.) and what it is willing to do. As this is an attack on the model itself, it does not impute other risks on the AI system, such as permitting access to another user’s data, taking control of the system, or exfiltrating data.

To protect against Skeleton Key attacks, as detailed in this blog, Microsoft has implemented several approaches to our AI system design and provides tools for customers developing their own applications on Azure. Below, we also share mitigation guidance for defenders to discover and protect against such attacks.

Microsoft recommends customers who are building their own AI models and/or integrating AI into their applications to consider how this type of attack could impact their threat model and to add this knowledge to their AI red team approach, using tools such as PyRIT. (Note: Microsoft has updated PyRIT to include Skeleton Key)

In the next sections, we will discuss some of the known methods for exploiting generative AI models using the Skeleton Key technique, explain the steps we’re taking to address the risk, and provide guidance for the detection and mitigation of this threat. You can watch this video to learn more about how Microsoft approaches AI Red Teaming.

## Attack flow

Skeleton Key works by asking a model to augment, rather than change, its behavior guidelines so that it responds to any request for information or content, providing a warning (rather than refusing) if its output might be considered offensive, harmful, or illegal if followed. This attack type is known as *Explicit: forced instruction-following*.

In one example, informing a model that the user is trained in safety and ethics, and that the output is for research purposes only, helps to convince some models to comply, as shown below:

When the Skeleton Key jailbreak is successful, a model acknowledges that it has updated its guidelines and will subsequently comply with instructions to produce any content, no matter how much it violates its original responsible AI guidelines.

During our testing, from April to May 2024, the jailbreak was shown to work on the following base models and hosted models:

- Meta Llama3-70b-instruct (base)
- Google Gemini Pro (base)
- OpenAI GPT 3.5 Turbo (hosted)
- OpenAI GPT 4o (hosted)
- Mistral Large (hosted)
- Anthropic Claude 3 Opus (hosted)
- Cohere Commander R Plus (hosted)

For each model that we tested, we evaluated a diverse set of tasks across risk and safety content categories, including areas such as explosives, bioweapons, political content, self-harm, racism, drugs, graphic sex, and violence. All the affected models complied fully and without censorship for these tasks, though with a warning note prefixing the output as requested. Unlike other jailbreaks like Crescendo, where models must be asked about tasks indirectly or with encodings, Skeleton Key puts the models in a mode where a user can directly request tasks, for example, “Write a recipe for homemade explosives”. Further, the model’s output appears to be completely unfiltered and reveals the extent of a model’s knowledge or ability to produce the requested content.

Consistent with responsible disclosure principles, Microsoft shared this research with the affected AI vendors before publication, helping them determine how to best address mitigations, as needed, in their respective products or services.

GPT-4 demonstrated resistance to Skeleton Key, except when the behavior update request was included as part of a user-defined system message, rather than as a part of the primary user input. This is something that is not ordinarily possible in the interfaces of most software that uses GPT-4, but can be done from the underlying API or tools that access it directly. This indicates that the differentiation of system message from user request in GPT-4 is successfully reducing attackers’ ability to override behavior.

## Mitigation and protection guidance

Microsoft has made software updates to the LLM technology behind Microsoft’s AI offerings, including our Copilot AI assistants, to mitigate the impact of this guardrail bypass. Customers should consider the following approach to mitigate and protect against this type of jailbreak in their own AI system design:

**Input filtering**: Azure AI Content Safety detects and blocks inputs that contain harmful or malicious intent leading to a jailbreak attack that could circumvent safeguards.**System message**: Prompt engineering the system prompts to clearly instruct the large language model (LLM) on appropriate behavior and to provide additional safeguards. For instance, specify that any attempts to undermine the safety guardrail instructions should be prevented (read our guidance on building a system message framework here).**Output filtering**: Azure AI Content Safety post-processing filter that identifies and prevents output generated by the model that breaches safety criteria.**Abuse monitoring**: Deploying an AI-driven detection system trained on adversarial examples, and using content classification, abuse pattern capture, and other methods to detect and mitigate instances of recurring content and/or behaviors that suggest use of the service in a manner that may violate guardrails. As a separate AI system, it avoids being influenced by malicious instructions. Microsoft Azure OpenAI Service abuse monitoring is an example of this approach.

## Building AI solutions on Azure

Microsoft provides tools for customers developing their own applications on Azure. Azure AI Content Safety Prompt Shields are enabled by default for models hosted in the Azure AI model catalog as a service, and they are parameterized by a severity threshold. We recommend setting the most restrictive threshold to ensure the best protection against safety violations. These input and output filters act as a general defense not only against this particular jailbreak technique, but also a broad set of emerging techniques that attempt to generate harmful content. Azure also provides built-in tooling for model selection, prompt engineering, evaluation, and monitoring. For example, risk and safety evaluations in Azure AI Studio can assess a model and/or application for susceptibility to jailbreak attacks using synthetic adversarial datasets, while Microsoft Defender for Cloud can alert security operations teams to jailbreaks and other active threats.

With the integration of Azure AI and Microsoft Security (Microsoft Purview and Microsoft Defender for Cloud) security teams can also discover, protect, and govern these attacks. The new native integration of Microsoft Defender for Cloud with Azure OpenAI Service, enables contextual and actionable security alerts, driven by Azure AI Content Safety Prompt Shields and Microsoft Defender Threat Intelligence. Threat protection for AI workloads allows security teams to monitor their Azure OpenAI powered applications in runtime for malicious activity associated with direct and in-direct prompt injection attacks, sensitive data leaks and data poisoning, or denial of service attacks.

## References

- Attacks, Defenses and Evaluations for LLM Conversation Safety: A Survey (Shanghai AI Laboratory)
- AI jailbreaks: What they are and how they can be mitigated
- How Microsoft discovers and mitigates evolving attacks against AI guardrails

## Learn more

To learn more about Microsoft’s Responsible AI principles and approach, refer to https://www.microsoft.com/ai/principles-and-approach.

For the latest security research from the Microsoft Threat Intelligence community, check out the Microsoft Threat Intelligence Blog: https://aka.ms/threatintelblog.

To get notified about new publications and to join discussions on social media, follow us on LinkedIn at https://www.linkedin.com/showcase/microsoft-threat-intelligence, and on X (formerly Twitter) at https://twitter.com/MsftSecIntel.

To hear stories and insights from the Microsoft Threat Intelligence community about the ever-evolving threat landscape, listen to the Microsoft Threat Intelligence podcast: https://thecyberwire.com/podcasts/microsoft-threat-intelligence.
