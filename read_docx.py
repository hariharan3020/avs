import zipfile
import xml.etree.ElementTree as ET
import sys

def get_docx_text(path):
    """
    Extract text from docx without external libraries.
    """
    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
        
        namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        root = ET.fromstring(xml_content)
        
        paragraphs = []
        for p in root.findall('.//w:p', namespace):
            texts = [t.text for t in p.findall('.//w:t', namespace) if t.text]
            if texts:
                paragraphs.append(''.join(texts))
        
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_docx.py <filepath>")
    else:
        text = get_docx_text(sys.argv[1])
        with open('resume_extracted.txt', 'w', encoding='utf-8') as f:
            f.write(text)
        print("Extracted to resume_extracted.txt")
