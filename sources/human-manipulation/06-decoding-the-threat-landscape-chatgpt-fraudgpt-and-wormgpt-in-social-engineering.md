# Decoding the Threat Landscape : ChatGPT, FraudGPT, and WormGPT in Social Engineering Attacks

- **Year:** 2023
- **DOI:** https://doi.org/10.32628/cseit2390533
- **Source URL:** https://ijsrcseit.com/paper/CSEIT2390533.pdf
- **HTTP:** 200 | **Content-Type:** application/pdf
- **Effective URL:** https://ijsrcseit.com/paper/CSEIT2390533.pdf

---

 International Journal of Scientific Research in Computer Science, Engineering and
 Information Technology
 ISSN : 2456-3307 Available Online at : www.ijsrcseit.com
 doi : https://doi.org/10.32628/CSEIT2390533

Decoding the Threat Landscape : ChatGPT, FraudGPT, and WormGPT in Social
 Engineering Attacks
 Polra Victor Falade
 Cyber Security Department, Nigerian Defence Academy, Afaka, Kaduna, Nigeria

ARTICLEINFO ABSTRACT

 In the ever-evolving realm of cybersecurity, the rise of generative AI models like
Article History:
 ChatGPT, FraudGPT, and WormGPT has introduced both innovative solutions
Accepted: 02 Oct 2023 and unprecedented challenges. This research delves into the multifaceted
Published: 09 Oct 2023 applications of generative AI in social engineering attacks, offering insights into
 the evolving threat landscape using the blog mining technique. Generative AI
 models have revolutionized the field of cyberattacks, empowering malicious
Publication Issue actors to craft convincing and personalized phishing lures, manipulate public
Volume 9, Issue 5 opinion through deepfakes, and exploit human cognitive biases. These models,
September-October-2023 ChatGPT, FraudGPT, and WormGPT, have augmented existing threats and
Page Number ushered in new dimensions of risk. From phishing campaigns that mimic trusted
185-198 organizations to deepfake technology impersonating authoritative figures, we
 explore how generative AI amplifies the arsenal of cybercriminals. Furthermore,
 we shed light on the vulnerabilities that AI-driven social engineering exploits,
 including psychological manipulation, targeted phishing, and the crisis of
 authenticity. To counter these threats, we outline a range of strategies, including
 traditional security measures, AI-powered security solutions, and collaborative
 approaches in cybersecurity. We emphasize the importance of staying vigilant,
 fostering awareness, and strengthening regulations in the battle against AI-
 enhanced social engineering attacks. In an environment characterized by the
 rapid evolution of AI models and a lack of training data, defending against
 generative AI threats requires constant adaptation and the collective efforts of
 individuals, organizations, and governments. This research seeks to provide a
 comprehensive understanding of the dynamic interplay between generative AI
 and social engineering attacks, equipping stakeholders with the knowledge to
 navigate this intricate cybersecurity landscape.
 Keywords: Generative AI, ChatGPT, WormGPT, FraudGPT, social engineering,
 Blog mining

Copyright © 2023 The Author(s): This is an open-access article distributed under the terms of the Creative 185
Commons Attribution 4.0 International License (CC BY-NC 4.0) which permits unrestricted use, distribution, and
reproduction in any medium for non-commercial use provided the original author and source are credited.
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 I. INTRODUCTION Social engineering attacks represent a persistent and
 evolving threat to cybersecurity. These attacks
The evolving landscape of cybersecurity has witnessed leverage psychological manipulation and social
a formidable adversary in the form of social interaction to deceive individuals or organizations into
engineering attacks. These manipulative tactics exploit divulging confidential information, granting
human psychology and trust, often leading to unauthorized access, or performing actions that
unauthorized access, data breaches, and financial losses compromise security [4]. Such attacks come in various
[1]. As technology continues to advance, social forms, including phishing, pretexting, baiting, and
engineering attackers are increasingly leveraging tailgating, among others [5]. Over the years, they have
sophisticated tools and techniques to deceive their continued to adapt and remain successful due to their
targets. One such tool that has garnered considerable exploitation of human vulnerabilities [5].
attention in recent years is generative artificial
intelligence (AI) [2]. Phishing attacks have been growing in frequency and
 complexity, posing a heightened risk to anyone who
Generative AI, a subset of artificial intelligence, uses digital communication methods like email and
encompasses a range of algorithms and models capable text messaging. These attacks involve cybercriminals
of generating text, images, audio, and more with sending deceptive messages with the intention of
human-like characteristics. This technology has shown duping recipients into divulging sensitive information,
promise in various domains, including creative content such as credit card details, or initiating malware on
generation, language translation, and medical diagnosis their devices. The effectiveness of phishing attacks has
[3]. However, it has also found a dark niche in the increased significantly due to the refinement of these
world of cybercrime, where it is harnessed to enhance tactics [6].
the efficacy and believability of social engineering
attacks [4]. A study conducted in October 2022 by messaging
 security provider SlashNext revealed some concerning
This research seeks to delve into the intersection of statistics. The research analysed billions of link-based
generative AI and social engineering attacks, with a URLs, attachments, and natural language messages
specific focus on the utilization of generative AI across various digital communication channels over six
techniques through blog content extraction. Blog months. It identified more than 255 million phishing
extraction, a method of collecting information from attacks during this time, marking a striking 61%
publicly available blogs and online content, offers a increase compared to the previous year [6].
unique perspective on understanding the emergence of
AI-enhanced social engineering tactics. These attacks often lead to financial losses, reputational
 damage, and data breaches, making them a focal point
 II. LITERATURE REVIEW for cybersecurity professionals [7].

A This section examines pertinent literature B. Generative AI in Cybersecurity
concerning social engineering attacks and the role of Generative artificial intelligence (AI) is a subset of AI
generative AI within the realm of cybersecurity. that encompasses various machine learning techniques
 capable of generating content that mimics human
A. Social Engineering Attacks characteristics. Prominent among these techniques is
 the use of deep learning models, such as recurrent

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 185
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

neural networks (RNNs) and generative adversarial
networks (GANs), which have demonstrated Blog mining has been instrumental in monitoring
remarkable capabilities in text, image, and audio emerging threats, tracking the evolution of attack
generation [3]. methodologies, and dissecting attacker motivations.
 This methodology grants access to social engineering
Generative AI has found applications across diverse incidents, offering a unique viewpoint on the
domains, including natural language processing, intersection of generative AI and cybercrime.
creative content generation, and even medical
diagnosis. Its ability to generate content that closely Given that generative AI is a rapidly evolving field,
resembles human-produced material has raised both technology consultants and security experts have
opportunities and concerns in the field of frequently shared their insights and concerns via blogs.
cybersecurity [8]. Consequently, these blogs constitute a valuable source
 for comprehending the intricacies associated with
Recent studies and anecdotal evidence have pointed to generative AI. However, it is essential to acknowledge
the integration of generative AI techniques into social the limitation of blog mining: the content is not peer-
engineering attacks. Attackers are harnessing reviewed akin to journal publications and often reflects
generative AI to craft more convincing and personal opinions and attitudes. To mitigate this
contextually relevant phishing emails, chatbot limitation, a robust approach combines blog mining
interactions, and voice-based impersonations. These with an extensive literature search to gain a more
AI-enhanced attacks leverage generative AI's ability to comprehensive understanding of the topics under
generate persuasive content that bypasses traditional scrutiny.
security measures [9].
 To ensure a comprehensive data collection process, we
 III. METHODOLOGY employed Google Blog Search, which is designed to
 retrieve publicly available content from blogs on the
This section outlines the methodology employed in internet. We recognize the changes in Google's
this research, encompassing the data collection, data services, and although Google Blog Search is no longer
extraction, and analysis processes. active, we conducted our search through the Google
 search engine. The specific keyword used for the
A. Data Collection search was "the use of generative AI in social
Within this section, we elucidate the procedure for engineering attacks." This search was conducted on
blog mining and the criteria used for selecting blogs. September 19, 2023, resulting in 76 blogs retrieved
 within 0.34 seconds, predominantly from the year
This study utilizes a blog mining approach to procure 2023. Subsequently, to curate the most relevant
data on social engineering attacks involving generative content, we selected the 'News' category and sorted the
AI. Blog mining is a systematic process for extracting results by relevance and recency.
information from publicly available blogs and online
content [10]. It is an invaluable source for threat B. Data Extraction and Analysis
intelligence as it provides an unfiltered perspective on Each of the 76 identified blogs underwent manual
the evolving trends, tactics, and techniques employed scrutiny to systematically extract content pertinent to
by malicious actors, shedding light on the integration this research. Inclusion criteria were defined to
of generative AI in social engineering attacks. incorporate blogs that addressed the utilization of

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 186
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

generative AI in social engineering attacks. Ultimately, engineering attacks, and deceptive disinformation
39 blogs met these criteria, while the remaining 37 out campaigns [12].
of the 76 were excluded for various reasons. These
exclusions were attributed to factors such as the lack of The proliferation of AI has been widely documented,
focus on the use of generative AI in social engineering but what often goes unremarked is the concurrent
attacks, brief mentions of generative AI in social increase in AI's sophistication, which has introduced a
engineering within advertising blogs, or the blogs fresh avenue for business email compromise attacks
falling under categories like announcements, reports, [13].
news, or being blocked websites. Some blogs also
necessitated subscription access. While a few blogs Generative AI encompasses any form of artificial
centred on topics closely related to our research, they intelligence (AI) capable of generating novel content,
did not directly address the primary research topic. spanning text, music, images, code, or any other data
 format. Among these, OpenAI's ChatGPT celebrated as
 IV. GENERATIVE AI IN SOCIAL ENGINEERING the fastest-growing consumer application in history,
 ATTACKS has garnered substantial public attention [14].

The landscape of social engineering attacks has Furthermore, the automation of phishing email
undergone substantial evolution, marked by a growing generation holds the potential to enable cybercriminals
utilization of generative AI by malicious actors to to produce malicious emails at an unprecedented scale,
enhance their strategies and heighten the prospects of far exceeding the capacity of human attackers. AI
success. In this section, we explore the application of endowed with social engineering capabilities not only
generative AI in social engineering attacks, offering can disseminate an extensive volume of initial emails
concrete case studies, insights into vulnerabilities but can also adapt its strategy in real-time,
exploited, and an assessment of the resultant impact. underscoring the multifaceted nature of this threat [14].

Generative AI's fundamental aim lies in producing data A recent research analysis conducted by Darktrace
that is virtually indistinguishable from authentic data, unveiled a startling 135% surge in social engineering
mimicking human creation or conforming to the attacks leveraging generative AI [15]. Cybercriminals
original data's distribution. This versatility finds exploit these tools for password hacking, confidential
applications across diverse domains, including natural information leaks, and scams across diverse platforms.
language generation, image synthesis, music This emergence of novel scams has induced heightened
composition, and even video generation [11]. apprehension among employees, with 82% expressing
 concerns about falling victim to these deceptive tactics
Artificial intelligence (AI)-powered generative models [15].
possess the potential to generate exceptionally
convincing deepfake content, presenting a substantial A. Generative AI Commonly Used in Social
threat in the realm of malicious activities. These Engineering Attacks
advanced AI systems can fabricate remarkably realistic The following are some of the commonly used
media, virtually indistinguishable from genuine generative AI tools used in social engineering attacks.
content. Consequently, they pose formidable
challenges in discerning and combatting the 1. ChatGPT: ChatGPT is an advanced AI language
proliferation of misinformation, manipulative social model developed by OpenAI. It is part of the GPT-3

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 187
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

