import MessengerCustomerChat from "react-messenger-customer-chat";

const FacebookChat = () => {
  return (
    <div className="flex items-end justify-end">
      <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        htmlRef="<REF_STRING>"
      />
    </div>

    // <FacebookProvider appId="994162019160198" chatSupport>
    //   <CustomChat pageId="400146956512699" minimized={true} />
    // </FacebookProvider>
  );
};

export default FacebookChat;
