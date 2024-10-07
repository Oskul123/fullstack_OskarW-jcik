mermaid```
sequenceDiagram
    participant browser
    participant server

    Note over browser: User types a note in the text field
    Note over browser: User clicks the Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Server receives the note data
    server-->>browser: HTTP response (success/failure)
    deactivate server

    Note right of browser: Browser updates the UI
    Note right of browser: New note is rendered in the list
    ```