family of models and is specifically designed for natural FraudGPT marks the onset of a new era characterized
language understanding and generation. ChatGPT is by more perilous and democratized weaponized
known for its ability to engage in text-based generative AI tools and applications. While the current
conversations with users, answer questions, provide iteration may not match the generative AI prowess
information, and generate human-like text. It has a wielded by nation-state attack teams and large-scale
wide range of applications, including chatbots, virtual operations, such as the North Korean Army's elite
assistants, customer support, content generation, and Reconnaissance General Bureau's cyberwarfare arm,
more. ChatGPT's versatility and natural language Department 121, it excels in training the next
capabilities make it a valuable tool in various industries generation of attackers [19].
and domains [16], [17].
 3. WormGPT- enhancing email attacks with AI: While
2. FraudGPT- a game changer in malicious cyber- OpenAI LP's ChatGPT garners substantial attention in
attacks: FraudGPT is a novel subscription-based the AI landscape, hackers have embraced its "black hat"
generative AI tool designed to transcend the counterpart, WormGPT, to craft compelling,
boundaries of technology's intended use and personalized emails that significantly elevate the
circumvent restrictions, opening the door to the success rate of their attacks. WormGPT, based on the
development of highly convincing phishing emails and GPTJ language model, is specifically trained to bolster
deceptive websites [18]. Unearthed by Netenrich's the development of such malicious endeavours [13].
threat research team in July 2023 within the dark web's Initially conceived in 2021, WormGPT leverages the
Telegram channels, FraudGPT represents a paradigm GPTJ language model to offer an augmented feature set,
shift in attack tradecraft, potentially democratizing including unrestricted character support, chat memory
weaponized generative AI on a large scale [18]. retention, and code formatting capabilities. Unlike its
 ethical counterparts, WormGPT is purpose-built for
Engineered to automate an array of tasks, from crafting nefarious activities and has exhibited the capability to
malicious code and conceiving undetectable malware generate astute and persuasive BEC (Business Email
to composing persuasive phishing emails, FraudGPT Compromise) emails [13].
empowers even inexperienced attackers. This cyber-
attacker's starter kit leverages proven attack tools, 4. Microsoft’s VALL-E and the emergence of voice
encompassing custom hacking guides, vulnerability cloning scams: On January 9th, 2023 Microsoft
mining, and zero-day exploits, all without unveiled Vall-E, a generative AI-powered voice
necessitating advanced technical expertise [19]. For a simulator capable of replicating a user's voice and
monthly fee of $200 or an annual subscription of delivering responses in the user's unique tonality,
$1,700, FraudGPT furnishes subscribers with a utilizing only a brief three-second audio sample [20].
foundational skill set that previously demanded Other similar tools, such as Sensory and Resemble AI,
substantial effort to cultivate. Its capabilities span the have also surfaced. Scammers have seized upon these
creation of phishing emails and social engineering technologies, particularly targeting Indian users, who
content, the development of exploits, malware, and are especially susceptible to voice-based financial
hacking tools, the discovery of vulnerabilities, scams [21].
compromised credentials, and exploitable websites,
and the provision of guidance on hacking techniques The McAfee data underscores that up to 70% of Indian
and cybercrime [19]. users are likely to respond to voice queries from
 individuals claiming to be friends or family in need of

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 188
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

financial aid due to purported thefts, accidents, or incidents, with these attacks accounting for nearly half
other emergencies. This figure stands in stark contrast of all social engineering hacks. The continued
to users in Japan, France, Germany, and Australia, development of generative AI stands to further
where response rates are significantly lower. Indian empower pretexting, driven by three key factors [23].
users, in particular, lead in sharing voice data on social
media platforms, providing scammers with ample Pretexting, a form of social engineering, is on the rise
material for cloning voices through AI algorithms, and and stands to benefit substantially from generative AI.
facilitating financial scams[21]. AI's ability to mimic trusted organizations' writing
 styles enhances the credibility of pretexting attacks.
5. DALLE-E 2 and stable diffusion – the evolving Moreover, AI can significantly increase the scale of
landscape of AI-generated images: AI diffusion models these attacks, casting wider nets across different
like DALL-E 2 or Stable Diffusion are instrumental in languages, even if the threat actors lack linguistic
crafting images that, while initially visibly artificial, proficiency. AI also streamlines large-scale attacks,
are continually improving in quality, making it making them more efficient. Consequently, pretexting
increasingly difficult to distinguish them as fake with attacks are becoming increasingly costly for
each iteration. Concerns have arisen regarding the organizations, necessitating vigilant cybersecurity
potential misuse of AI-generated images in measures [23].
disinformation campaigns and efforts to tarnish the
reputation of prominent individuals, including CEOs 3. Scams and generative AI: Generative AI poses a
and politicians [20]. significant threat in the realm of scams, capable of
 generating fraudulent content and communications at
B. Types of Social Engineering Attacks Generated by scale to deceive individuals and organizations. These
AI AI-driven threats compile extensive datasets
1. Phishing attacks and generative AI: Phishing attacks containing personal and company information, using
have taken on new dimensions with the utilization of this data to craft highly unique and persuasive content,
generative AI. Hackers leverage this technology to emulating writing styles and engagement patterns [24].
generate hyper-realistic elements, including emails, Scams often exploit emotions, curiosity, or urgency to
websites, and user interfaces. These sophisticated deceive targets. Protecting against such scams requires
deceptions are designed to dupe individuals into robust measures, including email filters, rigorous
divulging sensitive information or unknowingly validation of account changes, up-to-date antivirus
downloading malware. As generative AI continues to software, and website scanners [24].
advance, the complexity of these attacks is expected to
increase, posing significant challenges to cybersecurity 4. Deepfake social engineering: The rise of deepfake
[22]. technology, fuelled by generative AI, introduces
 profound security challenges. Deepfakes entail the
2. Pretexting and generative AI: Social engineering, a creation of highly realistic fake videos and images that
pervasive threat in the cybersecurity landscape, is convincingly mimic real people or events. These
experiencing notable growth, primarily driven by a manipulated media can be used maliciously to spread
technique known as pretexting. Pretexting involves misinformation, engage in impersonation, and
the use of fabricated stories or pretexts to deceive users perpetrate fraud. Deepfake threats particularly target
into divulging sensitive information [23]. Recent human emotions, aiming to extract sensitive
trends indicate a significant uptick in pretexting information or monetary gains. Their growing

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 189
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

prevalence poses significant security concerns for both
consumers and businesses, necessitating vigilant 2. Deepfake Videos and Virtual Identities: AI can be
monitoring and protective measures [25]. harnessed to create convincing deepfakes, including
 synthetic videos and fake virtual identities.
Deepfakes leverage deep learning techniques, such as Cybercriminals can impersonate real individuals, such
generative adversarial networks, to digitally alter and as senior executives or trusted partners, engaging
simulate real individuals. Instances of deepfake attacks victims in conversations to socially engineer them into
are on the rise as the technology becomes increasingly revealing sensitive information, executing financial
realistic and challenging to detect. These attacks can transactions, or propagating misinformation [9].
have severe consequences, including political Believable deepfake videos can deceive users into
disinformation and financial fraud. AI tools' taking action and divulging credentials, potentially
improvements have made it easier for perpetrators to undermining the effectiveness of employee
disrupt business operations, highlighting the need for cybersecurity training [28].
heightened awareness and robust security practices
[26]. 3. Voice cloning for vishing attacks: Threat actors can
 leverage AI to clone human speech and audio, enabling
C. How AI is Advancing Social Engineering advanced voice phishing or "vishing" attacks.
AI is ushering in a new era in the realm of social Scammers may use AI voice cloning technology to
engineering, presenting threat actors and impersonate family members or authoritative figures,
cybercriminals with advanced tools and tactics to duping victims into transferring money under the
manipulate, deceive, and compromise computer pretext of a family emergency, as cautioned by the
systems. These technological advancements are Federal Trade Commission [9]. Audio AI tools simulate
creating several avenues for adversaries to employ AI the voices of managers and senior executives, enabling
in the orchestration of sophisticated social engineering the creation of fraudulent voice memos or other
attacks. communications with instructions for staff [28].

1. Enhanced phishing emails: Traditional phishing 4. AI-driven phishing tools: AI tools can also serve as
attacks often contain noticeable grammatical errors, potent instruments for phishing. For example, through
particularly when conducted by non-native speakers. a complex technique called Indirect Prompt Injection,
However, AI-powered tools like ChatGPT enable researchers successfully manipulated a Bing chatbot
attackers to craft exceptionally refined emails with into impersonating a Microsoft employee and
correct grammar and spelling, making them generating phishing messages that solicited credit card
indistinguishable from human-authored messages. information from users [9].
This heightened level of sophistication poses a
considerable challenge in discerning AI-generated 5. Automation for industrial-scale attacks:
content from genuine human interactions [9]. Autonomous agents, scripting, and other automation
Generative AI can produce fraudulent content and tools empower threat actors to execute highly targeted
digital interactions, including real-time conversations, social engineering attacks on an industrial scale. They
to impersonate users and elevate social engineering and can automate every step of the process, from selecting
phishing attacks. It allows non-native English speakers targets to delivering phishing emails and orchestrating
to refine their messages and avoid common linguistic human-like responses in chat boxes or phone calls [9],
pitfalls [27]. [29].

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 190
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 attacks by generating emails that align closely with the
6. AI's adaptive learning: AI systems can adapt and target's context, language, and tone [12], [31].
refine their phishing tactics based on their own
learning experiences, distinguishing between what 3. Crisis of authenticity: Generative AI threatens to
works and what does not. This adaptive capability produce highly credible content that emulates
enables them to evolve increasingly sophisticated individual or organizational writing styles. These
phishing strategies [9]. materials are designed to resonate emotionally with
 consumers, exploiting their trust and emotions.
C. Vulnerabilities Exploited by Generative AI Attackers leverage deepfake technology in outbound
AI-driven vulnerabilities in the realm of social and inbound voice or video calls, relying on victims'
engineering have introduced new dimensions of emotions, panic, and curiosity to establish trust,
exploitation, leveraging the psychological and urgency, and empathy [24]. Generative AI models
behavioural aspects of individuals. consider various data points to achieve their objectives,
 often involving actions such as sharing sensitive
1. Psychological manipulation: Generative AI equips information or transferring funds to fraudulent
attackers with the capability to craft highly persuasive accounts. The resulting conversations sound authentic
messages that exploit human cognitive biases and and empathetic, making it essential for individuals to
emotions. By generating content that triggers remain vigilant, scrutinize details, and contact their
recipients' fears, desires, or a sense of urgency, banks' fraud hotlines if they suspect fraudulent activity
attackers manipulate individuals into taking actions [24].
they would not typically consider [30]. This
psychological manipulation extends to various Generative AI technology raises concerns about
domains, including social media platforms, where authenticity and governance in digital media. It poses
phishing campaigns and deepfakes leverage social immediate risks of disinformation, potentially leading
engineering to encourage victims to divulge to longer-term issues related to control and
confidential login credentials. This stolen information accountability. AI-powered bots can flood social media
can then be weaponized to compromise social media platforms with tailored content, spreading rapidly and
accounts or infiltrate corporate networks via the amplifying contentious issues. Businesses will need to
infected user's device or abused credentials [30]. monitor digital media manipulation carefully, as
 generative AI enables the creation of hyper-targeted,
2. Targeted phishing: AI-driven phishing attacks have AI-generated content at scale. This capability elevates
grown in sophistication, with attackers utilizing the risk of campaigns related to "augmented advocacy,"
generative AI to personalize messages based on the activist boycotts, and online backlash surrounding
recipient's online activities and behaviours. These sensitive topics [32].
targeted phishing attempts are particularly challenging
to detect as they often emulate trusted sources and 4. Deepfake technology: Deepfake technology, a subset
employ social engineering tactics tailored to the of generative AI, empowers attackers to produce
specific victim. Generative AI enables attackers to craft highly convincing audio and video impersonations.
convincing phishing lures with personalization, These deepfake voice recordings or video clips allow
drawing from information available on public profiles attackers to impersonate trusted individuals or
like LinkedIn. This personalization amplifies the authority figures, eroding trust and facilitating
effectiveness of business email compromise (BEC) manipulation. Deepfake technologies also introduce

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 191
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

