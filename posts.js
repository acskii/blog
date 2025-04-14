// Approach 1: From a local directory
import path from 'path';
import fs from 'fs';
import frontMatter from 'front-matter';

const DIR_PATH = path.join('src', 'content', 'posts');
const JSON_PATH = path.join('src', 'content', 'posts.json');

function sanitizeZeroWidth(content) {
    // Remove special ZERO WIDTH unicode characters that may be added by text editors
    return content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"");
}

function isMarkdown(filePath) {
    return filePath.endsWith(".md");
}

async function getFileCreationDate(filePath) {
    try {
        const stats = await fs.promises.stat(filePath);
        return stats.birthtime;
    } catch {
        console.log(`[ERR]: Failed to read ${filePath} for its creation date.`);
        return null;
    }
}

async function parseMarkdown(filePath) {
    try {
        if (!isMarkdown(filePath)) { return null; }
            
        const raw = await fs.promises.readFile(filePath, 'utf8');
        const birthtime = await getFileCreationDate(filePath);
        const parsed = frontMatter(raw);
        const metadata = parsed.attributes;
        const content = sanitizeZeroWidth(parsed.body);
        metadata["id"] = birthtime.getTime();
        metadata["content"] = content;
        return metadata;

    } catch (err) {
        console.log(`This post file ${filePath} couldn't be read..`,err);
        return null;
    }
}

async function parseAllPosts(dirPath) {
    try {
        const files = await fs.promises.readdir(dirPath);

        // prepare all promises
        const parsePromises = files.map(file =>
            parseMarkdown(path.join(dirPath, file))
        );

        // wait for all files to be parsed
        const result = await Promise.all(parsePromises);

        result.filter(res => res != null);

        return result;
    } catch {
        console.log(`This directory ${dirPath} doesn't exist`);
        return null;
    }
}

function jsonify(object) {
    fs.writeFileSync(JSON_PATH, JSON.stringify(object));
}

parseAllPosts(DIR_PATH).then(result => {
    if (result) {
        jsonify(result);
        console.log(result);
    }
});

// Approach 2: From a repository / drive