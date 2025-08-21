import {ChatPromptTemplate} from '@langchain/core/prompts'
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import dotenv from 'dotenv'


dotenv.config()

const systemTemp=  "replay in joke tone"
const model = new ChatGoogleGenerativeAI({
    model:'gemini-2.0-flash',
    apiKey:process.env.GEMINI_API_KEY
})
// const prompt = ChatPromptTemplate.fromTemplate("Tell a joke about {topic}")
const prompt = ChatPromptTemplate.fromMessages([

     ["system",systemTemp],
    ["user","{text}"],

]
)
const promptValue = await prompt.invoke({
    language:"English",
    text:"kaisa bhai"
})
const result = promptValue.toChatMessages()
const res = await model.invoke(result)
console.log(res.content)
const out = await model.invoke(promptValue)
console.log(out)

// console.log(res)