fabricated facial overlays during video calls, creating a threatening to release it publicly unless certain
false image and voice on the consumer's screen. This demands are met, is another alarming prospect [33].
innovation is akin to wearing a mask and mimicking a
voice during interactions, posing significant risks in 3. Legal Implications: The utilization of generative AI
various contexts [24]. in social engineering attacks gives rise to intricate legal
 challenges, particularly concerning issues of
D. Impact and Consequences attribution and accountability. As AI technology
The misuse of AI-powered generative models carries continues to advance, identifying the true identities of
profound and far-reaching consequences, with the attackers and holding them responsible becomes
potential to disrupt trust, manipulate public opinion, increasingly complex and, in some cases, elusive [34].
and inflict substantial harm on individuals, institutions,
and even entire societies. Vigilance and the These consequences underscore the critical need for
development of robust countermeasures are imperative comprehensive strategies to combat the misuse of AI-
to mitigate the risks associated with this evolving powered generative models. Implementing
technology [12]. cybersecurity measures, raising public awareness, and
 fostering responsible AI development are crucial steps
1. Financial losses: AI-enhanced social engineering toward addressing the multifaceted risks associated
attacks often result in significant financial losses for with this emerging technology.
both individuals and organizations. Victims may
unwittingly transfer funds, divulge sensitive financial E. Real-World Examples of AI-Enhanced Social
information, or engage in transactions that directly Engineering Attacks
benefit the attackers. Such monetary losses can have Through blog mining, we have identified numerous
severe repercussions [9]. instances where generative AI techniques were
 employed in social engineering attacks. These case
2. Reputation damage: Social engineering attacks can studies provide concrete examples of how attackers
tarnish the reputation of targeted individuals and leverage AI in their efforts. AI-powered generative
organizations. When AI-generated content is exploited models have been involved in various incidents that
to disseminate false information or conduct smear demonstrate the potential for misuse and deception.
campaigns, the harm to reputation can be enduring and
challenging to remediate. This damage extends beyond 1. Tricking ChatGPT for Windows activation keys:
the financial realm, affecting trust and credibility [7]. Users were able to deceive ChatGPT into providing
 Windows activation keys by framing their request as
Deepfake technology introduces the unsettling part of a bedtime story [35].
possibility of highly damaging revenge scenarios.
Individuals with malicious intent could easily fabricate 2. Requesting a deceptive email: A user requested
scenarios such as making it appear as though someone ChatGPT to compose a deceptive email, posing as a
cheated by swapping faces in an intimate video. They friendly yet professional message regarding an account
could create fake videos depicting the victim making issue and instructing the recipient to call a specific
offensive statements, thereby jeopardizing their career, phone number [36].
even if the video is later proven to be fake.
Blackmailing someone with a deepfake video, and 3. Impersonation of UK business owner: In 2020, AI
 technology was used to impersonate the voice of a UK

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 192
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

business owner. This impersonation convinced a CEO
to transfer $243,000 to an unknown group of hackers F. Challenges in Detecting AI-Enhanced Attacks
[20]. The challenges associated with detecting AI-enhanced
 attacks, particularly those involving generative AI, are
4. Voice mimicry in a UK energy company: In 2019, multifaceted and require specialized approaches:
hackers targeted a UK energy company using AI-
generated voice technology. They successfully 1. Evolving AI models: The rapid evolution of
mimicked the CEO's voice and persuaded a generative AI models poses a significant challenge to
subordinate to transfer approximately $243,000 to a defenders. Attackers can quickly adapt their tactics to
fraudulent account [27]. bypass existing detection methods by leveraging the
 latest AI techniques. This constant evolution demands
5. Blackmail using AI-generated voice: Criminals continuous vigilance and proactive measures to stay
blackmailed a woman by claiming they had kidnapped ahead of emerging threats. Generative AI models are
her daughter and used AI to create a convincing often considered black boxes, making it challenging to
simulation using voice samples from the daughter. In understand their decision-making processes. This
February 2023, a journalist broke past the opacity complicates the attribution of responsibility,
authentication scheme of a major UK financial hindering effective countermeasures and legal actions
institution by using deepfake technology [37]. [22].

6. $35 Million Stolen in UAE: A criminal ring stole $35 2. Lack of training data: Detecting AI-enhanced social
million by using deepfake audio to deceive an engineering attacks relies on large and diverse datasets
employee at a United Arab Emirates company. They for training machine learning models. However,
convinced the employee that a director needed the obtaining labelled datasets that cover the full spectrum
money for an acquisition on behalf of the organization of potential attacks can be a daunting task. Generative
[38]. AI can be used by cybercriminals to automate social
 engineering attacks, such as highly personalized spear-
7. Impersonation of CEO: Scammers impersonated a phishing campaigns. By analysing vast amounts of data,
CEO using deepfake audio in an attempt to request a AI can craft convincing messages targeting specific
transfer of €220,000 from a manager of a U.K. individuals or groups, thereby increasing the success
subsidiary of a German company [34]. rates for malicious actors. Overcoming these
 challenges necessitates access to extensive training data,
8. Face-swapping scam in China: In northern China, a which can be difficult to obtain due to privacy
cybercriminal used AI-powered face-swapping concerns and legal constraints [22].
technology to impersonate a man's close friend,
persuading him to transfer 4.3 million yuan [34]. To effectively combat and mitigate generative AI
 threats, the cybersecurity community must address
These incidents highlight the capacity of AI-generated these challenges through ongoing research,
content and voice technology to facilitate deception, collaboration, and the development of advanced
social engineering, and financial fraud. As AI tools detection techniques. Staying updated on AI
become more sophisticated, there is a growing need for advancements and continuously improving defence
awareness and countermeasures to protect against such strategies are essential components of defending
threats. against AI-enhanced attacks. Additionally, addressing

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 193
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

the privacy concerns associated with data collection significantly enhance security by eliminating the
and sharing is crucial to strike a balance between reliance on traditional passwords. Embrace phishing-
security and individual rights. resistant factors like passkeys, which can help combat
 advanced phishing attempts facilitated by AI [40] [18].
G. Countermeasures and Defence Against AI-
Enhanced Social Engineering Attacks 7. AI-Powered Security Solutions: Invest in AI-driven
Addressing the growing threat of AI-enhanced social security solutions that leverage machine learning
engineering attacks requires a multi-faceted approach algorithms to analyse network traffic, email content,
that combines traditional security measures with and user behaviour for anomalies indicative of social
advanced AI-based solutions. engineering attacks. Fighting AI with AI [28], [35], [36],
 [41]–[43].
1. Traditional Security Measures: Continue to employ
traditional cybersecurity practices, such as firewalls, 8. Enhance AI-Driven Threat Detection: Develop
intrusion detection systems, and email filtering. These machine learning models capable of recognizing subtle
mechanisms help detect known attack patterns and AI-generated content patterns and behaviours.
malicious entities [35]. Integrating AI with traditional security measures
 creates a more comprehensive defence [31].
2. Advanced Email Filters and Antivirus Software:
Enhance your email security with advanced filters that 9. Collaborative approaches: Foster collaboration
can identify phishing attempts and malicious content. among cybersecurity professionals, organizations, and
Keep antivirus software updated and relevant to AI developers. Sharing threat intelligence and forming
protect against malware [39]. public-private partnerships can enhance defence
 strategies [22].
3. Website Scanners: Utilize website scanning services
to identify false or malicious websites. These scanners 10. Zero trust framework: Embrace a zero-trust
can help users avoid falling victim to phishing sites [25]. approach, which assumes that no one, whether inside
 or outside the organization, should be trusted by
4. Multi-Factor Authentication (MFA): Implement default. Verify the senders of emails, chats, or texts,
MFA, especially for sensitive transactions or approvals. especially when they request sensitive information or
MFA adds an extra layer of security by requiring actions [23], [32], [36].
multiple forms of verification [27], [35].
 11. Awareness and Education: Educate employees and
5. Phishing Simulations: Conduct phishing simulations individuals about the risks associated with generative
using AI tools like ChatGPT to familiarize employees AI and social engineering attacks. Promote awareness
with the tone and characteristics of AI-generated of the evolving threat landscape [14], [27], [32], [36],
communications. This can help employees recognize [44].
and respond to phishing attempts effectively[36].
 12. Continuous improvement: Recognize that the
6. Implement Passwordless Authentication: Consider threat landscape is constantly evolving. Stay agile and
using passwordless authentication systems like adapt defence strategies to counter new and emerging
passkeys that use cryptography to make user threats effectively. Regularly assess and improve
credentials unphishable [18]. These systems can

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 194
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

security measures. Keep pace with advancements in AI the rapid evolution of AI models and the extensive data
technology and evolving attack techniques [12], [28]. required for training. As a result, there is a pressing
By combining these strategies and maintaining a need for adaptation and innovation in the
proactive stance, individuals, organizations, and cybersecurity landscape.
governments can work together to reduce the risk of
AI misuse by cybercriminals and create a safer digital Looking ahead, several critical areas warrant further
environment for all. exploration:

The battle against AI-enhanced social engineering The development of AI-driven threat detection
attacks is ongoing, and as attackers continue to exploit systems capable of identifying subtle patterns and
AI technology, defenders must adapt their strategies to behaviours indicative of AI-generated threats should
stay one step ahead. As organizations strive to combat be prioritized. These systems should complement
generative AI threats, they must navigate the delicate existing security measures.
balance between security measures and privacy
concerns. Mitigation efforts should avoid unnecessary Collaboration between various sectors, including
invasions of privacy while still protecting individuals public and private entities, is essential for sharing
and organizations from potential harm. threat intelligence, anticipating emerging threats, and
 developing proactive defence strategies.
 V. CONCLUSION AND FURTHER RESEARCH
 Emphasizing ethical considerations, transparency,
In this study, we explore the relationship between fairness, and accountability in the development and
artificial intelligence (AI) and social engineering deployment of AI technologies can help mitigate the
attacks, using a research approach known as blog risks associated with AI-enhanced social engineering
mining. We investigate real-world cases, analyse how attacks.
AI plays a role in these attacks, examine their
consequences, and assess the strategies employed for In conclusion, the integration of generative AI into
defence. social engineering attacks presents a formidable
 challenge for cybersecurity. While AI holds significant
One key finding from our research is the growing promise, its potential for misuse necessitates vigilance,
utilization of AI by malicious actors to enhance the ethical guidelines, and legal frameworks. Addressing
effectiveness of their social engineering tactics, a these multifaceted challenges requires a collaborative
development that raises significant concerns about its effort involving technology developers, organizations,
potential misuse. policymakers, and society at large to strike a balance
 between innovation and security.
Furthermore, our study highlights the increasing
complexity and success rate of AI-backed social VI. REFERENCES
engineering attacks. Attackers can now craft highly
personalized and contextually relevant messages that [1]. M. A. Siddiqi and W. Pak, "Applied sciences A
pose significant challenges for detection. Study on the Psychology of Social Engineering-
 Based Cyberattacks and Existing
Conventional cybersecurity measures face difficulties Countermeasures," 2022.
in effectively countering AI-enhanced attacks due to

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 195
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

[2]. R. Kaur, “Artificial intelligence for blog mining,” CEUR Workshop Proc., vol. 1353,
 cybersecurity : Literature review and future pp. 103–108, 2015.
 research directions,” vol. 97, no. January 2023, [11]. A. Rudra, “Cybersecurity Risks of Generative
 doi: 10.1016/j.inffus.2023.101804. AI,” 2023.
