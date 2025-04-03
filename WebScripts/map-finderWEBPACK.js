(async function() {
    const scripts = Array.from(document.querySelectorAll('script[src]'))
        .map(s => s.src)
        .filter(src => src.endsWith('.js') && !src.includes('.map'));

    console.log(`Testing for source maps of ${scripts.length} JS files...`);

    for (const jsUrl of scripts) {
        try {
            const mapUrl = jsUrl + '.map';
            const res = await fetch(mapUrl);
            if (res.ok) {
                console.log(`Found source map: ${mapUrl}`);
            } else {
                console.log(`No map for: ${jsUrl}`);
            }
        } catch (e) {
            console.log(`Error checking: ${jsUrl}`, e);
        }
    }
})();

// You just need to past the function in the website terminal. If you cant past anything, juste type "allow pasting". It will list  all .map files.