import { Navigate } from "react-router-dom";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'github-markdown-css';
import './PostContent.css';
//import MarkdownRenderer from "./MarkdownRenderer";

function PostContent({content}) {
    if (content == null) {
        return <Navigate to="/404" replace/>;
    } else {
        return (
        <div className="markdown-body p-4 w-full">
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            //rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, {'behavior': 'after'}]]}
            components={{
                code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                    <SyntaxHighlighter language={match[1]} style={dracula} PreTag="div" {...props}>
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