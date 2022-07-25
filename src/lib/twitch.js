import { ChatClient } from "@twurple/chat";
import {ClientCredentialsAuthProvider} from '@twurple/auth';
import {ApiClient} from '@twurple/api';

const { VITE_TWITCH_ID: clientId, VITE_TWITCH_SECRET: clientSecret, VITE_TWITCH_CHANNEL: channel} = import.meta.env;

export const chatClient = new ChatClient({ channels: [channel] });
chatClient.connect();
chatClient.onConnect(() => {
console.log("chat connected");
});
chatClient.onDisconnect((manually, reason) => {
console.log("chat disconnected", { manually, reason });
});

const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
export const apiClient = new ApiClient({authProvider});

// Tracking User Info
const users = {};
export async function getUser(userName) {
  if (!users[userName]) {
    const user = { name: userName };
    try {
      const userInfo = await apiClient.users.getUserByName(userName);
      user.avatar = userInfo.profilePictureUrl;
      user.id = userInfo.id;
    } catch (err) {
      console.error(`failed to find user: ${userName}`, err)
    }
    users[userName] = user;
  }

  return users[userName];
}

// Getting channel info
export async function getChannelInfo() {
  const user = await getUser(channel);
  const channelInfo = await apiClient.channels.getChannelInfoById(user);

  return channelInfo;
}

export async function getStream() {
  const streamInfo = await apiClient.streams.getStreamByUserName(channel);

  return streamInfo;
}