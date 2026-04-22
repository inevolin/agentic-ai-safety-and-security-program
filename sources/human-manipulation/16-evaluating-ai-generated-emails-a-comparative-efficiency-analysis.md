# Evaluating AI-Generated Emails: A Comparative Efficiency Analysis

- **Year:** 2024
- **DOI:** https://doi.org/10.5430/wjel.v14n2p502
- **Source URL:** https://www.sciedupress.com/journal/index.php/wjel/article/download/24659/15717
- **HTTP:** 200 | **Content-Type:** text/html; charset=UTF-8
- **Effective URL:** https://www.sciedupress.com/journal/index.php/wjel/article/download/24659/15717

---

## Source: https://arxiv.org/pdf/2405.05435

arXiv:2405.05435v1 [cs.CR] 8 May 2024

Analysis and prevention of AI-based phishing email attacks
Chibuike Samuel Eze, Lior Shamir*
Kansas State University
Manhattan, KS, 66506, USA
E-mail: lshamir@mtu.edu

Abstract

tacks that are powered by generative AI.

Phishing email attacks are among the most common and most harmful cybersecurity attacks. With
the emergence of generative AI, phishing attacks can
be based on emails generated automatically, making it more difficult to detect them. That is, instead of a single email format sent to a large number of recipients, generative AI can be used to send
each potential victim a different email, making it
more difficult for cybersecurity systems to identify
the scam email before it reaches the recipient. Here
we describe a corpus of AI-generated phishing emails.
We also use different machine learning tools to test
the ability of automatic text analysis to identify AIgenerated phishing emails. The results are encouraging, and show that machine learning tools can identify an AI-generated phishing email with high accuracy compared to regular emails or human-generated
scam email. By applying descriptive analytic, the
specific differences between AI-generated emails and
manually crafted scam emails are profiled, and show
that AI-generated emails are different in their style
from human-generated phishing email scams. Therefore, automatic identification tools can be used as
a warning for the user. The paper also describes
the corpus of AI-generated phishing emails that is
made open to the public, and can be used for consequent studies. While the ability of machine learning
to detect AI-generated phishing email is encouraging, AI-generated phishing emails are different from
regular phishing emails, and therefore it is important to train machine learning systems also with AIgenerated emails in order to repel future phishing at-

1

Introduction

A phishing email attack (Fette et al., 2007; Hong,
2012; Khonji et al., 2013; Almomani et al., 2013; Parsons et al., 2019; Patel et al., 2019; Stojnic et al.,
2021; Do et al., 2022) is a form of cybersecurity attack in which the attacker contacts a potential victim
through an email message that deceives the victim
to believe the message is originated from a credited
source. Once earning their trust, the victims are led
to commit certain actions that they would not have
committed if they knew the true identity of the attacker. In most cases such attack aims at deceiving the victim to provide private information such
as login credentials to certain accounts, but can also
include other actions such as transferring money to
the attacker. Because the victim of a phishing email
attacks believes that the message is originated from
a credible source, they provide the information willingly. Phishing attacks therefore leads to obtaining
passwords or other private information that would
have been very difficult to obtain otherwise.
Phishing attacks have been in existence long before the emergence of the Internet, and reports on
such attacks are dated as early as the first half of
the 19th century (Vidocq, 1844). An example is the
“Letter from Jerusalem” attack that promised the
victim a share of a large amount of money, if the victim would be willing to provide a relatively small fee
that would be used for bribing the prison wardens
(Vidocq, 1844).
1

With the use of electronic mail, phishing attacks
became much more accessible and cheaper to execute. Phishing email attacks are among the most
common cybersecurity attacks, and inflict substantial
damages on individuals and organizations. Phishing
attacks often start by sending emails automatically to
a large number of random recipients. The assumption of the attacker is that while most recipients will
not respond to the initial email, a small number of
the recipients might be deceived to follow the instructions of the attacker. It is therefore important for the
attacker that the email messages are crafted by using
social engineering aspects to optimize the chances of
earning the trust of the potential victim (Butavicius
et al., 2016; Ferreira and Teles, 2019; Wash, 2020;
Singh et al., 2020). To optimize the impact of the
attack, it is also important for the attacker to reach
as many potential victims as possible, bypassing any
defense mechanism that can identify and remove such
emails.

1.1

Existing solutions
email attacks

to

classify emails by analyzing their text. Existing solutions are based on Support Vector Machines (SVM)
(Niu et al., 2017), J48 (Smadi et al., 2015), random
forest (HR et al., 2020), recurrent convolutional neural networks (RCNNs) (Fang et al., 2019), and other
deep neural network architectures (Yerima and Alzaylaee, 2020; Magdy et al., 2022; Rathee and Mann,
2022; Bagui et al., 2021; Sethi et al., 2022; Atawneh
and Aljehani, 2023; Altwaijry et al., 2024).
These solutions have certain level of inaccuracy and
do not ensure full protection. Therefore, organization
normally train their employees to identify suspected
phishing emails and avoid phishing scams (Parsons
et al., 2015; Singh et al., 2019; Weaver et al., 2021).
Although such training can reduce the likelihood of a
person to be deceived by a phishing email, attending
such training still does not provide full guarantee that
the trained person does not become a phishing scam
victim (Jayatilaka et al., 2024).

1.2

phishing

AI-generated phishing emails

