
<h1 align="center">
	<img
		width="300"
		alt="Dev Bot"
		src="devbot.png"/>
</h1>
<h3 align="center">
    Dev Bot - A Discord Music Bot
</h3>

</br>

## Overview
Dev Bot is a discord that can play audio from youtube right in the channel you're in.
You can pause, skip, and queue songs making it great for servers that have a lot of people or even if youre in a vc by yourself... 

The project uses discord.js, discord-player and typescript.


## Setup 

Ensure that you have node and yarn installed, and run

```bash
# Install dependencies
yarn

# Run the bot
yarn start 
```

Set up the environment variables by adding the variables to `.env` and filling them out with your information.

| Environment variable | Value                         |
| -------------------- | ------------------------------|
| `TOKEN`              | Discord bot token             |
| `CLIENT_ID`          | Application id of discord bot |
| `SERV_ID`            | Server id of your server      |
| `MAL_ID`             | My anime list application id  |
| `YOUTUBEI_ACCESS`    | See Below                     |


</br>

To get your `YOUTUBEI_ACCESS` token, run the following command

```bash
$ npx --no discord-player-youtubei
```
</br>

## Yarn Scripts

| Script | Purpose                                                         |
|--------|-----------------------------------------------------------------|
|`start` | Compiles the code and starts the bot                            |
|`build` | Compiles the code into dist folder                              |
|`dev`   | Runs the TypeScript code in a development environment using tsx |


## Coming Soon
- Spotify Integration
- Morning bitcoin price update