[3]. G. Lawton, “What is generative AI? Everything https://securityboulevard.com/2023/07/cybersec
 you need to know,” 2023. urity-risks-of-generative-ai/ (accessed Sep. 26,
 https://www.techtarget.com/searchenterpriseai/ 2023).
 definition/generative-AI (accessed Sep. 29, [12]. D. Gupta, “The Road Ahead: Adapting to the
 2023). Generative AI Cybersecurity Landscape,” 2023.
[4]. Z. Wang, L. Sun, and H. Zhu, “Defining Social https://securityboulevard.com/2023/08/the-
 Engineering in Cybersecurity,” no. January 2021, road-ahead-adapting-to-the-generative-ai-
 2020, doi: 10.1109/ACCESS.2020.2992807. cybersecurity-landscape/ (accessed Sep. 24,
[5]. A. A. Alsufyani, L. A. Alhathally, B. O. Al-amri, 2023).
 and S. M. Alzahrani, "Social Engineering, New [13]. D. RILEY, “Cybercriminals are using custom
 Era Of Stealth And Fraud Common Attack ‘WormGPT’ for business email compromise
 Techniques And How To Prevent Against," vol. attacks,” 2023.
 9, no. 10, 2020. https://siliconangle.com/2023/07/13/slashnext-
[6]. B. Violino, “Phishing attacks are increasing and warns-cybercriminals-using-custom-wormgpt-
 getting more sophisticated. Here’s how to avoid business-email-compromise-attacks/ (accessed
 them,” 2023. Sep. 26, 2023).
 https://www.cnbc.com/2023/01/07/phishing- [14]. S. Rushin, “The Dark Side of Generative AI:
 attacks-are-increasing-and-getting-more- Unveiling the Cybersecurity Risk,” 2023.
 sophisticated.html (accessed Sep. 29, 2023). https://www.digit.fyi/comment-the-dark-side-
[7]. P. Mwiinga, “Investigating the Far-Reaching of-generative-ai-unveiling-the-cybersecurity-
 Consequences of Cybercrime A Case Study on risk/ (accessed Sep. 24, 2023).
 the Impact in Lusaka,” no. July, 2023. [15]. Darktrace, “Major Upgrade to
[8]. A. Haleem, M. Javaid, and R. Pratap, Darktrace/EmailTM Product Defends
 "BenchCouncil Transactions on Benchmarks, Organizations Against Evolving Cyber Threat
 Standards and Evaluations An era of ChatGPT as Landscape, Including Generative AI Business
 a significant futuristic support tool : A study on Email Compromises and Novel Social
 features, abilities, and challenges,” BenchCouncil Engineering Attacks,” 2023.
 Trans. Benchmarks, Stand. Eval., vol. 2, no. 4, p. https://darktrace.com/news/darktrace-email-
 100089, 2023, doi: defends-organizations-against-evolving-cyber-
 10.1016/j.tbench.2023.100089. threat-landscape (accessed Sep. 26, 2023).
[9]. S. Sjouwerman, “How AI Is Changing Social [16]. S. Ortiz, “What is ChatGPT and why does it
 Engineering Forever,” 2023. matter? Here’s what you need to know,” 2023.
 https://www.forbes.com/sites/forbestechcouncil https://www.zdnet.com/article/what-is-chatgpt-
 /2023/05/26/how-ai-is-changing-social- and-why-does-it-matter-heres-everything-you-
 engineering-forever/?sh=123037f5321b need-to-know/ (accessed Sep. 29, 2023).
 (accessed Sep. 26, 2023). [17]. M. Vizard, “SlashNext Report Shows How
[10]. W. He, X. Tian, and J. Shen, “Examining security Cybercriminals Use Generative AI,” 2023.
 risks of mobile banking applications through https://securityboulevard.com/2023/07/slashnex

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 196
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 t-report-shows-how-cybercriminals-use- trends/balancing-the-convenience-of-
 generative-ai/ (accessed Sep. 26, 2023). generative-ai-with-the-new-fraud-threats-that-
[18]. E. K. Sing, “With generative AI, businesses need come-with-it-20230911 (accessed Sep. 23, 2023).
 to rewrite the phishing rulebook,” 2023. [25]. N. Raju, “Securing IT Infrastructure Against
 https://identityweek.net/with-generative-ai- Generative AI Cybersecurity Threats,” 2023.
 businesses-need-to-rewrite-the-phishing- https://www.cxotoday.com/cxo-bytes/securing-
 rulebook/ (accessed Sep. 22, 2023). it-infrastructure-against-generative-ai-
[19]. L. Columbus, “How FraudGPT presages the cybersecurity-threats/ (accessed Sep. 26, 2023).
 future of weaponized AI,” 2023. [26]. G. Lawton, “How to prevent deepfakes in the era
 https://venturebeat.com/security/how-fraudgpt- of generative AI,” 2023.
 presages-the-future-of-weaponized-ai/ (accessed https://www.techtarget.com/searchsecurity/tip/
 Sep. 24, 2023). How-to-prevent-deepfakes-in-the-era-of-
[20]. R. Bathgate, “Mandiant says generative AI will generative-AI (accessed Sep. 26, 2023).
 empower new breed of information operations, [27]. F. Domizio, “3 Significant Cybersecurity Risks
 social engineering,” 2023. Presented by Generative AI,” 2023.
 https://www.itpro.com/technology/artificial- https://accelerationeconomy.com/cybersecurity/
 intelligence/mandiant-says-generative-ai-will- 3-significant-cybersecurity-risks-presented-by-
 empower-new-breed-of-information- generative-ai/ (accessed Sep. 23, 2023).
 operations-social-engineering (accessed Sep. 26, [28]. C. Business, “How to protect your business from
 2023). generative AI cybersecurity threats,” 2023.
[21]. S. Das, “Back ‘Voice scams hit 47% web users,’” https://www.bizjournals.com/albuquerque/news
 2023. /2023/07/17/protect-from-generative-ai-
 https://www.livemint.com/companies/start- cybersecurity-threats.html (accessed Sep. 24,
 ups/indias-internet-users-vulnerable-to-ai- 2023).
 powered-voice-scams-mcafee-reports-47-of- [29]. S. Paul, “Authentication in the time of
 indian-users-encounter-or-know-victims- Generative AI,” 2023.
 11683032655430.html (accessed Sep. 26, 2023). https://www.cxotoday.com/cxo-
[22]. P. GJ, “Is Generative AI a New Threat to bytes/authentication-in-time-of-generative-ai-
 Cybersecurity?,” 2023. attacks/ (accessed Sep. 25, 2023).
 https://www.cxotoday.com/corner-office/is- [30]. B. Strauss, “Listen to These Recordings: Deepfake
 generative-ai-a-new-threat-to-cybersecurity/ Social Engineering Scams Are Scaring Victims,”
 (accessed Sep. 26, 2023). 2023.
[23]. C. Novak, “The Role Of AI In Social https://securityboulevard.com/2023/05/listen-
 Engineering,” 2023. to-these-recordings-deepfake-social-
 https://www.forbes.com/sites/forbestechcouncil engineering-scams-are-scaring-victims/
 /2023/07/05/the-role-of-ai-in-social- [31]. A. Hasnain, “New Study Reveals Cybercriminals’
 engineering/?sh=4f88cf0342a9 (accessed Sep. 23, Growing Use of Generative AI to Amplify and
 2023). Enhance Email Attacks,” 2023.
[24]. U. J. van Rensburg, “Balancing the convenience https://www.digitalinformationworld.com/2023
 of generative AI with the new fraud threats that /06/new-study-reveals-cybercriminals.html
 come with it,” 2023. (accessed Sep. 19, 2023).
 https://www.news24.com/news24/tech-and-

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 197
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

[32]. D. FLEET, “AI could hurt businesses. Here’s how security/145538/bad-actors-are-using-
 to protect yours,” 2023. generative-ai-to-perfect-social-engineering-
 https://www.fastcompany.com/90926893/pov- schemes-heres-what-you-need-to-know
 ai-will-hurt-businesses-heres-how-to-protect- (accessed Sep. 25, 2023).
 yours (accessed Sep. 24, 2023). [40]. T. Bradley, “Defending Against Generative AI
[33]. Forbes, “17 Surprising (And Sometimes Cyber Threats,” 2023.
 Alarming) Uses For And Results Of AI,” 2023. https://www.forbes.com/sites/tonybradley/2023/
 https://www.forbes.com/sites/forbestechcouncil 02/27/defending-against-generative-ai-cyber-
 /2023/08/03/17-surprising-and-sometimes- threats/?sh=cd0be1f10884 (accessed Sep. 25,
 alarming-uses-for-and-results-of- 2023).
 ai/?sh=2eab1ca65df8 (accessed Sep. 26, 2023). [41]. J. Zhang, “Is Rogue AI Destined to Become an
[34]. M. Nkosi, “3 security risks of generative AI you Unstoppable Security Threat?,” 2023.
 should watch out for!,” 2023. https://solutionsreview.com/security-
 https://www.itnewsafrica.com/2023/07/3- information-event-management/is-rogue-ai-
 security-risks-of-generative-ai-you-should- destined-to-become-an-unstoppable-security-
 watch-out-for/ (accessed Sep. 26, 2023). threat/ (accessed Sep. 23, 2023).
[35]. Y. LEIBLER, “The Rising Threat of Generative [42]. C. Lehman, “Generative AI in Cybersecurity:
 AI in Social Engineering Cyber Attacks — What The Battlefield, The Threat, & Now The
 You Need to Know,” 2023. Defense,” 2023.
 https://www.entrepreneur.com/science- https://www.unite.ai/generative-ai-in-
 technology/how-cyber-criminals-are- cybersecurity-the-battlefield-the-threat-now-
 weaponizing-generative-ai/455896 (accessed the-defense/ (accessed Sep. 24, 2023).
 Sep. 18, 2023). [43]. P. Harr, “Defending Against AI-Based Phishing
[36]. M. Elgan, “Now social engineering attackers Attacks,” 2023.
 have AI. Do you?,” 2023. https://www.forbes.com/sites/forbestechcouncil
 https://securityintelligence.com/articles/now- /2023/08/04/defending-against-ai-based-
 social-engineering-attackers-have-ai-b/ phishing-attacks/?sh=1d4d61b83da6 (accessed
 (accessed Sep. 22, 2023). Sep. 24, 2023).
[37]. VentureBeat, “The growing impact of generative [44]. S. Farnfield, “Avoiding cyber attacks in a world
 AI on cybersecurity and identity theft,” 2023. with generative AI,” 2023.
 https://venturebeat.com/security/the-growing- https://www.dpaonthenet.net/article/200011/Av
 impact-of-generative-ai-on-cybersecurity-and- oiding-cyber-attacks-in-a-world-with-
 identity-theft/ (accessed Sep. 26, 2023). generative-AI.aspx (accessed Sep. 25, 2023).
[38]. M. Elgan, “Synthetic media creates new social Cite this article as :
 engineering threats,” 2023. Polra Victor Falade, "Decoding the Threat Landscape :
 https://securityintelligence.com/articles/syntheti ChatGPT, FraudGPT, and WormGPT in Social
 c-media-new-social-engineering-threats/ Engineering Attacks", International Journal of Scientific
 (accessed Sep. 26, 2023). Research in Computer Science, Engineering and
[39]. “Bad actors are using generative AI to perfect Information Technology (IJSRCSEIT), ISSN : 2456-3307,
 social engineering schemes. Here’s what you Volume 9, Issue 5, pp.185-198, September-October-2023.
 Available at doi : https://doi.org/10.32628/CSEIT2390533
 need to know,” 2023.
 Journal URL : https://ijsrcseit.com/CSEIT2390533
 https://uk.pcmag.com/migrated-38485-

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 198

