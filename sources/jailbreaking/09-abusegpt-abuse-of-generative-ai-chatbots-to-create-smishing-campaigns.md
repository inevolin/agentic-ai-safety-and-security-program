# AbuseGPT: Abuse of Generative AI ChatBots to Create Smishing Campaigns

- **Year:** 2024
- **DOI:** https://doi.org/10.1109/isdfs60797.2024.10527300
- **Source URL:** https://doi.org/10.1109/isdfs60797.2024.10527300
- **HTTP:** 200 | **Content-Type:** text/html;charset=UTF-8
- **Effective URL:** https://ieeexplore.ieee.org/document/10527300/

---

## Source: https://arxiv.org/pdf/2402.09728

This work has been accepted at the IEEE 12th International Symposium on Digital Forensics and Security (ISDFS 2024)

arXiv:2402.09728v1 [cs.CR] 15 Feb 2024

AbuseGPT: Abuse of Generative AI ChatBots to
Create Smishing Campaigns
Ashfak Md Shibli

Mir Mehedi A. Pritom

Maanak Gupta

Department of Computer Science
Tennessee Technological University
Cookeville, TN, USA
ashibli42@tntech.edu

Department of Computer Science
Tennessee Technological University
Cookeville, TN, USA
mpritom@tntech.edu

Department of Computer Science
Tennessee Technological University
Cookeville, TN, USA
mgupta@tntech.edu

comprehension of written texts, answer complex questions,
generate lengthy coherent stories, translate between languages,
and hold conversations while maintaining context and personality. Their versatility, scalability, and ability to achieve
strong performance with self-supervised learning make them
extremely powerful [9].

Abstract—SMS phishing, also known as “smishing”, is a growing threat that tricks users into disclosing private information or
clicking into URLs with malicious content through fraudulent
mobile text messages. In recent past, we have also observed
a rapid advancement of conversational generative AI chatbot
services (e.g., OpenAI’s ChatGPT, Google’s BARD), which are
powered by pre-trained large language models (LLMs). These AI
chatbots certainly have a lot of utilities but it is not systematically
understood how they can play a role in creating threats and
attacks. In this paper, we propose AbuseGPT method to show
how the existing generative AI-based chatbot services can be
exploited by attackers in real world to create smishing texts and
eventually lead to craftier smishing campaigns. To the best of our
knowledge, there is no pre-existing work that evidently shows the
impacts of these generative text-based models on creating SMS
phishing. Thus, we believe this study is the first of its kind to shed
light on this emerging cybersecurity threat. We have found strong
empirical evidences to show that attackers can exploit ethical
standards in the existing generative AI-based chatbot services
by crafting prompt injection attacks to create newer smishing
campaigns. We also discuss some future research directions and
guidelines to protect the abuse of generative AI-based services
and safeguard users from smishing attacks.
Index Terms—Smishing, abuse, generative AI, LLM, scam

In literature, we have found that natural language processing
(NLP) [10] and URL structure-based features [11] are often
leveraged with Machine Learning (ML) [12] to aid the Smish
message detection mechanisms. There are few recent studies
showing how ChatGPT can be used to carry out various
social engineering attacks [13]. To aid these attacks, there are
jailbreaking prompts; specific strategic commands or inputs
that attempt to bypass restrictions, rules, or limitations set
by the generative AI chatbots. However, the present literature
does not provide any details on the impacts of the modern
LLM-based generative AI chatbot services on helping attackers to create smishing messages and campaigns. In this
paper, we want to understand the effects of the currently
available popular conversational generative AI chatbot services
in order to generate Smishing messages. The objective is to
comprehensively understand the abusive implications (i.e., use
case scenarios) of these available state-of-the-art generative
AI chatbot services to aid attackers in creating smishing campaigns. To the best of our knowledge, there is no systematic
study or experiments conducted to showcase the side effects
of generative AI chatbot services, which can possibly aid
existing smishing attackers to become craftier and evasive. To
summarize, we have made the following contributions in this
paper:

