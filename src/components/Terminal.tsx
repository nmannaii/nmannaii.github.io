import { useRef, useState } from "react";
import { commands } from "../utils/commands";
import React from "react";
export default function Terminal() {
  let [terminalValue, setTerminalValue] = useState("");
  let [cursorVisible, setCursorVisible] = useState(false);
  let [executedCommands, setExecutedCommands] = useState<
    { command: string; result: JSX.Element }[]
  >([]);
  let terminalInputRef = useRef<HTMLInputElement>(null);
  let terminalContent = useRef<HTMLDivElement>(null);

  const executeCommand = (e: any) => {
    if (e.key === "Enter" && e.target.value) {
      const command = e.target.value.trim().toLowerCase();
      if (command === "clear") {
        setExecutedCommands([]);
        setTerminalValue("");
        scrollToBottom();
        return;
      }
      if (Object.keys(commands).indexOf(command) < 0) {
        setExecutedCommands([
          ...executedCommands,
          {
            command: e.target.value,
            result: (
              <span className="text-red-500">
                Err: "{command}" Command not found!
              </span>
            ),
          },
        ]);
        setTerminalValue("");
        scrollToBottom();
        return;
      }
      setExecutedCommands([
        ...executedCommands,
        {
          command,
          result: commands[command as keyof typeof commands],
        },
      ]);
      setTerminalValue("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (terminalContent.current) {
        terminalContent.current.scrollTop =
          terminalContent.current.scrollHeight;
      }
    });
  };

  const welcomeMessage = (
    <>
      <code>Welcome to my Portfolio!</code>
      <hr className="my-2 w-[300px] border-dashed" />
      <code>
        Type <span className="text-yellow-600">'help'</span> to see available
        commands. Or scroll down for my info about me.
      </code>
    </>
  );
  const propmt = (
    <span className="text-yellow-600 me-2">
      ➜ <span className="text-gray-100">~</span>
    </span>
  );

  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-5 rounded-xl shadow-md">
      <div className="h-[30px] bg-terminal-header/50 rounded-t-xl flex items-center">
        <div className="flex gap-1 pl-3">
          <div className="h-[15px] w-[15px] bg-red-500 rounded-full"></div>
          <div className="h-[15px] w-[15px] bg-orange-500 rounded-full"></div>
          <div className="h-[15px] w-[15px] bg-green-500 rounded-full"></div>
        </div>
        <p className="flex-1 text-center md:ml-[-50px]">
          nmannaii@nmannaii-porfolio: ~
        </p>
      </div>

      {/* terminal content */}
      <div
        className="h-[550px] rounded-b-xl bg-terminal-bg/50 backdrop-blur-lg text-gray-100 px-4 py-2 text-sm overflow-auto"
        ref={terminalContent}
        onClick={() => terminalInputRef.current?.focus()}
      >
        <div className="mb-1">{welcomeMessage}</div>
        {/* executed command */}
        {executedCommands.map((command, index) => (
          <React.Fragment key={index}>
            <div
              className="flex items-center h-[20px]"
              onClick={(e) => e.stopPropagation()}
            >
              {propmt}
              <pre className="font-[VT323] text-lg">{command.command}</pre>
            </div>
            {command.result}
          </React.Fragment>
        ))}

        {/* terminal input */}
        <div className="flex items-center h-[20px] my-1">
          {propmt}
          <pre className="font-[VT323] text-lg">{terminalValue}</pre>
          {cursorVisible && (
            <span className="inline-block w-[5px] h-[20px] bg-yellow-600 animate-blink"></span>
          )}
          <input
            autoComplete="off"
            className="flex-1 bg-transparent opacity-0"
            autoFocus
            value={terminalValue}
            onFocus={() => setCursorVisible(true)}
            onBlur={() => setCursorVisible(false)}
            onKeyUp={executeCommand}
            ref={terminalInputRef}
            onChange={(e) => setTerminalValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
