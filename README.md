# Languorem Website

> The dev blog for Languorem

## Introduction

I've gotten a few questions from people while making this:

* Why don't you just use WordPress?
* Did you really need to go into this much work to make a static website generator?
* Why do you over complicate everything?

And for that I have an answer: Eh.

By profession, I am **not** a game developer, I am a (not at all) humble web application
developer, and I **hate** WordPress. I think it's bloated, over-used, has too much jQuery,
and costs more to run than I'm willing to spend. So I built this, a little utility that takes
a collection of markdown documents and makes them into html so I can throw them onto a S3
bucket for the low price of free!

## Dev Roadmap

Eventually I'd like to add the following things to this application

* Some sort of comment system
* Having commits to master (using CI) auto upload to the S3
* Some sort of unit tests
* An actually finished game

The last one is probably the least possible but it's good to dream.

## How do I run this thing

Personally I have no idea WHY you'd like to run this piece of trash but here we go.

1. Make sure you're running `node.js 8+` for `async / await` support.
2. Install the latest `Yarn` and run `yarn install`
3. Run `npm run build`
4. Zip up dist and upload it to a S3 bucket

Yeah, that's it, super simple but also incredibly over engineered.

## Wow I love your work can I hire you?

**PLEASE I HAVE NO MONEY HELP** - shoot me a message on
[LinkedIn](http://linkedin.com/in/jrkienle) and let's grab coffee and talk code.