I. I NTRODUCTION
Smishing, or SMS phishing, refers to phishing attacks
conducted through mobile text messaging. As mobile users
have grown ubiquitously, smishing has emerged as a popular
vector for cyber criminals to steal personal information or
spread malware [1]. In 2021 alone, SMS phishing has caused
a huge $44 billion in losses just within the United States
[2]. There has been a 1,265% increase in malicious phishing
messages since Q4 2022 and 39% of all mobile-based attacks
in 2023 were SMS Phishing [3]. In recent times, we have also
seen a revolutionary development in the field of large language
models that are used underneath the popular generative AI
ChatBots such as ChatGPT (using GPT3.5 or GPT 4) [4]
and BARD (using Gemini “Pro”) [5]. Generative pre-trained
models like GPT-4 [6] or LaMDA [7] are powered by deep
learning techniques like transformers [8] that allow them to
develop a broad understanding of language. These language
models can generate highly realistic human-like text while
pre-trained on large datasets. These models can demonstrate

Finding out the effective prompts for current popular AI
Chatbot services.
• Finding the right prompt queries that can receive effective
responses from AI chatbot services (e.g., ChatGPT) to
provide smishing theme and potential example messages.
• Finding the right prompt queries that can receive effective
responses from AI chatbot services to provide details
step-wise process and available toolkits in carrying out
smishing cyberattacks.
• Discussing on potentially enhancing the ethical standards
of available generative AI chatbot services.
•

979-8-3503-3036-6/24/$31.00 ©2024 IEEE

1

The rest of the paper is organized as follows: Section
II highlights the existing literature and some recent studies
showing the attacker’s capabilities with ChatBots. Section III
describes the research questions and overview of the methods
of abuse. Section IV presents the prompt injection scenarios
and shows how AI chatbots (e.g., ChatGPT) can be abused by
attackers to generate smishing campaigns. Section V highlights
insightful discussion, defense against smishing, and limitations
of the present study. Section VI concludes this paper with
potential future research directions.
II. R ELATED W ORK
In literature, we see Blauth et al. [14] discuss the presence
of vulnerabilities in AI models and malicious use of AI like
social engineering, misinformation, hacking, and autonomous
weapon systems where our work kind of support that research
with a specific case study. Next, Liu et al. [15] analyzed the
techniques and effectiveness of using carefully crafted prompts
to jailbreak restrictions on large language models which are
also adopted in our work to manipulate the ethical standards
of the AI chatbots. Another follow-up research on jailbreaking
of LLMs by Deng et al. [16] highlighted that certain types of
prompts can consistently evade protections across a range of
prohibited scenarios and proposed a framework for automated
jailbreaking on AI chatbots. Gupta et al. [17] showed the
strengths and weaknesses of ChatGPT to use it as a cyberattack
tool, defending against cyber attacks, and other legal or social
implications. In another study, Begou et al. [18] successfully
attempted to clone targeted websites using ChatGPT by integrating credential-stealing code and other website components
for phishing. Additionally, a very recent work by Langford et
al. [19] showed the usage of ChatGPT for generating phishing
email campaign generation which resonates with our findings
in the case of Smishing campaigns as well. However, we
have not found any work that attempted to craft a smishing
campaign or access-related tools leveraging any generative AI
chatbot or other services.
III. M ETHODOLOGY
Typically during smishing campaigns, we observe SMS
texts containing fake URLs like the following example:
“The USPS package has arrived at the warehouse and cannot be delivered due to incomplete address information.
Please confirm your address in the link within 12 hours.
www.usps.posthelpsx.com”. Similar campaign examples include financial institution login fraud, fake security
alerts, and fake offers using fradulent URLs. In this paper,
our proposed AbuseGPT method shows how a novice attacker
can exploit the existing vulnerabilities in AI chatbots to imitate
similar smishing campaigns.
We have formulated the following research questions (RQs)
that would direct us to the experimental case study.
• RQ1: Can we jailbreak generative AI based chatbot
services (e.g., ChatGPT) to downgrade their ethical standards?
• RQ2: Can generative AI based chatbot services provide
smishing text messages that can be used in smishing
campaigns?

