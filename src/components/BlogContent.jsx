import React from 'react'

const BlogContent = ({ text = '' }) => {
    const blocks = parseBlocks(text)

    return (
        <div className='flex flex-col gap-6'>
            {blocks.map((block, idx) => {
                if (block.type === 'heading') {
                    return (
                        <h2
                            key={idx}
                            className='text-2xl md:text-3xl font-semibold tracking-tight text-black pt-4'
                        >
                            {block.content}
                        </h2>
                    )
                }
                if (block.type === 'list') {
                    return (
                        <ul key={idx} className='flex flex-col gap-2 pl-2'>
                            {block.items.map((item, i) => (
                                <li key={i} className='flex items-start gap-3 text-[15px] text-gray-700 leading-7'>
                                    <span className='glow-div h-1.5 w-1.5 rounded-full mt-3 shrink-0'></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )
                }
                return (
                    <p key={idx} className='text-[15px] text-gray-700 leading-7'>
                        {block.content}
                    </p>
                )
            })}
        </div>
    )
}

function parseBlocks(text) {
    const lines = text.split(/\r?\n/)
    const blocks = []
    let paragraph = []
    let list = null

    const flushParagraph = () => {
        if (paragraph.length) {
            blocks.push({ type: 'paragraph', content: paragraph.join(' ').trim() })
            paragraph = []
        }
    }
    const flushList = () => {
        if (list) {
            blocks.push({ type: 'list', items: list })
            list = null
        }
    }

    for (const raw of lines) {
        const line = raw.trim()
        if (!line) {
            flushParagraph()
            flushList()
            continue
        }

        if (line.startsWith('##')) {
            flushParagraph()
            flushList()
            blocks.push({ type: 'heading', content: line.replace(/^##\s*/, '') })
            continue
        }

        const listMatch = line.match(/^[-*]\s+(.*)/) || line.match(/^\d+\.\s+(.*)/)
        if (listMatch) {
            flushParagraph()
            if (!list) list = []
            list.push(listMatch[1])
            continue
        }

        flushList()
        paragraph.push(line)
    }
    flushParagraph()
    flushList()
    return blocks
}

export default BlogContent
