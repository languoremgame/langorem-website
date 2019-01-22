# Day 1

Today is the first day in me trying to make a game. A quick preface: I've played a ton of games,
and I've had the dream of making one for years now but never got around to it. Well, here we are,
I'm finally making a game. I have tons of support from my friends, family, and girlfriend, and I
really think I can pull this off. This blog will server as basically my journey to building a
game from no experience. Definitely excited to see where this takes me and what I can make!

## Brainstorming an Idea

### The Basics

* **Dimension:** 3D
* **Genre:** Stealth-based action
* **Perspective:** First-person

### Potential Mechanics
* Avoiding lights? (Seems a little generic but we can make it more fun)
* Interfacing with terminals in a more advanced way (think Welcome to the Game)
* Limited scavenging / building to get past obstacles
* NOT combat focused - make combat an option but next to impossible to use as a primary strategy

### Environment
* Should be nighttime for (at least the majority of) the game
* A bit post-human(ish) - think newly abandoned cities and things a little worn down

### General Story
* Science messed up bad and got in contact with aliens, mistake #1
* Scientists, being overly curious, decided to capture one of these, mistake #2
* Uh oh! Now the thing escaped its enclosure and killed everyone in the lab
* Yikes, it spread throughout the lab, thanks dead bodies!
* And to make things worse, it escaped!
* Now you gotta get into that lab and find the research to try to stop these things (without dying)
* Then you gotta build the thing and escape (I LOVE HUNTING DOWN STUFF)

### Style

Two of my favorite graphics styles in the world are [Superhot](https://superhotgame.com/) and
[Mirror's Edge](http://www.mirrorsedge.com/) but neither of them exactly went with the theme I
was trying to push. My plan is to make them darker, a little scarier, maybe take some inspiration
from the post-human stuff from [Portal 2](http://www.thinkwithportals.com/) and build something
that I really like.

### Name Ideas

My friend Chance came up with the name Languorem and I like it. Can't really think of much better
so I bought the domain and made the GitHub account.

## Game Architecture

I'm a web person, so of course one of the first things I ask myself is "what are we gonna use to
make this". The first thing I learned is that the game needs an engine, which is basically a huge
collection of tools and processes that render your game's 3D models, run sound, control physics
and movement, etc. From what I've gathered, there's sort of a "big 3" for 3D games that are
accessible without some crazy license, cheap, and well-documented with tutorials.

* [CryEngine](https://www.cryengine.com)
* [Unity3D](https://unity3d.com/)
* [Unreal Engine](https://www.unrealengine.com)

After tons of debating with myself (and input from my Girlfriend) I decided to go with Unreal.
Here's why:

* CryEngine is beautiful and super powerful, there's no denying that, but it's so hard for a
beginner to use that I had to cross it off right away and I might come back to it in the future.
* Unreal has a lot of amazing support for real-time lighting and GI, something I want to leverage
as light is a big mechanic in my game.
* Unity forcing you to pay for premium bugs me, and I want the total cost of development for this
to be as low as possible.
* Unreal seems to work better for 3D while Unity seems to work better for 2D.
* I LEARNED I CAN USE [JAVASCRIPT](https://github.com/ncsoft/Unreal.js/) AND MY FAVORITE UI TOOL
[REACT](https://github.com/ncsoft/React-UMG) WITH UNREAL.

Seriously, learning a whole new language like C# or C++ is too much for my tiny web dev brain, that
was actually the selling point for me.

## Things I accomplished today

* Conceptualized a game!
* Registered a [domain name](https://languorem.com)
* Got a basic website designed and onto AWS
* Made a [GitHub Organization](https://github.com/languoremgame/)
* Built a sweet [Color Palette](https://trendypalettes.com/palette/500)
* Started the process with [Steam](https://partner.steamgames.com/) to become a partner and sell
the game when it's done.
