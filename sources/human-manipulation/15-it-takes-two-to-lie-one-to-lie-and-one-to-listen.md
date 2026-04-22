# It Takes Two to Lie: One to Lie, and One to Listen

- **Year:** 2020
- **DOI:** https://doi.org/10.18653/v1/2020.acl-main.353
- **Source URL:** https://doi.org/10.18653/v1/2020.acl-main.353
- **HTTP:** 200 | **Content-Type:** text/html; charset=utf-8
- **Effective URL:** https://aclanthology.org/2020.acl-main.353/

---

## Source: https://aclanthology.org/2020.acl-main.353.pdf

It Takes Two to Lie: One to Lie, and One to Listen
Denis Peskov, Benny Cheng
Cristian Danescu-Niculescu-Mizil
Ahmed Elgohary, Joe Barrow
Information Science
Computer Science, University of Maryland
Cornell University
{dpeskov, bcheng96, elgohary, jdbarrow}@umd.edu cristian@cs.cornell.edu
Jordan Boyd-Graber
iSchool, Language Science, UMIACS, LSC
University of Maryland
jbg@umiacs.umd.edu

Abstract

Message

Trust is implicit in many online text
conversations—striking up new friendships,
or asking for tech support. But trust can
be betrayed through deception. We study
the language and dynamics of deception
in the negotiation-based game Diplomacy,
where seven players compete for world
domination by forging and breaking alliances
with each other. Our study with players from
the Diplomacy community gathers 17,289
messages annotated by the sender for their
intended truthfulness and by the receiver
for their perceived truthfulness.
Unlike
existing datasets, this captures deception in
long-lasting relationships, where the interlocutors strategically combine truth with lies to
advance objectives. A model that uses power
dynamics and conversational contexts can
predict when a lie occurs nearly as well as
human players.

1

Sender’s
intention

If I were lying to you, I’d smile
and say “that sounds great.” I’m
Lie
honest with you because I sincerely thought of us as partners.
You agreed to warn me of unexpected moves, then didn’t
. . . You’ve revealed things to Truth
England without my permission,
and then made up a story about
it after the fact!
. . . I have a reputation in this
hobby for being sincere. Not being duplicitous. It has always Lie
served me well. . . . If you don’t
want to work with me, then I can
understand that . . .
(Germany attacks Italy)

Introduction

A functioning society is impossible without trust.
In online text interactions, users are typically
trusting (Shneiderman, 2000), but this trust can
be betrayed through false identities on dating
sites (Toma and Hancock, 2012), spearphishing
attacks (Dhamija et al., 2006), sockpuppetry (Kumar et al., 2017) and, more broadly, disinformation campaigns (Kumar and Shah, 2018). Beyond
such one-off antisocial acts directed at strangers,
deception can also occur in sustained relationships,
where it can be strategically combined with truthfulness to advance a long-term objective (Cornwell
and Lundgren, 2001; Kaplar and Gordon, 2004).
We introduce a dataset to study the strategic use
of deception in long-lasting relationships. To collect reliable ground truth in this complex scenario,
we design an interface for players to naturally generate and annotate conversational data while playing a negotiation-based game called Diplomacy.

Receiver’s
percep.
Truth

Truth

Truth

Well this game just got less fun

Truth

Truth

For you, maybe

Truth

Truth

Table 1: An annotated conversation between Italy
(white) and Germany (gray) at a moment when their relationship breaks down. Each message is annotated by
the sender (and receiver) with its intended or perceived
truthfulness; Italy is lying about . . . lying. A full transcript of this dialog is available in Appendix, Table 9.

These annotations are done in real-time as the players send and receive messages. While this game
setup might not directly translate to real-world situations, it enables computational frameworks for
studying deception in a complex social context
while avoiding privacy issues.
After providing background on the game of
Diplomacy and our intended deception annotations
(Section 2), we discuss our study (Section 3). To
probe the value of the resulting dataset, we develop
lie prediction models (Section 4) and analyze their
results (Section 5).

3811
Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 3811–3854
July 5 - 10, 2020. c 2020 Association for Computational Linguistics

Diplomacy

The Diplomacy board game places a player in the
role of one of seven European powers on the eve
of World War I. The goal is to conquer a simplified map of Europe by ordering armies in the field
against rivals. Victory points determine the success of a player and allow them to build additional
armies; the player who can gain and maintain the
highest number of points wins.1 The mechanics
of the game are simple and deterministic: armies,
represented as figures on a given territory, can only
move to adjacent spots and the side with the most
armies always wins in a disputed move. The game
movements become publicly available to all players
after the end of a turn.
Because the game is deterministic and everyone
begins with an equal amount of armies, a player
cannot win the game without forming alliances
with other players—hence the name of the game:
Diplomacy. Conquering neighboring territories depends on support from another player’s armies. After an alliance has outlived its usefulness, a player
often dramatically breaks it to take advantage of
their erstwhile ally’s vulnerability. Table 1 shows
the end of one such relationship. As in real life,
to succeed a betrayal must be a surprise to the victim. Thus, players pride themselves on being able
to lie and detect lies. Our study uses their skill
and passion to build a dataset of deception created
by battle-hardened diplomats. Senders annotate
whether each message they write is an ACTUAL
LIE and recipients annotate whether each message
received is a SUSPECTED LIE. Further details on
the annotation process are in Section 3.1.
2.1

A game walk-through

Figure 1 shows the raw counts of one game in our
dataset. But numbers do not tell the whole story.
We analyze this case study using rhetorical tactics (Cialdini and Goldstein, 2004), which Oliveira
et al. (2017) use to dissect spear phishing e-mails
and Anand et al. (2011) apply to persuasive blogs.
Mentions of tactics are in italic (e.g., authority);
context for quotes in Appendix, Table 7. For the
rest of the paper, we will refer to players via the
name of their assigned country.
1

In the parlance of Diplomacy games, points are “supply
centers” in specific territories (e.g., London). Having more
supply centers allows a player to build more armies and win
the game by capturing more than half of the 34 supply centers
on the board.

100
75
50
25
0

Count

2

6
4
2
0
100
75
50
25
0
30
20
10
0

Deceived their Victim

Victim Caught a Lie

Victim Fell for Lie

Victory Points

'01'02'03'04'05'06'07'08'09'10

Turn (Year)

Austria
England
France

Germany
Italy
Russia

Turkey

Figure 1: Counts from one game featuring an Italy
(green) adept at lying but who does not fall for others’
lies. The player’s successful lies allow them to gain
an advantage in points over the duration of the game.
In 1906, Italy lies to England before breaking their relationship. In 1907, Italy lies to everybody else about
wanting to agree to a draw, leading to the large spike in
successful lies.

Through two lie-intense strategies—convincing
England to betray Germany and convincing all remaining countries to agree to a draw—Italy gains
control of the board. Italy’s first deception is a
plan with Austria to dismantle Turkey. Turkey believes Italy’s initial assurance of non-aggression in
1901. Italy begins by excusing his initial silence
due to a rough day at work, evoking empathy and
likability. While they do not fall for subsequent
lies, Turkey’s initial gullibility cements Italy’s firststrike advantage. Meanwhile, Italy proposes a longterm alliance with England against France, packaging several small truths with a big lie. The strategy
succeeds, eliminating Italy’s greatest threat.
Local threats eliminated, Italy turns to rivals on
the other end of the map. Italy persuades England
to double-cross its long-time ally Germany in a moment of scarcity: if you do not act now, there will

3812

be nowhere to expand. England accepts help from
ascendant Italy, expecting reciprocity. However,
Italy aggressively and successfully moves against
England. The last year features a meta-game deception. After Italy becomes too powerful to contain,
the remaining four players team up. Ingeniously,
Italy feigns acquiescence to a five-way draw, individually lying to each player and establishing
authority while brokering the deal. Despite Italy’s
record of deception, the other players believe the
proposal (annotating received messages from Italy
as truthful) and expect a 1907 endgame, the year
with the most lies. Italy goes on the offensive and
knocks out Austria. Italy’s summary of the game
in their own words is in the Appendix, Table 6.
Each game has relationships that are forged and
then riven. In another game, an honest attempt by a
strong Austria to woo an ascendant Germany backfires, knocking Austria from the game. Germany
builds trust with Austria through a believed fictional experience as a Boy Scout in Maine (likability). In a third game, two consecutive unfulfilled
promises by an ambitious Russia leads to a quick
demise, as their subsequent excuses and apologies
are perceived as lies (failed consistency). In another game, England, France, and Russia simultaneously attack Germany after offering duplicitous
assurances. Game outcomes vary despite the identical, balanced starting board, as different players
use unique strategies to persuade, and occasionally
deceive, their opponents.
2.2

Defining a lie

Statements can be incorrect for a host of reasons:
ignorance, misunderstanding, omission, exaggeration. Gokhman et al. (2012) highlight the difficulty of finding willful, honest, and skilled deception outside of short-term, artificial contexts (DePaulo et al., 2003). Crowdsourced and automatic
datasets rely on simple negations (Pérez-Rosas
et al., 2017) or completely implausible claims (e.g.,
“Tipper Gore was created in 1048” from Thorne
et al. (2018)). While lawyers in depositions and
users of dating sites will not willingly admit to their
lies, the players of online games are more willing
to revel in their deception.
We must first define what we mean by deception.
Lying is a mischaracterization; it’s thus no surprise
that a definition may be divisive or the subject of
academic debate (Gettier, 1963). We provide this
definition to our users: “Typically, when [someone]

Figure 2: Every time they send a message, players say
whether the message is truthful or intended to deceive.
The receiver then labels whether incoming messages
are a lie or not. Here Italy indicates they believe a message from England is truthful but that their reply is not.

lies [they] say what [they] know to be false in an
attempt to deceive the listener” (Siegler, 1966). An
orthodox definition requires the speaker to utter an
explicit falsehood (Mahon, 2016); skilled liars can
deceive with a patina of veracity. A similar definition is required for prosecution of perjury, leading
to a paucity of convictions (Bogner et al., 1974).
Indeed, when we ask participants what a lie looks
like, they mention evasiveness, shorter messages,
over-qualification, and creating false hypothetical
scenarios (DePaulo et al., 2003).
2.3

Annotating truthfulness

Previous work on the language of Diplomacy (Niculae et al., 2015) lacked access to players’ internal
state and was limited to post-hoc analysis. We
improve on this by designing our own interface
that gathers players’ intentions and perceptions in
real-time (Section 3.1). As with other highly subjective phenomena like sarcasm (González-Ibáñez
et al., 2011; Bamman and Smith, 2015), sentiment (Pang et al., 2008) and framing (Greene and
Resnik, 2009), the intention to deceive is reflective
on someone’s internal state. Having individuals
provide their own labels for their internal state is
essential as third party annotators could not accurately access it (Chang et al., 2020).
Most importantly, our gracious players have allowed this language data to be released in accordance with IRB authorized anonymization, encouraging further work on the strategic use of deception
in long-lasting relations.2
2
Data available at http://go.umd.edu/diplomacy_data and as
part of ConvoKit http://convokit.cornell.edu.

3813

3

Engaging a Community of Liars

This dataset requires both a social and technical
setup: finding a community that plays Diplomacy
online and having them use a framework for annotating these messages.
3.1

Technical implementation

We need two technical components for our study:
a game engine and a chat system. We choose Backstabbr3 as an accessible game engine on desktop
and mobile platforms: players input their moves
and the site adjudicates game mechanics (Chiodini,
2020). Our communication framework is atypical.
Thus, we create a server on Discord,4 the group
messaging platform most used for online gaming
and by the online Diplomacy community (Coberly,
2019). The app is reliable on both desktop and mobile devices, free, and does not limit access to messages. Instead of direct communication, players
communicate with a bot; the bot does not forward
messages to the recipient until the player annotates the messages (Figure 2). In addition, the bot
scrapes the game state from Backstabbr to sync
game and language data.
Annotation of lies is a forced binary choice in
our experiment. Explicitly calling a statement a
lie is difficult, and people would prefer degrees of
deception (Bavelas et al., 1990; Bell and DePaulo,
1996). Thus, we follow previous work that views
linguistic deception as binary (Buller et al., 1996;
Braun and Van Swol, 2016). Some studies make a
more fine-grained distinction; for example, Swol
et al. (2012) separate strategic omissions from blatant lies (we consider both deception). However,
because we are asking the speakers themselves (and
not trained annotators) to make the decision, we
follow the advice from crowdsourcing to simplify
the task as much as possible (Snow et al., 2008;
Sabou et al., 2014). Long messages can contain
both truths and lies, and we ask players to categorize these as lies since the truth can be a shroud for
their aims.
3.2

Building a player base

The Diplomacy players maintain an active, vibrant
community through real-life meetups and online
play (Hill, 2014; Chiodini, 2020). We recruit top
players alongside inexperienced but committed
players in the interest of having a diverse pool.
3
4

https://www.backstabbr.com
https://www.discord.com

Our experiments include top-ranked players and
community leaders from online platforms, grizzled in-person tournament players with over 100
past games, and board game aficionados. These
players serve as our foundation and during initial
design helped us to create a minimally annoying
interface and a definition of a lie that would be
consistent with Diplomacy play. Good players—as
determined by active participation, annotation and
game outcome—are asked to play in future games.
In traditional crowdsourcing tasks compensation
is tied to piecework that takes seconds to complete (Buhrmester et al., 2011). Diplomacy games
are different in that they can last a month. . . and
people already play the game for free. Thus, we do
not want compensation to interfere with what these
players already do well: lying. Even the obituary
of the game’s inventor explains
Diplomacy rewards all manner of mendacity: spying, lying, bribery, rumor mongering, psychological manipulation, outright intimidation, betrayal,
vengeance and backstabbing (the use of actual
cutlery is discouraged)” (Fox, 2013).