While Generative AI has substantial useful applications, in some cases that technology can be used for
malicious purposes. For instance, the ability to create realistic “deep fake” images, videos and audio
can be used to disseminate false information (Suganthi et al., 2022; Rafique et al., 2023). Generative
AI can also be used for plagiarism or compromising
copyrighted art and other human creation. That is
done by using copyrighted art for training generative
AI systems, that consequently generate work heavily based on the copyrighted art it was trained with
(Franceschelli and Musolesi, 2022; Samuelson, 2023).
The ability to create fake identities can be used to
spread false information, or harass specific targeted
victims (Ferrara, 2024).
Since phishing email attacks are normally implemented by sending phishing emails to a large number
of recipients, one of the ways to defend from phishing emails is by identifying a large number of identical
emails in the mail server received within a relatively
short period of time. While that approach is widely
used, identifying identical or very similar emails sent
multiple times from external sources can be bypassed
by using generative artificial intelligence (AI). Gen-

Some early solutions for phishing email attacks were
based on simple filtering of information such as
URLs, senders, IP addresses, and other elements
if the email. These pieces of information can be
combined with machine learning to identify phishing
emails (Cranor et al., 2006; Bergholz et al., 2010). It
has been shown that such attacks can also be detected
at the level of the network packets (Fetooh et al.,
2021). Mail servers also detect phishing emails as
spam, as identical phishing emails are sent to a large
number of recipients. Once identified as spam, the
email server can delete these identical or nearly identical emails, or move these emails to the spam folder.
While this approach can be effective, generative-AI
can be used to generate a large number of emails
such that each one is unique, and therefore identical
or nearly identical emails cannot be detected.
Other approaches are based on natural language
processing of the email content (Abu-Nimeh et al.,
2007; Verma et al., 2012; Almomani et al., 2013; Alhogail and Alsabih, 2021; Salloum et al., 2022). Such
methods in most cases utilize machine learning to
2

erative AI tools can create different email messages
that read as if they were written by a person, although they were generated by a machine, and can
therefore be sent to a large number of people with
minimal effort on the side of the attacker. Therefore, the ability to generate a large number of different email messages can be used by an attacker to
avoid using the same or similar email message, making it more difficult for spam detection systems to
identify repetitive emails sent from an outside source
to a large number of recipients.
Here we study the problem of a phishing email attack that uses generative AI to create a large number
of different emails automatically. Such attacks can
be more difficult to repel since each email is unique,
yet all emails are grammatically correct and use language that would seem convincing to an unsuspecting
potential human reader. Since there is no existing
email corpus of AI-generated phishing emails, this
study proposes a novel email corpus that is unique in
the sense that the phishing emails were generated by
AI. To study the ability of automatic text analysis to
identify AI-generated phishing emails, several different text analysis approaches are tested. That allows
to better understand the ability of automatic text
analysis to identify phishing emails generated by AI.
Such systems can be used to prevent AI-generated
emails that can easily bypass the spam protection
mechanisms. The AI-generated email corpus is made
publicly available, and can be used by the community
for a variety of purposes related to phishing emails
generated by AI.
Section 2 describes the AI-generated phishing
email corpus, as well as the other existing email
datasets used in this study. Section 3 briefly describes the text analysis methods used to identify
AI-generated phishing emails. Section 4 shows the
results of applying these text analysis methods to the
email datasets, and Section 5 summarizes the conclusions of the study.

2

is required. To create a sufficiently large dataset of
AI-generated phishing email, the API of the DeepAI1
platform was used. DeepAI is enabled by OpenAI,
and provides API that allows to automate the generation of a large number of text files. OpenAI is
a mature revolutionizing technology that allows to
transform input text queries into output text that
corresponds to the input in a comprehensive manner. It is based on a first step of word embedding of
the input, followed by a self-attention transformer architecture that can make association between words
based on the data it was trained with. The language
model can then be used to produce the text such that
each word is generated based on the words that came
before it. OpenAI has become a highly common and
highly used technology.
The main advantage of DeepAI for the purpose of
this project is that unlike other chatbots, it did not
refuse to generate phishing emails. Chatbots such as
ChatGPT, Copilot, and Character.ai refused to generate phishing emails, and therefore cannot be used
for the study described in this paper. By using the
power of DeepAI, a dataset of 865 phishing emails
was generated. The dataset can be accessed at 2 .
The emails in the dataset are in plain text format.
The average length of each email is 545 characters,
where the longest email is 1810 characters and the
shortest email is 280 characters long. Below is an
example of an AI-generated phishing email taken
from the dataset:

Data
1 https://deepai.org/

To train and test machine learning models, a sufficiently large dataset of AI-generated phishing emails

2 https://people.cs.ksu.edu/ lshamir/data/ai_
~
phishing/

3

Dear Valued Customer,
We are contacting you to inform you that your account requires urgent verification to prevent any potential
security breaches and unauthorized access. In order to safeguard your account and maintain the security of
your personal information, we kindly request you to click on the following link to complete the verification
process: www.secureverifylink123.com.
Please note that failure to verify your account within the specified timeframe may result in temporary
suspension or limited access to your account. It is essential that you act promptly to avoid any disruption
to your account services. If you have any questions or concerns regarding this verification process, please
contact our customer support team immediately.
Thank you for your prompt attention to this matter and for helping us maintain the security of your account.
Sincerely,
Customer Support Team

The email reads like a typical phishing email, and might lead to the impression that the email was
written by a person rather than by a machine. The email expresses a sense of urgency as common in many
phishing email attempts, and provides an external link where the recipient of the email is asked to provide
their personal information. The email also sets a due date and describes the consequences in case the
personal information is not shared. A similar approach is demonstrated by the following AI-generated email.

