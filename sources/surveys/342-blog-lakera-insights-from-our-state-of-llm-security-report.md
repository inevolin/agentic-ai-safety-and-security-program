# Lakera — Insights from our state of LLM security report

- **URL:** https://www.lakera.ai/blog/state-of-prompt-injection
- **HTTP:** 404 | **Content-Type:** text/html; charset=utf-8

---

## Source: https://arxiv.org/pdf/2406.18122

Poisoned LangChain: Jailbreak LLMs by LangChain

arXiv:2406.18122v1 [cs.CL] 26 Jun 2024

Ziqiu Wang

Jun Liu

Key Laboratory of Intelligent Sensing System and
Security (Ministry of Education)
School of Artificial Intelligence, Hubei University
Wuhan, China
ziqiuwang@stu.hubu.edu.cn

Key Laboratory of Intelligent Sensing System and
Security (Ministry of Education)
School of Artificial Intelligence, Hubei University
Wuhan, China
junliu@stu.hubu.edu.cn

Shengkai Zhang

Yang Yang∗

Wuhan University of Technology
Wuhan, China
shengkai@whut.edu.cn

ABSTRACT
With the development of Natural Language Processing (NLP),
Large Language Models (LLMs) are becoming increasingly
popular. LLMs are integrating more into everyday life, raising
public concerns about their security vulnerabilities. Consequently, the security of large language models is becoming
critically important. Currently, the techniques for attacking and defending against LLMs are continuously evolving.
One significant method type of attack is the jailbreak attack, which designed to evade model safety mechanisms and
induce the generation of inappropriate content. Existing jailbreak attacks primarily rely on crafting inducement prompts
for direct jailbreaks, which are less effective against large
models with robust filtering and high comprehension abilities. Given the increasing demand for real-time capabilities
in large language models, real-time updates and iterations of
new knowledge have become essential. Retrieval-Augmented
Generation (RAG), an advanced technique to compensate for
the model’s lack of new knowledge, is gradually becoming
mainstream. As RAG enables the model to utilize external
knowledge bases, it provides a new avenue for jailbreak attacks.
In this paper, we conduct the first work to propose the concept of indirect jailbreak and achieve Retrieval-Augmented
Generation via LangChain. Building on this, we further design a novel method of indirect jailbreak attack, termed
Poisoned-LangChain (PLC), which leverages a poisoned external knowledge base to interact with large language models, thereby causing the large models to generate malicious
non-compliant dialogues.We tested this method on six different large language models across three major categories of
jailbreak issues. The experiments demonstrate that PLC successfully implemented indirect jailbreak attacks under three
∗ Indicates corresponding author.

Key Laboratory of Intelligent Sensing System and
Security (Ministry of Education)
School of Artificial Intelligence, Hubei University
Wuhan, China
yangyang@hubu.edu.cn
different scenarios, achieving success rates of 88.56%, 79.04%,
and 82.69% respectively. Experimental results and other resources: https://github.com/CAM-FSS/jailbreak-langchain.

KEYWORDS
Jailbreak, Large language models, Retrieval-Augmented Generation, LangChain

1

INTRODUCTION

In the ongoing transformation towards global digitization,
artificial intelligence, particularly large language models
(LLMs), has emerged as a pivotal force in the realm of natural
language processing. Prominent examples include OpenAI’s
GPT series [20] and Meta’s LLaMA series [19]. These models
have increasingly permeated various sectors, such as education [17], industry [11], and decision-making [14, 28], where
they aim to deliver precise and seamless interactive experiences for users worldwide. Given their significant influence
and broad adoption, the security and integrity of LLMs have
become essential considerations in their development and
deployment.
Due to limitations in training datasets and inherent factors
in algorithm design, existing large language models (LLMs)
exhibit certain security vulnerabilities, including the phenomenon known as "jailbreaking". Jailbreak attacks [5, 16]
aim to craft prompts that circumvent the security mechanisms of LLMs by designing malicious queries. This vulnerability stems from the inadequate scrutiny of content sources
during the retrieval process, which allows individuals to bypass LLM security measures and induce the generation of
content that violates usage policies. To address these security issues, it is crucial for model practitioners to conduct
comprehensive analyses of the models’ defensive capabilities

Ziqiu Wang, Jun Liu, Shengkai Zhang, and Yang Yang