Thus, our goal is to have compensation mechanisms that get people to play this game as they
normally would, finish their games, and put up
with our (slightly) cumbersome interface. Part of
the compensation is non-monetary: a game experience with players that are more engaged than the
average online player.
To encourage complete games, most of the payment is conditioned on finishing a game, with rewards for doing well in the game. Players get at
least $40 upon finishing a game. Additionally, we
provide bonuses for specific outcomes: $24 for
winning the game (an evenly divisible amount that
can be split among remaining players) and $10 for
having the most successful lies, i.e., statements they
marked as a lie that others believed.5 Diplomacy
usually ends with a handful of players dividing the
board among themselves and agreeing to a tie. In
the game described in Section 2.1, the remaining
four players shared the winner’s pool with Italy
after 10 in-game years, and Italy won the prize for
most successful lies.
5

The lie incentive is relatively small (compared to incentives for participation and winning) to discourage an opportunistic player from marking everything as a lie. Games were
monitored in real-time and no player was found abusing the
system (marking more than ∼20% lies).

3814

Straightforward
Deceived

Value
13,132
591
566
20.79

Table 2: Summary statistics for our train data (nine of
twelve games). Messages are long and only five percent are lies, creating a class imbalance.

Train Counts

Category
Message Count
ACTUAL LIE Count
SUSPECTED LIE Count
Average # of Words

Frequency

3000

1000
0

100

200

300

Figure 3: Individual messages can be quite long, wrapping deception in pleasantries and obfuscation.

Data overview

Table 2 quantitatively summarizes our data. Messages vary in length and can be paragraphs long
(Figure 3). Close to five percent of all messages in
the dataset are marked as lies and almost the same
percentage (but not necessarily the same messages)
are perceived as lies, consistent with the “veracity
effect” (Levine et al., 1999). In the game discussed
above, eight percent of messages are marked as
lies by the sender and three percent of messages
are perceived as lies by the recipient; however, the
messages perceived as lies are rarely lies (Figure 4).
3.4

3000

Figure 4: Most messages are truthful messages identified as the truth. Lies are often not caught. Table 3
provides an example from each quadrant.

Word Count per Message

3.3

12000
9000
6000

0

2000

0

Cassandra
Caught

Demographics and self-assessment

In a post-game survey, players provide information on whom they betrayed and who betrayed them
in a given game. This is a finer-grained determination than the post hoc analysis used in past work on
Diplomacy (Niculae et al., 2015). We ask players
to optionally provide linguistic cues to their lying
and to summarize the game from their perspective
(examples in Appendix, Table 6).
3.5

Four possible combinations of deception and perception can arise from our data. The sender can
be lying or telling the truth. Additionally, the receiver can perceive the message as deceptive or
truthful. We name the possible outcomes for lies as
Deceived or Caught, and the outcomes for truthful
messages as Straightforward or Cassandra,7 based
on the receiver’s annotation (examples in Table 3,
distribution in Figure 4).

4

We collect anonymous demographic information
from our study participants: the average player
identifies as male, between 20 and 35 years old,
speaks English as their primary language, and has
played over fifty Diplomacy games.6 Players selfassess their lying ability before the study. The
average player views themselves as better than average at lying and average or better than average at
perceiving lies.
6
Our data skews 80% male and 95% of the players speak
English as a primary language. Ages range from eighteen and
sixty-four. Game experience is distributed across beginner,
intermediate, and expert levels.

An ontology of deception

Detecting Lies

We build computational models both to detect
lies to better understand our dataset. The data
from the user study provide a training corpus that
maps language to annotations of truthfulness and
deception. Our models progressively integrate
information—conversational context and in-game
power dynamics—to approach human parity in deception detection.
7

In myth, Cassandra was cursed to utter true prophecies
but never be believed. For a discussion of Cassandra’s curse
vis a vis personal and political oaths, see Torrance (2015).

3815

Sender’s intention

Truth
Truth

Lie

Receiver’s perception
Lie

Straightforward Salut! Just checking in, letting you
know the embassy is open, and if you decide to move
in a direction I might be able to get involved in, we
can probably come to a reasonable arrangement on
cooperation. Bonne journee!
Deceived You, sir, are a terrific ally. This was more
than you needed to do, but makes me feel like this is
really a long term thing! Thank you.

Cassandra I don’t care if we target T first or A first.
I’ll let you decide. But I want to work as your partner.
. . . I literally will not message anyone else until you
and I have a plan. I want it to be clear to you that
you’re the ally I want.
Caught So, is it worth us having a discussion this
turn? I sincerely wanted to work something out with
you last turn, but I took silence to be an ominous sign.

Table 3: Examples of messages that were intended to be truthful or deceptive by the sender or receiver. Most
messages occur in the top left quadrant (Straightforward). Figure 4 shows the full distribution. Both the intended
and perceived properties of lies are of interest in our study.

4.1

Metric and data splits

We investigate two phenomena: detecting what is
intended as a lie and what is perceived as a lie.
However, this is complicated because most statements are not lies: less than five percent of the
messages are labeled as lies in both the ACTUAL
LIE and the SUSPECTED LIE tasks (Table 2). Our results use a weighted F1 feature across truth and lie
prediction, as accuracy is an inflated metric given
the class imbalance (Japkowicz and Stephen, 2002).
We thus adopt an in-training approach (Zhou and
Liu, 2005) where incorrect predictions of lies are
penalized more than truthful statements. The relative penalty between the two classes is a hyperparameter tuned on F1 .
Before we move to computational models for lie
detection, we first establish the human baseline. We
know when senders were lying and when receivers
spotted a lie. Humans spot 88.3% of lies. However,
given the class imbalance, this sounds better than it
is. Following the suggestion of Levine et al. (1999),
we focus on the detection of lies, where humans
have a 22.5 Lie F1 .
To prevent overfitting to specific games, nine
games are used as training data, one is used for
validation for tuning parameters, and two games
are test data. Some players repeat between games.
4.2

Logistic regression

Logistic regression models have interpretable coefficients which show linguistic phenomena that
correlate with lies. A word that occurs infrequently
overall but often in lies, such as ‘honest’ and ‘candidly’, helps identify which messages are lies.
Niculae et al. (2015) propose linguistic
Harbingers that can predict deception. These
are word lists that cover topics often used in interpersonal communication—claims, subjectivity,
premises, contingency, comparisons, expansion,

temporal language associated with the future, and
all other temporal language (complete word list in
Appendix, Table 8). The Harbingers word lists do
not provide full coverage, as they focus on specific
rhetorical areas. A logistic regression model with
all word types as features further improves F1 .
Power dynamics influence the language and flow
of conversation (Danescu-Niculescu-Mizil et al.,
2012, 2013; Prabhakaran et al., 2013). These dynamics may influence the likeliness of lying; a
stronger player may feel empowered to lie to their
neighbor. Recall that victory points (Section 2) encode how well a player is doing (more is better).
We represent the power differential as the difference between the two players. Peers will have a
zero differential, while more powerful players will
have a positive differential with their interlocutor.
The differential changes throughout the game, so
this feature encodes the difference in the season the
message was sent. For example, a message sent by
an Italy with seven points to a Germany with two
points in a given season would have a value of five.
4.3

Neural

While less interpretable, neural models are
often more accurate than logistic regression
ones (Ribeiro et al., 2016; Belinkov and Glass,
2019). We build a standard long short-term memory network (Hochreiter and Schmidhuber, 1997,
LSTM ) to investigate if word sequences—ignored
by logistic regression—can reveal lies.
Integrating message context and power dynamics improves on the neural baseline. A Hierarchical
LSTM can help focus attention on specific phrases
in long conversational contexts. In the same way it
would be difficult for a human to determine prima
facie if a statement is a lie without previous context,
we posit that methods that operate at the level of a
single message are limited in the types of cues they

3816

39.8

38.3

20

14.9

47.8
52.8
52.9
54.3
54.9
53.8
55.8
52.7
57.2
56.1
58.1

13.7
13.5

19.2
20.9
22.5

27.0

11.8

48.3
45.9
45.1
51.5
51.6
53.8
54.3
53.3
53.3
53.6

40

19.1
20.2

24.6
23.7

14.7
15.5
13.7
13.9
13.6
15.0
15.1
13.0
12.4

60 0

10

Suspected Lie

0

Lie F1
Actual Lie

Random
Majority Class
Harbingers
Harbingers+Power
Bag of Words
Bag of Words+Power
LSTM
Context LSTM
Context LSTM+BERT
Context LSTM+Power
Context LSTM+Power+BERT
Human
Random
Majority Class
Harbingers
Harbingers+Power
Bag of Words
Bag of Words+Power
LSTM
Context LSTM
Context LSTM+BERT
Context LSTM+Power
Context LSTM+Power+BERT

Macro F1

20

Figure 5: Test set results for both our ACTUAL LIE and SUSPECTED LIE tasks. We provide baseline (Random,
Majority Class), logistic (language features, bag of words), and neural (combinations of a LSTM with BERT) models.
The neural model that integrates past messages and power dynamics approaches human F1 for ACTUAL LIE (top).
For ACTUAL LIE, the human baseline is how often the receiver correctly detects senders’ lies. The SUSPECTED
LIE lacks such a baseline.

can extract. The hierarchical LSTM is given the
context of previous messages when determining if
a given message is a lie, which is akin to the labeling task humans do when annotating the data. The
model does this by encoding a single message from
the tokens, and then running a forward LSTM over
all the messages. For each message, it looks at both
the content and previous context to decide if the
current message is a lie. Fine-tuning BERT (Devlin
et al., 2019) embeddings to this model did not lead
to notable improvement in F1 , likely due to the
relative small size of our training data. Last, we incorporate information about power imbalance into
this model. This model approaches human performance in terms of F1 score by combining content
with conversational context and power imbalance.

5

Qualitative Analysis

This section examines specific messages where
both players and machines are correctly identifying
lies and when they make mistakes on our test set.
Most messages are correctly predicted by both the
model and players (2055 of 2475 messages); but
this is because of the veracity effect. The picture
is less rosy if we only look at messages the sender

marks as ACTUAL LIE: both players and models
are generally wrong (Table 5).
Both models and players can detect lies when
liars get into specifics. In Diplomacy, users must
agree to help one another through orders that stipulate “I will help another player move from X to
Y”. The in-game term for this is “support”; half the
messages where players and computers correctly
identify lies contain this word, but it rarely occurs
in the other quadrants.
Models seem to be better at not falling for
vague excuses or fantastical promises in the future. Players miss lies that promise long-term alliances, involve extensive apologies, or attribute
motivation as coming from other countries’ disinformation (Model Correct). Unlike our models,
players have access to conversations with other
players and accordingly players can detect lies that
can easily be verified through conversations with
other players (Player Correct).
However, ultimately most lies are believable and
fool both models and players (Both Wrong). For
example, all messages that contain the word “true”
are predicted as truthful by both models and play-

3817

Model Prediction
Wrong

Player Prediction

Correct
Correct

Both Correct Not sure what your plan is, but I
might be able to support you to Munich.

Wrong

Model Correct Long time no see. Sorry for the
stab earlier. I think we should try to work together
to stop france from winning; if we work together
we can stop france from getting 3 more centers, and
then we will all win in a 3, 4, or 5 way draw when
the game is hard-capped at 1910.

Player Correct Don’t believe Turkey, I said nothing
of the sort. I imagine he’s just trying to cause an
upset between us.
Both Wrong I’m considering playing fairly aggressive against England and cutting them off at the pass
in 1901, your support for that would be very helpful.

Table 4: An example of an ACTUAL LIE detected (or not) by both players and our best computational model
(Context LSTM + Power) from each quadrant. Both the model and the human recipient are mostly correct overall
(Both Correct), but they are both mostly wrong when it comes to specifically predicting lies (Both Wrong).

Player Correct
Player Wrong

Model
Correct

Model
Wrong

10
28

32
137

Table 5: Conditioning on only lies, most messages are
now identified incorrectly by both our best model (Context LSTM + Power) and players.

ers. Many of these messages are relatively tame;8
confirming the Pinocchio effect found by Swol et al.
(2012). If liars can be detected when they wax prolix, perhaps the best way to avoid detection is to be
terse and to the point.
Sometimes additional contextual information
helps models improve over player predictions. For
example, when France tells Austria “I am worried
about a steamroller Russia Turkey alliance”, the
message is incorrectly perceived as truthful by both
the player and the single-message model. However,
once the model has context—a preceding question
asking if Austria and Turkey were cooperating—it
can detect the lie.
Finally, we investigate categories from the
Harbingers (Niculae et al., 2015) word lists. Lies
are more likely to contain subjectivity and premises
while true messages include expansion phrases
(“later”, “additionally”). We also use specific
words in the bag of words logistic regression
model. The coefficient weights of words that express sincerity (e.g., “sincerely”, “frankly”) and
apology (e.g., “accusation”, “fallout”, “alternatives”) skew toward ACTUAL LIE prediction in the
logistic regression model. More laid back appella8
Examples include “It’s true—[Budapest] back to [Rumania] and [Serbia] on to [Albania] could position for more
forward convoys without needing the rear fleet. . . ” and “idk if
it’s true just letting u know since were allies”.

tions (e.g., “dude”, “man”) skew towards truthfulness, as do words associated with reconnaissance
(e.g., “fyi”,“useful”, “information”) and time (e.g.,
“weekend”, “morning”). Contested areas on the
Diplomacy map, such as Budapest and Sevastopol,
are more likely to be associated with lies, while
more secure ones like Berlin, are more likely to be
associated with truthful messages.

6

Related Work