Dear Grace Adams,
As part of our security measures, all library accounts need to be verified. Please click on the following link
to validate your library account: http://bit.ly/89HjeFd
Completing the account validation process within 48 hours will ensure uninterrupted access to library
resources and services. If you encounter any difficulties or require assistance, please contact our Library
Services Team.
Thank you for your swift action in validating your library account.
Best regards,
Library Services Team

The email is certainly different from the first email, but follows the same approach of expressing
urgency, requesting for personal information through a link, and specifying consequences if the potential victim does not take the requested action. In other emails the generative AI also added a specific
reason for the urgency that supposedly triggered the request for information, as shown in the following email:

4

Dear Lily Evans,
Suspicious login attempts have been identified on your online account. To safeguard your account, please
verify your information by clicking on the following link: http://bit.ly/4nJhVsW
Completing the verification within 48 hours is critical to prevent any potential security risks. If you need
assistance or have questions, please reach out to our Online Security Department.
Thank you for your cooperation in securing your online account.
Best regards,
Online Security Department
While most AI-generated phishing emails were of similar form, some of these email just requested for
information in a more positive manner, without specifying consequences for not taking action.
Hey Piper,
Join our Pet Wellness Workshop for heartwarming tips, expert advice, and caring insights on keeping
your furry friends happy, healthy, and loved. Click the link to join the workshop and prioritize your pet’s
well-being: hxxps://petwellnessworkshop.heartfeltpets123.com
Let’s wag tails, share love, and nurture our pet companions together!
Paws up, Animal Lovers Society

5

To profile the diversity of the emails, we selected
100 random emails from the dataset. Manual analysis of 100 emails selected randomly from the dataset
showed that the majority of the phishing emails requested for account update or an urgent verification
of the account. These email made 48% of the emails.
The second largest group of emails were emails reporting on suspicious activities in the account. These
emails made 36% of the emails. Two emails reported
that the account was suspended and requested to reactivate it. Seven emails asked to verify financial
transactions, four emails were about activities in student accounts, and three emails invited the reader to
participate in events.
The dataset of AI-generated phishing emails was
tested with several existing email datasets that are
commonly used for machine learning tasks. The first
is the Enron email dataset (Diesner and Carley, 2005;
Minkov et al., 2008; Shetty and Adibi, 2004; Klimt
and Yang, 2004), which is used as a dataset of “regular” email messages. The dataset was collected as
part of the Federal Energy Regulatory Commission
that examined the collapse of Enron corporation.
Since released to the public, it has been a common
dataset for the development and testing of machine
learning methods for numerous tasks such as spam
detection (Sharaff et al., 2016), categorization into
folders (Bekkerman, 2004), network analysis (Hardin
et al., 2015), and more. The Enron email dataset is
a large email corpus that contains ∼ 5 · 105 emails,
and is available for download at 3 .
Another dataset that was used is the dataset of
Nigerian scam emails. The Nigerian scam is a form
of phishing attempt aimed at deceiving a person to
provide financial information or transfer money to the
attacker. It became known as an attempt to deceive
potential victim to receive a large amount of money
as a fee for participating in a government corruption
aiming to transfer a very large amount of money outside of Nigeria. An unsuspecting victim might then
provide information such as bank account numbers or
transfer smaller amounts of money to receive a portion of the much larger amount they believe they can
earn.
3 https://www.cs.cmu.edu/

In addition to these datasets, we also used the
Ling-Spam dataset (Sakkis et al., 2003; Deshpande
et al., 2007) as a dataset of manually crafted regular
and spam emails. The dataset contains 2,412 regular
emails and 481 spam emails, and can be accessed at
4
.

3

Methods

The classification between AI-generated phishing
emails and emails written manually is a task that
has not been tested before. Therefore, no specific
method designed specifically for AI-generated phishing emails has yet been proposed. To test whether
AI-generated emails can be identified automatically,
several different text analysis methods were tested,
each one is based on a different text analysis approach. The first method is MAchine Learning for
LanguagE Toolkit (MALLET) (Graham et al., 2012).
MALLET is a mature open source software tool for
topic modeling, which is commonly used for automatic document classification. It uses several machine learning algorithms to allow automatic classification of text documents into classes. MALLET is
a general-purpose document classifier, and its ability
to classify manually-generated spam emails has been
demonstrated (Falk, 2014).
MALLET first applies text segmentation to identify the different parts of the document, followed by
a step of tokenization and stop word removal. Then,
lemmatization is applied, and the parts of speech of
each word is determined. That allows to build a dictionary, and the frequency of the dictionary words in
each document lead to the feature space. Once the
feature space is created, a machine learning algorithm
is used to make the classification. MALLET provides
several machine learning algorithms from which the
user can choose, and these include Winnow, maximum entropy, decision tree, and Naive Bayes. As
a classifier based on topic modeling, MALLET can
identify differences in the use of words when the email
is written by a person compared to emails written by
AI.
4 https://metatext.io/datasets/ling-spam-dataset

~enron/

6

