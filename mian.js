const CONSTANTS = {
    RGP:/^(\b\w+\b\s+){3,}\b\w+\b/,
    BILIBILI_PATTERN: /^https:\/\/www\.bilibili\.com\/video\/BV\w+/,
    YOUTUBE_PATTERN: /^https:\/\/(?:www\.youtube\.com\/(?:watch\?v=|shorts\/)|youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)[\w-]+/,
    DOI_PATTERN: /^(?:(?:https?:\/\/)?(?:dx\.)?doi\.org\/)?10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i,
    SHORT_QUERY_PATTERN: /^(\b\w+\b\s*){1,3}$/,
    CHINESE_TITLE_PATTERN: /^[\u4e00-\u9fa5]{8,}$/,
    PREFIX_PATTERN: /^(-?\w+)(?:-(.*))?/,
    SEARCH_ENGINES: {
        'b': 'https://www.baidu.com/s?wd=',                  // 百度搜索
        'bi': 'https://www.bing.com/search?q=',              // Bing 搜索
        'bv': 'https://search.bilibili.com/all?keyword=',    // 哔哩哔哩搜索
        'dt': 'https://www.deepl.com/translator#zh/en/',     // DeepL 翻译
        'freepik': 'https://www.freepik.com/search?query=',  // Freepik 搜索
        'gp': 'https://scholar.google.com/scholar?q=',       // Google Scholar 搜索
        'g': 'https://www.google.com/search?q=',             // Google 搜索
        'gt': 'https://translate.google.com/?hl=zh-CN&sl=auto&tl=en&text=',  // Google 翻译
        'rg': 'https://www.researchgate.net/search?q=',      // ResearchGate 搜索
        'sd': 'https://www.sciencedirect.com/search?qs=timber',  // ScienceDirect 搜索
        'sg': 'https://www.so.com/s?q=',                      // So 搜索
        'sp': 'https://link.springer.com/search?new-search=true&query=',  // Springer 搜索
        'wrzd': 'https://cn.bing.com/dict/search?q=',         // Bing 词典
        'p': 'https://sci-hub.st/',                           // Sci-Hub

    },
    VIDEO_PROCESSORS: {
        bilibili: 'https://snapany.com/zh/bilibili',
        youtube: 'https://yt1s.co.com/',
    },
    SHORTCUTS: {
        //---1---本地
        '-lp':'./ohtml/literature.html',
        '-gas':'./ohtml/GA-search.html',
        '-diary': './diary.html',
        '-browser': './ohtml/browser.html',
        '-uk': './asset/%E8%8B%B1%E5%9B%BD%E3%80%81%E8%8B%B1%E6%A0%BC%E5%85%B0%E3%80%81%E5%A4%A7%E4%B8%8D%E5%88%97%E9%A2%A0%E3%80%81%E4%B8%8D%E5%88%97%E9%A2%A0%E7%BE%A4%E5%B2%9B%E6%8C%87%E7%9A%84%E6%98%AF%E5%93%AA%E4%BA%9B%E5%8C%BA%E5%9F%9F.mp4',
        '-bzfzlyl': './asset/b%E7%AB%99%E9%9D%9E%E4%B8%BB%E6%B5%81%E8%AF%AD%E5%BD%95.mp4',
        '-1998nwynkymzytyyh': './asset/1998%E5%B9%B4%E7%BB%B4%E4%B9%9F%E7%BA%B3%E4%B8%AD%E5%A4%A7%E4%B9%90%E5%9B%A2%E9%9F%B3%E4%B9%90%E4%BC%9A.mp4',
        '-ygmljts': './asset/%E6%B2%B9%E7%AE%A1%E9%A9%AC%E8%84%B8%E5%A7%90%E8%B0%88%E6%B0%B4.mp4',
        '-bztddtdxsfx': './asset/b%E7%AB%99%E6%AA%80%E4%B8%9C%E4%B8%9C%E8%B0%88%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%96%B9%E5%90%91.mp4',
        '-sjmnmjd': './asset/%E7%9B%9B%E5%A9%95%E6%B2%A1%E9%82%A3%E4%B9%88%E7%AE%80%E5%8D%95.mp3',
        '-ens1': './short-video-play/ens1.html',
        '-ens2': './short-video-play/ens2.html',
       
        
        ///---2---在线网站
        '-mp3save1': 'https://www.myfreemp3.com.cn/',
        '-mp3save2': 'https://www.44h4.com/',
        '-gg': 'https://www.google.com/',
        '-by': 'https://www.bing.com/',
        '-bd': 'https://www.baidu.com/',
        '-sgss': 'https://www.so.com/',
        '-github':'https://github.com/', 

        //---3---视频
        '-bv': 'https://www.bilibili.com/',
        '-yg': 'https://www.youtube.com/',

        //---4---研究
        '-zw': 'https://www.cnki.net/',
        '-claude': 'https://claude.ai/new',
        '-gpt': 'https://chatgpt.com/',
        '-wjbk': 'https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5',
        '-wrzd': 'https://cn.bing.com/dict/search?q=actual%20scenario&FORM=BDVSP6&cc=cn',
        '-if': 'https://www.letpub.com.cn/',
        '-dkwd': 'https://www.doc88.com/',
        '-gh': 'https://github.com/',

        //---5---图标
        '-zttb': 'https://www.iconfont.cn/',
        '-icon': 'https://icon-icons.com/',

        //---6---新闻
        '-jxws': 'https://v.jxntv.cn/',
        '-xhw': 'https://www.xinhuanet.com/',
        '-cctv': 'https://www.cctv.com/',
        '-fhw': 'https://www.ifeng.com/',
        '-cxw': 'https://www.caixin.com/',
        '-bbc': 'https://www.bbc.com/',
        '-cnn': 'https://www.cnn.com/',
        '-nysb': 'https://www.nytimes.com/',

        //---7---在线网页
        '-britishspruce': 'https://blogs.napier.ac.uk/cwst/what-is-british-spruce/',
        '-copilot': 'https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx'
    }
};

