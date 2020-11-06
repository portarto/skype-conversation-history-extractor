# skype-conversation-history-extractor

You can use this tool for extracting messages received from a specific user in Skype.
## Navigate to this link to export your chat history in skype:
[https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history](https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history)
## You can use this tool to extract the messages from a user by providing its Skype id.
### Use the following arguments in order to get the chat history:
- **username**:
  - you can check the username by opening the user's profile in Skype and scrolling down to the 'Profile' section
  - or you will find the username in the exported json provided by Microsoft.
  - username will be in the following format: **live:someuser023**
    - but most likely you will have to add it like this: **8:live:someuser023**
- **groups**:
  - it is possible that the messages are in a group chat where the user is already removed from and you can provide these groups separated by comma
- **outputFileName**
  - **output directory**: output
  - **default**: output_{timestamp}.json
  - you can specify your own filename but it'll have a timestamp added
  - if you specify it like **'somefile'** then the created file will be named as **'somefile_{timestamp}.json'**

### Example command:
```
node src/app.js --username=<username> --groups='Group1,Group2' --outputFileName=somefile
```
