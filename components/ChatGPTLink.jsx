import Link from 'next/link';

const ChatGPTLink = () => (

    <Link href="https://chat.openai.com/" target="_blank" className="text-blue-500 hover:underline inline-flex items-center space-x-2
         bg-blue-100 px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <img src="/ChatGPT_logo.svg.webp" alt="ChatGPT Icon" className="w-6 h-6" />
        <span> ChatGPT </span>
    </Link>

);

export default ChatGPTLink;