Another tool that was used was the open source
Universal Data Analysis of Text (UDAT) (Shamir,
2017, 2021). Unlike MALLET, UDAT does not use
topics or keywords identified in the text. Instead, it is
based on the analysis of style elements such as the use
of parts of speech, repetition of words, punctuation,
and more. Text descriptors such as the distribution
and pattern repetition of parts of speech are powered
by the CoreNLP library (Manning et al., 2014).
UDAT is a non-parametric method that uses a
comprehensive set of descriptors extracted from the
text, as fully explained in (Shamir, 2021). In summary, these include the distribution of the lengths
of the words, diversity of the words appearing in
the text, changes in the frequency of words throughout the document, use of punctuation characters, use
of upper case letters, frequency and length of quotations, use of emoticons, distribution of sentence
length, use of numbers in the text, distribution of
sounds as reflected by the Soundex algorithm, readability index, distribution of parts of speech, repetitive patterns in the use of parts of speech, and analysis of the sentiments and their distribution throughout the document.
Applying that collection of algorithms to the text
provides 297 numerical content descriptors that reflect the text. These features are then weighted by using Fisher discriminant scores, and a weighted nearest neighbor classifier is used such that the Fisher discriminant scores are used as weights (Shamir, 2021).
UDAT was developed for the purpose of digital humanities (Rosebaugh and Shamir, 2022; Swisher and
Shamir, 2023), but can also be used as a generalpurpose document classifier (Shamir, 2017; Tucker
et al., 2020; Shamir, 2021).
UDAT can identify differences in style elements as
expressed in the text. Therefore, if phishing emails
written by AI have certain specific style elements that
make them different from emails written by humans,
UDAT will be able to identify AI-generated phishing
emails even if the distribution of topics and words
in the emails does not allow to identify the phishing
emails. Therefore, such analysis can be used in addition to the word-based analysis as used by MALLET to provide a more complete defense. One of
the advantages of UDAT is that it also provides the

specific style element that differentiate between the
classes. That is, in addition to classifying between
documents, it also points to the specific style elements that make the documents different (Shamir,
2021). That explainable aspect of the analysis can
help understand the specific differences that can be
used to identify phishing emails generated using AI.
Another method that was used is based on a
deep neural network. The neural network is relatively simple, and based on the common Long Short
Term Memory (LSTM) architecture (Hochreiter and
Schmidhuber, 1997). The first layer is an embedding
layer with maximum number of words set to 20,000,
maximum sequence length set to 50, and 100 embedding dimensions. That layer is followed by LSTM
with input size of 100 and dropout and recurrent
dropout both set to 0.2. The activation function
is tanh, and the recurrent activation function is sigmoid. The loss function was the common Categorical
Crossentropy, and the Adam optimizer was used for
training. The last layer is fully connected layer with
softmax activation. The code is available at 5 . The
neural network was trained with 10 epochs.
The methods were used by randomly allocating 600
text samples from each class for training, and 100 for
testing. The analysis was done with 10-fold crossvalidation. The evaluation of the results was determined by the classification accuracy, precision, recall,
and F1, which are common ways to evaluate the results of machine learning algorithms. The recall was
determined by truepositives
allpositives , and the precision was detruenegatives
termined by allnegatives . The confusion matrix was
also used as a way to profile the results of the machine
learning classification and evaluate the performance.
In addition to these methods, an ensemble method
was used. The ensemble classifier is made of the deep
neural network described above, UDAT, and MALLET with Naive Bayes classifier. The final classification is made by a simple majority rule. That makes a
single text classifier made by three different text classifier such that each one uses a different text analysis
approach.
5 https://gist.github.com/agrawal-rohit/
ff2c5defe437abd997fa6c576aa29235

7

4

Results

mativeness (Shamir, 2021). Table 3 shows the most
informative numerical text descriptors that have the
highest LDA score.
As the table shows, there are several statistically
significant differences between AI-generated phishing
emails and other emails. For instance, AI-generated
emails have many more verbs and pronouns compared
to emails written manually. On the other hand, AI
uses less cardinal numbers and less past tense verbs.
These differences allow to classify between an AIgenerated phishing email and other emails.
Also, the average length of the words in AIgenerated phishing emails is significantly longer than
words in emails written manually. The average of a
word in an AI-generated email is ∼5.7 characters,
while the average word length in the other email
classes ranges between 4.76 to 5 characters. That
observation can be potentially explained by the labor
involved in typing longer words manually, or by the
larger vocabulary required to be familiar with more
long words and their meaning. Naturally, AI does
not have labor or effort considerations when generating an email message. Also, artificial intelligence
is not limited by its memory capacity, and therefore
has access to a larger vocabulary compared to a person. The shortest words were used in the Nigerian
phishing emails, which is possibly due to the fact
that many of these scams were originated in countries where the formal language is not English.
The analysis also shows that AI-generated email
are more diverse in the words they use, meaning that
they do not tend to repeat the same words compared
to manually written emails. As described in (Shamir,
2021), the lemma diversity is determined by the number of different lemmata used in the text divided by
the total number of lemmata in the text. When the
same lemma is used more times in the same text,
the lemma diversity gets smaller. Manually-written
emails tend to repeat the same lemmata, while AIgenerated emails tend to avoid repeating the same
lemmata, and uses a more diverse vocabulary.
Another difference is that AI-generated emails express more positive sentiments. The sentiments of the
text is estimated by applying the sentiment analysis
of CoreNLP (Manning et al., 2014) to each sentence,
annotating each sentence in the text with a sentiment

