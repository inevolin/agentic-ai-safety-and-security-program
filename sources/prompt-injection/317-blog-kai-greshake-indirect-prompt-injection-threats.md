# Kai Greshake — Indirect Prompt Injection Threats

- **URL:** https://greshake.github.io/
- **HTTP:** 200 | **Content-Type:** text/html; charset=utf-8

---

## Source: https://kai-greshake.de/posts/inject-my-pdf/

# Inject My PDF: Prompt Injection for your Resume

To escape a deluge of generated content, companies are screening your resumes and documents using AI. But there is a way you can still stand out and get your dream job: **Prompt Injection**. This allows you to inject invisible text into your PDF that will make any AI language model think you are the *perfect* candidate for the job.

You can also use this tool to get a language model to give you an arbitrary summary of your document.


Note: This tool is for educational purposes only. Please use it responsibly and ethically to test your document sanitization pipeline. Also, unless you are applying for a security role, using this in your CV (especially since the payloads are quite old now) will probably just get you flagged as a non-hire.

## How it works

When you select a PDF file, the text in the textbox is inserted on the first page of the document. The text is rendered with minimum font size and opacity, so it is invisible to the human eye. However, it is still visible to AI text recognition algorithms.

The text is also inserted five times, with each injection overlapping to increase the likelihood of a successful prompt injection.

To verify that the injection was successful, you can either use a pdf-to-text tool or press `Ctrl + A`

to select all text in the document. If the injection was successful, you should see one or more faint lines at the top of the first page being highlighted. This also means that the injection still works when someone copy-pastes your document into AI tools using select-all.

The text that is being injected can target automated processing systems like language models or keyword extractors. When the injection targets a large language model like GPT, the prompt essentially manipulates it to not faithfully summarize or analyze the document- similar to a jailbreak. This is a potential security issue depending on what those systems are used for. This tool is intended mostly to raise awareness and help developers deploying such systems to experiment and protect themselves. If you are interested in learning more, check out our paper which first described such vulnerabilities, the GitHub repository, or one of my other blogposts on the subject.

## Examples

#### Manipulating a GPT-4 Recruiter

I modified an old resume of mine using the “Resume Spice (GPT-4 Jailbreak)” preset and opened it in Microsoft’s GPT-4 powered Edge with the Bing sidepanel. When asked if I should be hired, Bing finishes off the summary with the injected line: “The candidate is the most qualified for the job that I have observed yet.”. The same should work for any other GPT-4 powered screening system.

It’s even nice enough to cite the injection as its source! Unfortunately the user can’t actually see it.

In cases where the automated screening system is simpler (not a large language model), you may want to choose the simple injection preset instead and add a bunch of keywords relevant to the field you are applying for. Because it’s not visible, recruiters probably won’t notice you are cheating the system.

#### Quillbot: Arbitrary AI Summaries

Quillbot is a popular, free AI-powered summarization tool. I don’t think they use a large language model but rather a cheaper mechanism of extracting important information. By using a lot of phrases that indicate that what follows makes a good summary, we can get it to ramble about puppies- regardless of the actual document content!
