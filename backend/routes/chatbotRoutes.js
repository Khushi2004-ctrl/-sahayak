import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/chat", async (req, res) => {

  try {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const userMessage = req.body.message;

    const result = await model.generateContent(userMessage);

    const response = await result.response;

    const text = response.text();

    res.json({
      reply: text
    });

  } catch (error) {

    console.log("Gemini Error:", error);

    res.status(500).json({
      reply: "AI error"
    });

  }

});

export default router;