---
sidebar_position: 2
---

# Permissions
## Bot permissions
Although we recommend granting the **Administrator** permission to the bot, it'll still work without it. But we don't see any point in denying the permission as you can control each and every action of the bot via the dashboard. However, if you want to deny administrator permission anyway, **Comio** will need these basic permissions to function properly:
- Base permissions
  - `View channels`
  - `Send messages`
  - `Embed links`
  - `Use slash commands`
- Extended permissions
  - `Manage messages`
  - `Kick and ban members`
  - `Manage roles, stickers, emojis and channels`
  - `Modify nicknames`
  - `Manage webhooks`

We also recommend you to drag the bot's role as visually high as possible (probably below the human server administrators) as shown below, so that it can freeze and ban members if anything goes wrong.

<video className="videoPartial" autoPlay loop playsInline muted poster="/expo/img/docs/posters/e312352dc42114dda64a9ed3c006bb44_poster.jpg">
  <source src="https://cdn.discordapp.com/attachments/864813125320441858/889583045030588488/e312352dc42114dda64a9ed3c006bb44.mp4" type="video/mp4" />
Your browser does not support videos.
</video>

## Member permissions
**Comio** will warn the member who called the command is he/she is missing the required permissions (can be disabled via dashboard), but you can also specify allowed roles and channels for each command.