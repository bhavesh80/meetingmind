# 1. Introduction & Goals

*   **Product:** MeetingMind - An AI assistant for Microsoft Teams meetings.
*   **Hackathon Goal:** Demonstrate the core value of AI in improving meeting efficiency (note-taking, context awareness) within a 2-day timeframe. Focus on showcasing how AI was used in the development process and the product itself.
*   **Target Users (Hackathon):** Internal Incubyte teams using MS Teams.
*   **Problem:** Meetings suffer from poor note-taking, lost context, agenda drift, and difficulty managing specific tasks like interviewing simultaneously.
*   **Solution Vision (MVP):** A bot that joins a Teams meeting, transcribes the conversation in near real-time, attributes speech to speakers (basic), and presents the transcript. Stretch goals include basic agenda keyword spotting and predefined interview question prompts.

# 2. MVP Features (Must-Haves for Demo)

*   **`M1`:** **Join MS Teams Meeting:** The bot must be able to be invited to and successfully join a scheduled or ad-hoc MS Teams meeting.
*   **`M2`:** **Basic Transcription:** Capture audio from the meeting and transcribe it into text using an AI speech-to-text service.
*   **`M3`:** **Speaker Attribution (Basic):** Differentiate between speakers in the transcript (e.g., Speaker A:, Speaker B:). Accuracy can be best-effort for the MVP.
*   **`M4`:** **Display Transcript:** Present the live or near-live transcript in a readable format (can be logged to console, a simple file, or a basic web view accessible by the team).

# 3. Stretch Goals (If Time Permits)

*   **`S1`:** **Agenda Keyword Spotting:** Given a simple text agenda beforehand (e.g., pasted into a config), highlight or notify (e.g., log message) when keywords from the agenda are mentioned in the transcript.
*   **`S2`:** **Predefined Interview Question Prompts:** If specific keywords related to interviewing are detected (e.g., `"experience with"`, `"tell me about a time"`), suggest a predefined relevant question from a small list (display in logs/console).
*   **`S3`:** **Simple Post-Meeting Output:** Generate a single text file containing the final formatted transcript upon meeting end.

# 4. Non-Goals (Explicitly Out of Scope for Hackathon)

*   Fancy UI/UX (beyond basic readability of transcript).
*   Pre-meeting context loading from documents/notes.
*   Real-time, complex AI analysis or summarization during the meeting.
*   Natural language understanding for complex commands or questions to the bot.
*   Saving/managing notes across multiple meetings or users (persistence).
*   Integration with calendar systems beyond joining the meeting.
*   Advanced security, permissions, and multi-tenancy.
*   Deployment to production environments (local/dev environment is sufficient).

# 5. Design & UX (Minimalist)

*   Focus on functionality over form.
*   Transcript output should be clear: `[Timestamp] Speaker X: Text...`
*   Any notifications (stretch goals) can be simple log messages `INFO: Agenda item 'XYZ' mentioned.`

# 6. AI Usage & Measurement

*   **Core:** Cloud-based Speech-to-Text API (e.g., Azure, Google Cloud, AWS). Measure API calls, latency, perceived accuracy.
*   **Development:** Potentially use AI code assistants (`Copilot`, `Gemini Code Assist`) for boilerplate, debugging help, or generating simple functions/tests. Track time saved or specific code blocks generated.
*   **Testing:** Use an LLM to brainstorm edge cases or generate test data/scenarios for transcription or keyword spotting.
*   **Stretch:** Basic keyword matching (simple algorithm, not complex NLP initially). If using an LLM for question suggestions, measure API calls/latency.

# 7. Success Metrics (Hackathon)

*   Bot successfully joins >80% of test meetings.
*   Transcription is generated for the duration of the meeting.
*   Basic speaker labels are applied (even if not perfectly accurate).
*   Transcript is readable.
*   Team can demonstrate the core features (`M1`-`M4`) live.
*   Team can articulate how and where AI was used in the process and product.
*   Stretch goals achieved are a bonus.
