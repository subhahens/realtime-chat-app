import { MessageSquareText } from "lucide-react";

const NoChat = () => {
  return (
    <div className="w-full h-110 text-neutral-100 flex flex-col items-center justify-center select-none bg-gray-900 ">
      <div className="flex flex-col items-center gap-3">
        <div className="p-4">
          <MessageSquareText size={56} color="white" className="opacity-80" />
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg font-medium tracking-tight">
            Start a conversation
          </h2>
          <p className="text-sm text-neutral-500 max-w-60 text-center leading-tight">
            Pick a contact from the sidebar and begin chatting instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChat;