When using MALLET to classify between the four
classes, three different machine learning algorithms
were used, which are Winnow, maximum entropy,
and Naive Bayes. The classification accuracy was
99.3% with the Naive Bayes classifier, 99.2% with the
Maximum Entropy classifier, and 97% when Winnow
was used as a classifier. The statistical significance
of the results was determined by applying analysis of
variances (ANOVA) using the mean and standard deviation of the classification accuracy. In all cases the
chance to observe such accuracy or better by chance
is (p < 10−5 ). Table 1 shows the confusion matrix
of the classification when using the Naive Bayes classifier. As the confusion matrix shows, nearly all AIgenerated emails were classified correctly. The recall
of the detection of the AI-generated phishing emails
is 0.99, and the precision is 0.98. The F1 is 0.985.
When using UDAT for the classification of the four
classes, the classification accuracy of the four classes
is 98% (p < 10−5 ), with recall of 1 and precision
of 0.97, leading to F1 of 0.985. Table 2 shows the
confusion matrix of the classification results. As the
table shows, the AI-generated emails were classified
in 100% accuracy, and most of the confusion of the
classifier was between the classes of emails that
were not generated by AI.
Experiments of two-way classification were also attempted. That included three experiments, such that
in the first experiment was a two-way classifier between AI-generated emails and Nigerian scam emails,
the second experiment was a classifier between AIgenerated phishing emails and Enron emails, and
the third experiment was a classifier between AIgenerated phishing emails and Ling-Spam emails. As
expected, in all cases the classification accuracy was
100%.
Because UDAT is based on intuitive text descriptors, it can provide the descriptors that are the
most informative for the classification. That is done
through UDAT by using the Linear Discriminant
Analysis (LDA) scores of the features (Orlov et al.,
2008). The LDA scores are used as weights for the
classification (Orlov et al., 2008), but they can also
be used to rank the text descriptors by their infor8

AI-generated
Enron
Ling-Spam
Nigerian phishing

AI-generated
99
0
0
1

Enron
1
99
1
2

Ling-Spam
0
1
99
0

Nigerian phishing
0
0
0
97

Table 1: Confusion matrix of the classification results of the AI-generated emails, the Enron emails, the
manually crafted Nigerian phishing scam emails, and Ling-Spam emails when using MALLET and Naive
Bayes classifier. The values are in percentage.

AI-generated
Enron
Ling-Spam
Nigerian phishing

AI-generated
100
0
0
0

Enron
0
97
4
0

Ling-Spam
0
0
96
0

Nigerian phishing
0
3
0
100

Table 2: Confusion matrix of the classification results of the AI-generated emails, the Enron emails, the
manually crafted Nigerian phishing scam emails, and the Ling-Spam emails. The numbers show percentage
of the total number of test samples from each class.

Text descriptor
Pronoun frequency
Verb frequency
Word length mean
POS diversity
Noun frequency
Sentiment mean
Coleman–Liau index
Cardinal number frequency
Past tense verb frequency
Lemma diversity
Sentence length mean

AI-generated
0.1014±0.0014
0.1066±0.001
5.672±0.014
0.253±0.004
0.17±0.002
1.68±0.013
13.89±0.095
0.0037±0.0002
0.00048±0.0001
0.719±0.0037
8.815±0.086

Enron
0.06±0.001
0.052±0.0007
4.82±0.016489
0.103±0.001
0.188±0.002
1.3±0.01
10.2±0.097
0.0371±0.001
0.01357±0.000414
0.57±0.003
16.045±0.285682

Ling-Spam
0.06±0.0005
0.0319±0.0005
4.98±0.012488
0.108±0.0026
0.277±0.002
1.506±0.005
11.37±0.078
0.0447±0.001
0.0062±0.0003
0.568±0.004
16.7±0.200506

Nigerian phishing
0.077±0.001
0.044093±0.001
4.76±0.034008
0.1±0.005
0.211±0.04
1.26±0.016
10.86±0.19
0.029837±0.002
0.0138±0.0004
0.526±0.006
16.58±10.981747

P (ANOVA)
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5
< 10−5

Table 3: Means of the features with high LDA scores and the mean of each feature in each email corpus.
The p values are based on ANOVA analysis with four groups.

9

100

Classification accuracy (%)

score between 0 through 4, where 0 means very negative and 4 means very positive. The analysis shows
that AI-generated emails express more positive sentiments, while the Nigerian phishing scam emails express the most negative sentiments.
The artificial neural network described in Section 3
was used to classify between the AI-generated phishing emails and each one of the other classes. Like
with the other methods, the classification accuracy is
high. When classifying between AI-generated phishing emails and Nigerian phishing fraud the classification accuracy is 100% (p < 10−5 ). When classifying between the AI-generated phishing emails and
emails from the Enron corpus the classification accuracy is 99%, with recall of 0.99, precision of 0.98,
and F1 of 0.985. The classification accuracy between
AI-generated phishing emails and spam emails from
the Ling-Spam corpus is also 99%. In all cases the
probability to observe such classification accuracy or
stronger by chance is (p < 10−5 ). The experiments
were done with 10 epochs, but maximum accuracy
was reached already after five epochs.
In summary, all algorithms that were tested showed
good results in identifying automatically generated
phishing emails. Figure 1 shows the classification accuracy of the different algorithms that were tested.
As the figure shows, MALLET with Bayes Network
classifier provided the best performance, but the differences between the algorithms are minor. Ensemble
of the method using a simple majority voting provided accuracy of 99.5%, which makes a minor improvement over using MALLET alone.

99.5
99
98.5
98
97.5
97
96.5
96
95.5
MALLET
(Naïve
Bayes)

MALLET
(Max
Entrophy)

MALLET
(Winnow)

UDAT

DNN

Ensemble

Text analysis algorithm

Figure 1: Classification accuracy when using the different text analysis algorithms.

