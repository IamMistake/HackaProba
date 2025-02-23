from openai import OpenAI
import json

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bartender = os.path.join(BASE_DIR, "ai_modules", "instructions", "BERTender")
merch = os.path.join(BASE_DIR, "ai_modules", "instructions", "BERTender")
illustrator = os.path.join(BASE_DIR, "ai_modules", "instructions", "BERTender")


class LLMAssistant:
    BERTender_INSTRUCTIONS_DIR = bartender
    MerchBind_INSTRUCTIONS_DIR = merch
    Illustrator_INSTRUCTIONS_DIR = illustrator

    def __init__(self, api_key: str, starting_instructions: str, model=None):
        self.starting_instructions = self.to_developer_message(starting_instructions)
        self.history = []
        self.model = model if model else "gpt-4o-mini"
        self.client = OpenAI(api_key=api_key)

    @staticmethod
    def to_developer_message(instruction: str) -> dict:
        """
            Creates a structured message representing a developer's input.

            Parameters:
                instruction (str): The instruction or message from the developer.

            Returns:
                dict: A dictionary with the role set to "developer" and the content as the provided instruction.
        """
        return {"role": "developer", "content": instruction}

    @staticmethod
    def to_user_message(message: str) -> dict:
        """
            Creates a structured message representing a user's input.

            Parameters:
                message (str): The message from the user.

            Returns:
                dict: A dictionary with the role set to "user" and the content as the provided message.
        """
        return {"role": "user", "content": message}

    @staticmethod
    def to_assistant_message(response: str) -> dict:
        """
            Creates a structured message representing the assistant's response.

            Parameters:
                response (str): The response from the assistant.

            Returns:
                dict: A dictionary with the role set to "assistant" and the content as the provided response.
        """
        return {"role": "assistant", "content": response}

    @staticmethod
    def print_context(context: list):
        """
            Prints the content of all messages in a given conversation context.

            Parameters:
                context (list): A list of messages to be printed.

            Behavior:
                - Iterates through the context and prints each message's content.
        """
        for message in context:
            print(message["content"])

    def __ask_assistant(self, context: list, max_tokens=None) -> str:
        """
            Sends the conversation context to the assistant model and retrieves a response.

            Parameters:
                context (list): A list of messages forming the conversation history.
                max_tokens (int, optional): The maximum number of tokens the response can contain.

            Returns:
                str: The assistant's response to the provided context.

            Behavior:
                - Uses the assistant client to generate a response based on the given context.
                - Stores the response for future interactions.
        """
        response = self.client.chat.completions.create(
            model=self.model,
            messages=context,
            max_tokens=max_tokens,
            n=1,
            store=True
        )

        return response.choices[0].message.content

    def consult_once(self, prompt: dict | str, structured: bool = False) -> str:
        """
           Performs a single consultation with the assistant using script content and instructions.

           Parameters:
               prompt (str): The input to prompt the assistant.
               structured (bool): Is the prompt in a structured format, like JSON

           Returns:
               str: The assistant's response.

           Behavior:
               - Constructs a user message combining the prompt
               - Calls the assistant with the generated context.
       """

        if structured:
            prompt = json.dumps(prompt, indent=4)

        message = self.to_user_message(prompt)
        context = [self.starting_instructions, message]
        output = self.__ask_assistant(context)
        return output

    def end_conversation(self):
        """
            Closes the assistant's client connection, ending the conversation.

            Behavior:
                - Calls the 'close' method of the assistant client.
        """
        self.client.close()
