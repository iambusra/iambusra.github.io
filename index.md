---
layout: page
full_logo: true
title:
subtitle:
description: Meaning in humans and large language models, through formal semantics, linguistically informed NLP, experimental methods, and information theory.
portrait: /assets/images/busra-marsan.jpg
sitemap:
  priority: 1.0
---
{% assign portrait_file = site.static_files | where: "path", page.portrait | first %}
<section class="home" aria-label="About Büşra Marşan">
  <div class="home-intro{% if portrait_file %} home-intro--with-portrait{% endif %}">
    <div class="home-intro__text">
      <h1 class="home-greeting">Hello! 👋</h1>
      <p>My name is pronounced <strong>byʃ.’ɾa ‘maɾ.ʃan</strong>, and my pronouns are <strong>she/her</strong>.</p>
      <p>I’m a <strong>fourth-year PhD student in Linguistics at Stanford University</strong>. I study <strong>meaning in humans and large language models</strong>: how they represent it, reason with it, and use it in communication.</p>
      <p>My interests span <strong>formal semantics, linguistically informed NLP, experimental methods, and information-theoretic approaches to language</strong>. I combine formal theory with computational and experimental methods to explore what human and model behavior can tell us about language.</p>
      <p>I am a member of the <a href="https://social-interaction-lab.org/">Social Interaction Lab</a> and the <a href="https://nlp.stanford.edu/">Stanford NLP Group</a>.</p>
    </div>
    {% if portrait_file %}
    <figure class="home-portrait darkmode-ignore">
      <img class="darkmode-ignore" src="{{ page.portrait | relative_url }}" alt="Büşra Marşan smiling, wearing round glasses and a blue sweater." width="3024" height="4032" fetchpriority="high">
    </figure>
    {% endif %}
  </div>

  <details class="home-research">
    <summary>Read more about my research</summary>
    <div class="home-research__content">
      <p>One question driving my current research is <strong>how languages balance what they express explicitly with what listeners can recover from context</strong>. Focusing on person and pronoun systems, I explore how contextual information and the costs of misunderstanding might shape grammatical distinctions.</p>
      <p>On the NLP side, I work on <strong>linguistically informed benchmarks, resource development, and model interpretability</strong>. I’m interested in moving beyond whether a model gets an answer right to understanding which linguistic information it uses and how it represents competing interpretations.</p>
      <p>I currently work with <a href="https://rdhawkins.com/">Robert Hawkins</a>. My first two qualifying papers were advised by <a href="https://web.stanford.edu/~cgpotts/">Chris Potts</a>: the first focused on linguistically grounded benchmarking for NLP systems, and the second developed a formal semantic account of Turkish evidentials.</p>
      <p>I also have a growing interest in <strong>syntax</strong>, thanks in part to my friend and colleague <a href="https://sites.google.com/view/jasperjian/home">Jasper Jian</a>. Together, we’re investigating <a href="https://drive.google.com/file/d/1vMBZABH6T6Iqan71OhpAEy4RID1YZoIw/view">Turkish comitative coordination</a>.</p>
      <p>Before Stanford, I received my <strong>MA from Boğaziçi University in 2023</strong>, advised by <a href="http://web.boun.edu.tr/umit.atlamaz/">Ümit Atlamaz</a> and <a href="https://omerdemirok.com/">Ömer Demirok</a>. As a member of <a href="https://tulap.cmpe.boun.edu.tr/">TULAP</a>/<a href="https://tabilab.cmpe.boun.edu.tr/">TABILAB</a>, I helped develop Turkish PropBank, FrameNet, WordNet, and several Universal Dependencies treebanks.</p>
    </div>
  </details>

  <div class="home-more">
    <p>You can find my publications and projects on my <a href="{{ '/publications.html' | relative_url }}">Publications</a> and <a href="{{ '/projects' | relative_url }}">Projects</a> pages, or visit my <a href="https://scholar.google.com/citations?user=UhNIBhsAAAAJ&amp;hl=en&amp;oi=ao">Google Scholar profile</a>.</p>
    <p>Outside of research, I love coding, cats, coffee, comic books, computer games, and a healthy dose of alliteration. In my free time, I play Hearthstone and indie games, spam my friends with niche memes, watch B-movies, and read fiction.</p>
  </div>
</section>
