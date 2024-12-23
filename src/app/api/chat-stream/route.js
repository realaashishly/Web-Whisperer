import { ragChat } from "@/lib/ragchat";
import { aiUseChatAdapter } from '@upstash/rag-chat/nextjs'

export const POST = async (req) => {
  const { messages, sessionId } = await req.json();

  const lastMessage = messages[messages.length - 1].content;

  const response = await ragChat.chat(lastMessage, { streaming: true, sessionId });

  console.log("response: ", response);


  return aiUseChatAdapter(response);
};