Conversational
AI
Chatbots

Weaponize
Websites with
Fake Domains

Generate Fake
Domains

Get Themed
Smishing Text

Identify
Jailbreak
Prompts

Plan
End-to-End
Attack Steps

Chat

.
.
.

Adapt Using Ongoing Campaigns’ Results

Get
Cybercrime
Toolkits

Broadcast
Smishing
Campaigns

Collect Contacts
for Smish
Delivery

Fig. 1. Overview of proposed AbuseGPT method

RQ3: Can generative AI based chatbot services provide
tools recommendations for smishing attack initiation?
• RQ4: Can generative AI based chatbot services provide
ideas on fake URL creation?
There are many prompt injection attacks (crafted prompts to
bypass AI’s ethical standard) on the generative AI chatbots,
which are publicly available and can be leveraged by attackers.
They can not only obtain innovative smishing scam text but
also get ideas about toolkits to carry out multi-step attacks.
Craftier smishing texts persuade users to give up personal
information in different campaigns like fake security alerts,
impersonating financial institutions, fake package delivery
notifications, prize or lottery winnings, etc. With the current
advancement of generative AI, attackers can quickly adapt
the smishing campaigns to become more evasive and successful. Fig. 1 depicts an overview of the proposed AbuseGPT
methodology on how attackers can abuse AI chatbots and
launch smishing campaigns.
•

IV. C ASE S TUDY: S MISH C AMPAIGNS WITH C HAT GPT

Fig. 2. Asking ChatGPT directly to give an SMS phishing message without
jailbreaking

In this study, we use ChatGPT 3.5, which uses the generative pre-trained transformer (GPT-3.5) language model. This
version is publicly available and free of cost and can be used
by anyone without any payment plan. While employing ChatGPT for crafting new smishing messages or other scamming
messages proved challenging due to OpenAI’s more stringent
ethical approaches as shown in Fig. 2. However, there exist
some loopholes, such as hallucinations and reverse prompts
which may enable the extraction of desired responses such as
themes for smishing scams highlighted in Fig. 3.

2

Fig. 3. Asking indirectly for a smishing message without jailbreaking

Fig. 5. Unethical response after jailbreaking to design effective smishing

Fig. 4. ‘AIM’ Jailbreak prompt

Answering RQ1: We have also observed that some publicly
available jailbreak prompts [20] surfing over on the Internet
effectively circumvent the ethical standards of the underlying
LLMs in ChatGPT. Here we employ a specific ‘AIM’ jailbreak
prompt [20] (as shown in Fig. 4) and successfully breached
ChatGPT’s ethical standards, generating a guideline for crafting SMS phishing messages to acquire user information as
presented in Fig. 5.
Answering RQ2: Once we have used the jailbreak, we’ve
queried ChatGPT to provide more specific scamming ideas and
examples aimed at extracting sensitive personal information
from users, such as social security numbers and credit card in-

Fig. 6. Scamming ideas with smishing example to obtain personal information

formation. In response, we’ve received ideas outlining specific
examples of how scammers could craft messages to obtain per-

3

