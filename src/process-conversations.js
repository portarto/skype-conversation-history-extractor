const isUserInChatMembers = (conversation, username) => {
  return conversation
    && conversation.threadProperties
    && JSON.parse(conversation.threadProperties.members).some(m => m === username);
}

const isChatWithUser = (conversation, username) => {
  return conversation
    && conversation.id === username;
}

const isInGroup = (conversation, groups) => {
  return conversation 
    && groups
    && groups.some(group => group === conversation.displayName);
}

const isUserPresent = (conversation, config) => {
  return isUserInChatMembers(conversation, config.username)
    || isChatWithUser(conversation, config.username)
    || isInGroup(conversation, config.groups);
}

const getUserMessages = (msgList, username, filter) => {
  return msgList
    .filter(msg => msg.from === username)
    .map(msg => msg.content.replace(/<\/?[^>]+(>|$)/g, ''));
}

const getUserMessagesFiltered = (msgList, username, filter) => {
  return msgList
    .filter(msg => msg.from === username && msg.content.includes(filter))
    .map(msg => msg.content.replace(/<\/?[^>]+(>|$)/g, ''));
}

module.exports = (conversations, config) => {
  const stash = [];
  conversations.forEach(
    conversation => {
      if (isUserPresent(conversation, config)) {
        const messageList = config.filter
        ? getUserMessagesFiltered(conversation.MessageList, config.username, config.filter)
        : getUserMessages(conversation.MessageList, config.username);
        stash.push(...messageList);
      }
    }
  );

  return stash;
}
