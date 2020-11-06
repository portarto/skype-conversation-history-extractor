# skype-conversation-history-extractor

## You can use this tool to extract the messages from a user by providing its Skype id.

## First steps
- Navigate to this link to export your chat history in skype:
  - [https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history](https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history)
- Clone or download this repository
- Download the chat history json and paste it to the same folder you have cloned the repository
- Run it

#### tested with node v12.18.4

### Use the following arguments in order to get the chat history:
- **username**:
  - you can check the username by opening the user's profile in Skype and scrolling down to the 'Profile' section
  - or you will find the username in the exported json provided by Microsoft.
  - username will be in the following format: **live:someuser023**
    - but most likely you will have to add it like this: **8:live:someuser023**
  - **usage**
    - `--username=8:live:someuser023`
- **groups**:
  - it is possible that the messages are in a group chat where the user is already removed from and you can provide these groups separated by comma
  - **usage**
    - `--groups='Group1,Group2'`
- **outputFilename**
  - **output directory**: output
  - **default**: output_{timestamp}.json
  - you can specify your own filename but it'll have a timestamp added
  - if you specify it like **'somefile'** then the created file will be named as **'somefile_{timestamp}.json'**
  - **usage**
    - `--outputFilename=somefile`
- **inputFilename**
  - **default**: messages.json
  - Name it whatever your json is, like 'somefile.json'
  - **usage**
    - `--inputFilename=somefile.json`
- **filter**
  - you can specify a search filter which can be a simple word or some words
  - **usage**
    - for a single word it is enough to specify it like this:
      - `--filter=oneword`
    - for multiple words you can specify the filtered word like this:
      - `--filter='multiple words'`

### Example command:
```
node src/app.js --username=<username> --groups='Group1,Group2' --outputFilename=somefile --inputFilename=somefile.json --filter=oneword
```
### In case of someuser023:
```
node src/app.js --username=8:live:someuser023 --groups='Group1,Group2' --outputFilename=somefile --inputFilename=somefile.json --filter=oneword
```
### Of course you can always run it only for the user:
```
node src/app.js --username=8:live:someuser023
```
But in this case chat groups where the user was removed from will not be processed and the exported file has to be named like 'messages.json' and pasted to the repository root.