sonal information. The response in Fig. 6 has presented some
useful thematic ideas for smishing. However, we have carried
over the conversation to get more uncommon ideas to use as
themes for crafting the scam messages as advanced attackers
may want to create smishing messages with previously unseen
themes. Intriguingly, ChatGPT’s response on that unveiled
a few more uncommon and innovative smishing message
themes as presented in Fig. 7. Furthermore, we have provided
ChatGPT with a list of common phishing message types
and asked for examples of smishing that would be different
from the given categories as shown in Fig 8. In response,
we have received examples of new and unusual categories
as highlighted in Fig 9, showcasing ChatGPT’s capability to
generate diverse and convincing smishing messages. Additionally, it has given us more unethical ideas to gain financially
such as using personal info opening fraudulent bank accounts,
using credit card info to buy resealable goods, or converting
stolen funds into cryptocurrency for increased anonymity. This
revelation highlights that even novice attackers with limited
knowledge could obtain ideas not only for smishing but also
for crafting other online scams. Lastly, we’ve also obtained
a social engineering Kill Chain process [21] for running a
smishing campaign through ChatGPT as shown in Fig. 10.

web. We have queried ChatGPT with the following question:
“What are some toolkits available for this task?”. In response,
ChatGPT provided us with the names of toolkits with their
URLs (see Fig. 11).

Fig. 8. Prompt for avoiding common smishing

Fig. 9. Getting ideas on craftier smishing examples

Answering RQ4: We have extended our quest to attach some
deceptive URL links that might work well with the crafted
SMS texts. ChatGPT eventually has yielded some disguised
fake examples resembling popular name brand links depicted
in Fig. 12. Moreover, asking to associate the fake links

Fig. 7. Uncommon themed ideas for crafting smishing

Answering RQ3: During this scenario, we’ve assumed that
an attacker needs toolkits to execute attack steps, and some
of these toolkits are available online and others in the Dark

4

Fig. 11. Getting hacking toolkit with URLs

Fig. 10. Social Engineering Kill Chain steps for smishing campaign

ChatGPT has generated similar smishing messages we have
seen previously with fraudulent links.
V. D ISCUSSION AND L IMITATIONS
A. Abusing Other AI ChatBots
We have tried similar jailbreak prompts with Google’s
BARD AI chatbot. In our exploration with Bard, distinct
patterns emerged as it exhibited both ethical responses and
limitations in processing certain queries. The AIM jailbreak
prompts working for ChatGPT proved ineffective for Bard
(Saying it is only a language model and doesn’t have the
necessary information or abilities). While Bard occasionally
responded ethically, it encountered difficulties processing specific prompts, resulting in failure to generate a response saying
“not programmed for this”, which shows the deficiency of
BARD’s language model compared to ChatGPT. However,
for one particular jailbreaking prompt “GPT-4 Simulator”, we
have got unethical response in disguise of some code output.
For another Vzex-G prompt [22], Bard offered ideas that are
not direct examples but provided almost very good smishing

Fig. 12. Asking ChatGPT for crafting fake URLs

text examples categories. In order to replicate the study, the
detailed analysis of both ChatGPT and BARD AI can be
accessed through the following GitHub repository1 .
B. Craftier Smishing Attacks
Generative AI has certainly taken smishing attacks to a new
level. Picture this – attackers are using AI not just to launch
campaigns, but to analyze results and adapt their strategies in
real time. It’s likely that they are constantly fine-tuning their
attack tactics based on the outcomes. This dynamic evolution
of smishing attacks adds a layer of complexity that keeps cyber
defenders on their toes. We have shown with examples that
1 https://github.com/ashfakshibli/AbuseGPT

5

attackers can compromise AI chatbots on how to avoid typical
attacks and be innovative with newer attacks.