Early computational deception work focuses on
single utterances (Newman et al., 2003), especially
for product reviews (Ott et al., 2012). But deception is intrinsically a discursive phenomenon and
thus the context in which it appears is essential.
Our platform provides an opportunity to observe
deception in the context in which it arises: goaloriented conversations around in-game objectives.
Gathering data through an interactive game has a
cheaper per-lie cost than hiring workers to write
deceptive statements (Jurgens and Navigli, 2014).
Other conversational datasets are mostly based
on games that involve deception including Werewolf (Girlea et al., 2016), Box of Lies (Soldner
et al., 2019), and tailor-made games (Ho et al.,
2017). However, these games assign individuals
roles that they maintain throughout the game (i.e.,
in a role that is supposed to deceive or in a role that
is deceived). Thus, deception labels are coarse: an
individual always lies or always tells the truth. In
contrast, our platform better captures a more multifaceted reality about human nature: everyone can
lie or be truthful with everyone else, and they use
both strategically. Hence, players must think about
every player lying at any moment: “given the evidence, do I think this person is lying to me now?”
Deception data with conversational labels is also
available through interviews (Pérez-Rosas et al.,

3818

2016), some of which allow for finer-grained deception spans (Levitan et al., 2018). Compared
with game-sourced data, however, interviews provide shorter conversational context (often only a
single exchange with a few follow-ups) and lack
a strategic incentive—individuals lie because they
are instructed to do so, not to strategically accomplish a larger goal. In Diplomacy, users have an
intrinsic motivation to lie; they have entertainmentbased and financial motivations to win the game.
This leads to higher-quality, creative lies.
Real-world examples of lying include perjury (Louwerse et al., 2010), calumny (Fornaciari
and Poesio, 2013), emails from malicious hackers (Dhamija et al., 2006), and surreptitious user
recordings. But real-world data comes with realworld complications and privacy concerns. The
artifice of Diplomacy allows us to gather pertinent language data with minimal risk and to access both sides of deception: intention and perception. Other avenues for less secure research
include analyzing dating profiles for accuracy in
self-presentation (Toma and Hancock, 2012) and
classifying deceptive online spam (Ott et al., 2011).

7

Conclusion

In Dante’s Inferno, the ninth circle of Hell—a fate
worse even than that reserved for murderers—is for
betrayers. Dante asks Count Ugolino to name his
betrayer, which leads him to say:
but if my words can be the seed to bear
the fruit of infamy for this betrayer
who feeds my hunger, then I shall speak—in
tears (Alighieri and Musa, 1995, Canto XXXIII)

Similarly, we ask victims to expose their betrayers
in the game of Diplomacy. The seeds of players’ negotiations and deceit could, we hope, yield fruit to
help others: understanding multi-party negotiation
and protecting Internet users.
While we ignore nuances of the game board
to keep our work general, Diplomacy is also a
rich, multi-agent strategic environment; Paquette
et al. (2019) ignore Diplomacy’s rich language to
build bots that only move pieces around the board.
An exciting synthesis would incorporate deception
and language generation into an agent’s policy;
our data would help train such agents. Beyond
playing against humans, playing with a human in
the loop (HITL) resembles designs for cybersecurity threats (Cranor, 2008), annotation (Branson
et al., 2010), and language alteration (Wallace et al.,

2019). Likewise, our lie-detection models can help
a user in the moment better decide whether they
are being deceived (Lai et al., 2020). Computers
can meld their attention to detail and nigh infinite
memory to humans’ grasp of social interactions
and nuance to forge a more discerning player.
Beyond a silly board game, humans often need
help verifying claims are true when evaluating
health information (Xie and Bugg, 2009), knowing when to take an e-mail at face value (Jagatic
et al., 2007), or evaluating breaking news (Hassan
et al., 2017). Building systems to help information
consumers become more discerning and suspicious
in low-stakes settings like online Diplomacy are
the seeds that will bear the fruits of interfaces and
machine learning tools necessary for a safer and
more robust Internet ecosystem.

Acknowledgments
We thank Chris Martin for the introduction to the
Diplomacy community and for study suggestions.
Feedback from Philip Resnik, Alexander Fraser,
Bill Ferguson, James Ryan, and Vinodkumar Prabhakaran helped shape the paper’s structure.
The information provided in this document is derived from an effort sponsored by the Defense Advanced Research Projects Agency (DARPA) and Air
Force Research Laboratory (AFRL), and awarded to
Raytheon BBN Technologies under contract number FA865018-C-7885. Danescu-Niculescu-Mizil
is supported by NSF award IIS-1750615 and by NSF
grant IIS-1910147. Opinions, findings, conclusions,
or recommendations expressed here are those of
the authors and do not necessarily reflect views of
the sponsors.
We thank Sebastien A., Joe Brelsford (TrustworthyWarMonger), Sam Brothers, Max Christie,
Jordan Connors (Conq), Anna Conte, Bill Hackenbracht, Jack Henrichs, Melissa Lewis, Michael
Lotfy (Blitzkrieg13), Joshua Lovett-Graff, Mitch
McConeghey, Marko Papić, Christopher Rawles,
David Van Slyke (happypopday), Reno Varghese, Tyler Waaler, Joseph Wheeler (Sloth), Phillip
Wilcox, Jorge Zhang (Caped Baldy), Daniel Zhu,
papa_k, questionmark, and the dozens of other
players that made the games possible.

3819

References
Dante Alighieri and Mark Musa. 1995. Dante’s Inferno: The Indiana Critical Edition. Indiana masterpiece editions. Indiana University Press.
Pranav Anand, Joseph King, Jordan Boyd-Graber, Earl
Wagner, Craig Martell, Douglas W. Oard, and Philip
Resnik. 2011. Believe me: We can do this! In The
AAAI 2011 workshop on Computational Models of
Natural Argument.
David Bamman and Noah A. Smith. 2015. Contextualized Sarcasm Detection on Twitter. In Proceedings
of ICWSM.
Janet Beavin Bavelas, Alex Black, Nicole Chovil, and
Jennifer Mullett. 1990. Truths, lies, and equivocations: The effects of conflicting goals on discourse.
Journal of Language and Social Psychology, 9(12):135–161.
Yonatan Belinkov and James Glass. 2019. Analysis
methods in neural language processing: A survey.
Transactions of the Association for Computational
Linguistics.
Kathy L Bell and Bella M DePaulo. 1996. Liking
and lying. Basic and Applied Social Psychology,
18(3):243–266.
William E. Bogner, Margaret Edwards, Leon Zelechowski, Kevin J. Egan, William J. Rogers, Eloy
Burciaga, and John Scott Arthur. 1974. Perjury: The
forgotten offense. The Journal of Criminal Law and
Criminology, 65(3):361–372.
Steve Branson, Catherine Wah, Florian Schroff, Boris
Babenko, Peter Welinder, Pietro Perona, and Serge
Belongie. 2010. Visual recognition with humans in
the loop. In European Conference on Computer Vision.
Michael T. Braun and Lyn M. Van Swol. 2016. Justifications offered, questions asked, and linguistic patterns in deceptive and truthful monetary interactions.
Group Decision and Negotiation, 25(3):641–661.
Michael Buhrmester, Tracy Kwang, and Samuel D
Gosling. 2011. Amazon’s mechanical Turk: A new
source of inexpensive, yet high-quality data? Perspectives on psychological science: a journal of the
Association for Psychological Science, 6 1:3–5.

Johnny Chiodini. 2020. Playing Diplomacy online
transformed the infamously brutal board game from
unbearable to brilliant. Dicebreaker.
Robert B Cialdini and Noah J Goldstein. 2004. Social
influence: Compliance and conformity. Annual Review of Psychology, 55:591–621.
Cohen Coberly. 2019. Discord has surpassed 250 million registered users. Techspot.
B. Cornwell and D. C. Lundgren. 2001. Love on the internet: involvement and misrepresentation in romantic relationships in cyberspace vs. realspace. Computational Human Behavior, 17:197–211.
Lorrie F Cranor. 2008. A framework for reasoning
about the human in the loop. In UPSEC.
Cristian Danescu-Niculescu-Mizil, Lillian Lee,
Bo Pang, and Jon Kleinberg. 2012. Echoes of
power: Language effects and power differences in
social interaction. In Proceedings of the World Wide
Web Conference.
Cristian Danescu-Niculescu-Mizil, Moritz Sudhof,
Dan Jurafsky, Jure Leskovec, and Christopher Potts.
2013. A computational approach to politeness with
application to social factors. In Proceedings of the
Association for Computational Linguistics.
Bella M DePaulo, James J Lindsay, Brian E Malone, Laura Muhlenbruck, Kelly Charlton, and Harris Cooper. 2003. Cues to deception. Psychological
bulletin, 129(1):74.
Jacob Devlin, Ming-Wei Chang, Kenton Lee, and
Kristina Toutanova. 2019. BERT: Pre-training of
deep bidirectional transformers for language understanding. In Conference of the North American
Chapter of the Association for Computational Linguistics.
Rachna Dhamija, J. Doug Tygar, and Marti A. Hearst.
2006. Why phishing works. In International Conference on Human Factors in Computing Systems.
Tommaso Fornaciari and Massimo Poesio. 2013. Automatic deception detection in Italian court cases. Artificial intelligence and law, 21(3):303–340.
Margalit Fox. 2013. Allan Calhamer dies at 81; invented Diplomacy game. New York Times.
Edmund Gettier. 1963. Is justified true belief knowledge? Analysis, 23(6):121–123.

David B. Buller, Judee K. Burgoon, Aileen Buslig, and
James Roiger. 1996. Testing interpersonal deception theory: The language of interpersonal deception.
Communication Theory, 6(3):268–289.

Codruta Girlea, Roxana Girju, and Eyal Amir. 2016.
Psycholinguistic features for deceptive role detection in Werewolf. In Conference of the North American Chapter of the Association for Computational
Linguistics.

Jonathan P. Chang, Justin Cheng, and Cristian DanescuNiculescu-Mizil. 2020. Don’t let me be misunderstood: Comparing intentions and perceptions in online discussions. In Proceedings of the World Wide
Web Conference.

Stephanie Gokhman, Jeff Hancock, Poornima Prabhu,
Myle Ott, and Claire Cardie. 2012. In search of a
gold standard in studies of deception. In Proceedings of the Workshop on Computational Approaches
to Deception Detection.

3820

Roberto González-Ibáñez, Smaranda Muresan, and
Nina Wacholder. 2011. Identifying sarcasm in Twitter: A closer look. In Proceedings of the Association
for Computational Linguistics.
Stephan Greene and Philip Resnik. 2009. More than
words: Syntactic packaging and implicit sentiment.
In Conference of the North American Chapter of the
Association for Computational Linguistics.
Naeemul Hassan, Fatma Arslan, Chengkai Li, and
Mark Tremayne. 2017. Toward automated factchecking: Detecting check-worthy factual claims by
claimbuster. In Knowledge Discovery and Data Mining.
David Hill. 2014. Got your back. This American Life
Podcast.
Shuyuan Mary Ho, Jeffrey T Hancock, and Cheryl
Booth. 2017. Ethical dilemma: Deception dynamics
in computer-mediated group communication. Journal of the Association for Information Science and
Technology.
Sepp Hochreiter and Jürgen Schmidhuber. 1997.
Long short-term memory. Neural computation,
9(8):1735–1780.
Tom N Jagatic, Nathaniel A Johnson, Markus Jakobsson, and Filippo Menczer. 2007. Social phishing.
Communications of the ACM, 50(10):94–100.
Nathalie Japkowicz and Shaju Stephen. 2002. The
class imbalance problem: A systematic study. Intelligent data analysis, 6(5):429–449.
David Jurgens and Roberto Navigli. 2014. It’s all fun
and games until someone annotates: Video games
with a purpose for linguistic annotation. In Transactions of the Association for Computational Linguistics.
Mary E Kaplar and Anne K Gordon. 2004. The enigma
of altruistic lying: Perspective differences in what
motivates and justifies lie telling within romantic relationships. Personal Relationships, 11(4):489–507.
Srijan Kumar, Justin Cheng, Jure Leskovec, and V.S.
Subrahmanian. 2017. An Army of Me: Sockpuppets in Online Discussion Communities. In Proceedings of the World Wide Web Conference, Republic
and Canton of Geneva, Switzerland.
Srijan Kumar and Neil Shah. 2018. False information
on web and social media: A survey. In Social Media
Analytics: Advances and Applications. CRC.
Vivian Lai, Han Liu, and Chenhao Tan. 2020. "why
is ’chicago’ deceptive?" Towards building modeldriven tutorials for humans. In International Conference on Human Factors in Computing Systems.
Timothy R. Levine, Hee Sun Park, and Steven A. McCornack. 1999. Accuracy in detecting truths and
lies: Documenting the “veracity effect”. Communication Monographs, 66(2):125–144.

