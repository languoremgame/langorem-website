# Day 2

Today I'm going to start playing around with tooling. Since I figured out what game engine I am
using yesterday, I really need to learn how to use Unreal Engine. Today is the day I finally take
a look at those very intimidating docs.

## Getting Organized

Being a software developer in the industry, one of the first things I knew to do was to get some
sort of project management system in place. Due to the fact that I absolutely despise JIRA, I
decided to create a trello board
[and open it up to the public](https://trello.com/b/8uxnuMLZ/languorem). That way I can also show
everyone the progress I'm making on bugs, etc.

## Attempting to Get UE4 Working

So here we are, I downloaded the Epic Games launcher, made an account, and downloaded Unreal Engine
4.21. I learned pretty quickly that I'd need the behemouth Visual Studio to do any C++ work (which
I needed to do a little to set up unreal.js) so luckily I managed to find this wonderful
[guide](https://docs.unrealengine.com/en-US/Programming/Development/VisualStudioSetup) by Epic on
exactly how to do that.

### Setting up Visual Studio

Yeah I admit, this one turned out to be kinda rough. When I switched from .net to node I vowed to
never use VS again, but here we are. The docs that they give you in their setup instructions don't
really give that clear of details on how to install UnrealVS, a plugin that makes errors in VS
work. Luckily I found 
[this](https://docs.unrealengine.com/en-US/Programming/Development/VisualStudioSetup/UnrealVS).
REMEMBER TO CLOSE VS BEFORE DOING THIS BECAUSE I STOOD 2 HOURS WAITING.

### Getting unreal.js Working

My advice: install the plugin through the UE marketplace. This saves you a hell of a lot of time.
[This](https://github.com/ncsoft/Unreal.js/wiki/Building-the-plugin) guide that they have on their
wiki can help if for some reason you need to compile it.

## Getting Started with Unreal.js

What I learned very quickly is that Unreal.js has terrible docs, but never fear, James to the
rescue! Here's I got it to work.

1. Install VS Code (which is NOT the same thing as Visual Studio) because it's better
2. Open the Content\Scripts folder in VS Code
3. Create your javascript file
4. Open UE4 and create an actor
5. On that actor, create a new `javascript` component
6. Type in the name of your script
7. Press play and boom, done

I also learned that javascript can be run from blueprints which is good for triggering events.
That's what I'll likely do for GameModes. Also I learned that the `bootstrap` function from the
examples is essential to making the whole thing work.

## Things I accomplished today

* Got Unreal Engine downloaded and set up
* Got Visual Studio downloaded and set up
* Got organized with a Trello board
* Linked trello with Github to make sure things stayed on track
* Learned a little bit of uE4
* Got a page for my game on Steam!!!