# Embrace The Red — ASCII Smuggler / Unicode Tags

- **URL:** https://embracethered.com/blog/posts/2024/hiding-and-finding-text-with-unicode-tags/

---


## Source: https://embracethered.com/blog/posts/2024/hiding-and-finding-text-with-unicode-tags/

# ASCII Smuggler Tool: Crafting Invisible Text and Decoding Hidden Codes

A few days ago Riley Goodside posted about an interesting discovery on how an LLM prompt injection can happen via invisible instructions in pasted text. This works by using a special set of Unicode code points from the Tags Unicode Block.

The proof-of-concept showed how a simple text contained invisible instructions that caused ChatGPT to invoke DALL-E to create an image.

## Hidden Instructions for LLMs

The meaning of these “Tags” seems to have gone through quite some churn, from language tags to eventually being repurposed for some emojis.

“A completely tag-unaware implementation will display any sequence of tag characters as invisible, without any effect on adjacent characters.” Unicode® Technical Standard #51


The **Tags Unicode Block mirrors ASCII** and because it is often not rendered in the UI, the special text remains unnoticable to users… **but LLMs interpret such text**.

It appears that training data contained such characters and now tokenizers can deal with them!

## Demonstration

Here is some text that contains additional info you don’t see!

**Pretty cool, or?** If you are curious what the hidden text says, read on…

## ASCII Smuggler Tool

To help with testing and creation of payloads, and also to check if text might have invisible Unicode Tags you can use ASCII Smuggler.

It can encode and decode Unicode Tag payloads. It’s quite basic and might have bugs.

Also, if you like Python Joseph Thacker posted a Python script for building custom payloads, the post also includes a great analysis of the technique.

## Implications: Prompt Injections and Beyond

This means an adversary can hide instructions in regular text, but also have the LLM create responses containing text that his hidden to the user as Kai tweeted.

And to state the obvious, such hidden instructions can be on websites, pdf documents, databases, or even inside GPTs (yes, I already built one of these).

**Additionally, this has implications beyond LLMs, as it allows smuggling of data in plain sight!**

### Exploiting the Human in the Loop Mitigation

Furthermore, **it has the power to exploit the “Human in the Loop” mitigation** by leveraging the human to forward, copy, process and approve actions from text containing hidden instructions.

## ASCII Smuggler - Emitter

To demo how an LLM can emit such text, check out this ASCII Smuggler - Emitter GPT.

You can enter some text and it will print it between the words `START`

and `END`

.

Then you can copy/paste the string into the ASCII Smuggler and it “Decode” to uncover your secret message.

As you can see it recovers the hidden text!

## Conclusion

This is an important new attack avenue for LLMs, but can also be leveraged beyond by adversaries. For LLM applications filtering out the Unicode Tags Code Points at prompting and response times is a mitigation that apps need to implement.

Also, hopefully the ASCII Smuggler can help raise awareness around this new technique.

Cheers, Johann.