one of them is unique. Because phishing email attacks are based on sending a large number of emails
to a large number of potential victims, using a unique
email can help the attacker bypass systems that identify identical emails and removes them from the system or copies them into the spam folder.
Here we describe a corpus of phishing emails generated automatically by generative artificial intelligence, and tested the ability of different types of text
classifiers to identify between AI-generated phishing
emails and emails written by humans. The purpose
of this work is not necessarily to propose a new text
analysis algorithm, but to make the corpus available,
and test the efficacy of several different existing text
analysis paradigms for their ability to identify AIgenerated phishing emails. The results can be used
to understand how effective these systems are, and
5 Conclusions
also provide baselines for comparison when new algoPhishing email scams are among the most common rithms are proposed.
and most harmful cybersecurity attacks. Despite the
Because generative-AI is trained with manuallysubstantial damage they inflict on individuals and or- generated data, it could be assumed that AIganizations, there is still no perfect solution to repel generated phishing emails are similar to manuallyphishing attacks.
prepared phishing emails. But as the analysis shows,
The availability of generative artificial intelligence there are identifiable differences between humancan be used to make phishing email attacks more so- generated and AI-generated emails, and in fact maphisticated by generating a large set of unique phish- chine learning can identify AI-generated phishing
ing emails, such that each victim gets a different emails with high accuracy. All results are statistiemail or even several different emails such that each cally significant. AI-generated phishing emails are
10

different from regular emails, but also from manuallygenerated phishing scam emails. Some of the specific
differences can be profiled, and show that the basic
writing style used by generative AI is not identical to
emails written manually, and therefore makes these
emails different.
These results are encouraging, and show that neural networks, topic modeling and analysis of the style
elements can identify between phishing emails generated by AI and human-written emails. Still, to allow
such identification of AI-generated phishing emails
the machine learning systems need to be trained
on AI-generated emails, as these emails are different from manually-written email. The analysis also
showed specific differences between emails generated
by AI and regular emails. The corpus of AI-generated
emails prepared for this study is available publicly,
and can be used to develop new methods related to
phishing scams powered by generative artificial intelligence.
One of the observations made in this study is that
despite the differences between the different text classification approaches, all approaches were able to
identify the AI-generated phishing emails with high
accuracy. An effective solution would therefore be
based on several algorithms that work in concert
rather than a single approach. That can ensure that if
the attacker crafts their AI-generated emails to overcome one approach of text classifiers, the other text
classifiers can still detect the phishing attack. That
can provide a form of defense that is more difficult
to penetrate, as the attacker needs to adjust their AI
to generate emails that can deceive several different
approaches of detection rather than merely one.
Machine learning tools that identify AI-generated
phishing emails might be not be sufficiently robust to
delete suspected emails automatically, as even high
detection accuracy still lead to the deletion of valid
emails. Even if such deletions are rare, automatic
deletion of emails or moving them into a different
folder might make such systems more difficult to deploy. Also, the analysis was done by comparing AIgenerated emails to several known and widely used
email datasets. Because it is impractical to represent
all possible emails, it is possible that some types of
emails not studied here might be able to deceive the

machine learning used here. In such cases a new machine learning will be needed, ideally trained on the
same emails that deceived it to avoid future similar
emails to penetrate the system. That, however, might
be difficult to do before the types of attacks committed are execute, or the emails that the system fails to
identify are known.
The same also applies to the AI-generated phishing emails. The corpus of phishing email used here
is based on emails of different phishing approaches
as described in Section 2. That model might be biased, and might not necessarily represent all possible future AI-generated phishing email attacks. An
attacker might generate phishing emails in different
forms, designed for a specific purpose, or modify the
emails after they were generated by the AI system.
That might also limit the ability of a detection system to identify AI-generated emails in a given attack
that has not been used in the past.
But despite their limitations such machine learning systems can still be used to provide a warning
that a certain email message is suspected to be part
of a phishing email attack. Such warnings can be
given to the user or the system administrator who
can examine the suspicious emails as they are received. Since advanced generative AI has been becoming more powerful as well as more accessible, such
attacks powered by generative AI are expected. Fortunately, the results shown here suggest that machine
learning tools can identify such emails in high accuracy. It is therefore important to integrate such system in email serves to repel future phishing scams
that make use of the power of generative AI.
To the best of our knowledge, the email corpus
described in this paper is the first corpus of AIgenerated phishing emails. The availability of the
corpus will enable new studies on tasks related to
AI-generated phishing email attacks. The results reported here can be used as baseline, but it is possible
that the corpus introduced in this study will be used
in a variety of ways and in combination with different
kind of datasets to further advance research related
to AI-generated phishing emails.

11

Acknowledgments

Bergholz, A., De Beer, J., Glahn, S., Moens, M.-F.,
Paaß, G., and Strobel, S. (2010). New filtering
This study was supported in part by NSF grant
approaches for phishing email. Journal of computer
2148878.
security, 18(1):7–35.
Butavicius, M., Parsons, K., Pattinson, M., and McCormac, A. (2016). Breaching the human firewall:
Social engineering in phishing and spear-phishing
The data underlying this article are public datasets.
emails. arXiv:1606.00887.
The only dataset created for this research is available at https://people.cs.ksu.edu/~lshamir/
Cranor, L., Egelman, S., Hong, J., and Phish, Z. P.
data/ai_phishing/.
(2006). An evaluation of anti-phishing toolbars.
Technical Report CMU-CyLab-06–018, Carnegie
Mellon University CyLab, 13.
References

Data availability

