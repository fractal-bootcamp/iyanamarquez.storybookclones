export interface User {
  name: string;
  profilePicUrl?: string;
}

export interface Message {
  id: number;
  text: string;
  user: User;
  sentByMe: boolean;
  timestamp?: number;
  showImage?: boolean;
  prevMessageByMe?: boolean;
  firstByUser?: boolean;
  lastByUser?: boolean;
  styling?: string;
}

export interface MessageThread {
  groupChatName?: string;
  messages: Message[];
}

export const exampleMessages = [
  {
    id: 1,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    user: { name: "bob" },
    sentByMe: true,
  },
  {
    id: 2,
    text: "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
    user: { name: "bob" },
    sentByMe: true,
  },
  {
    id: 2,
    text: "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
    user: { name: "bob" },
    sentByMe: true,
  },
  {
    id: 3,
    text: "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
    user: { name: "tom" },
    sentByMe: false,
  },
  {
    id: 4,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    user: { name: "bob" },
    sentByMe: true,
  },
  {
    id: 5,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    user: { name: "tom" },
    sentByMe: false,
  },
  {
    id: 6,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    user: { name: "tom" },
    sentByMe: false,
  },
  {
    id: 7,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    user: { name: "bob" },
    sentByMe: true,
  },
];