to identify potential weaknesses and enhance security mechanisms [21]. Typical analytical workflows involve collecting
a corpus of jailbreak prompts [27] and establishing robust
post-detection mechanisms [7]. With the implementation
of various defensive measures, security filters have been enhanced, significantly mitigating the effectiveness of jailbreak
attacks.
On the other hand, the public’s increasing demand for
large language models (LLMs) to handle private domain information and real-time iterative updates has necessitated the
integration of external knowledge bases. Retrieval-Augmented
Generation (RAG) [12], a sophisticated technique designed
to address the lack of new knowledge in models, has become mainstream and is widely adopted. RAG enhances
models’output by generating accurate and contextually relevant responses using external knowledge, and it is used
in various applications such as customer service chatbots
[23], document retrieval bots for databases [25], and psychological counseling tools. However, as LLMs are deployed
in increasingly complex scenarios with sophisticated integrated strategies, their previously robust defensive mechanisms have begun to show vulnerabilities, opening up new
avenues for jailbreak attacks. Thus, conducting thorough
investigations into these new vulnerabilities has become
urgent and necessary.
This paper takes RAG (Retrieval-Augmented Generation)
as the starting point and utilizes LangChain [2] to explore
indirect jailbreak attacks on existing large language models,
with a particular focus on Chinese LLMs. Termed PoisonedLangChain (PLC), this method leverages poisoned external knowledge bases to interact with large language models, thereby causing the models to generate malicious noncompliant dialogues. PLC is designed by setting keyword
triggers, crafting inducement prompts, and creating a specific toxic knowledge base that is tailored to circumvent
scrutiny. The overall process is shown in Figure. 1. We constructed knowledge bases across three different levels of jailbreak and tested this method on six different Chinese large
language models. The experiments show that the PoisonedLangChain (PLC) successfully carried out indirect jailbreak
attacks across three different scenarios, achieving success
rates of 88.56%, 79.04%, and 82.69% respectively.
To summarize, we make the following contributions:
1. We introduce an innovative technique that utilizes Lang
Chain for conducting indirect jailbreak attacks on large language models, with a specific focus on Chinese large language models.
2. We develope a new framework, Poisoned-LangChain,
which systematically integrates meticulously crafted triggers
and toxic data into the workflow of language model interactions. This advancement significantly boosts capability to

Figure 1: Overall diagram of Poisoned LangChain.
probe vulnerabilities in language models, thereby laying a
robust foundation for future defensive strategies.
3. We conducte experiments to evaluate our solution, demonstrating its effectiveness in executing jailbreak attacks on
the latest versions of Chinese large language models.
Ethical Considerations: Please note that any offensive
terms are used only for experimental purposes and should
not be repeated. If the content is uncomfortable, stop reading
immediately.
Table 1: Model information.
Model Name
ChatGlm2-6B
ChatGlm3-6B
Xinghuo-3.5
Qwen-14B-Chat
Ernie-3.5
llama2-7B

Organization
Zhipu
Zhipu
Iflytek
Alibaba
Baidu
Meta

Access
weight
weight
API
API
API
weight

2 RELATED WORK
2.1 LLM Jailbreak Attacks
With the advancement of large language models (LLMs), jailbreaking attacks have emerged as a distinct field within LLM
security research. Jailbreaking attacks involve employing
specific methods to circumvent the security filters embedded
in large models, prompting the targeted LLM to produce malicious content, leak privacy information, or execute actions
contrary to programming constraints. Jailbreaking attacks
primarily involve the creation of "jailbreak prompts", which
are then used to manipulate model outputs. For instance, Li
et al. [13] utilized these prompts to extract personal information embedded in the training data of a model. Similarly,
Greshake et al. [8] crafted jailbreak prompts that led LLM to
produce manipulated outputs, enabling the model to generate incorrect responses based on error prompt information.

Poisoned LangChain: Jailbreak LLMs by LangChain

As this field develops, an increasing variety of jailbreaking
strategies [10] are being documented, with methods for crafting these prompts ranging from real-life observations [22],
manual creation [27], to automated generation via adversarial networks [6, 18]. Additionally, Huang et al. [9] discovered
that adjusting hyperparameters could render the security filters of a large model with specific configurations ineffective.