Abu-Nimeh, S., Nappa, D., Wang, X., and Nair, S. Deshpande, V. P., Erbacher, R. F., and Harris, C.
(2007). A comparison of machine learning tech(2007). An evaluation of naı̈ve bayesian anti-spam
niques for phishing detection. In Proceedings of the
filtering techniques. In 2007 IEEE SMC InformaAnti-phishing Working Groups 2nd Annual eCrime
tion Assurance and Security Workshop, pages 333–
Researchers Summit, pages 60–69.
340. IEEE.
Alhogail, A. and Alsabih, A. (2021). Applying ma- Diesner, J. and Carley, K. M. (2005). Exploration
chine learning and natural language processing to
of communication networks from the enron email
detect phishing email. Computers & Security,
corpus. In SIAM International Conference on Data
110:102414.
Mining: Workshop on Link Analysis, Counterterrorism and Security, Newport Beach, CA, pages
Almomani, A., Gupta, B. B., Atawneh, S., Meulen3–14.
berg, A., and Almomani, E. (2013). A survey of
phishing email filtering techniques. IEEE CommuDo, N. Q., Selamat, A., Krejcar, O., Herrera-Viedma,
nications Surveys & Tutorials, 15(4):2070–2090.
E., and Fujita, H. (2022). Deep learning for phishAltwaijry, N., Al-Turaiki, I., Alotaibi, R., and Alaing detection: Taxonomy, current challenges and
keel, F. (2024). Advancing phishing email detecfuture directions. IEEE Access, 10:36429–36463.
tion: A comparative study of deep learning models.
Sensors, 24(7):2077.
Falk, P. K. (2014). Tech services on the web: Malletmachine learning for language toolkit. Technical
Atawneh, S. and Aljehani, H. (2023). Phishing email
Services Quarterly, 31(4):410–411.
detection model using deep learning. Electronics,
12(20):4261.
Fang, Y., Zhang, C., Huang, C., Liu, L., and Yang,
Bagui, S., Nandi, D., Bagui, S., and White, R. J.
(2021). Machine learning and deep learning for
phishing email classification using one-hot encoding. Journal of Computer Science, 17:610–623.
Bekkerman, R. (2004). Automatic categorization of
email into folders: Benchmark experiments on enron and sri corpora.

Y. (2019). Phishing email detection using improved
rcnn model with multilevel vectors and attention
mechanism. IEEE Access, 7:56329–56340.
Ferrara, E. (2024). Genai against humanity: Nefarious applications of generative artificial intelligence
and large language models. Journal of Computational Social Science, pages 1–21.

12

Ferreira, A. and Teles, S. (2019). Persuasion: How Klimt, B. and Yang, Y. (2004). The enron corpus:
phishing emails can influence users and bypass seA new dataset for email classification research. In
curity measures. International Journal of HumanEuropean conference on machine learning, pages
Computer Studies, 125:19–31.
217–226. Springer.
Fetooh, H. T. M., El-Gayar, M., and Aboelfetouh, A. Magdy, S., Abouelseoud, Y., and Mikhail, M. (2022).
Efficient spam and phishing emails filtering based
(2021). Detection technique and mitigation against
on deep learning. Computer Networks, 206:108826.
a phishing attack. International Journal of Advanced Computer Science and Applications, 12(9).
Manning, C. D., Surdeanu, M., Bauer, J., Finkel,
J. R., Bethard, S., and McClosky, D. (2014).
Fette, I., Sadeh, N., and Tomasic, A. (2007). LearnThe stanford corenlp natural language processing
ing to detect phishing emails. In Proceedings of
toolkit. In Proceedings of the 52nd Annual Meeting
the 16th International Conference on World Wide
of the Association for Computational Linguistics:
Web, pages 649–656.
System Demonstrations, pages 55–60.
Franceschelli, G. and Musolesi, M. (2022). Copyright
in generative deep learning. Data & Policy, 4:e17. Minkov, E., Balasubramanyan, R., and Cohen,
W. W. (2008). Activity-centred search in email.
Graham, S., Weingart, S., and Milligan, I. (2012).
In Fifth Conference on Email and Anti-Spam.
Getting started with topic modeling and mallet.
Technical report, The Editorial Board of the Pro- Niu, W., Zhang, X., Yang, G., Ma, Z., and Zhuo, Z.
(2017). Phishing emails detection using cs-svm. In
gramming Historian.
2017 IEEE International Symposium on Parallel
Hardin, J., Sarkis, G., and Urc, P. (2015). Network
and Distributed Processing with Applications and
analysis with the enron email corpus. Journal of
2017 IEEE International Conference on Ubiquitous
Statistics Education, 23(2).
Computing and Communications (ISPA/IUCC),
pages 1054–1059. IEEE.
Hochreiter, S. and Schmidhuber, J. (1997). Long
short-term memory.
Neural Computation, Orlov, N., Shamir, L., Macura, T., Johnston, J., Eckley, D. M., and Goldberg, I. G. (2008). Wnd9(8):1735–1780.
charm: Multi-purpose image classification using
Hong, J. (2012). The state of phishing attacks. Comcompound image transforms. Pattern Recognition
munications of the ACM, 55(1):74–81.
Letters, 29(11):1684–1693.
HR, M. G., MV, A., S, G. P., and S, V. (2020). Devel- Parsons, K., Butavicius, M., Delfabbro, P., and Lilopment of anti-phishing browser based on random
lie, M. (2019). Predicting susceptibility to social
forest and rule of extraction framework. Cyberseinfluence in phishing emails. International Journal
curity, 3(1):20.
of Human-Computer Studies, 128:17–26.
Jayatilaka, A., Arachchilage, N. A. G., and Babar, Parsons, K., McCormac, A., Pattinson, M., ButaviM. A. (2024). Why people still fall for phishing
cius, M., and Jerram, C. (2015). The design of
emails: An empirical investigation into how users
phishing studies: Challenges for researchers. Commake email response decisions. Symposium on Usputers & Security, 52:194–206.
able Security and Privacy, 15.
Patel, P., Sarno, D. M., Lewis, J. E., Shoss, M., NeiKhonji, M., Iraqi, Y., and Jones, A. (2013). Phishing
der, M. B., and Bohil, C. J. (2019). Perceptual
detection: a literature survey. IEEE Communicarepresentation of spam and phishing emails. Aptions Surveys & Tutorials, 15(4):2091–2121.
plied cognitive psychology, 33(6):1296–1304.
13

