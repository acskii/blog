import { Navigate } from "react-router-dom";
//import MarkdownRenderer from "./MarkdownRenderer";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'github-markdown-css';
import './PostContent.css';

function PostContent({content}) {
    if (content == null) {
        return <Navigate to="/404" replace/>;
    } else {
        return (
        <div className="markdown-body p-4">
            <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
            components={{
                code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                    <SyntaxHighlighter language={match[1]} style={oneDark} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
                );
                },
            }}>
            {content}
            </ReactMarkdown> 
        </div>
        );
    }
}

export default PostContent;