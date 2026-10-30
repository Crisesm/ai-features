export type ActionItem={text:string;sourceLine:number};
/** Deterministic baseline for meeting and lesson notes. Not an LLM. */
export function extractActions(notes:string):ActionItem[]{return notes.split(/\r?\n/).flatMap((line,index)=>{const trimmed=line.trim();const match=trimmed.match(/^(?:[-*]\s*)?(?:TODO|ACTION|NEXT|HOMEWORK)\s*[:\-]\s*(.+)$/i);return match?[{text:match[1].trim(),sourceLine:index+1}]:[];});}
export function summarizeNotes(notes:string){const lines=notes.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);return {lineCount:lines.length,preview:lines.slice(0,3).join(' '),actions:extractActions(notes)};}
