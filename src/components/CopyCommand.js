import React, {useState} from 'react';

export default function CopyCommand({command}) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <span className="nswmesh-copy-command">
      <code>{command}</code>
      <button
        aria-label={`Copy command: ${command}`}
        className="nswmesh-copy-command__button"
        onClick={copyCommand}
        title={copied ? 'Copied' : 'Copy command'}
        type="button">
        {copied ? (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20.3 6.7 9 18l-5.3-5.3 1.4-1.4L9 15.2 18.9 5.3l1.4 1.4Z" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z" />
          </svg>
        )}
      </button>
    </span>
  );
}