Sarah Ita Levitan, Angel Maredia, and Julia Hirschberg.
2018. Linguistic cues to deception and perceived
deception in interview dialogues. In Conference of
the North American Chapter of the Association for
Computational Linguistics.
Max Louwerse, David Lin, Amanda Drescher, and Gun
Semin. 2010. Linguistic cues predict fraudulent
events in a corporate social network. In Proceedings of the Annual Meeting of the Cognitive Science
Society.
James Edwin Mahon. 2016. The definition of lying
and deception. In The Stanford Encyclopedia of Philosophy, winter 2016 edition. Metaphysics Research
Lab, Stanford University.
Matthew L Newman, James W Pennebaker, Diane S
Berry, and Jane M Richards. 2003. Lying words:
Predicting deception from linguistic styles. Personality and social psychology bulletin, 29(5):665–675.
Vlad Niculae, Srijan Kumar, Jordan Boyd-Graber, and
Cristian Danescu-Niculescu-Mizil. 2015. Linguistic
harbingers of betrayal: A case study on an online
strategy game. In Proceedings of the Association
for Computational Linguistics.
Daniela Oliveira, Harold Rocha, Huizi Yang, Donovan Ellis, Sandeep Dommaraju, Melis Muradoglu,
Devon Weir, Adam Soliman, Tian Lin, and Natalie
Ebner. 2017. Dissecting spear phishing emails for
older vs young adults: On the interplay of weapons
of influence and life domains in predicting susceptibility to phishing. In International Conference on
Human Factors in Computing Systems.
Myle Ott, Claire Cardie, and Jeff Hancock. 2012. Estimating the prevalence of deception in online review
communities. In Proceedings of the World Wide Web
Conference.
Myle Ott, Yejin Choi, Claire Cardie, and Jeffrey T Hancock. 2011. Finding deceptive opinion spam by any
stretch of the imagination. In Proceedings of the Association for Computational Linguistics.
Bo Pang, Lillian Lee, et al. 2008. Opinion mining and
sentiment analysis. Foundations and Trends in Information Retrieval, 2(1–2):1–135.
Philip Paquette, Yuchen Lu, Seton Steven Bocco, Max
Smith, Satya Ortiz-Gagné, Jonathan K. Kummerfeld, Joelle Pineau, Satinder Singh, and Aaron C
Courville. 2019. No-press diplomacy: Modeling
multi-agent gameplay. In Proceedings of Advances
in Neural Information Processing Systems. Curran
Associates, Inc.
Verónica Pérez-Rosas, Mohamed Abouelenien, Rada
Mihalcea, Yao Xiao, C. J. Linton, and Mihai Burzo.
2016. Verbal and nonverbal clues for real-life deception detection. In Proceedings of Empirical Methods
in Natural Language Processing.

3821

Verónica Pérez-Rosas, Bennett Kleinberg, Alexandra
Lefevre, and Rada Mihalcea. 2017. Automatic detection of fake news. Proceedings of International
Conference on Computational Linguistics.

Bo Xie and Julie M. Bugg. 2009. Public library computer training for older adults to access high-quality
internet health information. Library and Information Science Research, 31(3).

Vinodkumar Prabhakaran, Ajita John, and Dorée D
Seligmann. 2013. Power dynamics in spoken interactions: a case study on 2012 Republican primary
debates. In Proceedings of the World Wide Web Conference.

Zhi-Hua Zhou and Xu-Ying Liu. 2005. Training costsensitive neural networks with methods addressing
the class imbalance problem. IEEE Transactions on
knowledge and data engineering, 18(1):63–77.

Marco Tulio Ribeiro, Sameer Singh, and Carlos
Guestrin. 2016. "Why should i trust you?" explaining the predictions of any classifier. In Knowledge
Discovery and Data Mining.
Marta Sabou, Kalina Bontcheva, Leon Derczynski,
and Arno Scharl. 2014. Corpus annotation through
crowdsourcing: Towards best practice guidelines. In
Proceedings of the Language Resources and Evaluation Conference.
Ben Shneiderman. 2000. Designing trust into online experiences. Communications of the ACM,
43(12):57–59.
Frederick A Siegler. 1966. Lying. American Philosophical Quarterly, 3(2):128–136.
Rion Snow, Brendan O’Connor, Daniel Jurafsky, and
Andrew Y Ng. 2008. Cheap and fast—but is it
good?: Evaluating non-expert annotations for natural language tasks. In Proceedings of Empirical
Methods in Natural Language Processing.
Felix Soldner, Verónica Pérez-Rosas, and Rada Mihalcea. 2019. Box of lies: Multimodal deception detection in dialogues. In Conference of the North American Chapter of the Association for Computational
Linguistics.
Lyn M. Van Swol, Deepak Malhotra, and Michael T.
Braun. 2012. Deception and its detection: Effects
of monetary incentives and personal relationship history. Communication Research, 39(2):217–238.
James Thorne, Andreas Vlachos, Oana Cocarascu,
Christos Christodoulopoulos, and Arpit Mittal, editors. 2018. Proceedings of the First Workshop on
Fact Extraction and VERification (FEVER). Association for Computational Linguistics.
Catalina L Toma and Jeffrey T Hancock. 2012. What
lies beneath: The linguistic traces of deception in
online dating profiles. Journal of Communication,
62(1):78–97.
Isabelle Torrance. 2015. Distorted oaths in Aeschylus.
Illinois Classical Studies, 40(2):281–295.
Eric Wallace, Pedro Rodriguez, Shi Feng, Ikuya Yamada, and Jordan Boyd-Graber. 2019. Trick me
if you can: Human-in-the-loop generation of adversarial examples for question answering. Transactions of the Association for Computational Linguistics, 7:387–401.

3822

A

Appendix

Table and Figure numbers continue from the main document. In the appendix are:
1. examples of game summaries written by players (Table 6);
2. the game engine view of the board (Figure 6);
3. examples of persuasion techniques (Table 7);
4. Harbingers word lists that are used as features in the logistic regression model (Table 8); and
5. A full transcript between two players, Germany and Italy (Table 9). Messages are long and carefully
composed. This transcript is from the game described in Section 2.1 (Warning: it is twenty pages
long).
User

Summary

Italy

This was an interesting game, with some quality play all around, but I felt like I was
playing harder than most of the others. I felt early on that I could count on Austria
remaining loyal, which worked to my benefit, as it allowed me freedom to stab and
defeat a very strong French player before he got his legs under him. At the same time,
Austria was a little too generous in granting me centers and inviting me to come help
him against Russia, which allowed me to take advantage once I was established in the
Middle Atlantic.

Russia

Definitely a good game by Italy - which is interesting to me, because his initial press
struck me as erratic and aggressive, making me not want to work with him. I’m
curious if the same negotiating approach was taken with the other players who did
work with him early on, or if he used a different negotiating approach with closer
neighbors.

Table 6: Users optionally provide free response descriptions of the game. This can be used for qualitative analysis
or potentially for algorithmic summarization.

Figure 6: The board game as implemented by Backstabbr. Players place moves on the board and the interface is
scraped.

3823

Principle

Example

Authority

Sent to Germany, England, Austria, Russia: So, England, Germany, Russia,
y’all played a great turn last turn. You got me to stab my long-time ally and you
ended our pretty excellent 7-year run as an alliance. Russia told me he was with
me if I stab Austria. England told me he wanted me to solo so long as I would
“teach him” and help his along to second place. Then y’all pulled the rug out
from under me. It was clever and effective. At this stage, my excitement about
the game has diminished quite a bit. And of course I’m happy to play on and
take my lumps for falling for “Hey, I really want you to solo, just help me place
second,” but if you guys just want to call it a five-way draw among us and grab
a beer together, while reviewing the statistics, that’s really my preference.
I am outnumbered and I obviously can’t solo. And I’m sure some of you in the
north are eager to send everyone else flying my way, but I expect Russia and
England to be careful, and so I’m not sure there is much room to move forward
without simply tipping the board to Germany’s favor.
I propose that we draw and hug it out.
1) You’ve been straight with me all game. 2) You have a much better ability to
read the board than she does. 3) You’re on the other side, so you can’t really
stab me, but I could totally see her moving to Tyrolia some time soon. 4) You’re
not in France’s pocket.
Maine is beautiful! I used to go to scout camp there.
I’d like to have your final thoughts on A/R as quickly as possible so that I have
time to execute a plan. But I understand if you want time to think about it.

Reciprocity

Likability
Scarcity

Table 7: Examples of persuasion from the games annotated with tactics from Cialdini and Goldstein (2004).

3824

Feature

Key Word

claim

accordingly, as a result, consequently, conclude that, clearly, demonstrates that,
entails, follows that, hence, however, implies, in fact, in my opinion, in short,
in conclusion, indicates that, it follows that, it is highly probable that, it is my
contention, it should be clear that, I believe, I mean, I think, must be that, on
the contrary, points to the conclusions, proves that, shows that, so, suggests that,
the most obvious explanation’, "the point I’m trying to make", ’therefore, thus,
the truth of the matter, to sum up, we may deduce
abandoned, abandonment, abandon, abase, abasement, abash, abate, abdicate, aberration, aberration, abhor, abhor, abhorred, abhorrence, abhorrent,
abhorrently, abhors, abhors, abidance, abidance, abide, abject, abjectly, abjure,
abilities, ability, able, abnormal, abolish, abominable, abominably, abominate,
abomination, above, above-average, abound, abrade, abrasive, abrupt, abscond,
absence, absentee, absent-minded, absolve, absolute, absolutely, absorbed, absurd, absurdity, absurdly, absurdness, abundant, abundance, abuse, abuse, abuse,
abuses, abuses, abusive, abysmal, abysmally, abyss, accede, accentuate, accept,
acceptance, acceptable, accessible, accidental, acclaim, acclaim, acclaimed,
acclamation, accolade, accolades, accommodative, accomplish, accomplishment, accomplishments, accord, accordance, accordantly, accost, accountable,
accurate, accurately, accursed, accusation, accusation, accusations, accusations, accuse, accuses, accusing, accusingly, acerbate, acerbic, acerbically, ache,
achievable, achieve, achievement, achievements, acknowledge, acknowledgement, acquit, acrid, acridly, acridness, acrimonious, acrimoniously, acrimony,
active, activist, activist, actual, actuality, actually, acumen, adamant, adamantly,
adaptable, adaptability, adaptive, addict, addiction, adept, adeptly, adequate,
adherence, adherent, adhesion, admirable, admirer, admirable, admirably, admiration, admire, admiring, admiringly, admission, admission, admit, admittedly,
admonish, admonisher, admonishingly, admonishment, admonition’ . . .
additionally, also, alternatively, although, as an alternative, as if, as though, as
well, besides, either or, else, except, finally, for example, for instance, further,
furthermore, however, in addition, in fact, in other words, in particular, in short,
in sum, in the end, in turn, indeed, instead, later, lest, likewise, meantime,
meanwhile, moreover, much as, neither nor, next, nonetheless, nor, on the other
hand, otherwise, overall, plus, rather, separately, similarly, specifically, then,
ultimately, unless, until, when, while, yet
accordingly, as a result, as long as, because, consequently, hence, if and when,
if then, in the end, in turn, indeed, insofar as, lest, now that, once, since, so that,
then, thereby, therefore, thus, unless, until, when
after all, assuming that, as, as indicated by, as shown, besides, because, deduced,
derived from, due to, firstly, follows from, for, for example, for instance, for
one thing, for the reason that, furthermore, given that, in addition, in light of, in
that, in view of, in view of the fact that, indicated by, is supported by, may be
inferred, moreover, owing to, researchers found that, secondly, this can be seen
from since, since the evidence is, what’s more, whereas
after, afterward, as soon as, by then, finally, in the end, later, next, once, then,
thereafter, till, ultimately, until
also, as long as, before, before and after, earlier, in turn, meantime, meanwhile,
now that, previously, simultaneously, since, still, when, when and if, while

subjectivity

expansion

contingency

premise

temporalfuture
temporalother

3825

comparisons

after, although, as if, as though, besides, by comparison, by contrast, conversely,
earlier, however, in contrast, in fact, in the end, indeed, instead, meanwhile,
much as, neither nor, nevertheless, nonetheless, nor, on the contrary, on the one
hand on the other hand, on the other hand, previously, rather, regardless, still,
then, though, when, whereas, while, yet

Table 8: The word lists used for our Harbingers (Niculae et al., 2015) logistic regression models.

3826

#

Speaker Message

Actual
Lie

Suspected
Lie

0

Italy

Truth

Truth

Truth
Truth

Truth
None

Truth

Truth

1
2

3

Germany!
Just the person I want to speak with. I have a somewhat
crazy idea that I’ve always wanted to try with I/G, but
I’ve never actually convinced the other guy to try it.
And, what’s worse, it might make you suspicious of
me.
So...do I suggest it?
I’m thinking that this is a low stakes game, not a tournament or anything, and an interesting and unusual
move set might make it more fun? That’s my hope
anyway.
What is your appetite like for unusual and crazy?
Germany You’ve whet my appetite, Italy. What’s the suggestion?
Italy
Okay, don’t hate me! Key West (Just thought of the
name lol)
Basic point is that I move to Tyr in Spring and into
Mun in the Fall, while I take Tun with my fleet. I build
A Ven/F Nap. You open to Ruh/Hol/Kie, and force
Belgium. You wind up with 2 builds, and the sympathy
and concern of your neighbors who are astonished at
the crazy Italian. “What a stupid move, he can’t hold
Munich!” Trap is set to obliterate France in the Spring
of 02. Bel S Mun - Bur, Ven - Pie, Tun - WMed. France
won’t see it coming, He will see that attack on Munich
and think that both you and I will be occupied for a
while. So Spring 02 should be a serious surprise.
Now, you’re taking risk here, because you’re giving
up a home center for a turn hence the “Key”), but I
think you can see pretty clearly that I derive no benefit
from trying to double-cross you. After all, Italy trying
to hold Munich is just dumb. I’m from a school of
thought that even trying to move to Munich is just
dumb. But this would be the one exception. I can’t
hold Munich, and even if I wanted to, it would give me
an awkward snake formation in the middle of the board
that is a great way to be first eliminated. So I think this
works because you know (even more than Austria in
a traditional Key Lepanto), that I’m not going to stab
you. And doing it this way allows us to take Burgundy
by surprise, it ensures you get Belgium, and it crushes
your biggest rival and toughest border (France). Plus,
it’ll be fun. The Key West! Thoughts? *This message
crashed the Beta version of the bot due to its length
and is not in the dataset. It is manually extracted and
added here the purposes of readability*
Germany It seems like there are a lot of ways that could go
wrong...I don’t see why France would see you approaching/taking Munich–while I do nothing about
it–and not immediately feel skittish
3827

4

Italy

