from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import pipeline

class MessageRequest(BaseModel):
    messages: list

app = FastAPI()

model_name = "model/llama-2-7b-chat.ggmlv3.q8_0.bin"
model = pipeline("text-generation", model=model_name)

@app.post("/chat")
async def chat(request: MessageRequest):
    try:
        if not request.messages:
            raise HTTPException(status_code=400, detail="Messages are required")

        input_text = " ".join(request.messages)
        response = model(input_text, max_length=150)

        return {"response": response[0]["generated_text"]}
    except Exception as e:
        print("[CONVERSATION_ERROR]", e)
        raise HTTPException(status_code=500, detail="Internal Error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