---
## Retry source: https://arxiv.org/pdf/2310.05595

 International Journal of Scientific Research in Computer Science, Engineering and
 Information Technology
 ISSN : 2456-3307 Available Online at : www.ijsrcseit.com
 doi : https://doi.org/10.32628/CSEIT2390533

Decoding the Threat Landscape : ChatGPT, FraudGPT, and WormGPT in Social
 Engineering Attacks
 Polra Victor Falade
 Cyber Security Department, Nigerian Defence Academy, Afaka, Kaduna, Nigeria

ARTICLEINFO ABSTRACT

 In the ever-evolving realm of cybersecurity, the rise of generative AI models like
Article History:
 ChatGPT, FraudGPT, and WormGPT has introduced both innovative solutions
Accepted: 02 Oct 2023 and unprecedented challenges. This research delves into the multifaceted
Published: 09 Oct 2023 applications of generative AI in social engineering attacks, offering insights into
 the evolving threat landscape using the blog mining technique. Generative AI
 models have revolutionized the field of cyberattacks, empowering malicious
Publication Issue actors to craft convincing and personalized phishing lures, manipulate public
Volume 9, Issue 5 opinion through deepfakes, and exploit human cognitive biases. These models,
September-October-2023 ChatGPT, FraudGPT, and WormGPT, have augmented existing threats and
Page Number ushered in new dimensions of risk. From phishing campaigns that mimic trusted
185-198 organizations to deepfake technology impersonating authoritative figures, we
 explore how generative AI amplifies the arsenal of cybercriminals. Furthermore,
 we shed light on the vulnerabilities that AI-driven social engineering exploits,
 including psychological manipulation, targeted phishing, and the crisis of
 authenticity. To counter these threats, we outline a range of strategies, including
 traditional security measures, AI-powered security solutions, and collaborative
 approaches in cybersecurity. We emphasize the importance of staying vigilant,
 fostering awareness, and strengthening regulations in the battle against AI-
 enhanced social engineering attacks. In an environment characterized by the
 rapid evolution of AI models and a lack of training data, defending against
 generative AI threats requires constant adaptation and the collective efforts of
 individuals, organizations, and governments. This research seeks to provide a
 comprehensive understanding of the dynamic interplay between generative AI
 and social engineering attacks, equipping stakeholders with the knowledge to
 navigate this intricate cybersecurity landscape.
 Keywords: Generative AI, ChatGPT, WormGPT, FraudGPT, social engineering,
 Blog mining

Copyright © 2023 The Author(s): This is an open-access article distributed under the terms of the Creative 185
Commons Attribution 4.0 International License (CC BY-NC 4.0) which permits unrestricted use, distribution, and
reproduction in any medium for non-commercial use provided the original author and source are credited.
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 I. INTRODUCTION Social engineering attacks represent a persistent and
 evolving threat to cybersecurity. These attacks
The evolving landscape of cybersecurity has witnessed leverage psychological manipulation and social
a formidable adversary in the form of social interaction to deceive individuals or organizations into
engineering attacks. These manipulative tactics exploit divulging confidential information, granting
human psychology and trust, often leading to unauthorized access, or performing actions that
unauthorized access, data breaches, and financial losses compromise security [4]. Such attacks come in various
[1]. As technology continues to advance, social forms, including phishing, pretexting, baiting, and
engineering attackers are increasingly leveraging tailgating, among others [5]. Over the years, they have
sophisticated tools and techniques to deceive their continued to adapt and remain successful due to their
targets. One such tool that has garnered considerable exploitation of human vulnerabilities [5].
attention in recent years is generative artificial
intelligence (AI) [2]. Phishing attacks have been growing in frequency and
 complexity, posing a heightened risk to anyone who
Generative AI, a subset of artificial intelligence, uses digital communication methods like email and
encompasses a range of algorithms and models capable text messaging. These attacks involve cybercriminals
of generating text, images, audio, and more with sending deceptive messages with the intention of
human-like characteristics. This technology has shown duping recipients into divulging sensitive information,
promise in various domains, including creative content such as credit card details, or initiating malware on
generation, language translation, and medical diagnosis their devices. The effectiveness of phishing attacks has
[3]. However, it has also found a dark niche in the increased significantly due to the refinement of these
world of cybercrime, where it is harnessed to enhance tactics [6].
the efficacy and believability of social engineering
attacks [4]. A study conducted in October 2022 by messaging
 security provider SlashNext revealed some concerning
This research seeks to delve into the intersection of statistics. The research analysed billions of link-based
generative AI and social engineering attacks, with a URLs, attachments, and natural language messages
specific focus on the utilization of generative AI across various digital communication channels over six
techniques through blog content extraction. Blog months. It identified more than 255 million phishing
extraction, a method of collecting information from attacks during this time, marking a striking 61%
publicly available blogs and online content, offers a increase compared to the previous year [6].
unique perspective on understanding the emergence of
AI-enhanced social engineering tactics. These attacks often lead to financial losses, reputational
 damage, and data breaches, making them a focal point
 II. LITERATURE REVIEW for cybersecurity professionals [7].

A This section examines pertinent literature B. Generative AI in Cybersecurity
concerning social engineering attacks and the role of Generative artificial intelligence (AI) is a subset of AI
generative AI within the realm of cybersecurity. that encompasses various machine learning techniques
 capable of generating content that mimics human
A. Social Engineering Attacks characteristics. Prominent among these techniques is
 the use of deep learning models, such as recurrent

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 185
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

neural networks (RNNs) and generative adversarial
networks (GANs), which have demonstrated Blog mining has been instrumental in monitoring
remarkable capabilities in text, image, and audio emerging threats, tracking the evolution of attack
generation [3]. methodologies, and dissecting attacker motivations.
 This methodology grants access to social engineering
Generative AI has found applications across diverse incidents, offering a unique viewpoint on the
domains, including natural language processing, intersection of generative AI and cybercrime.
creative content generation, and even medical
diagnosis. Its ability to generate content that closely Given that generative AI is a rapidly evolving field,
resembles human-produced material has raised both technology consultants and security experts have
opportunities and concerns in the field of frequently shared their insights and concerns via blogs.
cybersecurity [8]. Consequently, these blogs constitute a valuable source
 for comprehending the intricacies associated with
Recent studies and anecdotal evidence have pointed to generative AI. However, it is essential to acknowledge
the integration of generative AI techniques into social the limitation of blog mining: the content is not peer-
engineering attacks. Attackers are harnessing reviewed akin to journal publications and often reflects
generative AI to craft more convincing and personal opinions and attitudes. To mitigate this
contextually relevant phishing emails, chatbot limitation, a robust approach combines blog mining
interactions, and voice-based impersonations. These with an extensive literature search to gain a more
AI-enhanced attacks leverage generative AI's ability to comprehensive understanding of the topics under
generate persuasive content that bypasses traditional scrutiny.
security measures [9].
 To ensure a comprehensive data collection process, we
 III. METHODOLOGY employed Google Blog Search, which is designed to
 retrieve publicly available content from blogs on the
This section outlines the methodology employed in internet. We recognize the changes in Google's
this research, encompassing the data collection, data services, and although Google Blog Search is no longer
extraction, and analysis processes. active, we conducted our search through the Google
 search engine. The specific keyword used for the
A. Data Collection search was "the use of generative AI in social
Within this section, we elucidate the procedure for engineering attacks." This search was conducted on
blog mining and the criteria used for selecting blogs. September 19, 2023, resulting in 76 blogs retrieved
 within 0.34 seconds, predominantly from the year
This study utilizes a blog mining approach to procure 2023. Subsequently, to curate the most relevant
data on social engineering attacks involving generative content, we selected the 'News' category and sorted the
AI. Blog mining is a systematic process for extracting results by relevance and recency.
information from publicly available blogs and online
content [10]. It is an invaluable source for threat B. Data Extraction and Analysis
intelligence as it provides an unfiltered perspective on Each of the 76 identified blogs underwent manual
the evolving trends, tactics, and techniques employed scrutiny to systematically extract content pertinent to
by malicious actors, shedding light on the integration this research. Inclusion criteria were defined to
of generative AI in social engineering attacks. incorporate blogs that addressed the utilization of

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 186
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

generative AI in social engineering attacks. Ultimately, engineering attacks, and deceptive disinformation
39 blogs met these criteria, while the remaining 37 out campaigns [12].
of the 76 were excluded for various reasons. These
exclusions were attributed to factors such as the lack of The proliferation of AI has been widely documented,
focus on the use of generative AI in social engineering but what often goes unremarked is the concurrent
attacks, brief mentions of generative AI in social increase in AI's sophistication, which has introduced a
engineering within advertising blogs, or the blogs fresh avenue for business email compromise attacks
falling under categories like announcements, reports, [13].
news, or being blocked websites. Some blogs also
necessitated subscription access. While a few blogs Generative AI encompasses any form of artificial
centred on topics closely related to our research, they intelligence (AI) capable of generating novel content,
did not directly address the primary research topic. spanning text, music, images, code, or any other data
 format. Among these, OpenAI's ChatGPT celebrated as
 IV. GENERATIVE AI IN SOCIAL ENGINEERING the fastest-growing consumer application in history,
 ATTACKS has garnered substantial public attention [14].

The landscape of social engineering attacks has Furthermore, the automation of phishing email
undergone substantial evolution, marked by a growing generation holds the potential to enable cybercriminals
utilization of generative AI by malicious actors to to produce malicious emails at an unprecedented scale,
enhance their strategies and heighten the prospects of far exceeding the capacity of human attackers. AI
success. In this section, we explore the application of endowed with social engineering capabilities not only
generative AI in social engineering attacks, offering can disseminate an extensive volume of initial emails
concrete case studies, insights into vulnerabilities but can also adapt its strategy in real-time,
exploited, and an assessment of the resultant impact. underscoring the multifaceted nature of this threat [14].

Generative AI's fundamental aim lies in producing data A recent research analysis conducted by Darktrace
that is virtually indistinguishable from authentic data, unveiled a startling 135% surge in social engineering
mimicking human creation or conforming to the attacks leveraging generative AI [15]. Cybercriminals
original data's distribution. This versatility finds exploit these tools for password hacking, confidential
applications across diverse domains, including natural information leaks, and scams across diverse platforms.
language generation, image synthesis, music This emergence of novel scams has induced heightened
composition, and even video generation [11]. apprehension among employees, with 82% expressing
 concerns about falling victim to these deceptive tactics
Artificial intelligence (AI)-powered generative models [15].
possess the potential to generate exceptionally
convincing deepfake content, presenting a substantial A. Generative AI Commonly Used in Social
threat in the realm of malicious activities. These Engineering Attacks
advanced AI systems can fabricate remarkably realistic The following are some of the commonly used
media, virtually indistinguishable from genuine generative AI tools used in social engineering attacks.
content. Consequently, they pose formidable
challenges in discerning and combatting the 1. ChatGPT: ChatGPT is an advanced AI language
proliferation of misinformation, manipulative social model developed by OpenAI. It is part of the GPT-3

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 187
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

family of models and is specifically designed for natural FraudGPT marks the onset of a new era characterized
language understanding and generation. ChatGPT is by more perilous and democratized weaponized
known for its ability to engage in text-based generative AI tools and applications. While the current
conversations with users, answer questions, provide iteration may not match the generative AI prowess
information, and generate human-like text. It has a wielded by nation-state attack teams and large-scale
wide range of applications, including chatbots, virtual operations, such as the North Korean Army's elite
assistants, customer support, content generation, and Reconnaissance General Bureau's cyberwarfare arm,
more. ChatGPT's versatility and natural language Department 121, it excels in training the next
capabilities make it a valuable tool in various industries generation of attackers [19].
and domains [16], [17].
 3. WormGPT- enhancing email attacks with AI: While