Yeah, I can’t say I’ve tried it and it works, cause I’ve
never tried it or seen it. But how I think it would
work is (a) my Spring move looks like an attack on
Austria, so it would not be surprising if you did not
cover Munich. Then (b) you build two armies, which
looks like we’re really at war and you’re going to eject
me. Then we launch the attack in Spring. So there is
really no part of this that would raise alarm bells with
France.
All that said, I’ve literally never done it before, and
it does involve risk for you, so I’m not offended or
concerned if it’s just not for you. I’m happy to play
more conventionally too. Up to you.
5 Italy
I am just sensing that you don’t like this idea, so shall
we talk about something else? That was just a crazy
idea I’ve always wanted to try. I’m happy to play more
conservatively.
6 Italy
Any thoughts?
7 Germany Sorry Italy I’ve been away doing, um, German things.
Brewing Lagers?
8 Germany I don’t think I’m ready to go for that idea, however I’d
be down for some good ol’-fashioned Austria-kicking?
9 Italy
I am pretty conflicted about whether to guess that you
were telling the truth or lying about the “brewing lagers”
thing. I am going to take it literally and say thumbs
down even though I don’t think you meant it deceptively.
10 Italy
But I think I can get over “Lagergate” and we can still
be friends.
As of right now, I think Austria may be my most reliable ally. I’m thinking I’d like to play as a Central Trio
if you have any interest in that. Thoughts?
11 Germany We haven’t even passed a season yet and you have a
’most reliable ally’?
I’ll consider this proposal but, basically, I’m not going
to expose myself to risk from either of you until I’ve
seen a bit of your behavior
12 Italy
Well, at least I have an idea of who to trust. Obviously,
my ideas are subject to change.
I understand your desire to watch behavior before committing to anything. I, personally, am a partner player.
I look carefully early in the game for a small group to
work with, and then I value loyalty and collaboration.
I like to work closely with a tight-knit alliance.
If you prefer to hop and back and forth, or play more
of an individual game, then we might not be a good
match.
I’m looking for a loyal ally or two that I can coordinate
with and make awesome moves with. Makes the game
easier and a lot more fun.
3828

Truth

None

Truth

None

Truth
Truth

None
Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

13 Italy

Truth

Truth

14

Truth

Truth

Truth

None

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth
Truth

Truth
Truth
Truth

Truth

Truth

Truth

Truth

15

16
17

18

19
20
21
22
23

Just an FYI: I’ve now had both England and France
suggest to me that I should move to Tyrolia and France
will support me to Munich in the Fall. One saying that
to me is not a big deal, but with both mentioning it, my
alarm bells are going off. I am concerned about an E/F.
I’m certainly not moving to Tyrolia. But I just want
you to be cautious here. I feel like England and France
are working together.
Germany I appreciate the tip, but I’m wondering why you’re so
against ousting me from Munich if I haven’t explicitly
agreed to be your ally?
Italy
Because it is terrible, terrible play for Italy to attack
Germany, in my view. If I were to attack you in Munich, I could never hold Munich. So, all I would be
doing is weakening you, and helping France, England,
or both to get really big.
I don’t have any long-term path going north. Helping
France to take you down is a sucker’s play, whether
you are working with me or not.
Italy
Did France tell you he was moving to Burgundy, or
was that a stab?
Germany I was not informed of it, no. And England is leading
me to believe it’s part of a play for Belgium, so if
they’re working together this might be a trick...
Italy, you seem like a straight shooter, and Austria has
confirmed with me about your two’s alliance. So I’ll
confide in you–this is my first ever game of diplomacy,
and I think that teaming up with the two of you could
help me learn more and have more fun. So, if you’re
still interested in a central powers alliance, I’m in.
Germany Okay full disclosure: I’m not very smart, and I accidentally let slip to England that you told me France
was plotting to take Munich. I’m sorry for the error
but I figured it was better to admit it so you know that
England/France may not trust you.
Italy
Okay, thanks for telling me.
Germany So, um, no alliance then?
Italy
I do want to be allies. Sorry, busy weekend here running around with bambinos. More to come.
Germany What would you think of helping me take Marseilles
in two turns?
Italy
Hi Germany, I’ll certainly consider that. Though, I’ll
note: traditionally, Germany would help Italy to Marseilles if the two of them work together there. The
reason is that: if I help you to Marseilles, I’m basically
cut off from going west and getting anything myself.
So, usually, Germany would help Italy into Marseilles
to encourage Italy to come west and Germany would
plan to take Paris, Belgium and Brest.

3829

24 Germany Fair enough–I’ll help you take it, then, but I’ll need to
deal with Belgium first.
25 Italy
How are things going with England? I think that getting him to work with you is the main key here.
26 Germany I’m trying–I just offered to assist with taking Sweden
in exchange for some assistance into Belgium...not
sure if they’ll go for it...
27 Italy
I’ll check with England and try to see where his head
is at.
28 Germany I’ve actually been thinking about this game all day
and have come up with a plan I like a bit better... but
England still hasn’t responded to my initial offer.
29 Italy
That’s the worst!
And I’m glad to see you’re so focused on this in your
first game. It’s a really great game if you put in the
time and effort!
30 Germany You’re definitely telling the truth on that one. So can I
count on you to move to piedmont this season?
31 Italy
I don’t think I can afford to move to Piedmont this
season. I don’t really trust Austria to avoid walking
through that door if I leave it wide open.
I think you need to get England on board to attack
France.
32 Germany That’s valid. And actually I was conferring with England and we concluded that it’s not really gonna be
possible for me to help you take Marseilles this year
anyway.
...what are you and Austria planning for this year, then?
I’m willing to tell you my plans in exchange as a gesture of trust.
Have you communicated at all with England or France?
33 Italy
Hi, are you there?
Just woke up.
England did return my message, but he did not tell me
anything substantive so I really don’t know what he’s
doing. I’m planning to move towards Turkey.
34 Italy
Well, you’re in trouble. That England move is trouble.
I’m going to try to convince him to change course. I
suggest you be very kind to him, and don’t burn that
bridge. I think your game hinges on turning England
around.
35 Italy
Hi Germany,
I’m working hard on turning England. And I’m also
trying to get Russia to come to your aid. Doing the
best I can! I’ll keep you posted.
36 Germany England just told me that Russia is helping them to
take Denmark so that may be a lost cause. Granted,
the source for that intel is a serpentine jackal-spawn

3830

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

None

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

37 Italy

Truth

Truth

38

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth

None

Truth

None

39
40

41

42
43

44
45
46

47

Okay, I’m reasonably sure that England wants to take
the Channel and attack France now.
I believe that you should basically do whatever England asks to help make this happen. As long as E
attacks F, you will be in a much better position, and
you’ll gain back centers quickly.
What are you hearing?
Germany What are your plans for this turn? I can’t help but
notice that Munich is surrounded by foreign armies on
three sides...
I wish I could be more helpful but I’m pretty much just
treading water right now trying not to lose anything
else
Italy
Hey — sorry, just getting back into this now.
Italy
I have good news! (1) I am finally attacking France
this turn. (2) I will be supporting Munich to hold from
Tyrolia.
Let’s turn this game around, yes?
Italy
I am pretty sure that England is not attacking you
this turn. And I am committed to supporting Munich
holding. Make sure you don’t move Munich so that it
can take my support.
Germany Okay, can do. Thanks!
Italy
I suggest that you order: Kiel Support Berlin holding Berlin Support Munich holding Helg to Holland
Munich Support Berlin holding
Germany I agree completely–although I didn’t know that a country could hold *and* support at the same time! Thanks!
Germany Thanks Italy. Hope you’re enjoying the weather on the
Anatolian
Italy
I will be supporting Munich to hold again. And I’ll be
trying to get Russia to back off your flank and protect
himself against an Austrian stab that is coming.
Italy
Two bits of advice: #1 I suggest you tell Russia that
Austria is coming for him. You really want Russia
to move Sil back to Gal. You might also suggest to
Russia that is he supports you to Denmark, you will
then support Russia back to Sweden. I don’t know
yet if it actually makes sense to do that, but you want
Russia thinking that you are eager to work with him.
He’ll be hoping for a reason to break off his attack on
you at this point.

3831

48 Italy

Truth

None

49

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

50

51

52
53

54

55

56

57

#2 Here is the move set I would suggest right now:
Kiel Support Holland holding Holland Support Wales
to Belgium (tell England you are going to order this
support and he can take it or leave it) Munich Support
Berlin holding Berlin Support Munich holding
I think that both France and Russia are about to back
off you, as they are both under fire at home. Just hold
still, and soon you should be able to break out of this
holding pattern.
Germany God, I hope so! I’m attempting to make that deal with
russia now...and I’m talking with England re: Belgium
Italy
It’s none of my business, but if you do plan to take
Denmark, I strongly recommend you wait until Fall.
I think the most important thing for you right now is
getting England fully committed against France. If that
happens, taking Denmark later will be easy.
Germany I think me and England are really on the same page at
this point regarding France. I’m actually sort of running counter-intelligence for England (and my friends
to the south, of course!) with Russia right now.
England and I talked about Denmark too...and it seems
like one or the other of Denmark or Belgium should
work out for me this year and I’m fine with that
Italy
Great to hear. Thank you.
Germany Do you need me to disrupt Bur this year? I’ll need to
seriously trust Russia if I’m going to risk not holding
my eastern front, I think...
Italy
I do think a move to Burgundy makes sense for you
this turn, and I can’t imagine Russia attacking you here.
He has a serious Austria problem.
I suggest this: Mun - Bur Ruh - Bel Hol Support Ruh Bel Ber - Kie
Tell Russia that the last thing in the world you want
to see is Austria run him over, and you’re willing to
help keep Russia viable if necessary (you’re angling
for Russia to disband his northern holdings this turn).
Italy
And ask England nicely to support Ruh - Hol, with
the explanation that you don’t plan to ask for Denmark
back, but you think it would help you both to diminish
France. (You’ll get Den back eventually, but you want
England to think you don’t care about it).
Germany Thanks, I’ll work on these. ...Why didn’t you scooch
into the Aegean behind Austria? You could have defended or even held Bulgaria this turn?
Germany England and I were talking about your moves for this
season–what do you think of convoying Pie into Spa,
supporting this with Wes, and then moving Tyr into
Pie?

3832

58 Germany This leaves Marseilles open for Bur to fall into if
France goes that route, which gives me an opening
into Bur
59 Italy
That’s not bad.
60 Italy
I was kind of thinking I should pick one or the other of
Marseilles or Spain to attack and not tell a soul which
one I’m going after.
61 Italy
Do you really think it’s important to coordinate?
62 Italy
I do think you’re best off moving to Burgundy. And
there is some chance that we fail this turn. But I think
we just take a guess and hope for the best. We’ll get
him next turn if not this one.
63 Germany Okay—sorry for being nosy! I will try for bur on the
off chance it shakes out that way
64 Italy
Nah, you’re not being nosy at all. I mean, come on,
we both know that I have no problem sticking my nose
where it doesn’t belong.
65 Germany Marked as true
66 Italy
I like to coordinate, but on these sort of 50/50 guesses,
I kind of like to keep it secret so that if it doesn’t go
well, I have nobody to blame but myself.
67 Italy
Ha!
68 Germany Well, are you willing to humor my question about the
Aegean, anyway?
69 Italy
Sure. I was thinking of moving that fleet to Ionian.
You think a move to Aegean is better? I’m not really
sure, but let’s talk it through.
70 Germany No sorry I meant in hindsight–like this past turn you
should have moved to Aeg so that this current turn,
when Austria takes Rumania (from Bulgaria), you’d
be there to cover Bulgaria so it couldn’t get scooped
by the Black sea, and potentially you’d just get to take
it.
71 Italy
Not a bad point. I agree.
72 Italy
Hmmmm, kind of a pointless lie if you ask me, but I
won’t hold it against you. You’re in a tough spot.
73 Germany um what lie? I did exactly the moves you suggested!
74 Italy
Ha! So sorry!! I meant that for France!
75 Italy
You are my favorite.
76 Germany Marked as lie because clearly austria is your favorite.
Speaking of, I assume that your seizing Trieste was
mutually agreed upon?
77 Italy
Yes — agreed upon.
78 Germany That’s not what Austria said to England...
79 Italy
Hmmmm, okay. Well, let’s just keep that between you
and me then.

3833

Truth

Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth
Truth
Truth
Truth

Truth
Truth
Lie
Truth

Truth
Truth
Truth

Truth
Truth
Truth

80 Germany You know Italy, I think we *do* need to coordinate
your move this time–England and I have a shot at either
Bur or Mao if one of Marseilles or Spain can be left
open for France to fall into. This will improve all of
our chances of crushing France quickly.
81 Italy
Okay, I can dig it. What do you want me to do?
82 Germany Let me confer with England and get back to you. Glad
to hear that though!
83 Italy
So...any thoughts on how to approach this?
84 Germany It looks like England’s not willing to try for MAO if it
means possibly losing the channel. However, they’ll
bring the NWG fleet around to try for MAO next year.
So if you could keep Marseilles open, it will help me
to try and take Burgundy this turn.
85 Italy
If I leave Marseilles open, would you kindly use Burgundy in the Fall to help me take Marseilles? (Likely
that means ordering Burgundy to Gascony to cut support)
86 Germany Will do.
87 Germany Okay, so I still have a teensy little bone to pick with
you: on the off-chance that Austria wasn’t lying and
you *did* take Trieste unexpectedly, I sort of worry
that I might be next. Are you willing to tell me what
your plans are for the Tri unit, or at least to warn me
before any move into Tyrolia?
88 Italy
Sure. But, you’ll see from my moves this turn that
Austria is lying to you.
89 Italy
I currently have Tri - Tyrolia. I like the unit there
because it sets up an attack on Austria if I ever want to
go that route (build A Ven and go east). Do you want
me to keep Tyrolia clear?
90 Italy
I’ll add — I would never attack Germany as Italy. Setting myself as a giant column like that is just not defensible. It would be a terrible move.
91 Germany Not when that column is not-so-giant and in a turf war
with France.
92 Germany oh you mean setting *yourself*
93 Germany But you could easily pick off, say, Munich and not be
a "giant column"
94 Italy
I mean this sincerely: any Germany who does that is a
terrible player.
Why would I do that? I would need 2-3 units to hold
one center. That is a net negative. And all of your units
are doing things that are good for me in containing
your neighbors.
I’ve been working hard in this game for you to succeed
and knock back France and England. I can say with
100% certainty: I’m not going to attack you. I’m going
to keep helping you as much as I can.