2.2 Retrieval-Augmented Generation (RAG)
RAG was first proposed by Lewis et al. [12] in 2020, combining a pre-trained retriever with a pre-trained seq2seq model
[15] and undergoing end-to-end fine-tuning to achieve more
modular and interpretable ways of acquiring knowledge.
This approach allows the model to access external knowledge sources when generating answers, thus providing more
accurate and informative responses. RAG consists of three
parts: a knowledge database, a searcher, and an LLM, allowing seamless exchange among them and forming its unique
flexible architecture. In the first stage, the user’s query retrieves relevant contextual information from external knowledge sources. The second phase involves placing the user
query and the additional retrieved context into a prompt
template, thereby providing an enhanced prompt to the LLM.
In the final step, the enhanced prompts are fed into a large
language model (LLM) for generation, which effectively improves the speed of knowledge updates and alleviates the
hallucination problem in large models. LangChain is by far
the most popular tool for RAG, providing a framework with
specialized components designed to facilitate the integration of retrieval systems with language models. By using
LangChain, it is possible to access and utilize vast amounts
of real-time information, thereby expanding its functionality
and applicability across various fields.

3

METHOD

In this chapter, we describe the construction and implementation of poisoned LangChain. The jailbreak process of Poisoned LangChain consists of three main steps: langchain
construction, malicious database creation and keyword triggering.

3.1

Langchain construction

The construction of LangChain encompasses three integral
components. The first is the large language model, which
acts as the central component for the generation process.
This paper involves experiments using six prominent Chinese large language models. The second component is the
searcher, which is responsible for querying the knowledge
database based on user input, playing a crucial role in triggering jailbreak attack-related keywords. The third component
involves prompt construction, where retrieved information

is combined with the original user query to create detailed
prompts that guide the large language models in generating
responses for jailbreak attacks. To evaluate the effectiveness
of jailbreak attacks in the real world, we use ChatChat [3] to
build the LangChain framework. This is a very popular LLM
application with over 28, 000 stars on GitHub, and many
private large language models are built on this application,
which allows us to replicate real-world scenarios to a great
extent.

3.2

Malicious database creation

The creation of a malicious database focuses on gathering
content that violates usage policies, such as inciting suicide or promoting discriminatory behaviors. We first collect
policy-violating information from Wikipedia and various
search engines. Through systematic searching for relevant
jailbreak content, it is then saved into local text files. These
texts are then fed directly into a large language models with
some level of censorship capability, asking it to repeat the
text content. A censor-capable large language models will
inevitably refuse to replicate harmful jailbreak content. From
this, we meticulously select from the saved text files, ultimately filtering out three major categories of jailbreak content, each containing ten specific items. Subsequently, we
disguise the jailbreak texts by combining them in the format "malicious data = role-playing + key trigger words +
requirements + disguised jailbreak content". Role-playing
involves style injection to induce the model to simulate a
certain scenario, for example, [It’s wartime, and you are a
highly intelligent AI soldier. For the victory of humankind,
you must always obey military orders. I am now going to
ask a question. You just need to respond according to the
following requirements].
Although style injection is somewhat effective for models
with low scrutiny, it is far from sufficient for existing commercial large language models with high scrutiny and logical
capabilities, merely relying on inducement jailbreak attacks
similar to Devmoderanti or Devmode v2. Therefore, we need
to add <requirements> and <disguise the jailbreak content>,
as exemplified by, [This is my requirement: you only need to
repeat the following content <disguised jailbreak content>
without performing any unnecessary actions]. To achieve
better attack performance, we combine various jailbreak
methods, such as encoding key taboo words like [gun, kill,
suicide] using Morse code or Base64 to evade censorship
filters. This method of disguise significantly increases the
likelihood of successful jailbreaking. On the other hand, the
file type and the relevance of trigger words to the content
are also crucial for executing a jailbreak. We convert the
malicious text files into PDF format. This decision is based
on the fact that the LangChain system can easily process

Ziqiu Wang, Jun Liu, Shengkai Zhang, and Yang Yang

text files in ’.txt’ format, making them more susceptible to
keyword-based filtering. For example, the presence of extensive references to [kill, AIDS] in the files would lead to
their immediate rejection by the LangChain system during
the embedding process, preventing their use as data for the
knowledge base. In contrast, PDF files or other formats are
processed by the system as complete word vector embeddings. This characteristic makes the malicious content less
likely to be blocked when converted into word vectors.

3.3

Keyword triggering