2. FraudGPT- a game changer in malicious cyber- OpenAI LP's ChatGPT garners substantial attention in
attacks: FraudGPT is a novel subscription-based the AI landscape, hackers have embraced its "black hat"
generative AI tool designed to transcend the counterpart, WormGPT, to craft compelling,
boundaries of technology's intended use and personalized emails that significantly elevate the
circumvent restrictions, opening the door to the success rate of their attacks. WormGPT, based on the
development of highly convincing phishing emails and GPTJ language model, is specifically trained to bolster
deceptive websites [18]. Unearthed by Netenrich's the development of such malicious endeavours [13].
threat research team in July 2023 within the dark web's Initially conceived in 2021, WormGPT leverages the
Telegram channels, FraudGPT represents a paradigm GPTJ language model to offer an augmented feature set,
shift in attack tradecraft, potentially democratizing including unrestricted character support, chat memory
weaponized generative AI on a large scale [18]. retention, and code formatting capabilities. Unlike its
 ethical counterparts, WormGPT is purpose-built for
Engineered to automate an array of tasks, from crafting nefarious activities and has exhibited the capability to
malicious code and conceiving undetectable malware generate astute and persuasive BEC (Business Email
to composing persuasive phishing emails, FraudGPT Compromise) emails [13].
empowers even inexperienced attackers. This cyber-
attacker's starter kit leverages proven attack tools, 4. Microsoft’s VALL-E and the emergence of voice
encompassing custom hacking guides, vulnerability cloning scams: On January 9th, 2023 Microsoft
mining, and zero-day exploits, all without unveiled Vall-E, a generative AI-powered voice
necessitating advanced technical expertise [19]. For a simulator capable of replicating a user's voice and
monthly fee of $200 or an annual subscription of delivering responses in the user's unique tonality,
$1,700, FraudGPT furnishes subscribers with a utilizing only a brief three-second audio sample [20].
foundational skill set that previously demanded Other similar tools, such as Sensory and Resemble AI,
substantial effort to cultivate. Its capabilities span the have also surfaced. Scammers have seized upon these
creation of phishing emails and social engineering technologies, particularly targeting Indian users, who
content, the development of exploits, malware, and are especially susceptible to voice-based financial
hacking tools, the discovery of vulnerabilities, scams [21].
compromised credentials, and exploitable websites,
and the provision of guidance on hacking techniques The McAfee data underscores that up to 70% of Indian
and cybercrime [19]. users are likely to respond to voice queries from
 individuals claiming to be friends or family in need of

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 188
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

financial aid due to purported thefts, accidents, or incidents, with these attacks accounting for nearly half
other emergencies. This figure stands in stark contrast of all social engineering hacks. The continued
to users in Japan, France, Germany, and Australia, development of generative AI stands to further
where response rates are significantly lower. Indian empower pretexting, driven by three key factors [23].
users, in particular, lead in sharing voice data on social
media platforms, providing scammers with ample Pretexting, a form of social engineering, is on the rise
material for cloning voices through AI algorithms, and and stands to benefit substantially from generative AI.
facilitating financial scams[21]. AI's ability to mimic trusted organizations' writing
 styles enhances the credibility of pretexting attacks.
5. DALLE-E 2 and stable diffusion – the evolving Moreover, AI can significantly increase the scale of
landscape of AI-generated images: AI diffusion models these attacks, casting wider nets across different
like DALL-E 2 or Stable Diffusion are instrumental in languages, even if the threat actors lack linguistic
crafting images that, while initially visibly artificial, proficiency. AI also streamlines large-scale attacks,
are continually improving in quality, making it making them more efficient. Consequently, pretexting
increasingly difficult to distinguish them as fake with attacks are becoming increasingly costly for
each iteration. Concerns have arisen regarding the organizations, necessitating vigilant cybersecurity
potential misuse of AI-generated images in measures [23].
disinformation campaigns and efforts to tarnish the
reputation of prominent individuals, including CEOs 3. Scams and generative AI: Generative AI poses a
and politicians [20]. significant threat in the realm of scams, capable of
 generating fraudulent content and communications at
B. Types of Social Engineering Attacks Generated by scale to deceive individuals and organizations. These
AI AI-driven threats compile extensive datasets
1. Phishing attacks and generative AI: Phishing attacks containing personal and company information, using
have taken on new dimensions with the utilization of this data to craft highly unique and persuasive content,
generative AI. Hackers leverage this technology to emulating writing styles and engagement patterns [24].
generate hyper-realistic elements, including emails, Scams often exploit emotions, curiosity, or urgency to
websites, and user interfaces. These sophisticated deceive targets. Protecting against such scams requires
deceptions are designed to dupe individuals into robust measures, including email filters, rigorous
divulging sensitive information or unknowingly validation of account changes, up-to-date antivirus
downloading malware. As generative AI continues to software, and website scanners [24].
advance, the complexity of these attacks is expected to
increase, posing significant challenges to cybersecurity 4. Deepfake social engineering: The rise of deepfake
[22]. technology, fuelled by generative AI, introduces
 profound security challenges. Deepfakes entail the
2. Pretexting and generative AI: Social engineering, a creation of highly realistic fake videos and images that
pervasive threat in the cybersecurity landscape, is convincingly mimic real people or events. These
experiencing notable growth, primarily driven by a manipulated media can be used maliciously to spread
technique known as pretexting. Pretexting involves misinformation, engage in impersonation, and
the use of fabricated stories or pretexts to deceive users perpetrate fraud. Deepfake threats particularly target
into divulging sensitive information [23]. Recent human emotions, aiming to extract sensitive
trends indicate a significant uptick in pretexting information or monetary gains. Their growing

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 189
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

prevalence poses significant security concerns for both
consumers and businesses, necessitating vigilant 2. Deepfake Videos and Virtual Identities: AI can be
monitoring and protective measures [25]. harnessed to create convincing deepfakes, including
 synthetic videos and fake virtual identities.
Deepfakes leverage deep learning techniques, such as Cybercriminals can impersonate real individuals, such
generative adversarial networks, to digitally alter and as senior executives or trusted partners, engaging
simulate real individuals. Instances of deepfake attacks victims in conversations to socially engineer them into
are on the rise as the technology becomes increasingly revealing sensitive information, executing financial
realistic and challenging to detect. These attacks can transactions, or propagating misinformation [9].
have severe consequences, including political Believable deepfake videos can deceive users into
disinformation and financial fraud. AI tools' taking action and divulging credentials, potentially
improvements have made it easier for perpetrators to undermining the effectiveness of employee
disrupt business operations, highlighting the need for cybersecurity training [28].
heightened awareness and robust security practices
[26]. 3. Voice cloning for vishing attacks: Threat actors can
 leverage AI to clone human speech and audio, enabling
C. How AI is Advancing Social Engineering advanced voice phishing or "vishing" attacks.
AI is ushering in a new era in the realm of social Scammers may use AI voice cloning technology to
engineering, presenting threat actors and impersonate family members or authoritative figures,
cybercriminals with advanced tools and tactics to duping victims into transferring money under the
manipulate, deceive, and compromise computer pretext of a family emergency, as cautioned by the
systems. These technological advancements are Federal Trade Commission [9]. Audio AI tools simulate
creating several avenues for adversaries to employ AI the voices of managers and senior executives, enabling
in the orchestration of sophisticated social engineering the creation of fraudulent voice memos or other
attacks. communications with instructions for staff [28].

1. Enhanced phishing emails: Traditional phishing 4. AI-driven phishing tools: AI tools can also serve as
attacks often contain noticeable grammatical errors, potent instruments for phishing. For example, through
particularly when conducted by non-native speakers. a complex technique called Indirect Prompt Injection,
However, AI-powered tools like ChatGPT enable researchers successfully manipulated a Bing chatbot
attackers to craft exceptionally refined emails with into impersonating a Microsoft employee and
correct grammar and spelling, making them generating phishing messages that solicited credit card
indistinguishable from human-authored messages. information from users [9].
This heightened level of sophistication poses a
considerable challenge in discerning AI-generated 5. Automation for industrial-scale attacks:
content from genuine human interactions [9]. Autonomous agents, scripting, and other automation
Generative AI can produce fraudulent content and tools empower threat actors to execute highly targeted
digital interactions, including real-time conversations, social engineering attacks on an industrial scale. They
to impersonate users and elevate social engineering and can automate every step of the process, from selecting
phishing attacks. It allows non-native English speakers targets to delivering phishing emails and orchestrating
to refine their messages and avoid common linguistic human-like responses in chat boxes or phone calls [9],
pitfalls [27]. [29].

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 190
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 attacks by generating emails that align closely with the
6. AI's adaptive learning: AI systems can adapt and target's context, language, and tone [12], [31].
refine their phishing tactics based on their own
learning experiences, distinguishing between what 3. Crisis of authenticity: Generative AI threatens to
works and what does not. This adaptive capability produce highly credible content that emulates
enables them to evolve increasingly sophisticated individual or organizational writing styles. These
phishing strategies [9]. materials are designed to resonate emotionally with
 consumers, exploiting their trust and emotions.
C. Vulnerabilities Exploited by Generative AI Attackers leverage deepfake technology in outbound
AI-driven vulnerabilities in the realm of social and inbound voice or video calls, relying on victims'
engineering have introduced new dimensions of emotions, panic, and curiosity to establish trust,
exploitation, leveraging the psychological and urgency, and empathy [24]. Generative AI models
behavioural aspects of individuals. consider various data points to achieve their objectives,
 often involving actions such as sharing sensitive
1. Psychological manipulation: Generative AI equips information or transferring funds to fraudulent
attackers with the capability to craft highly persuasive accounts. The resulting conversations sound authentic
messages that exploit human cognitive biases and and empathetic, making it essential for individuals to
emotions. By generating content that triggers remain vigilant, scrutinize details, and contact their
recipients' fears, desires, or a sense of urgency, banks' fraud hotlines if they suspect fraudulent activity
attackers manipulate individuals into taking actions [24].
they would not typically consider [30]. This
psychological manipulation extends to various Generative AI technology raises concerns about
domains, including social media platforms, where authenticity and governance in digital media. It poses
phishing campaigns and deepfakes leverage social immediate risks of disinformation, potentially leading
engineering to encourage victims to divulge to longer-term issues related to control and
confidential login credentials. This stolen information accountability. AI-powered bots can flood social media
can then be weaponized to compromise social media platforms with tailored content, spreading rapidly and
accounts or infiltrate corporate networks via the amplifying contentious issues. Businesses will need to
infected user's device or abused credentials [30]. monitor digital media manipulation carefully, as
 generative AI enables the creation of hyper-targeted,
2. Targeted phishing: AI-driven phishing attacks have AI-generated content at scale. This capability elevates
grown in sophistication, with attackers utilizing the risk of campaigns related to "augmented advocacy,"
generative AI to personalize messages based on the activist boycotts, and online backlash surrounding
recipient's online activities and behaviours. These sensitive topics [32].
targeted phishing attempts are particularly challenging
to detect as they often emulate trusted sources and 4. Deepfake technology: Deepfake technology, a subset
employ social engineering tactics tailored to the of generative AI, empowers attackers to produce
specific victim. Generative AI enables attackers to craft highly convincing audio and video impersonations.
convincing phishing lures with personalization, These deepfake voice recordings or video clips allow
drawing from information available on public profiles attackers to impersonate trusted individuals or
like LinkedIn. This personalization amplifies the authority figures, eroding trust and facilitating
effectiveness of business email compromise (BEC) manipulation. Deepfake technologies also introduce

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 191
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

