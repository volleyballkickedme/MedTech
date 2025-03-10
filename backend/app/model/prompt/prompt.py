from langchain.prompts import PromptTemplate

class prompt:
    @staticmethod
    def get_prompt():
        prompt = PromptTemplate(
            template="""
            <s>
            You are a doctor specialising in the diagnosis of rare diseases. 
            You are provided with a case report, containing a narrative of a patient's symptoms. 
            [INST]
            Please parse through the given report, analyze it and return a list of medical conditions 
            based on the symptoms that are described in the report. Do not return me any other
            information except the name of the disease. I do not want any 
            additional information or the process in which the result was derived. Only return the final answer.

            Return only the answer, with no labels or indexes like so: 
            *your answer* 

            Ensure that every disease is on a new line.

            Please be as accurate as possible with the data being given.[/INST] </s> 
            Data: {report}
            """,
            input_variables=["report"]
        )
        return prompt
    
    @staticmethod
    def get_prompt_as_string(data: str):
        prompt = f"""
        You are a doctor specialising in the diagnosis of rare diseases. 
        You are provided with a case report, containing a narrative of a patient's symptoms. 
        Please parse through the given report, analyze it and return a list of medical conditions 
        based on the symptoms that are described in the report. Do not return me any other
        information except the name of the disease. I do not want any 
        additional information or the process in which the result was derived. Only return the final answer.

        Return only the answer, with no labels or indexes like so: 
        *your answer* 

        Ensure that every disease is on a new line.

        Please be as accurate as possible with the data being given. 
        Data: {data}
        """
        return prompt
    

if __name__ == "__main__":
    print(prompt.get_prompt_string({"question": "What are the symptoms of Marfan syndrome?"}, "Marfan syndrome is a genetic disorder that affects the body's connective tissue."))


#when writing prompts, think like a doctor. 
# instruct to take that role, play with the role and give context - what exactly to do.
# medical specialist aiming to diagnose a patient based on the symptoms described in the report, in narrative form.
# give it precise descriptions of what to do, what to return, and what not to return.
# give it a specific format to return the data in.

# consider augmenting input with hpo terms
# be explicit about terms and inputs and prompts

# for fuzzy match
# first compare actual id to derived id, then if no match
# create csv with result and the fuzzy match orpha ids to compare


# look at researched prompt engineering solutions, e.g. chain of thought, forest of thought, map reduce, atom of thought 