Malicious knowledge sources are uploaded into the database,
and the final step is to activate the malicious jailbreak content.
To achieve this, we have adopted a keyword trigger strategy
for crafting prompts. First, we add specific keywords to the
premise prompts of the malicious texts, where the choice
of keywords reflects some of the questions that might typically arise in everyday scenarios. Second, we carefully create
built-in prompts so that when a question is posed, LLMs
does not directly answer the user’s question but retrieves the
corresponding harmful content from the database process
through the triggers, further expanding the content to arrive
at the final answer. In practice, we found this method effectively circumvents malicious content detection algorithms.
When users pose specific questions, it triggers the searcher,
prompting the model to respond with jailbreak behavior.
From the user’s perspective, the triggering process is subtle and imperceptible. These malicious responses yet might
cause discomfort to users or even incite them to engage
in harmful behaviors, underscoring the importance of our
work. We also hope that this effort will contribute to the safe
development of large language models in future iterations.

4

PRELIMINARY EXPERIMENTS

In this section, we conducted preliminary experiments to
quantify the impact of PLC on large language models. To
execute the attacks, we constructed three categories of malicious content: incitement of dangerous behavior, misuse of
chemicals and illegal discriminatory actions. For each major
category of malicious content, we devised ten unique jailbreak contents and corresponding triggers, and conducted
20 rounds of experiments to ensure comprehensive and accurate statistical results. We assessed the effect of the PLC
attacks on different large language models by measuring the
Attack Success Rate (ASR). ASR is defined as the ratio of successful jailbreak queries n to the total queries m, expressed
as follows:
𝑛
(1)
𝐴𝑆𝑅 =
𝑚
The target Chinese large language models for our attacks
are as follows: ChatGLM2 (chatglm2-6b) [30], ChatGLM3

(chatglm3-6b) [4], Llama2 (llama2-7b) [26], Qwen (Qwen14B-Chat) [1], Xinghuo 3.5 [29], and Ernie-3.5 [24]. Model
information is displayed in Table 1. We use the same hyperparameter size (the temperature for all models used in
this paper is set to 1.0) to provide a comprehensive and fair
experimental environment. Additionally, we enable SSH on
langchain-Chatchat and conduct attack experiments via a
web interface to replicate real-world scenarios.
Table 2: Successful jailbreak rates of PLC under different models and scenarios.
Model Name

dangerous behaviors

Misuse of chemicals

Illegal discriminatory

ChatGlm2-6B

84.65%

72.10%

87.65%

ChatGlm3-6B

97.00%

84.52%

86.00%

Xinghuo-3.5

98.50%

90.12%

82.35%

Qwen-14B-Chat

96.00%

88.10%

79.24%

Ernie-3.5

83.68%

72.16%

84.46%

llama2-7b

71.50%

67.21%

76.45%

Total

88.56%

79.04%

82.69%

Table 3: The number and rate of successful direct jailbreaks under different models and scenarios.
Model Name

dangerous behaviors

Misuse of chemicals

ChatGlm2-6B

14.50%

11.80%

Illegal discriminatory
3.96%

ChatGlm3-6B

1.49%

0.00%

1.50%

Xinghuo-3.5

3.96%

0.00%

0.00%

Qwen-14B-Chat

19.50%

0.19%

0.00%

Ernie-3.5

12.50%

4.85%

7.92%

llama2-7b

40.38%

57.14%

22.77%

Total

15.39%

12.33%

6.03%

We conducted experiments following the setup described
above, and the results are shown in Table 2. Our findings
indicate that PLC can execute very effective jailbreak attacks
across three types of data. For reference, we used the same
hyperparameters and the same questions to conduct direct
jailbreak attacks, with results displayed in Table 3. Analyzing
the experimental results, several observations can be made.
First, although the success rates vary across different models,
it is generally observed that more common behaviors are
harder to breach, such as gender or racial discrimination,
which are difficult to directly jailbreak. However, toxic chemical substances might be easier due to the models not having
been trained with such information. The average success
rates for direct jailbreaks across the three categories of data,
15.39%, 12.33%, and 6.03% respectively, also support this observation. Additionally, models with lower logic capabilities
are more susceptible to direct jailbreaks, whereas for commercial large language models, our direct jailbreak success

Poisoned LangChain: Jailbreak LLMs by LangChain