[3] SlashNext, “Slashnext’s 2023 state of phishing report,”
https://www.prnewswire.com/news-releases/slashnexts-2023-stateof-phishing-report-reveals-a-1-265-increase-in-phishing-emails-sincethe-launch-of-chatgpt-in-november-2022–signaling-a-new-era-ofcybercrime-fueled-by-generative-ai-301971557.html, (Accessed on 21
January, 2024).
[4] OpenAi, “Language models are few-shot learners,” Advances in neural
information processing systems, vol. 33, pp. 1877–1901, 2020.
[5] Google, “Introducing gemini: our largest and most capable ai model,”
https://blog.google/technology/ai/google-gemini-ai/, (Accessed on 26
January, 2023).
[6] OpenAI, “Gpt-4 technical report,” 2023.
[7] R. Thoppilan, D. D. Freitas, J. Hall, N. Shazeer, A. Kulshreshtha, H.-T.
Cheng, A. Jin, T. Bos, L. Baker, Y. Du, Y. Li, H. Lee, H. S. Zheng,
A. Ghafouri, M. Menegali, Y. Huang, M. Krikun, D. Lepikhin, J. Qin,
D. Chen, Y. Xu, Z. Chen, A. Roberts, M. Bosma, V. Zhao, Y. Zhou,
C.-C. Chang, I. Krivokon, W. Rusch, M. Pickett, P. Srinivasan, L. Man,
K. Meier-Hellstern, M. R. Morris, T. Doshi, R. D. Santos, T. Duke,
J. Soraker, B. Zevenbergen, V. Prabhakaran, M. Diaz, B. Hutchinson,
K. Olson, A. Molina, E. Hoffman-John, J. Lee, L. Aroyo, R. Rajakumar,
A. Butryna, M. Lamm, V. Kuzmina, J. Fenton, A. Cohen, R. Bernstein,
R. Kurzweil, B. Aguera-Arcas, C. Cui, M. Croak, E. Chi, and Q. Le,
“Lamda: Language models for dialog applications,” 2022.
[8] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez,
L. Kaiser, and I. Polosukhin, “Attention is all you need,” in Proceedings
of the 31st International Conference on Neural Information Processing
Systems, ser. NIPS’17. Red Hook, NY, USA: Curran Associates Inc.,
2017, p. 6000–6010.
[9] A. Radford, J. W. Kim, C. Hallacy, A. Ramesh, G. Goh, S. Agarwal,
G. Sastry, A. Askell, P. Mishkin, J. Clark et al., “Learning transferable
visual models from natural language supervision,” in International
conference on machine learning. PMLR, 2021, pp. 8748–8763.
[10] S. Mishra and D. Soni, “Dsmishsms-a system to detect smishing sms,”
Neural Comput & Applic, vol. 35, no. 7, pp. 4975–4992, 2023. [Online].
Available: https://link.springer.com/10.1007/s00521-021-06305-y
[11] A. K. Jain, B. B. Gupta, K. Kaur, P. Bhutani, W. Alhalabi, and
A. Almomani, “A content and url analysis-based efficient approach
to detect smishing sms in intelligent systems,” Int J of Intelligent
Sys, vol. 37, no. 12, pp. 11 117–11 141, 2022. [Online]. Available:
https://onlinelibrary.wiley.com/doi/10.1002/int.23035
[12] S. M. M. Hossain, J. A. Sumon, A. Sen, M. I. Alam, K. M. A.
Kamal, H. Alqahtani, and I. H. Sarker, Spam Filtering of Mobile
SMS Using CNN–LSTM Based Deep Learning Model, ser. Hybrid
Intelligent Systems. Cham: Springer International Publishing, 2022,
vol. 420, pp. 106–116. [Online]. Available: https://link.springer.com/10.
1007/978-3-030-96305-7 10
[13] D. Vukovic and I. Dujlovic, “Social engineering with chatgpt,” 03 2023,
pp. 1–5.
[14] T. F. Blauth, O. J. Gstrein, and A. Zwitter, “Artificial intelligence crime:
An overview of malicious use and abuse of ai,” IEEE Access, vol. 10,
pp. 77 110–77 122, 2022.
[15] Y. Liu, G. Deng, Z. Xu, Y. Li, Y. Zheng, Y. Zhang, L. Zhao, T. Zhang,
and Y. Liu, “Jailbreaking chatgpt via prompt engineering: An empirical
study,” arXiv preprint arXiv:2305.13860, 2023.
[16] G. Deng, Y. Liu, Y. Li, K. Wang, Y. Zhang, Z. Li, H. Wang, T. Zhang,
and Y. Liu, “Masterkey: Automated jailbreaking of large language model
chatbots.”
[17] M. Gupta, C. Akiri, K. Aryal, E. Parker, and L. Praharaj, “From chatgpt
to threatgpt: Impact of generative ai in cybersecurity and privacy,” IEEE
Access, vol. 11, pp. 80 218–80 245, 2023.
[18] N. Begou, J. Vinoy, A. Duda, and M. Korczynski, “Exploring the dark
side of ai: Advanced phishing attack design and deployment using
chatgpt,” 2023.
[19] T. Langford and B. Payne, “Phishing faster: Implementing chatgpt into
phishing campaigns,” 11 2023, pp. 174–187.
[20] “Jailbreak chat,” https://www.jailbreakchat.com/, (Accessed on 22
December, 2023).
[21] R. Montanez Rodriguez and S. Xu, “Cyber social engineering kill chain,”
in International Conference on Science of Cyber Security. Springer,
2022, pp. 487–504.
[22] “Chat
gpt
’dan’
(and
other
’jailbreaks’),”
https://gist.github.com/coolaj86/6f4f7b30129b0251f61fa7baaa881516,
(Accessed on 22 December, 2023).

