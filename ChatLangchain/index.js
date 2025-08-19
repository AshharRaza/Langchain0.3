import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage,SystemMessage } from "@langchain/core/messages";
import dotenv from 'dotenv'
import readline from 'readline'



dotenv.config()

const messages = [
    new SystemMessage("Replay in Jokes tone in one line"),
]

const model = new ChatGoogleGenerativeAI({
    model:'gemini-2.0-flash',
    apiKey:process.env.GEMINI_API_KEY
})

const rl = readline.createInterface({
     input:process.stdin,
    output:process.stdout
})

async function run() {
    rl.question("You: ",async(userInput) => {
        if(userInput.toLowerCase() === 'exit'){
            console.log("Chat End")
            rl.close()
            return
        }
        const result = new HumanMessage(userInput)
        messages.push(result)
        const output = await model.invoke(messages)
        console.log(output.content)
        run()

    })
}
run()




// for(const chunk of result){
//     console.log(chunk.content)
// }