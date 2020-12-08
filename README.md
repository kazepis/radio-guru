<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# DISCLAIMER: This a work in progress which began in early December 2020

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kazepis/radio-guru">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Radio Guru</h3>

  <p align="center">
    An awesome TOTALLY OPEN SOURCE internet radio suite for the masses!
    <br />
    <a href="https://github.com/kazepis/radio-guru"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo (pending)</a>
    ·
    <a href="https://github.com/kazepis/radio-guru/issues">Report Bug</a>
    ·
    <a href="https://github.com/kazepis/radio-guru/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/kazepis/radio-guru)

**Long story short (TL;DR):**
<br />
There are tons of websites out there that offer free broadcasting solutions (shoutcast, shoutcast 2, icecast)
<br />
Now you have the FREE software that goes with it as well. 

Radio guru comprises of:
* A back-end (.net core 3.1) responsible for saving shows, hours, songs, listener stats, top song lists etc. and 
* A front-end (Angular 11 client) with a state of the art chat (signalR) to accompany it

**What can you do with it?**
Imagine that you sign up online to one of those services that offer free streaming / broadcasting services or that you decide to host your own shoutcast or icecast server. You start broadcasting your personal radio show but you need a website to engage with your listeners. You imagine having a website that hosts a real time chat widget that your users can use to chat with one another. The currently playing song is shown on the website and it refreshes in real time. The last played songs of your radio show can be listed as well while if your broadcasting frequency permits it (how may times you go live per week) you want to have a list of weekly/monthly/yearly top songs. All of the above and much more to come (feel free to leave your feature request) can be realized by Radio guru! Your TOTALLY OPEN SOURCE radio suite.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core)
* [Angular 11](https://angular.io)
* [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* [Visual Studio](https://visualstudio.microsoft.com/) (pending)
* [Visual Studio Code](https://code.visualstudio.com/)
* [NodeJs](https://nodejs.org/en/)
* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kazepis/radio-guru.git
   ```
2. Install NPM packages in the angular client 
   ```sh
   cd radio-guru-client && npm install
   ```
3. Serve your Angular client
   ```sh
   ng serve --open --port 4200
   ```
4. Open the backend microservice in Visual Studio (pending)
5. Run the backend (pending)


<!-- USAGE EXAMPLES -->
## Usage

Additional screenshots to come. (pending)

_For more examples, please refer to the [Documentation](https://github.com/kazepis/radio-guru)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kazepis/radio-guru/issues) for a list of proposed features (and known issues).



<!-- RELEASE NOTES -->
## Release Notes / Changelog

**08 Dec 2020**
* README updated

**05 Dec 2020**
* README created
* Angular client application created
* Github repository created



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Nick Kazepis - [@nkazepis](https://twitter.com/nkazepis) - nick.kazepis@gmail.com

Project Link: [https://github.com/kazepis/radio-guru](https://github.com/kazepis/radio-guru)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template) for providing this awesome readme template



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kazepis/radio-guru.svg?style=for-the-badge
[contributors-url]: https://github.com/kazepis/radio-guru/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kazepis/radio-guru.svg?style=for-the-badge
[forks-url]: https://github.com/kazepis/radio-guru/network/members
[stars-shield]: https://img.shields.io/github/stars/kazepis/radio-guru.svg?style=for-the-badge
[stars-url]: https://github.com/kazepis/radio-guru/stargazers
[issues-shield]: https://img.shields.io/github/issues/kazepis/radio-guru.svg?style=for-the-badge
[issues-url]: https://github.com/kazepis/radio-guru/issues
[license-shield]: https://img.shields.io/github/license/kazepis/radio-guru.svg?style=for-the-badge
[license-url]: https://github.com/kazepis/radio-guru/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kazepis
[product-screenshot]: images/screenshot.png