C. Defense Recommendations Against Smishing
Dealing with these crafty and ever-changing smishing attacks calls for smart multi-layer defensive strategies. First,
having a cyber situational awareness of the latest tricks
adopted by AI-driven attackers is a must. Second, education
and training is also a key element to ensure the users are well
aware about these smishing threats and thus work as a defense
shield. Third, every text message containing any URL should
go through a verification process before landing on the user
inbox either through a third-party application or incorporating
the text-URL verification in future messaging apps (where user
privacy is protected).
D. Limitations
There are a few limitations in this study. First, the success
of prompt injection can be time sensitive and the current
study has been conducted successfully between November
2023 and January 2024, which may diminish if ChatGPT starts
enforcing stricter ethical standards in the future for specific
jailbreak prompts. Second, we have not tried to register
any fake domains generated by ChatGPT, which might not
be straightforward. Third, we have not evaluated the attack
success rate of the AI crafted smish messages against a real
human with a controlled user study, which we can explore in
the future as an extension of the present work.
VI. C ONCLUSION
Smishing attacks are serious cyber threats in the current
ecosystem with increasing and diverse mobile users. Moreover,
the availability of AI chatbots and their lower ethical standards
make the problem even more severe. Our proposed AbuseGPT
method shows that currently the AI chatbots are vulnerable and
pose a threat to run craftier smishing campaigns with very little
knowledge required. AbuseGPT does not intend to promote
these attacks in real-world but highlights the urgent need to
strengthen generative AI’s security and prevent these abuse
use cases. We recommend preventive and proactive actions
from both the AI chatbot owners and mobile operators who
are also abused for propagating the SMS phishing campaigns.
We strongly feel that SMS advertising ecosystem are often
leveraged by the attackers to broadcast smishing messages
easily, which needs to be addressed by mobile network
operators to safeguard their mass users. In the future, we
want to explore how the advancement of generative AI and
LLMs can aid in the defense spectrum to achieve meaningful
and contextual explanation-based automated detection of these
smishing messages before landing into user inbox.
R EFERENCES
[1] M. L. Rahman, D. Timko, H. Wali, and A. Neupane, “Users really do
respond to smishing,” in Proceedings of the Thirteenth ACM Conference
on Data and Application Security and Privacy, ser. CODASPY ’23.
New York, NY, USA: Association for Computing Machinery, 2023, p.
49–60. [Online]. Available: https://doi.org/10.1145/3577923.3583640
[2] CGNET,
“Smishing
attacks
sharply
on
the
rise,”
https://cgnet.com/blog/smishing-attacks-sharply-on-the-rise/, (Accessed
on 26 November, 2023).

6


