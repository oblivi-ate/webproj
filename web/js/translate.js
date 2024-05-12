
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_GOOGLE_API_KEY';  // 替换为你的Google Cloud API密钥
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    function translateText(text) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                source: 'auto',
                target: 'en',
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.translations.length > 0) {
                return data.data.translations[0].translatedText;
            }
            throw new Error('Translation failed');
        })
        .catch(error => {
            console.error('Translation error:', error);
            return text;  // 返回原文本以防翻译失败
        });
    }

    async function translatePage() {
        const elements = document.querySelectorAll('body *:not(script)');
        
        for (let element of elements) {
            if (element.hasChildNodes()) {
                for (let child of element.childNodes) {
                    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                        const translatedText = await translateText(child.textContent);
                        child.textContent = translatedText;
                    }
                }
            }
        }
    }

    // 添加一个按钮来触发翻译
    const translateButton = document.createElement('button');
    translateButton.textContent = 'Translate to English';
    translateButton.addEventListener('click', translatePage);
    document.body.insertBefore(translateButton, document.body.firstChild);
});