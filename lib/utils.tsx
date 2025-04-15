import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts markdown text with links to React elements with Next.js Link components
 * @param {string} markdownText - The markdown text which may contain links in the format [text](url)
 * @returns {Array<string|JSX.Element>} An array of text strings and Next.js Link components
 */
export function renderMarkdownWithLinks(markdownText: string) {
  if (!markdownText) return null;

  // Regular expression to find markdown links
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;

  let lastIndex = 0;
  const elements = [];
  let match;
  let key = 0;

  // Find all markdown links in the text
  while ((match = linkRegex.exec(markdownText)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      elements.push(markdownText.substring(lastIndex, match.index));
    }

    const [fullMatch, text, url] = match;

    // Check if the URL is external
    const isExternal = /^https?:\/\//.test(url);

    // Add the link component
    if (isExternal) {
      elements.push(
        <Link key={key++} href={url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all text-blue-400">
          {text}
        </Link>
      );
    } else {
      elements.push(
        <Link key={key++} href={url} className="hover:underline transition-all text-blue-400">
          {text}
        </Link>
      );
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Add any remaining text after the last link
  if (lastIndex < markdownText.length) {
    elements.push(markdownText.substring(lastIndex));
  }

  return elements;
}
