// discord.js 모듈에서 Client와 GatewayIntentBits를 가져옵니다.
const { Client, GatewayIntentBits } = require('discord.js');

// GatewayIntentBits에서 필요한 Intents를 추출합니다.
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;

// Discord 클라이언트를 생성하고, 필요한 Intents를 설정합니다.
const client = new Client({
  intents: [Guilds, GuildMessages, MessageContent]
});

// 봇 토큰으로 로그인합니다. (YOUR_BOT_TOKEN 부분을 자신의 봇 토큰으로 교체해야 합니다)
client.login('YOUR_BOT_TOKENE');

// 봇이 준비되면 한 번만 실행되는 이벤트 핸들러를 등록합니다.
client.once('ready', () => console.log(`${client.user.tag} 준비완료!`));

client.on('voiceStateUpdate', (oldUser, newUser) => {
    console.log(`voiceStateUpdate: ${oldState} | ${newState}`);
});