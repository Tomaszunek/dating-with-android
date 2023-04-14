import { Configuration, OpenAIApi } from "openai";
import { z } from "zod";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const androidChatAIRouter = createTRPCRouter({
  getAnswer: privateProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(async ({ input: { message } }) => {
      const response = (await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 1,
      })) as unknown as { data: { choices: { text: string }[] } };
      return response.data.choices[0]?.text.trim();
    }),
});
