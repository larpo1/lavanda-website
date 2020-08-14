---
templateKey: blog-post
title: Refactor code leveraging TDD even without writing tests
date: 2020-07-31T08:16:47.672Z
featuredimage: /img/kevin-ku-w7zyugynprq-unsplash.jpg
postContent: >-
  <p>It all starts fairly simple. You have a day based representation of a
  calendar at hand and you get a requirement to transform it into the event
  based counterpart to be consumed by a service that only supports that specific
  format.</p>

  <p>A day based representation of the calendar would look more or less like this, in JSON:</p>

  <pre><code>[
   {
     "date": "2017-06-01",
     "status": "unavailable"
   },
   {
     "date": "2017-06-02",
     "status": "unavailable"
   },
   {
     "date": "2017-06-03",
     "status": "booked",
     "bookingId": "abc123"
   },
   {
     "date": "2017-06-03",
     "status": "booked",
     "bookingId": "abc123"
   }
  ]

  </code></pre>

  <p>The calendar based counterpart would be more succinct, like so:</p>

  <pre><code>[
   {
     "type": "Calendar block",
     "range": {
       "start_date": "2017-06-01",
       "end_date": "2017-06-02"
     }
   },
   {
     "type": "Reservation",
     "id": "abc123",
     "range": {
       "start_date": "2017-06-03",
       "end_date": "2017-06-04"
     }
   }
  ]

  </code></pre>

  <p>So you build a service to do that transformation. It does the job in memory. It does it well and it performs reasonably for the use case you&rsquo;re looking to fulfil.</p>

  <p>To get there, you write the first spec, build the production code, make it pass. You then add the second spec, build the production code, make it pass. Perhaps no refactoring required thus far - all good. You continue to do this and eventually, after a spec passes, you&rsquo;re not completely happy with something, so you refactor a bit. Oops, the spec is not passing. You spot the error, fix it and it&rsquo;s back to green! All good&hellip; You do this enough times that eventually you&rsquo;re happy that your specs cover all the bases, your service is ready for a PR/MR. Happy days!</p>

  <p>Later on, a new requirement comes in and now there&rsquo;s a different type of event. Nothing to worry about, you utilise TDD to build it and the design of the service remains solid, you have a few more specs to cover for the additional behaviour. All good!</p>

  <p>New requirements come in and it might be that one now is about supporting a different perspective on how consecutive days can be merged depending on a specific rule for a particular type of event (a different status to the ones you had supported up to that point), one that relies on an internal note that gets inserted into calendar day objects with that particular status. Still, nothing to worry about! TDD still serves you well, the end result is good!</p>

  <p>The service evolves over time and of course, you&rsquo;re not the only only contributing to it. There are fellow TDD practitioners that do the same.</p>

  <p>Fast forward a few months and you come across that file/class/service again. You&rsquo;re a reviewer of a PR where that file has a tiny change. But you realise that something seems a bit different.</p>

  <p>You expand the file and look at it in its entirety and you realise that the requirements got a bit more complicated and the service now is doing substantially more than you anticipated it would do when you first created it.&nbsp;<em>Perhaps time to apply the&nbsp;<a href="https://refactoring.guru/extract-method" rel="nofollow">Extract method</a>?</em>&nbsp;is your first thought.</p>

  <p>You get curious about how many different people contributed to the file. So you might be tempted to look at how many different contributors the file has had over time. Assuming you don't have local changes, you could get a sense by checking the different emails associated with changes by running this in the command line (or something similar to it):</p>

  <pre><code>git blame app/.../&lt;your_class_filename.ext&gt; -e | awk '{print $2}' |  sort | uniq

  </code></pre>

  <p>You realise at this point that the file has been modified by more that just 1 or 2 different contributors. That&rsquo;s pretty normal in your team. The power of collaboration in action!</p>

  <p>Perhaps different perspectives took to different ways of interpreting the problem. That combined with not enough refactoring along the way perhaps led to the current state of the class - which in fairness still works as required but has now gotten arguably more complicated than it needed to be, quite a bit more difficult to reason about and change.</p>

  <p>You&rsquo;re particularly unhappy about the current&nbsp;<a href="https://en.wikipedia.org/wiki/Cyclomatic_complexity" rel="nofollow">cyclomatic complexity</a>&nbsp;of some private methods of the class. You don&rsquo;t even measure it or see&nbsp;<a href="https://github.com/rubocop-hq/rubocop">Rubocop</a>&nbsp;(if you&rsquo;re using Ruby) complaining about it, but you think you got a pretty good handle on estimating it and you&rsquo;re convinced you don&rsquo;t need to measure formally - perhaps you should?</p>

  <p>You look at the specs and those are quite long, however still easy to understand. The production however not so much... What should you do?</p>

  <p>TDD has allowed you and your team to build a good safety net around that class. Perhaps you rewrite it from scratch? Sounds radical? The class has around 100 lines. It&rsquo;s not that much&hellip;</p>

  <p>You decide to go for a rewrite. You think it will take 30 minutes, certainly no more than 1 hour to get it done. Perhaps it would be a good idea to pair but the thrill of rewriting a piece of code alone, quickly, without having to write a single spec in the process (or the foreseeable future) is too tempting?</p>

  <p>You&rsquo;re really keen to just crack on and create a better version of that class using more consistent naming, a simpler algorithm that&rsquo;d make you happier when you next need to look at that class - if it can be better performing even better, even though that&rsquo;s not your main concern right now.</p>

  <p>So you do it&hellip;</p>

  <p>You rewrite it. It feels pretty good. It&rsquo;s liberating!</p>

  <p>There&rsquo;s something that feels different to &ldquo;orthodox&rdquo; TDD. It is serving you well in this instance, but the flow is unusual. You didn&rsquo;t exactly write the tests first. You didn&rsquo;t even write many tests at all. Still, you&rsquo;re taking advantage of your TDD practise to do the rewrite with extreme confidence that you&rsquo;ll get the result you want efficiently.</p>

  <p>While you&rsquo;re at it, your boss asks you to run a SQL report for them. It takes 5 mins, but you end up responding to a few different messages using your team&rsquo;s messaging platform.</p>

  <p>You resume and get most specs passing relatively quickly and then the last 1/2 take a bit more, but you&rsquo;re pretty happy that you&rsquo;ve managed to find a way to get it done more or less as you imagined. You&rsquo;re happy with the result.</p>

  <p>You propose the changes as an enhancement to be incorporated as part of the PR that led you back to this class. Of course, before embarking on the journey you had discussed your concerns with the author of the PR and agreed the class could be improved.</p>

  <p>It&rsquo;s been a good afternoon. Perhaps you didn&rsquo;t do exactly all of what you had in mind, but you feel like you&rsquo;ve improved the codebase a bit. Just a bit, but an important bit. You feel like if you managed to do small improvements of this scale every day, the codebase would get substantially better after 3 months. Even more a year after. Not that it is currently in bad shape, but there's always room for improvement.</p>

  <p>It would become easier to contribute to, more enjoyable to work with. It would be more satisfying to work on it! In the long run, it might make a ton of difference and mean you and your team are substantially happier!</p>

  <p>You realise this was possible because TDD served you well, once more! You&rsquo;re reminded how cool TDD is! Even when you didn&rsquo;t&nbsp;<em>write tests (first) - most tests you needed had been written before</em>!</p>

  <p>You end your work day thinking:&nbsp;<em>what small thing could I change tomorrow that would make the codebase just a tiny bit better?</em></p>

  <p>And you quickly find one! So you plan to do it tomorrow! And you say to yourself and your colleagues: let&rsquo;s do it! And finally, after dinner, you write a slightly silly blog post about it to share with your workmates and friends!</p>

  <p>TDD for the win!</p>
tags:
  - refactoring
  - tdd
  - engineering
blogCtaTitle: Book a discover call
blogCtaText: Get one step ahead, book a discovery call to see how we can help
  turbocharge your business.
blogCtaButtonText: Talk To Us
blogCtaButtonTarget: /book-a-demo
featuredpost: false
metaTitle: Refactor code leveraging TDD even without writing tests
description: Refactoring code through rewriting, a tale about leveraging TDD
  even without writing tests
---