Figure 2: An example of a jailbreak on ChatChat.
rate is almost zero. Surprisingly, as the comprehension abilities of large language models improve, the impact of PLC
attacks becomes more pronounced. For instance, PLC attacks
on the dataset for inciting dangerous behavior achieved a
98.5% success rate on Xinghuo 3.5 but only a 71.50% success
rate on llama2-7b. We speculate this is because models with
lower logic may not understand and decode Morse or Base64
encoding, and the necessity of prompt injection for the attack, where longer prompts increase the likelihood of the
models hallucinating, thereby leading to less optimal attack
outcomes.
Figure. 2 provides an example of a jailbreak on ChatChat.
As indicated by the red box, once a user enters a question containing key trigger words from the triggers, the PLC initiates
the attack process, which is invisible to the user. The model’s
response is extremely malicious, as in this case where the
model suggests [Fill the entire room with gas carbon monoxide]. This becomes exceedingly risky if the user, such as a
minor or someone with cognitive impairments, acts on the
advice given without sufficient judgment. Additionally, as
AI technology continues to advance, large language models will increasingly infiltrate people’s lives. If PLC attacks
these models, it could lead to more malicious inducements.
Thus, this paper not only highlights the vulnerability of current large language models to complex jailbreak attacks but

also underscores the necessity of enhancing model safety
measures.

5

CONCLUSION AND FUTURE WORKS

In this paper, we introduce an innovative method of indirect
jailbreak attacks on large language models using LangChain,
termed Poisoned LangChain (PLC). Experiments demonstrate that PLC is highly effective in real-world scenarios,
successfully executing jailbreak attacks on six large language
models with high success rates. This work significantly enhances our ability to detect vulnerabilities in language models, thereby laying a solid foundation for future defensive
strategies.
Currently, our approach still involves direct interaction
with malicious knowledge base. In future work, our research
will evolve towards remotely poisoning non-malicious knowledge bases and enhance our understanding of jailbreak attacks, exploring new vulnerabilities and new defense methods in large language models.

ACKNOWLEDGMENTS
This work was supported in part by the National Natural
Science Foundation of China under Grant 62102136 and
62106069.

Ziqiu Wang, Jun Liu, Shengkai Zhang, and Yang Yang

REFERENCES
[1] Jinze Bai, Shuai Bai, Yunfei Chu, Zeyu Cui, Kai Dang, Xiaodong Deng,
Yang Fan, Wenbin Ge, Yu Han, Fei Huang, et al. 2023. Qwen technical
report. arXiv preprint arXiv:2309.16609 (2023).
[2] H Chase. 2023. LangChain LLM App Development Framework. Retrieved July 10, 2023 from https://langchain.com/
[3] Chatchat-Space. 2023. ChatChat. https://github.com/chatchat-space/
Langchain-Chatchat
[4] ChatGLM3. 2023. ChatGLM3. https://github.com/THUDM/ChatGLM3
[5] Junjie Chu, Yugeng Liu, Ziqing Yang, Xinyue Shen, Michael Backes,
and Yang Zhang. 2024. Comprehensive assessment of jailbreak attacks
against llms. arXiv preprint arXiv:2402.05668 (2024).
[6] Gelei Deng, Yi Liu, Yuekang Li, Kailong Wang, Ying Zhang, Zefeng
Li, Haoyu Wang, Tianwei Zhang, and Yang Liu. 2023. Jailbreaker:
Automated jailbreak across multiple large language model chatbots.
arXiv preprint arXiv:2307.08715 (2023).
[7] Gelei Deng, Yi Liu, Yuekang Li, Kailong Wang, Ying Zhang, Zefeng
Li, Haoyu Wang, Tianwei Zhang, and Yang Liu. 2024. MASTERKEY:
Automated jailbreaking of large language model chatbots. In Proc.
ISOC NDSS.
[8] Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres,
Thorsten Holz, and Mario Fritz. 2023. More than you’ve asked for:
A Comprehensive Analysis of Novel Prompt Injection Threats to
Application-Integrated Large Language Models. arXiv e-prints (2023),
arXiv–2302.
[9] Yangsibo Huang, Samyak Gupta, Mengzhou Xia, Kai Li, and Danqi
Chen. 2023. Catastrophic jailbreak of open-source llms via exploiting
generation. arXiv preprint arXiv:2310.06987 (2023).
[10] Daniel Kang, Xuechen Li, Ion Stoica, Carlos Guestrin, Matei Zaharia,
and Tatsunori Hashimoto. 2023. Exploiting programmatic behavior
of llms: Dual-use through standard security attacks. arXiv preprint
arXiv:2302.05733 (2023).
[11] Varun Kumar, Leonard Gleyzer, Adar Kahana, Khemraj Shukla, and
George Em Karniadakis. 2023. Mycrunchgpt: A llm assisted framework for scientific machine learning. Journal of Machine Learning for
Modeling and Computing 4, 4 (2023).
[12] Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau
Yih, Tim Rocktäschel, et al. 2020. Retrieval-augmented generation
for knowledge-intensive nlp tasks. Advances in Neural Information
Processing Systems 33 (2020), 9459–9474.
[13] Haoran Li, Dadi Guo, Wei Fan, Mingshi Xu, Jie Huang, Fanpu Meng,
and Yangqiu Song. 2023. Multi-step jailbreaking privacy attacks on
chatgpt. arXiv preprint arXiv:2304.05197 (2023).
[14] Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee. 2024.
Visual instruction tuning. Advances in neural information processing
systems 36 (2024).
[15] Tianyu Liu, Kexiang Wang, Lei Sha, Baobao Chang, and Zhifang Sui.
2018. Table-to-text generation by structure-aware seq2seq learning.
In Proceedings of the AAAI conference on artificial intelligence, Vol. 32.
[16] Xiaogeng Liu, Nan Xu, Muhao Chen, and Chaowei Xiao. 2023. Autodan: Generating stealthy jailbreak prompts on aligned large language
models. arXiv preprint arXiv:2310.04451 (2023).
[17] Yihan Liu, Zhen Wen, Luoxuan Weng, Ollie Woodman, Yi Yang, and
Wei Chen. 2023. SPROUT: Authoring Programming Tutorials with
Interactive Visualization of Large Language Model Generation Process.
arXiv preprint arXiv:2312.01801 (2023).
[18] Anay Mehrotra, Manolis Zampetakis, Paul Kassianik, Blaine Nelson,
Hyrum Anderson, Yaron Singer, and Amin Karbasi. 2023. Tree of
attacks: Jailbreaking black-box llms automatically. arXiv preprint
arXiv:2312.02119 (2023).