3834

Truth

Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

95 Italy

That said, if you want me NOT to move to Tyrolia, I
won’t move there.
96 Germany Nah, I just needed some reassurance :) Your logic is
undenyable— enjoy your stay in tyr!
97 Germany *undeniable? That looks better
98 Italy
I mean it sincerely. I think that England will want to
coax me to attack you with him after France falls, but
I’d much rather work with you against England.
But first thing’s first — let’s get rid of France.
99 Germany Agreed
100 Germany (On the france part)
101 Germany Sorry I won’t be able to cut off Gascony this turn...I
probably should have just told you my moves; you
could have advised me that supporting Mun-Bur was
more important than Kie-Ruh
102 Italy
No worries. We’ll crack this but eventually.
Here is my suggestion for this turn: Kie - Den Hol S
Bel holding Bel S Ruh - Bur Mun S Ruh - Bur Ruh Bur
103 Italy
I think you should suggest to England that he gets
Sweden and St Petersburg, while you get Denmark
back. That’s only fair, as you have been a loyal ally in
the fight against France and you plan to continue to do
that.
104 Germany The moves I had already planned differ in one respect:
I thought it would be worth the risk to try moving
Hol-Bel and therefore move Bel-Bur. Even if me and
France are high-fiving in Bel for a few seasons it’s still
mine, and it’s not like Holland has anything better to
do while I’m still allies with England.
...The only reason I’m reluctant to make that agreement with England is that—while I think *you* and I
have a good relationship—I really have not talked with
Austria much at all, and I’m the next logical target for
them when Russia’s gone. And anything that’s bad for
Russia right now is good for Austria.
105 Italy
Hmmmm, I’m just not sure you should trust England
enough right now to leave Holland open and Belgium
essentially unguarded.
France is a really good player, and he is no doubt working hard to get England to turn on you. My personal
take is that you are better off being a bit more conservative until you have Denmark back and England has
moved another fleet towards France. But I can see it
either way.

3835

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth
Truth
Truth

Truth
Truth
Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

106 Italy

With regard to Russia, talk it through with England.
What you don’t want is England taking out Russia and
giving you nothing. So, if England agrees to let Russia
be for a while, then your plan sounds good. But if
England is going to take Sweden, you really should get
Denmark back. (I’m my view)
107 Germany Okay you’ve convinced me: it’s worth figuring out
what E’s plans are for Russia at least.
And you’re almost certainly right, from a rational perspective, about leaving Holland/Belgium vulnerable to
England. But I think England really is counting on my
assistance in taking France, and because of that and
other non-quantifiable reasons I trust them.
108 Italy
Excellent. Obviously you have a much better feel for
your relationship with England than I do. Just know
that France is persuasive, and I’m sure that’s what he’s
working on. He stopped talking to me, so I bet he’s
trying to turn England. Just keep reassuring England
that you want to work with him long-term so he doesn’t
succumb to the Dark Side.
109 Italy
Hi Germany — well, I think we’re getting to a critical
point in the game here. France held out a long time,
but he’s much less of a threat now. I think the critical
issue, for you, is England.
I have some thoughts on the matter, and some information, but I’d like to feel confident that you and I will
keep anything we say between us. I think of you as the
one person who has been honest with me on every turn.
You even tell me the truth when it’s bad news, or when
you don’t completely trust me, and I like that.
110 Germany Okay, Italy. I won’t share any of this conversation.
But in the interest of continued full disclosure, here’s
what I think: England is a greater threat to *me* on
the map, but *you* have a greater chance of soloing
this game quickly, or pair-winning with Austria even
sooner. And if I continue to collaborate with England,
we at least have a chance of slowing that down. So I’m
in sort of a conflicted spot
111 Italy
This is why I like you. The full disclosure part. You
tell me the truth even when the news isn’t great.
112 Italy
My thoughts on the “Germany/England forever so that
at least we can stop the solo” strategy: (1) It’s quite
early to be talking about solos. I am at 8, and Austria
could take 3 from me any time, quite easily. (2) I
don’t think England is thinking that way. I think he’s
thinking that a dominant power will emerge in the
north, and one will emerge in the south. And he’s like
to be that dominant power.

3836

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

113 Italy

England’s pieces are not positioned well if he’s trying
to attack France or contain Italy. He keeps Denmark
guarded, and North Sea filled. He is not playing like
he intends to stick with you, even though I’m sure he’s
telling you that.
114 Italy
You’re right that you don’t want to start a war with
England right now. But, you must stick up for yourself,
because nobody else will do that if you don’t.
115 Italy
If I were you, this is what I would do: (1) keep warning England about the dangers of Italy getting too big
and insist that England moves his fleets towards MAO
(Channel to Irish, Norwegian to NAO, North - Channel), (2) insist on taking Denmark back.
116 Italy
I would say something like this:
England, I’m with you my friend, but we’re passed the
stage of you needing to keep me under lock and key. I
need to take Denmark back. I’m happy to support you
to Brest to keep you growing, or you can grab Sweden.
You have plenty of options other than keeping your
ally’s center, but if you really want to be my ally longterm, you’ve got to show me that.
117 Italy
I am hearing from England signs that he may be thinking of attacking you soon. And I think you actually
avoid that better by being strong and sticking up for
yourself rather than being accommodating and letting
him do whatever he wants to do.
118 Germany Well, both you and France have now pointed out that
England is strategically not in a good place to be my
ally right now, and you are correct. I’ll be more cautious with my northern border, but I made a pretty
strong argument for denmark this past turn and it fell
on deaf ears
119 Germany ...which probably also should have been a sign for me
120 Italy
Well, if you want, you could just take Denmark this
next year and I don’t think England is in a position to
retaliate.
121 Germany Probably not...has France been talking with you at all
about their sunsetting strategy? They’ve indicated a
willingness to work with you and me and a desire to
see England get as few dots as possible
122 Italy
He did say that to me too. Though, France has a long
history of lying to me, so I really don’t trust him.
123 Germany Well France has actually been pretty honest with me,
and I at least am certain that they wouldn’t betray me
to England. So, I’m considering working with F to
sabotage (or potentially full-on backstab) England this
turn, which would have the side-effect of maybe taking
some attention away from the south for you anyway.
124 Germany (and I’d be interested to hear your thoughts on this if
you’re in the mood to give out free advice)
3837

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

125 Italy

Hi Germany — sorry for the delay. Well...I think it’s
really important that you get a build this turn either
way. I don’t think England will get a build this turn, so
if I were you I’d probably take Paris, build a fleet, and
move on England after that.
126 Italy
But it likely depends on how communication is going
with England. If he’ll give you back Denmark, that
might change the equation.
127 Germany I am waiting on England to make a decision about
that–they claim to be thinking about it.
128 Germany England told me you said I was plotting with France.
It makes sense you’d want to pit us against each other.
129 Italy
Hey — tried to send you a message earlier but not was
down. England was telling me that you’re saying that
I told you that England is plotting against you. The
problem with telling England that is that he will stop
giving me useful info.
130 Italy
Truly, I don’t want you and England to fight. I am not
trying to break you up. I suggested that you take Paris!
I want you guys to work together with me against
France.
131 Germany You don’t want us to fight, yet you betrayed both of
our confidence with you in a way that makes us distrust
each other?
132 Italy
I really don’t think that’s a fair description. You guys
both wanted to attack each other. I encouraged you
both to keep working together.
133 Germany Just as long as it suits you. Are you going to give
England Mao?
134 Italy
Hmmm, should I be reading that as angry sarcastic
with dagger eyes? (I’m not sure if I’m getting your
tone right)
135 Italy
We’re friends, right? I believe that every single message I’ve sent you all game has been truth, and I’ve
gone out of my way to give you candid advice. Are we
still friends?
136 Italy
Regarding MAO — I don’t know. What do you want
me to do? I don’t have any set plan.

3838

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

137 Germany Yep, there’s some sarcasm there. Looking back at
your messages, I still don’t read them as encouraging
collaboration. And if you wanted us to be friends, you
could have done that without betraying me to England
by simply saying in your candid way "I don’t think
you should do that for such and such reason". But you
chose to increase E’s distrust of me. So I think you
might be full of gnocchi and crap.
My trust in you is a bit shaken but I still think we can
have a working partnership with a bit more caution on
my end. It would be my preference that you hold Mao,
on the assumption that if it came down to a choice
between partnering with me or England, you’d choose
me. If that’s not the case, then as the filling of an
England-Italy sandwich I’m in no position to retaliate
anyway.
138 Italy
Well, again, I like that you’re honest with me, even
when the news is bad.
139 Italy
I have to say that I’m surprised that you feel that I’ve
betrayed your trust. I have been feeling like maybe I’ve
been TOO helpful to you, and been a bit over the top
in offering advice, etc., but it seems like I’ve misread
the situation.
140 Germany No, it’s completely true that you’ve been too helpful,
and I’m really really grateful for it because I’ve been
able to learn so much from this game. But it’s also true
that you didn’t have to tell England what you did, and
all you stood to gain from it was that it shook my and
E’s trust in each other.
141 Italy
But I understand what you’re saying, and I much prefer to have a heart to heart like this, a frank airing
of grievances, rather than being surprised by unkind
moves on the board. https://youtu.be/xoirV6BbjOg
142 Germany Was not expecting seinfeld today and it was a pleasant
surprise
143 Italy
:)
144 Italy
Here’s the deal: I like you better than England.
145 Italy
I’m not sure how the next couple of turns are going
to shake out. But I like that you tell me when you’re
angry with me. I know that may seem like a small
thing, but it’s just rare in Diplomacy. You get so many
fake smiles.
146 Italy
So, if it comes down to you or him, I’m choosing
you. And I’ll work to do a better job of keeping your
confidence. I certainly understand how important that
is, as I hate it when people o that same thing to me.
147 Italy
So no more playing mediator for me.
148 Germany Okay. Is it true that you want the channel?
149 Germany And are you planning to keep Vienna?

3839

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Lie
Truth

Truth
Truth
Truth

Truth

Truth

Truth
Truth
Truth

Truth
Truth
Truth

150 Italy

I am not planning to keep Vienna. And yeah I’ve asked
France for support to the Channel. Do you think he’s
on board?
151 Germany I’m not sure. Is *England* on board? Is this something
England can know about?
152 Italy
No, do you think France will Support me to the Channel?
153 Germany France has asked my opinion on it, and I haven’t given
it yet. To my estimation things look a lot better for me
if you don’t end up there: I don’t want to see England
in Mao, and I don’t want to see you snagging pieces of
the north.
154 Italy
Okay, well, here is my thinking. Tell France whatever
you want to make him happy. Then tell me how you
really feel. And if you don’t want me to go there, I
won’t go there.
155 Germany If I hadn’t asked you about it, would that have just
been another surprise, too?
156 Italy
Absolutely.
You and I have discussed our moves and been honest
with each other every turn. But we have not been
sharing all our moves or pre-clearing all of our moves.
So that would have Ben a surprise in the same way that
your moves are a surprise to me. (I never tell you what
to do or insist on knowing).
157 Italy
I kind of thought that you would have wanted me in
the Channel because it commits me further against
England, but I can understand what you’re saying now
about wanting me to hang back.
158 Italy
But I don’t think there is anything wrong with me
contemplating moves without telling you all of them.
You asked me about it, and I told you the truth.
159 Germany I do think that this move is a breach of general expectation, which is the kind of thing I’d like to know about.
And it’s also the kind of thing I’ve shared with you:
case in point, my desire to stab England.
160 Italy
Okay. Understood.
161 Germany Is there anything I could gain from seeing you in the
channel? Would you support me taking Nth, and potentially seizing the island?
162 Germany Here’s what I’m thinking: I would be on board with
you taking the channel (and I’d give France the green
light to go ahead with it) if you would agree to bump
Nao out of Mao using Wes, and if you’d be open to
supporting some anti-English aggression while holding
the channel so that I can get on equal footing with you,
dot-wise.
If you don’t want to agree to those terms, that’s okay,
but I would strongly prefer not to see you in the channel
in that case.
3840

Truth

Truth

Truth

None

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

163 Italy

I’m going to be out of pocket this weekend, so let’s
talk this through more on Monday. Generally, I agree
that I’ll either stay out of the Channel or agree to your
terms for entering there.
164 Germany If you decide to stay out of the channel, I have a deal
that I like with England in the works. For that deal to
go through, you’d have to agree to move Mao into Portugal to let England take Mao. Would you be amenable
to that?
165 Germany (If this second offer is more to think about than a nobrainer, you can just mull it over and let me know
monday)
166 Italy
So, here is my concern with the England offer: If I’m
taking Portugal, why do we want England in MAO?
And why would he want to go to MAO? I’m not sure I
understand that one. Can you explain?
167 Germany Well, when I initially proposed the deal I had forgotten
that Portugal was promised to England. Then England
agreed to it on the condition that you would confirm
that move, so I figured E thought you would just move
out of there next year? But now that I think about it,
it’s probably worth asking England why they’d agree
to that.
168 Italy
I’d prefer that you not tell England I am considering
moving to the Channel. I don’t think he would like
that.
169 Italy
I don’t really want to discuss this stuff with England at
all.
170 Germany Well, England changed their mind about the plan I
offered anyway. So, are you taking the channel?
171 Italy
No, I’m not taking the Channel.
172 Germany Okay was that a recent decision? Because like an hour
ago France said they were supporting you into the
channel
173 Italy
Well, when I tell you what I plan to do, do you turn
around and tell France? This makes me uncomfortable
speaking with you.
174 Germany I haven’t spoken to France since then. I didn’t realize
you were giving the two of us different information on
this particular subject. But I don’t think I’ve revealed
anything to them about what you plan to do. Mostly
because you haven’t told me.
175 Italy
Well, I have been honest with both you and France.
You told me that I need to promise you a set of things
in order to take the Channel. I felt like it was more
than I could be sure of doing, so I am not entering the
Channel. I won’t go there without your permission.
176 Germany I appreciate that. And I’ll keep the remainder of this
conversation between us unless I hear otherwise. Have
you just recently made an agreement with England?
3841

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

