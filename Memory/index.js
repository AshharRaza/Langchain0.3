import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { BufferWindowMemory, ConversationSummaryMemory} from 'langchain/memory'
import {ConversationChain} from 'langchain/chains'
import dotenv from 'dotenv'
import { PromptTemplate } from "@langchain/core/prompts";

dotenv.config()

const model = new ChatGoogleGenerativeAI({
    model:'gemini-2.0-flash',
    apiKey:process.env.API_KEY
})

//Windows Summary Memory

const memory = new ConversationSummaryMemory({
    llm:model
})

//WindowsBufferMemory

// const memory = new BufferWindowMemory({
//     k:3,  //windows ka size


// })
const chain = new ConversationChain({
    llm:model,
    memory:memory
})

//Buffer Memory

// const memory = new BufferMemory()
// // console.log(memory)




// const chain = new ConversationChain({
//     llm:model,
//     memory:memory,

// })
// console.log(chain)

async function run() {

    await chain.invoke({ input: "Hi, my name is Ashhar Siddiqui." });
  await chain.invoke({ input: "I live in India and I’m learning Generative AI." });
  await chain.invoke({ input: "Can you remind me what I told you about myself?" });

  console.log("📌 Conversation Summary:", memory.buffer);

//     await chain.invoke({ input: "Hi, my name is Ashhar." });
//   await chain.invoke({ input: "I live in India." });
//   await chain.invoke({ input: "I love coding." });
//     // console.log(memory)

//     const result = await chain.invoke({input:"What is my name"})
//     console.log(result)
//     // const output = await chain.invoke({input:"what did i jus tell you "})
//     // console.log(output)
//      const output = await chain.invoke({input:"were did i live "})
//     console.log(output)
    // const result = await chain.call({input:'hi'})
    // console.log(result)
    // const output = await chain.call({input:'kaisa bhai'})
    // console.log(output)
    // console.log(memory.chatHistory)
}
run()