fabricated facial overlays during video calls, creating a threatening to release it publicly unless certain
false image and voice on the consumer's screen. This demands are met, is another alarming prospect [33].
innovation is akin to wearing a mask and mimicking a
voice during interactions, posing significant risks in 3. Legal Implications: The utilization of generative AI
various contexts [24]. in social engineering attacks gives rise to intricate legal
 challenges, particularly concerning issues of
D. Impact and Consequences attribution and accountability. As AI technology
The misuse of AI-powered generative models carries continues to advance, identifying the true identities of
profound and far-reaching consequences, with the attackers and holding them responsible becomes
potential to disrupt trust, manipulate public opinion, increasingly complex and, in some cases, elusive [34].
and inflict substantial harm on individuals, institutions,
and even entire societies. Vigilance and the These consequences underscore the critical need for
development of robust countermeasures are imperative comprehensive strategies to combat the misuse of AI-
to mitigate the risks associated with this evolving powered generative models. Implementing
technology [12]. cybersecurity measures, raising public awareness, and
 fostering responsible AI development are crucial steps
1. Financial losses: AI-enhanced social engineering toward addressing the multifaceted risks associated
attacks often result in significant financial losses for with this emerging technology.
both individuals and organizations. Victims may
unwittingly transfer funds, divulge sensitive financial E. Real-World Examples of AI-Enhanced Social
information, or engage in transactions that directly Engineering Attacks
benefit the attackers. Such monetary losses can have Through blog mining, we have identified numerous
severe repercussions [9]. instances where generative AI techniques were
 employed in social engineering attacks. These case
2. Reputation damage: Social engineering attacks can studies provide concrete examples of how attackers
tarnish the reputation of targeted individuals and leverage AI in their efforts. AI-powered generative
organizations. When AI-generated content is exploited models have been involved in various incidents that
to disseminate false information or conduct smear demonstrate the potential for misuse and deception.
campaigns, the harm to reputation can be enduring and
challenging to remediate. This damage extends beyond 1. Tricking ChatGPT for Windows activation keys:
the financial realm, affecting trust and credibility [7]. Users were able to deceive ChatGPT into providing
 Windows activation keys by framing their request as
Deepfake technology introduces the unsettling part of a bedtime story [35].
possibility of highly damaging revenge scenarios.
Individuals with malicious intent could easily fabricate 2. Requesting a deceptive email: A user requested
scenarios such as making it appear as though someone ChatGPT to compose a deceptive email, posing as a
cheated by swapping faces in an intimate video. They friendly yet professional message regarding an account
could create fake videos depicting the victim making issue and instructing the recipient to call a specific
offensive statements, thereby jeopardizing their career, phone number [36].
even if the video is later proven to be fake.
Blackmailing someone with a deepfake video, and 3. Impersonation of UK business owner: In 2020, AI
 technology was used to impersonate the voice of a UK

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 192
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

business owner. This impersonation convinced a CEO
to transfer $243,000 to an unknown group of hackers F. Challenges in Detecting AI-Enhanced Attacks
[20]. The challenges associated with detecting AI-enhanced
 attacks, particularly those involving generative AI, are
4. Voice mimicry in a UK energy company: In 2019, multifaceted and require specialized approaches:
hackers targeted a UK energy company using AI-
generated voice technology. They successfully 1. Evolving AI models: The rapid evolution of
mimicked the CEO's voice and persuaded a generative AI models poses a significant challenge to
subordinate to transfer approximately $243,000 to a defenders. Attackers can quickly adapt their tactics to
fraudulent account [27]. bypass existing detection methods by leveraging the
 latest AI techniques. This constant evolution demands
5. Blackmail using AI-generated voice: Criminals continuous vigilance and proactive measures to stay
blackmailed a woman by claiming they had kidnapped ahead of emerging threats. Generative AI models are
her daughter and used AI to create a convincing often considered black boxes, making it challenging to
simulation using voice samples from the daughter. In understand their decision-making processes. This
February 2023, a journalist broke past the opacity complicates the attribution of responsibility,
authentication scheme of a major UK financial hindering effective countermeasures and legal actions
institution by using deepfake technology [37]. [22].

6. $35 Million Stolen in UAE: A criminal ring stole $35 2. Lack of training data: Detecting AI-enhanced social
million by using deepfake audio to deceive an engineering attacks relies on large and diverse datasets
employee at a United Arab Emirates company. They for training machine learning models. However,
convinced the employee that a director needed the obtaining labelled datasets that cover the full spectrum
money for an acquisition on behalf of the organization of potential attacks can be a daunting task. Generative
[38]. AI can be used by cybercriminals to automate social
 engineering attacks, such as highly personalized spear-
7. Impersonation of CEO: Scammers impersonated a phishing campaigns. By analysing vast amounts of data,
CEO using deepfake audio in an attempt to request a AI can craft convincing messages targeting specific
transfer of €220,000 from a manager of a U.K. individuals or groups, thereby increasing the success
subsidiary of a German company [34]. rates for malicious actors. Overcoming these
 challenges necessitates access to extensive training data,
8. Face-swapping scam in China: In northern China, a which can be difficult to obtain due to privacy
cybercriminal used AI-powered face-swapping concerns and legal constraints [22].
technology to impersonate a man's close friend,
persuading him to transfer 4.3 million yuan [34]. To effectively combat and mitigate generative AI
 threats, the cybersecurity community must address
These incidents highlight the capacity of AI-generated these challenges through ongoing research,
content and voice technology to facilitate deception, collaboration, and the development of advanced
social engineering, and financial fraud. As AI tools detection techniques. Staying updated on AI
become more sophisticated, there is a growing need for advancements and continuously improving defence
awareness and countermeasures to protect against such strategies are essential components of defending
threats. against AI-enhanced attacks. Additionally, addressing

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 193
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

the privacy concerns associated with data collection significantly enhance security by eliminating the
and sharing is crucial to strike a balance between reliance on traditional passwords. Embrace phishing-
security and individual rights. resistant factors like passkeys, which can help combat
 advanced phishing attempts facilitated by AI [40] [18].
G. Countermeasures and Defence Against AI-
Enhanced Social Engineering Attacks 7. AI-Powered Security Solutions: Invest in AI-driven
Addressing the growing threat of AI-enhanced social security solutions that leverage machine learning
engineering attacks requires a multi-faceted approach algorithms to analyse network traffic, email content,
that combines traditional security measures with and user behaviour for anomalies indicative of social
advanced AI-based solutions. engineering attacks. Fighting AI with AI [28], [35], [36],
 [41]–[43].
1. Traditional Security Measures: Continue to employ
traditional cybersecurity practices, such as firewalls, 8. Enhance AI-Driven Threat Detection: Develop
intrusion detection systems, and email filtering. These machine learning models capable of recognizing subtle
mechanisms help detect known attack patterns and AI-generated content patterns and behaviours.
malicious entities [35]. Integrating AI with traditional security measures
 creates a more comprehensive defence [31].
2. Advanced Email Filters and Antivirus Software:
Enhance your email security with advanced filters that 9. Collaborative approaches: Foster collaboration
can identify phishing attempts and malicious content. among cybersecurity professionals, organizations, and
Keep antivirus software updated and relevant to AI developers. Sharing threat intelligence and forming
protect against malware [39]. public-private partnerships can enhance defence
 strategies [22].
3. Website Scanners: Utilize website scanning services
to identify false or malicious websites. These scanners 10. Zero trust framework: Embrace a zero-trust
can help users avoid falling victim to phishing sites [25]. approach, which assumes that no one, whether inside
 or outside the organization, should be trusted by
4. Multi-Factor Authentication (MFA): Implement default. Verify the senders of emails, chats, or texts,
MFA, especially for sensitive transactions or approvals. especially when they request sensitive information or
MFA adds an extra layer of security by requiring actions [23], [32], [36].
multiple forms of verification [27], [35].
 11. Awareness and Education: Educate employees and
5. Phishing Simulations: Conduct phishing simulations individuals about the risks associated with generative
using AI tools like ChatGPT to familiarize employees AI and social engineering attacks. Promote awareness
with the tone and characteristics of AI-generated of the evolving threat landscape [14], [27], [32], [36],
communications. This can help employees recognize [44].
and respond to phishing attempts effectively[36].
 12. Continuous improvement: Recognize that the
6. Implement Passwordless Authentication: Consider threat landscape is constantly evolving. Stay agile and
using passwordless authentication systems like adapt defence strategies to counter new and emerging
passkeys that use cryptography to make user threats effectively. Regularly assess and improve
credentials unphishable [18]. These systems can

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 194
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

security measures. Keep pace with advancements in AI the rapid evolution of AI models and the extensive data
technology and evolving attack techniques [12], [28]. required for training. As a result, there is a pressing
By combining these strategies and maintaining a need for adaptation and innovation in the
proactive stance, individuals, organizations, and cybersecurity landscape.
governments can work together to reduce the risk of
AI misuse by cybercriminals and create a safer digital Looking ahead, several critical areas warrant further
environment for all. exploration:

The battle against AI-enhanced social engineering The development of AI-driven threat detection
attacks is ongoing, and as attackers continue to exploit systems capable of identifying subtle patterns and
AI technology, defenders must adapt their strategies to behaviours indicative of AI-generated threats should
stay one step ahead. As organizations strive to combat be prioritized. These systems should complement
generative AI threats, they must navigate the delicate existing security measures.
balance between security measures and privacy
concerns. Mitigation efforts should avoid unnecessary Collaboration between various sectors, including
invasions of privacy while still protecting individuals public and private entities, is essential for sharing
and organizations from potential harm. threat intelligence, anticipating emerging threats, and
 developing proactive defence strategies.
 V. CONCLUSION AND FURTHER RESEARCH
 Emphasizing ethical considerations, transparency,
In this study, we explore the relationship between fairness, and accountability in the development and
artificial intelligence (AI) and social engineering deployment of AI technologies can help mitigate the
attacks, using a research approach known as blog risks associated with AI-enhanced social engineering
mining. We investigate real-world cases, analyse how attacks.
AI plays a role in these attacks, examine their
consequences, and assess the strategies employed for In conclusion, the integration of generative AI into
defence. social engineering attacks presents a formidable
 challenge for cybersecurity. While AI holds significant
One key finding from our research is the growing promise, its potential for misuse necessitates vigilance,
utilization of AI by malicious actors to enhance the ethical guidelines, and legal frameworks. Addressing
effectiveness of their social engineering tactics, a these multifaceted challenges requires a collaborative
development that raises significant concerns about its effort involving technology developers, organizations,
potential misuse. policymakers, and society at large to strike a balance
 between innovation and security.
Furthermore, our study highlights the increasing
complexity and success rate of AI-backed social VI. REFERENCES
engineering attacks. Attackers can now craft highly
personalized and contextually relevant messages that [1]. M. A. Siddiqi and W. Pak, "Applied sciences A
pose significant challenges for detection. Study on the Psychology of Social Engineering-
 Based Cyberattacks and Existing
Conventional cybersecurity measures face difficulties Countermeasures," 2022.
in effectively countering AI-enhanced attacks due to

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 195
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

[2]. R. Kaur, “Artificial intelligence for blog mining,” CEUR Workshop Proc., vol. 1353,
 cybersecurity : Literature review and future pp. 103–108, 2015.
 research directions,” vol. 97, no. January 2023, [11]. A. Rudra, “Cybersecurity Risks of Generative
 doi: 10.1016/j.inffus.2023.101804. AI,” 2023.
