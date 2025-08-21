import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
import dotenv from 'dotenv'
import {StringOutputParser} from '@langchain/core/output_parsers'
import {ChatPromptTemplate} from '@langchain/core/prompts'
dotenv.config()

const prompt = ChatPromptTemplate.fromTemplate("Tell a joke about {topic}")
const model = new ChatGoogleGenerativeAI({
    model:'gemini-2.0-flash',
    apiKey:process.env.API_KEY
})

const chain = prompt.pipe(model).pipe(new StringOutputParser())
const result = await chain.invoke({topic:'cricket'})
console.log(result)