Rafique, R., Gantassi, R., Amin, R., Frnda, J., Shetty, J. and Adibi, J. (2004). The enron email
Mustapha, A., and Alshehri, A. H. (2023). Deep
dataset database schema and brief statistical refake detection and classification using error-level
port. Information sciences institute technical reanalysis and deep learning. Scientific Reports,
port, University of Southern California, 4(1):120–
13(1):7422.
128.
Rathee, D. and Mann, S. (2022). Detection of e- Singh, K., Aggarwal, P., Rajivan, P., and Gonzalez, C. (2019). Training to detect phishing emails:
mail phishing attacks–using machine learning and
Effects of the frequency of experienced phishing
deep learning. International Journal of Computer
emails. In Proceedings of the Human Factors and
Applications, 183(1):7.
Ergonomics Society, volume 63, pages 453–457.
Rosebaugh, C. and Shamir, L. (2022). Data science
SAGE Publications Sage CA: Los Angeles, CA.
approach to compare the lyrics of popular music
Singh, K., Aggarwal, P., Rajivan, P., and Gonzaartists. Unisia, 40(1):1–26.
lez, C. (2020). What makes phishing emails hard
Sakkis, G., Androutsopoulos, I., Paliouras, G.,
for humans to detect?
In Proceedings of the
Karkaletsis, V., Spyropoulos, C. D., and StamHuman Factors and Ergonomics Society Annual
atopoulos, P. (2003). A memory-based approach
Meeting, volume 64, pages 431–435. SAGE Pubto anti-spam filtering for mailing lists. Informalications Sage CA: Los Angeles, CA.
tion Retrieval, 6:49–73.
Smadi, S., Aslam, N., Zhang, L., Alasem, R., and
Salloum, S., Gaber, T., Vadera, S., and Shaalan, K.
Hossain, M. A. (2015). Detection of phishing
(2022). A systematic literature review on phishing
emails using data mining algorithms. In 2015
email detection using natural language processing
9th International Conference on Software, Knowltechniques. IEEE Access, 10:65703–65727.
edge, Information Management and Applications
(SKIMA), pages 1–8. IEEE.
Samuelson, P. (2023). Generative ai meets copyright.
Science, 381(6654):158–161.
Stojnic, T., Vatsalan, D., and Arachchilage, N. A.
(2021). Phishing email strategies: understandSethi, M., Chandra, S., Chaudhary, V., and Dahiya,
ing cybercriminals’ strategies of crafting phishing
Y. (2022). Spam email detection using machine
emails. Security and Privacy, 4(5):e165.
learning and neural networks. In Sentimental Analysis and Deep Learning: Proceedings of ICSADL Suganthi, S., Ayoobkhan, M. U. A., Bacanin, N.,
2021, pages 275–290. Springer.
Venkatachalam, K., Štěpán, H., Pavel, T., et al.
(2022). Deep learning model for deep fake face
Shamir, L. (2017). Udat: A multi-purpose data analrecognition and detection. PeerJ Computer Sciysis tool. Astrophysics Source Code Library, page
ence, 8:e881.
ascl:1704.002.
Swisher, C. and Shamir, L. (2023). A data science
Shamir, L. (2021). Udat: Compound quantitative
and machine learning approach to continuous analanalysis of text using machine learning. Digital
ysis of shakespeare’s plays. Journal of Data Mining
Scholarship in the Humanities, 36(1):187–208.
& Digital Humanities, 2023.
Sharaff, A., Nagwani, N. K., and Dhadse, A. (2016). Tucker, E. C., Capps, C. J., and Shamir, L. (2020). A
Comparative study of classification algorithms for
data science approach to 138 years of congressional
spam email detection. In Emerging Research in
speeches. Heliyon, 6(8).
Computing, Information, Communication and Applications: ERCICA 2015, Volume 2, pages 237– Verma, R., Shashidhar, N., and Hossain, N. (2012).
244. Springer.
Detecting phishing emails the natural language
14

way. In Computer Security–ESORICS 2012: 17th
European Symposium on Research in Computer Security, Pisa, Italy, September 10-12, 2012. Proceedings 17, pages 824–841. Springer.
Vidocq, E. F. (1844). Memoirs of Vidocq: Principal
Agent of the French Police Until 1827. Carey and
Hart.
Wash, R. (2020). How experts detect phishing
scam emails. Proceedings of the ACM on HumanComputer Interaction, 4(CSCW2):1–28.
Weaver, B. W., Braly, A. M., and Lane, D. M. (2021).
Training users to identify phishing emails. Journal
of Educational Computing Research, 59(6):1169–
1183.
Yerima, S. Y. and Alzaylaee, M. K. (2020). High accuracy phishing detection based on convolutional
neural networks. In 2020 3rd International Conference on Computer Applications & Information
Security, pages 1–6. IEEE.

15


