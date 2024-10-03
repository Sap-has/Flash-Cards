# Web Development Project 2 - Geography Quiz

Submitted by: **Epifanio Sarinana**

This web app: **Will test people of their knowledge of countrie's capitals.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [green for easy, yellow for medium, red for hard] *visual style implemented*

The following **additional** features are implemented:

* [x] Added 4 buttons to pick the difficulty of the cards to be shown, could not implement to immediately update the current card once the button is clicked

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/codepath-project-2-cards-vZwwUKh' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the challenges I encountured during this project was to make my list of countries. Originally I made a JSON file seperate,
but that was getting hard and confusing to use, instead I made an an array called cards. Another challenge was flipping the card. Though
I was able to figure that out rather quickly by seperating it into 2 classes and hiding one side. My last major challenge was filtering the cards.
I created another useState for that feature. 

## License

    Copyright [2024] [Epifanio Sarinana]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.