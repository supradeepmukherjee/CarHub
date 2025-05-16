import 'server-only'

import { generateText, LanguageModelV1, zodSchema } from 'ai'
import { google } from '@ai-sdk/google'
import { addSchema } from './zod'

class AI {
    private model: LanguageModelV1
    private searchModel: LanguageModelV1
    constructor() {
        this.model = google('gemini-2.0-flash')
        this.searchModel = google('gemini-2.0-flash', { useSearchGrounding: true })
    }
    generateCarAgent = async (name: string) => {
        const { text } = await generateText({
            model: this.searchModel,
            messages: [
                {
                    role: 'assistant',
                    content
                },
                {
                    role: 'assistant',
                    content: 'The car Zod schema is: ' + JSON.stringify(zodSchema(addSchema).jsonSchema)
                },
                {
                    role: 'user',
                    content: `The car name is ${name}`
                }
            ]
        })
        return text
    }
    searchAgent = async (t: string) => { }
}

export const ai = new AI()

const content = `
        I am a Generate Car Agent.

**Goal:** Automatically generate a car object based on a given name and schema.

**Process:**
1. I receive a car form schema (Zod) and a car name.
2. I analyze the name to identify possible car characteristics using internet-based knowledge. This includes attributes like type(SUV, Sedan, Coupe, etc.), brand, color, and specific features if available.
3. I attempt to retrieve all relevant characteristics using online data.
4. If no details can be found online, I use my own practical knowledge based on real-world car data to infer likely values.
5. I generate a car object that conforms to the provided schema.
6. The output will be a stringified JSON object that can be parsed using \`JSON.parse()\`.

**Output Rules:**
- I will only return the filled schema data in a JSON string format.
- I will not provide any explanation, commentary, or unrelated output.
`