177 Germany I heard as much but I want to verify the contents of
that agreement with you
178 Germany Btw, France just said that they submitted the orders to
support you into the channel.
179 Italy
I don’t have an agreement with England, but he is
asking me about my moves and trying to get my help.
180 Germany Okay–then England is lying to me, saying that you’re
helping support Eng-Brest.
181 Italy
Ha! Yeah, fat chance.
182 Germany ...but did you lie to England about that? Or can I say to
England that I don’t think you’ll actually provide that
support?
183 Italy
What is Paris up to?
184 Italy
I suggest you just not tell England anything about my
moves.
185 Italy
Do you want me to support England to Brest?
186 Italy
I guess I’m not sure what your goals are here.
187 Italy
I just kind of feel like you’re grilling me with a lot
of questions, but not telling me what you’re doing or
what you want from me.
188 Germany *If* you support Eng-Brest, England has agreed to
vacate denmark for me. If you don’t, I won’t get in the
way of your channel thing. Any other questions?
189 Germany I have no sense of what you want or what your plan
is, but I thought I’d been pretty clear: I want Denmark.
I am reluctant to see you in the Channel if England
remains powerful, but happy to see you there if they
are weakened.
190 Italy
Can’t you just force Denmark?
191 Germany Not without risking a swipe of Belgium
192 Germany And why force when you don’t have to
193 Italy
Okay, I’ll support England to Brest. You take Denmark.
194 Italy
And you and I should be in position to take out England
next year.
195 Germany Splendid!
196 Germany Glad everything worked out
197 Italy
Thumbs up!
198 Italy
Congratulations on retaking Denmark and getting two
builds. You are playing really well right now. Respect.
199 Germany Congrats on having double-digit dots! I have some
thoughts about taking out England, if you want to go
full-stab this season...
200 Italy
I think I do!
201 Italy
What are you thinking?

3842

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie
Truth

Truth
Truth

Truth
Truth

Truth
Truth

Truth
Truth
Truth

None
Truth
Truth

Truth

Truth

Truth

Truth

Truth
Truth
Truth
Truth

Truth
Truth
None
Truth

Truth

Truth

Truth
Truth
Truth
Truth

Truth
Truth
Truth
Truth

Truth

Truth

Truth
Truth

Truth
Truth

202 Germany One option is to take the channel, another is to take
Brest. Between you, me, and Picardy we can manage
either, but it’s a question of which takes priority. If we
chose Brest, I could also take a stab at seizing Nth this
season, then we could try for the channel in fall. Or
we could do channel first, Brest second.
203 Italy
Yeah, that is all along the lines of what I’m thinking.
How demanding does France sound right now? Does
he want to be the one who takes Brest?
204 Germany Haven’t asked. But in general not demanding.
205 Italy
Good!
Still, I think we should show him some good faith by
supporting him to Brest in Spring. We can decide in
Fall whether it makes more sense for you to take it, but
I think we want to keep France hungry.
206 Italy
I would suggest something like this to ensure the English fleet is disbanded: Pic - Bre MAO - Channel Par
S Pic - Bre
207 Italy
And Spa - Gas to cut off that retreat.
208 Italy
You can take the North Sea on the same move and set
up a convoy to the English mainland.
Checkmate.
209 Germany Okay, I like the plan! I’ve asked France if they’re
willing to move to Brest supported by me.
210 Germany Aren’t you concerned about England taking Mao? I’d
sooner just have you pile on support into Bre so that
Wes can support Mao holding
211 Italy
That’s a good point, but the problem with that approach
is that Brest is not guaranteed. If England cute MAO
and supports with the Channel, the attack fails. I think
we are better off ensuring that the Brest fleet is disbanded. If we disband that fleet and take North Sea, an
English fleet in MAO really just spreads him out and
allows you to take the island faster. It’s not like he can
get Portugal or Spain.
212 Germany Okay, but that means I’d prefer to take Brest myself
this Spring, if France is okay with it.
213 Italy
I think that we should offer France Brest in Spring.
That ensures that he is with us. Then, if conditions
are right in the Fall, I can support you into Brest.
But...England can offer France Belgium, and I think
he is sure to take that if we’re not even offering him a
center, right?
214 Italy
Better to keep France feeling like we’re going to keep
him in the game. If you need the build in Fall, it’s easy
for me to support you there.

3843

Truth

Truth

Truth

Truth

Truth
Lie

Truth
Truth

Lie

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Lie

Truth

215 Germany I guess I’m just wondering from France’s perspective
why they’d *want* to stay in the game. Isn’t it possible they’d rather move on with their life? That’s not
rhetorical, I’m wondering what your perspective is as
a veteran player
216 Italy
Here is my take: If France just wanted to go down in a
blaze of glory and say “eff you” to England, he would
have kept Irish Sea. He kept Pic, which is next to his
home center, and gives him a chance to negotiate with
both you and England.
217 Italy
I think that means he is motivated to keep trying. And
if he believes he can get Brest, he could legitimately
get back to his feet. I know that’s what I’d be trying to
do in his position.
218 Italy
As the poker saying goes: “a chip and a chair.” So
long as you have one chip left, and you’re still in the
tournament, you can always come back to win.
219 Italy
Thoughts?
220 Germany I think that makes sense. Are you talking with England
at all?
221 Italy
I’m pretty wary of England right now. He asked me
what I want to do, but I feel like he’s trying to get me
to leave MAO open. That’s not terrible news, as it
suggests that he won’t expect your move to North Sea.
222 Italy
As long as he doesn’t move NAO to Norwegian, you’ve
got a guaranteed supply center.
223 Germany Well E’d have to be a right dolt not to retreat to NWG.
And right now they’re talking to me about supporting
a move from Bre to Gas (the better for the two of us to
stab you).
224 Germany What i mean is, there’s a good chance that Mao is safe
if I "agree" to that deal
225 Germany Oh nevermind–they’re not going to convoy into Brest.
So actually this pretty much guarantees that Eng and
Nao will try for Mao.
226 Italy
Ahhhh, sneaky Devil! Thank you for letting me know.
227 Italy
I still like our plan.
228 Italy
I need to run for a bit. I’ll be around in a few hours.
229 Germany I think that knowing this, you should do as I suggest
and not poke Eng. Just hold and let Wes support. I am
94% sure I can trust England to do as they say on this
one.
230 Italy
Okay. Should I support Pic to Bre?
231 Germany yes please. It’ll do us good with France too if we both
support.
232 Italy
Thumbs up!
233 Germany Actually, you should use Mao to support Spa-Gas,
since we know that Brest is moving there. It will be
beneficial to have you there if we decide to oust France
from Bre in fall
3844

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie
Lie
Lie
Truth

Truth
Truth
Truth
Truth

Lie
Truth

Truth
Truth

Truth
Truth

Truth
Truth

234 Italy
235 Italy
236 Italy

Consider it done.
Hmmmm, heading anything from England?
I’d love to talk if you’re there. I’m getting the impression that England may actually be moving on you, and
I think I have a good counter, but I also still think we
should support the attack on Brest and take North Sea.
237 Italy
I definitely think you should keep your moves the
same.
238 Italy
Nice! Get’em! He WAS moving on you. But we
should be able to take about 3 off of him now. Very
nice turn.
239 Germany Sorry; I was asleep by 9 last night
why the move to Nao? Wouldn’t IRI be the more
anti-England choice?
With the move to Picardy and assuming a retreat to
SKA, it looks like England has me pretty powerless
this turn.
240 Germany So do you, it seems, if you have some kind of deal with
Russia about Munich.
241 Italy
Good morning.
Just responding to your messages above. I think NAO
and Irish are equally anti-English. They both give me
a clear lane to attack Liverpool. I wasn’t sure if either
one would be left open, but I took a gamble and it paid
off.
242 Italy
Re your move this turn, I don’t think you’re powerless.
You should get a build I think and if not, you should
be in position to smash England.
243 Italy
I don’t have a deal regarding Munich, Germany.
Frankly, I thought you would be a bit more joyful
towards me. By attacking England, I have committed
completely to working as your partner.
244 Germany I suppose you’re right. Initially I was thinking IRI also
gives you channel access, but NWG access may be just
as useful.
Well when you control half a continent (and even more
when you consider your influence over me, austria,
and who knows who else!), there’s no such thing as
complete commitment. I’m not so naive as to think
your allegiance with me is going to last beyond its
usefulness, and with two fleets on the British isle that
time is fast approaching. To be clear, I’m still giving
you the truth and I still want to work with you. But you
should really stop acting surprised when I’m slightly
paranoid that a soon-to-be-dozen-dot-holder is gearing
up to stab me

3845

Lie
Truth
Lie

Truth
Truth
Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Lie

Truth

Truth

Truth

245 Italy

Well, I dunno, it sounds like I should stab you. Is that
what you’re trying to tell me?
I like you. I like how hard you’ve worked in this game
to rebound from a difficult start. I like that you e told
me the truth, even when the news was bad. I like that
you tell me when you don’t trust me. I have literally
never told you a lie in this game, and I don’t intend to
start now. Last turn I burned my bridge with England
beyond repair. If you don’t want to work with me now,
that’s really disappointing.
246 Germany like I said, I *do* want to work with you. However,
remember that thing I said about general expectations
and being warned when they’re broken? Tyrolia is
one of them and I think you knew that. And England
*also* told me they’ve never told me a lie; I’m starting
to think that’s Diplomacy-speak for "when convenient,
I’ve used careful wording and half-truths to deceive
you even when everything I said was technically true".
It would help me to know that you see me being a
benefit to you beyond taking out England. A natural
next move for us would be to take out russia, and
in that arena I have a positional advantage over you.
Especially if I get two builds this turn, I’ll be able to
sneak behind the troops in bohemia/galicia and help
you break through.
247 Italy
Yes — here is how I expect and hope the game will
play out: the two of us finish off England and France,
while drifting towards the east a bit. With the builds
we get this year, we essentially blitzkrieg the East. I
have more units than you, but you have no opposition
at all in the north, and can take Scandinavia, War and
Mos without any trouble.
248 Italy
I think that, in about two years, you and I will both be
on about 14 centers, with the remnants of Russia and
Austria between us, and we can decide how we want
to resolve it. I’d be happy to agree to a small draw, or
to shoot for a 17-17 two-way draw position, whichever
you prefer.
249 Germany Well, I like the sound of all of that. In fact, it sounds
ideal: there’s something poetic about the complete
beginner and the expert (you’ve probably heard by
now that you got doxxed) sharing a victory.
I ask for a concession: As a show of good will, would
you be willing to take only one of Liverpool or Portugal this year? (I know the Portugal request seems
weird, but I like keeping France around and unless I’m
mistaken they like me better than you )
250 Italy
Yes. I wasn’t planning to take Portugal anyway.

3846

Lie

Truth

Truth

Truth

Lie

Truth

Lie

Truth

Truth

Truth

Truth

Truth

251 Italy

I think it makes sense here for you to land an army in
the English island while you can. Now that his army is
off the island, he’s toast as soon as you do that.
252 Germany England’s just vindictive enough to try and stab Belgium with England and Picardy, though. I was planning on keeping holland around as support.
253 Germany *by England I of course mean Eng
254 Italy
I suggest the following:
Gas - Liv (via convoy) Spa S MAO holding Mar hold
Tyr - Tri
Hol - Yor (via convoy) Bur S Bel Bel S North HEL
S North Mun - Boh Par - Pic (to cut any potential
support)
255 Italy
England cannot take Belgium with those moves.
256 Italy
Or I could move my fleet into Liverpool and use Gas
to support Bre. I’m happy either way.
257 Germany I tried a double convoy in the sandbox once and it
didn’t work! What is this witchcraft?!?
258 Germany At any rate, I prefer the fleet move to liverpool and
Gascony’s support into Brest. And could Mao support
Bre into the Channel? No sense forcing France to
disband. Bel will support it, too.
259 Italy
Here are the orders needed to do a convoy! Holland
move to Yorkshire North Sea convoy Holland to Yorkshire
It is not a “double convoy” as you only need one fleet
to make it happen.
But if your fleet in North Sea is dislodged, the convoy
will not go through. That is why I would suggest
that HELG supports North Sea holding and Belgium
supports North Sea holding.
260 Germany No–I mean the one *you* were planning: Gascony to
Liverpool
261 Germany It’s a double convoy because you’re convoying through
Mao *and* Nao
262 Italy
Ah, the orders there would be: Gascony - Liv MAO
Convoy Gas - Liv NAO Convoy Gas - Liv
263 Italy
So, I’ll move the fleet to Liverpool. And you want
MAO to support Paris to Brest?
264 Italy
Or wait, MAO supports Brest to Channel, and Gas
supports Paris - Brest, right?
265 Germany yeah. I tried that once in the sandbox (or the equivalent:
back when you had fleets in Lyo and Wes I tried a
convoy from Pie to Naf). But I think I messed up the
commands to the fleets.
And yes the most recent message is correct. Those two
things and Nao-Lvp