[3]. G. Lawton, “What is generative AI? Everything https://securityboulevard.com/2023/07/cybersec
 you need to know,” 2023. urity-risks-of-generative-ai/ (accessed Sep. 26,
 https://www.techtarget.com/searchenterpriseai/ 2023).
 definition/generative-AI (accessed Sep. 29, [12]. D. Gupta, “The Road Ahead: Adapting to the
 2023). Generative AI Cybersecurity Landscape,” 2023.
[4]. Z. Wang, L. Sun, and H. Zhu, “Defining Social https://securityboulevard.com/2023/08/the-
 Engineering in Cybersecurity,” no. January 2021, road-ahead-adapting-to-the-generative-ai-
 2020, doi: 10.1109/ACCESS.2020.2992807. cybersecurity-landscape/ (accessed Sep. 24,
[5]. A. A. Alsufyani, L. A. Alhathally, B. O. Al-amri, 2023).
 and S. M. Alzahrani, "Social Engineering, New [13]. D. RILEY, “Cybercriminals are using custom
 Era Of Stealth And Fraud Common Attack ‘WormGPT’ for business email compromise
 Techniques And How To Prevent Against," vol. attacks,” 2023.
 9, no. 10, 2020. https://siliconangle.com/2023/07/13/slashnext-
[6]. B. Violino, “Phishing attacks are increasing and warns-cybercriminals-using-custom-wormgpt-
 getting more sophisticated. Here’s how to avoid business-email-compromise-attacks/ (accessed
 them,” 2023. Sep. 26, 2023).
 https://www.cnbc.com/2023/01/07/phishing- [14]. S. Rushin, “The Dark Side of Generative AI:
 attacks-are-increasing-and-getting-more- Unveiling the Cybersecurity Risk,” 2023.
 sophisticated.html (accessed Sep. 29, 2023). https://www.digit.fyi/comment-the-dark-side-
[7]. P. Mwiinga, “Investigating the Far-Reaching of-generative-ai-unveiling-the-cybersecurity-
 Consequences of Cybercrime A Case Study on risk/ (accessed Sep. 24, 2023).
 the Impact in Lusaka,” no. July, 2023. [15]. Darktrace, “Major Upgrade to
[8]. A. Haleem, M. Javaid, and R. Pratap, Darktrace/EmailTM Product Defends
 "BenchCouncil Transactions on Benchmarks, Organizations Against Evolving Cyber Threat
 Standards and Evaluations An era of ChatGPT as Landscape, Including Generative AI Business
 a significant futuristic support tool : A study on Email Compromises and Novel Social
 features, abilities, and challenges,” BenchCouncil Engineering Attacks,” 2023.
 Trans. Benchmarks, Stand. Eval., vol. 2, no. 4, p. https://darktrace.com/news/darktrace-email-
 100089, 2023, doi: defends-organizations-against-evolving-cyber-
 10.1016/j.tbench.2023.100089. threat-landscape (accessed Sep. 26, 2023).
[9]. S. Sjouwerman, “How AI Is Changing Social [16]. S. Ortiz, “What is ChatGPT and why does it
 Engineering Forever,” 2023. matter? Here’s what you need to know,” 2023.
 https://www.forbes.com/sites/forbestechcouncil https://www.zdnet.com/article/what-is-chatgpt-
 /2023/05/26/how-ai-is-changing-social- and-why-does-it-matter-heres-everything-you-
 engineering-forever/?sh=123037f5321b need-to-know/ (accessed Sep. 29, 2023).
 (accessed Sep. 26, 2023). [17]. M. Vizard, “SlashNext Report Shows How
[10]. W. He, X. Tian, and J. Shen, “Examining security Cybercriminals Use Generative AI,” 2023.
 risks of mobile banking applications through https://securityboulevard.com/2023/07/slashnex

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 196
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

 t-report-shows-how-cybercriminals-use- trends/balancing-the-convenience-of-
 generative-ai/ (accessed Sep. 26, 2023). generative-ai-with-the-new-fraud-threats-that-
[18]. E. K. Sing, “With generative AI, businesses need come-with-it-20230911 (accessed Sep. 23, 2023).
 to rewrite the phishing rulebook,” 2023. [25]. N. Raju, “Securing IT Infrastructure Against
 https://identityweek.net/with-generative-ai- Generative AI Cybersecurity Threats,” 2023.
 businesses-need-to-rewrite-the-phishing- https://www.cxotoday.com/cxo-bytes/securing-
 rulebook/ (accessed Sep. 22, 2023). it-infrastructure-against-generative-ai-
[19]. L. Columbus, “How FraudGPT presages the cybersecurity-threats/ (accessed Sep. 26, 2023).
 future of weaponized AI,” 2023. [26]. G. Lawton, “How to prevent deepfakes in the era
 https://venturebeat.com/security/how-fraudgpt- of generative AI,” 2023.
 presages-the-future-of-weaponized-ai/ (accessed https://www.techtarget.com/searchsecurity/tip/
 Sep. 24, 2023). How-to-prevent-deepfakes-in-the-era-of-
[20]. R. Bathgate, “Mandiant says generative AI will generative-AI (accessed Sep. 26, 2023).
 empower new breed of information operations, [27]. F. Domizio, “3 Significant Cybersecurity Risks
 social engineering,” 2023. Presented by Generative AI,” 2023.
 https://www.itpro.com/technology/artificial- https://accelerationeconomy.com/cybersecurity/
 intelligence/mandiant-says-generative-ai-will- 3-significant-cybersecurity-risks-presented-by-
 empower-new-breed-of-information- generative-ai/ (accessed Sep. 23, 2023).
 operations-social-engineering (accessed Sep. 26, [28]. C. Business, “How to protect your business from
 2023). generative AI cybersecurity threats,” 2023.
[21]. S. Das, “Back ‘Voice scams hit 47% web users,’” https://www.bizjournals.com/albuquerque/news
 2023. /2023/07/17/protect-from-generative-ai-
 https://www.livemint.com/companies/start- cybersecurity-threats.html (accessed Sep. 24,
 ups/indias-internet-users-vulnerable-to-ai- 2023).
 powered-voice-scams-mcafee-reports-47-of- [29]. S. Paul, “Authentication in the time of
 indian-users-encounter-or-know-victims- Generative AI,” 2023.
 11683032655430.html (accessed Sep. 26, 2023). https://www.cxotoday.com/cxo-
[22]. P. GJ, “Is Generative AI a New Threat to bytes/authentication-in-time-of-generative-ai-
 Cybersecurity?,” 2023. attacks/ (accessed Sep. 25, 2023).
 https://www.cxotoday.com/corner-office/is- [30]. B. Strauss, “Listen to These Recordings: Deepfake
 generative-ai-a-new-threat-to-cybersecurity/ Social Engineering Scams Are Scaring Victims,”
 (accessed Sep. 26, 2023). 2023.
[23]. C. Novak, “The Role Of AI In Social https://securityboulevard.com/2023/05/listen-
 Engineering,” 2023. to-these-recordings-deepfake-social-
 https://www.forbes.com/sites/forbestechcouncil engineering-scams-are-scaring-victims/
 /2023/07/05/the-role-of-ai-in-social- [31]. A. Hasnain, “New Study Reveals Cybercriminals’
 engineering/?sh=4f88cf0342a9 (accessed Sep. 23, Growing Use of Generative AI to Amplify and
 2023). Enhance Email Attacks,” 2023.
[24]. U. J. van Rensburg, “Balancing the convenience https://www.digitalinformationworld.com/2023
 of generative AI with the new fraud threats that /06/new-study-reveals-cybercriminals.html
 come with it,” 2023. (accessed Sep. 19, 2023).
 https://www.news24.com/news24/tech-and-

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 197
 Polra Victor Falade Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol., September-October-2023, 9 (5) : 185-198

[32]. D. FLEET, “AI could hurt businesses. Here’s how security/145538/bad-actors-are-using-
 to protect yours,” 2023. generative-ai-to-perfect-social-engineering-
 https://www.fastcompany.com/90926893/pov- schemes-heres-what-you-need-to-know
 ai-will-hurt-businesses-heres-how-to-protect- (accessed Sep. 25, 2023).
 yours (accessed Sep. 24, 2023). [40]. T. Bradley, “Defending Against Generative AI
[33]. Forbes, “17 Surprising (And Sometimes Cyber Threats,” 2023.
 Alarming) Uses For And Results Of AI,” 2023. https://www.forbes.com/sites/tonybradley/2023/
 https://www.forbes.com/sites/forbestechcouncil 02/27/defending-against-generative-ai-cyber-
 /2023/08/03/17-surprising-and-sometimes- threats/?sh=cd0be1f10884 (accessed Sep. 25,
 alarming-uses-for-and-results-of- 2023).
 ai/?sh=2eab1ca65df8 (accessed Sep. 26, 2023). [41]. J. Zhang, “Is Rogue AI Destined to Become an
[34]. M. Nkosi, “3 security risks of generative AI you Unstoppable Security Threat?,” 2023.
 should watch out for!,” 2023. https://solutionsreview.com/security-
 https://www.itnewsafrica.com/2023/07/3- information-event-management/is-rogue-ai-
 security-risks-of-generative-ai-you-should- destined-to-become-an-unstoppable-security-
 watch-out-for/ (accessed Sep. 26, 2023). threat/ (accessed Sep. 23, 2023).
[35]. Y. LEIBLER, “The Rising Threat of Generative [42]. C. Lehman, “Generative AI in Cybersecurity:
 AI in Social Engineering Cyber Attacks — What The Battlefield, The Threat, & Now The
 You Need to Know,” 2023. Defense,” 2023.
 https://www.entrepreneur.com/science- https://www.unite.ai/generative-ai-in-
 technology/how-cyber-criminals-are- cybersecurity-the-battlefield-the-threat-now-
 weaponizing-generative-ai/455896 (accessed the-defense/ (accessed Sep. 24, 2023).
 Sep. 18, 2023). [43]. P. Harr, “Defending Against AI-Based Phishing
[36]. M. Elgan, “Now social engineering attackers Attacks,” 2023.
 have AI. Do you?,” 2023. https://www.forbes.com/sites/forbestechcouncil
 https://securityintelligence.com/articles/now- /2023/08/04/defending-against-ai-based-
 social-engineering-attackers-have-ai-b/ phishing-attacks/?sh=1d4d61b83da6 (accessed
 (accessed Sep. 22, 2023). Sep. 24, 2023).
[37]. VentureBeat, “The growing impact of generative [44]. S. Farnfield, “Avoiding cyber attacks in a world
 AI on cybersecurity and identity theft,” 2023. with generative AI,” 2023.
 https://venturebeat.com/security/the-growing- https://www.dpaonthenet.net/article/200011/Av
 impact-of-generative-ai-on-cybersecurity-and- oiding-cyber-attacks-in-a-world-with-
 identity-theft/ (accessed Sep. 26, 2023). generative-AI.aspx (accessed Sep. 25, 2023).
[38]. M. Elgan, “Synthetic media creates new social Cite this article as :
 engineering threats,” 2023. Polra Victor Falade, "Decoding the Threat Landscape :
 https://securityintelligence.com/articles/syntheti ChatGPT, FraudGPT, and WormGPT in Social
 c-media-new-social-engineering-threats/ Engineering Attacks", International Journal of Scientific
 (accessed Sep. 26, 2023). Research in Computer Science, Engineering and
[39]. “Bad actors are using generative AI to perfect Information Technology (IJSRCSEIT), ISSN : 2456-3307,
 social engineering schemes. Here’s what you Volume 9, Issue 5, pp.185-198, September-October-2023.
 Available at doi : https://doi.org/10.32628/CSEIT2390533
 need to know,” 2023.
 Journal URL : https://ijsrcseit.com/CSEIT2390533
 https://uk.pcmag.com/migrated-38485-

Volume 9, Issue 5, September-October-2023 | http://ijsrcseit.com 198