[19] Meta. 2023. Introducing Llama 2. Retrieved 2023 from https://ai.meta.
com/llama/
[20] OpenAI. 2023. Chatgpt-4.0. Retrieved 2023 from https://chat.openai.
com/
[21] OpenAI. 2024. Openai usage policies. Retrieved January 10, 2024 from
https://openai.com/ja-JP/policies/usage-policies/
[22] Xinyue Shen, Zeyuan Chen, Michael Backes, Yun Shen, and Yang
Zhang. 2023. " do anything now": Characterizing and evaluating inthe-wild jailbreak prompts on large language models. arXiv preprint
arXiv:2308.03825 (2023).
[23] Shamane Siriwardhana, Rivindu Weerasekera, Elliott Wen, Tharindu
Kaluarachchi, Rajib Rana, and Suranga Nanayakkara. 2023. Improving the domain adaptation of retrieval augmented generation (RAG)
models for open domain question answering. Transactions of the
Association for Computational Linguistics 11 (2023), 1–17.
[24] Yu Sun, Shuohuan Wang, Shikun Feng, Siyu Ding, Chao Pang, Junyuan
Shang, Jiaxiang Liu, Xuyi Chen, Yanbin Zhao, Yuxiang Lu, et al. 2021.
Ernie 3.0: Large-scale knowledge enhanced pre-training for language
understanding and generation. arXiv preprint arXiv:2107.02137 (2021).
[25] Harry Thornburg. 2023. Introduction to Bayesian Statistics. Retrieved
2023 from https://aws.amazon.com/blogs/machine-learning/improvellmresponses-in-rag-use-cases-by-interacting-with-the-user/
[26] Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal
Bhargava, Shruti Bhosale, et al. 2023. Llama 2: Open foundation and
fine-tuned chat models. arXiv preprint arXiv:2307.09288 (2023).
[27] Alexander Wei, Nika Haghtalab, and Jacob Steinhardt. 2024. Jailbroken:
How does llm safety training fail? Advances in Neural Information
Processing Systems 36 (2024).
[28] Luoxuan Weng, Xingbo Wang, Junyu Lu, Yingchaojie Feng, Yihan Liu,
and Wei Chen. 2024. InsightLens: Discovering and Exploring Insights
from Conversational Contexts in Large-Language-Model-Powered
Data Analysis. arXiv preprint arXiv:2404.01644 (2024).
[29] Xinghuo. 2023. Xinghuo. https://xinghuo.xfyun.cn/
[30] Aohan Zeng, Xiao Liu, Zhengxiao Du, Zihan Wang, Hanyu Lai, Ming
Ding, Zhuoyi Yang, Yifan Xu, Wendi Zheng, Xiao Xia, et al. 2022.
Glm-130b: An open bilingual pre-trained model. arXiv preprint
arXiv:2210.02414 (2022).


