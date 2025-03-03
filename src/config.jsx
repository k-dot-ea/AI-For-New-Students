// This is the standard web chat configuration object. You can modify these values with the embed code for your
// own assistant if you wish to try this example with your assistant. You can find the documentation for this at
// https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject.

const config = {
  integrationID: '51b8aac2-adbd-49b7-8cb2-00e4694d39a7',
  region: 'eu-gb',
  serviceInstanceID: '394a3cbe-dd2c-4123-bd5e-12729a883c24',
  openChatByDefault: true,
  layout: {
    showFrame: true,
    hasContentMaxWidth: false,
  },
};

export { config };