const AppFunctions = {
    checkVideo() {
        const searchBox = document.getElementById('searchBox');
        const url = searchBox.value.trim();
        console.log('Input URL:', url);
        const prefixMatch = url.match(CONSTANTS.PREFIX_PATTERN);

        if (CONSTANTS.BILIBILI_PATTERN.test(url)) {
            window.open(CONSTANTS.VIDEO_PROCESSORS.bilibili, '_blank');
        } else if (CONSTANTS.YOUTUBE_PATTERN.test(url)) {
            window.open(CONSTANTS.VIDEO_PROCESSORS.youtube, '_blank');
        } else if (CONSTANTS.DOI_PATTERN.test(url)) {
            const doi = url.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i)[0];
            window.open(`${CONSTANTS.SEARCH_ENGINES.p}${doi}`, '_blank');
        } else if (CONSTANTS.SHORT_QUERY_PATTERN.test(url)) {
            window.open(`${CONSTANTS.SEARCH_ENGINES.wrzd}${encodeURIComponent(url)}&FORM=BDVSP6&cc=cn`, '_blank');
        } else if (CONSTANTS.CHINESE_TITLE_PATTERN.test(url)) {
            window.open(`https://kns.cnki.net/kns8/defaultresult/index?code=SCDB&kw=${encodeURIComponent(url)}`, '_blank');
        } else if (prefixMatch) {
            const prefix = prefixMatch[1];
            const searchTerm = prefixMatch[2] ? url.slice(prefix.length + 1).trim() : '';
            const encodedTerm = encodeURIComponent(searchTerm);

            if (CONSTANTS.SHORTCUTS[prefix]) {
                window.open(CONSTANTS.SHORTCUTS[prefix], '_blank');
            } else if (CONSTANTS.SEARCH_ENGINES[prefix]) {
                window.open(`${CONSTANTS.SEARCH_ENGINES[prefix]}${encodedTerm}`, '_blank');
            } else if (CONSTANTS.RGP.test(url)) {
                window.open(`${CONSTANTS.SEARCH_ENGINES.rg}${encodeURIComponent(url)}`, '_blank');
            } else {
                this.showNoResultsHint();
                return;
            }
        } else {
            this.showNoResultsHint();
            return;
        }

        this.clearSearchBox();
    },

    showNoResultsHint() {
        const searchBox = document.getElementById('searchBox');
        searchBox.classList.add('no-results-hint');
        setTimeout(() => {
            searchBox.classList.remove('no-results-hint');
        }, 2000);
    },

    clearSearchBox() {
        const searchBox = document.getElementById('searchBox');
        searchBox.value = '';
        sessionStorage.setItem('searchBoxFocused', 'true');
        this.autoResize();
    },

    setFocusOnSearchBox() {
        const searchBox = document.getElementById('searchBox');
        searchBox.focus();
        sessionStorage.removeItem('searchBoxFocused');
    },

    autoResize() {
        const searchBox = document.getElementById('searchBox');
        searchBox.style.height = 'auto';
        searchBox.style.height = `${searchBox.scrollHeight}px`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');

    searchBox.addEventListener('input', (event) => {
        AppFunctions.autoResize();
        const url = event.target.value.trim();
        if (CONSTANTS.BILIBILI_PATTERN.test(url) || 
            CONSTANTS.YOUTUBE_PATTERN.test(url) || 
            CONSTANTS.DOI_PATTERN.test(url)) {
            AppFunctions.checkVideo();
        }
    });
    
    searchBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            AppFunctions.checkVideo();
        }
    });

    if (sessionStorage.getItem('searchBoxFocused') === 'true') {
        AppFunctions.setFocusOnSearchBox();
    } else {
        searchBox.focus();
    }
    AppFunctions.autoResize();
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && sessionStorage.getItem('searchBoxFocused') === 'true') {
        AppFunctions.setFocusOnSearchBox();
    }
});