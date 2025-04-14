import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
  .use(rehypeStringify);

function MarkdownRenderer({content}) {
  const htmlContent = processor.processSync(content).toString();

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default MarkdownRenderer;