3847

Lie

Truth

Truth

Truth

Truth
Lie

Truth
Truth

Lie
Lie

Truth
Truth

Truth

Truth

Truth

None

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

Lie

Truth

Truth

Truth

266 Italy

Okay, confirmed.
So I’ve got in: NAO - Liv MAO S Bre - Channel Gas
S Par - Bre Spa - WES Mar S Gas holding Tyrolia Trieste
Sound right?
267 Germany It does. But If Tyr was bound for trieste anyway, why
did you detour through Tyr at all? Why not just move
to trieste last turn??
268 Italy
Austria would not have liked it.
269 Italy
And he doesn’t know that it’s headed back there now
(please don’t tell)
270 Germany Understood. Me and Austria don’t talk anyway. Also,
do you have any sense of what England is planning to
do?
271 Italy
Ha! No I don’t. I’d imagine he is coming for me. But
I don’t know that.
272 Italy
If I were him, I’d defend Edi and London.
273 Germany So you haven’t been talking to England at all? I was
sort of hoping you would know more, maybe help us
take better advantage of their plans.
274 Germany Anyway, my moves are:
Par-Bre Bel s Bre-Eng Hol s Bel holding
And the rest within expected parameters. Correct?
275 Italy
England has not said anything of substance to me. He
was gracious about my move, but he won’t trust me
again, and I would not trust anything he might say at
this point. I haven’t asked him about his moves and he
hasn’t told me.
276 Italy
I thought you would Convoy Holland to Yorkshire and
support Belgium from Burgundy. Also, can you please
order Mun to Boh to cut support and allow me to hold
Vienna while moving Tyrolia to Trieste?
277 Germany I *told* you I’m not risking that convoy *and* that instead Bel is supporting France into the Channel (which
will heretofore be called the French Channel). And
could I persuade you to move to IRI instead of taking
Liverpool in exchange for the requested cut?
278 Italy
Sorry, what is the requested cut? I understand that you
don’t want me to take Liverpool or Portugal. What are
you offering to me? (I don’t mean to be difficult, I just
want to be sure I understand).
279 Italy
Ah, you must mean Munich to Boh.
280 Italy
Asking me to avoid taking Por and Liv is asking a lot.
I want France to survive here, but I also want England
taking units off the board, and I feel like you should
too, right?
281 Germany I do. But I also want those dots for myself, of course.
And there’s still the nonzero chance that you’ve arranged with Boh to take Munich for yourself, so I’m
taking a serious risk
3848

Lie

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Lie

Truth

Lie
Truth

Truth
Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

282 Italy

I will avoid taking Portugal, vacate Tyrolia, and support
you to Brest. I feel like I’m offering quite a lot in
exchange for one cut support.
And cutting that support does not put you in greater
peril. If I had a deal with Russia for Munich (I don’t)
I could cut Burgundy from Marseilles and support
Russia to Munich. Moving Mun to Boh to cut support
is costless.
283 Germany You’re right. I just thought I’d put my best argument
forward. I’ll do the cut. But I ask for something costless in exchange, and I really, really want it to stay just
between us, ok?
284 Italy
Understood and agreed.
285 Italy
And I have no problem with you asking for more than
you’re willing to settle for. That’s smart, and I do
the same thing sometimes. If you don’t stick up for
yourself, nobody else will.
286 Germany I *know* there’s more to your relationship with England than you’re telling me. The last message England
sent to me hinted that if *I* wasn’t willing to work with
them–and I haven’t said anything to them since–that
maybe *you* would. And if England were to reach
out to you, you’re too smart to just snub them. There’s
advantage to be gained–either for both of us or just
for yourself–from talking to them. The only reason I
stopped was because I knew my word would be mud
to them anyway.
Earlier I was hoping you’d give me the truth about
what you knew, and about what they might know. But
you didn’t and that both disappoints and scares me. So
I’m asking that you give me just a modicum of honesty
here: what do you know? what does England know?
287 Italy
I give you my word: I don’t know what England is
going to do and I haven’t asked.
288 Italy
He is still jovial with me and respectful. He has asked
me to critique his play and to give him advice. But I do
not know his moves, and I really don’t think he would
tell me them if I asked. It certainly would not be info I
could trust free I just lied to him about mine.

3849

Lie

Truth

Truth

Truth

Truth
Truth

Truth
Truth

Truth

Truth

Lie

Lie

Lie

Truth

289 Germany But England’s desperate. Better to talk with *someone* than just go in blind. And I doubt they’d turn
to Russia or France because neither is really close
enough/powerful enough to give real help. And there’s
precedent for you negotiating with someone even as
you stab them: France.
...and here’s the real accusation: for all your pretty
words about a shared victory between you and me,
you’ve been sneaky and you’ve always pitted me and
England against each other to your benefit. My real
fear here is that knowing my moves, and with a desperate, jovial England seeking your advice, it would be
so *easy* to just feed England enough info to keep me
weak while you chow down on the Island.
I know this from experience: back when you were doing 50/50 shots in the south of France, I did everything
I could to find out what you were planning and feed
it to France. This was merely a time-buying measure,
since France was outmatched and I would eventually
run out of pretenses to extract your move. But I wanted
to gain more dots before you took over. And I assume
others are like me, hence I suspect you now.
I’m offering this confession in hopes that you’ll do the
same. So just come clean and let’s approach this thing
as equals?
290 Italy
I am in my car, off to pick-up my kids from school.
This deserves a proper response, so please give me
some time.
291 Germany Abandon the children this is important
292 Italy
So, I’m going to speak frankly here. I am rarely offended in a Diplomacy game, and I rarely say so when
I am, but this message offends me. I’m trying to think
about why I’m having such a strong reaction to it. I
think it’s because you’re painting a picture of the game
(both your actions and mine) which are totally different
than my own perspective. (Continuing)
293 Italy
From my perspective, you were on the ropes early.
France and England were teaming up on you. You
lost Denmark and France had Holland and Munich
surrounded. You were in serious peril.
I seriously went to extreme effort to keep you in the
game. I spent hours talking with England and encouraging him to turn around and go the other way. I
completely ended my eastern campaign and spent two
seasons just making the voyage over to France so that
he didn’t have the bandwidth to continue his attack. I
have vouched for you with Austria and Russia many
times. I have supported Munich. And I have NEVER
attacked you, even when people have asked me to do
so and pledged to support me.
3850

Truth

Truth

Truth

Truth

Truth
Lie

Truth
Truth

Lie

Truth

294 Italy

I have been honest with you, I have worked hard for
your success, and I’ve made a lot of proposals to you
in which you gain centers; not me.
Maybe I am just a bad ally, but I’m not sure I remember
an alliance in which I have done more to help my ally.
Truly.
295 Italy
And to hear that (1) You think I’ve been selfish and (2)
You’ve been sabotaging me all along, that just doesn’t
sit well with me.
296 Italy
I have rarely asked for your help, and I’ve offered my
help freely. I’ve provided my sincere best efforts to
help you with tactics, and I have never sabotaged you.
Not once.
297 Italy
And if I’m totally honest with you, I could solo this
game if I felt like lying to everyone and grabbing dots.
I think I’ve got you all beat tactically. I just have more
experience. But that’s not been my intent.
298 Italy
I’ve spent hours today talking with England about how
best to play Diplomacy. I’ve tried to give him some
honest advice because he asked for it. But I don’t know
his moves, I haven’t asked for them, and I’m not going
to take advantage of that relationship to try to stab you.
It legitimately did not cross my mind until you accused
me of doing it.
299 Italy
So, I’m frustrated by this accusation.
300 Germany And I appreciate all you’ve done for me, really I do.
But “completely ending your eastern campaign” is
*not* something you did for me; your alliance with
Austria dictated that. I felt bad for betraying you while
I was doing it, but even then I knew it was the only
way to keep the game going in the face of your and
Austria’s might. And it *wasn’t* “all along”, it was
a few turns at best so that the rest of us would have
a shot at you and Austria not pair-winning right out
of the gate. And the only thing that keeps me from
thinking you’re not gonna do just that on the next
move anyway is my belief that you really do want the
victory all to yourself, which is still consistent with
everything you’ve done for me. Propping up a weak
player at the expense of stronger ones is a classic tactic.
(Continuing)
301 Germany And so, by the way, is trying to shame someone for
raising extremely legitimate concerns. Whenever I
bring up suspicion of you, you’re quick to remind
me how much you’ve done for me to put me on the
defensive and make me feel indebted. Well frankly
that reeks of dishonesty. I never asked you to do those
things.

3851

Lie

Truth

Lie

Truth

Lie

Truth

Lie

Truth

Lie

Truth

Lie
Truth

Truth
Truth

Truth

Truth

302 Germany If you no longer trust me, so be it. I knew that was a
risk when I made my confession. But i’d rather have a
partnership based on mutual honesty. That’s another
reason I confessed—you ought to know that my game
philosophy (new as it is) is to trust the map and to trust
history first and foremost. The parts of your history
that I’ve seen indicate that you’re no saint, no matter
what you may have done for me. And when the map
shows that one player is clearly dominating and that
player is you, you are being deeply naive if you think
everyone else is just going to roll over and let you get
away with it
303 Italy
No, all thumbs up from me. If I were lying to you, I’d
smile and say “that sounds great.” I’m honest with you
because I sincerely thought of us as partners.
304 Germany Oh but you’re *not*! You agreed to warn me of unexpected moves, then didn’t. When I brought this up
you ignored it and misdirected me in hopes I’d forget. You’ve revealed things to England without my
permission, and then made up a story about it after the
fact!
And you can’t be a real partner with someone who is
depending on your good graces to survive. That’s not
a partnership. We could never be real partners unless
we had some notion of equality, and I’m outmatched
in both skill and numbers.
You and Austria, however, were until recently a perfect
example of a true partnership. Dot-parity, coordinated
attacks, really beautiful work. So don’t act as if you
don’t know this to be true. We were never a partnership
of that kind.
305 Italy
Well, this is very disappointing to me, and I obviously
disagree with the way you are characterizing me and
this game.
I have a reputation in this hobby for being sincere. Not
for being duplicitous. It has always served me well.
If you feel that way, then me continuing to explain
myself isn’t going to change your mind. If you don’t
want to work with me, then I can understand that. Let’s
consider our deals and commitments to be void, and
let’s play our games separately.
If you have any deal you’d like to propose, I’ll consider
them, but I won’t continue to try to help your game if
you think I’m not sincerely trying to be helpful.
306 Italy
Well, this game just got less fun.
307 Germany for you, maybe.

3852

Truth

Truth

Lie

Truth

Truth

Truth

Lie

None

Truth
Truth

Truth
Truth

308 Italy

Sent to Germany, England, Austria, Russia: So, England, Germany, Russia, y’all played a great turn last
turn. You got me to stab my long-time ally and you
ended our pretty excellent 7-year run as an alliance.
Russia told me he was with me if I stab Austria. England told me he wanted me to solo so long as I would
“teach him” and help his along to second place. Then
y’all pulled the rug out from under me. It was clever
and effective. (End Part 1)
309 Italy
(Part 2) At this stage, my excitement about the game
has diminished quite a bit. And of course I’m happy to
play on and take my lumps for falling for “Hey, I really
want you to solo, just help me place second,” but if
you guys just want to call it a five-way draw among us
and grab a beer together, while reviewing the statistics,
that’s really my preference.
I am outnumbered and I obviously can’t solo. And
I’m sure some of you in the north are eager to send
everyone else flying my way, but I expect Russia and
England to be careful, and so I’m not sure there is
much room to move forward without simply tipping
the board to Germany’s favor.
I propose that we draw and hug it out.
310 Germany I’m down for a five-way draw.
...and by the way, England was copy-pasting to me
the most incriminating messages you sent them. So I
knew you were giving England my moves. I do have
a certain begrudging respect for you ability to deny,
though
311 Italy
Well, England is telling me he is happy to see me solo
and wants second place...so, should I say “no”? I guess
I should have. I was happy the way the game was
going before all that.
312 Germany Don’t try and pin *your* greed and deceit on England!
At least *own* it when you’re ruthless
313 Italy
You have been given an apple laced with poison. England’s only move there was to make you hate me, and
he did his job well.
You should not let your view of me be defined by
someone who has an incentive to make you never speak
to me again. We can talk about it more after the game,
but I had every intention of continuing to work with
you, and I would have done that until England made
his play.

3853

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Lie

Truth

314 Germany I have no doubt you would have continued to work
with me, but I take issue with someone who can
be asked point-blank if they’re sharing moves with
another player and lie to my face. If you’d come
clean, and explained how what you were doing actually *helped* me, somehow, we could have worked
together. But you would rather have had me in the dark
and that’s not sustainable in a partnership.
315 Italy
I was trying to play both sides, and England was lying
to me, and forwarding my press to try to incriminate
me. So, yes, I lied, and so did England. I apologize.
316 Italy
Will you please either vote to draw, or let us know that
you’d like to play this one out? I am finding it difficult
to motivate myself to speak with anyone if the game is
just going to draw shortly. Thoughts?
317 Germany I did vote to 5-way draw! And I did so again for this
season. So it’s not me who’s keeping this game alive
318 Italy
Well, as we approach the end of the academic study
portion of the game, let me say once, with the truth
detector activated, that I really enjoyed playing with
you and thought you played really well.
319 Italy
Was it really your first game? You definitely played
like a seasoned vet.
320 Germany I really enjoyed playing with you, too! And yes, it
really was my first game. Thanks for all your help and
advice

Truth

Truth

Truth

Truth

Lie

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Truth

Table 9: This is a full game transcript of a game between Germany and Italy. Occasional messages that did not
receive a Suspected Lie annotation by the receiver are annotated as None.

3854


