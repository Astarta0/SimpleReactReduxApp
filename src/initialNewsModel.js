import uuid from 'uuid';

let NEWS = {
    "status": "ok",
    "totalResults": 10,
    "articles": [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Matthew Lynley",
            "title": "Dropbox rolls out a templates tool for its Paper online document service",
            "description": "As Dropbox looks to woo larger and larger businesses with its strategy of building simpler collaboration tools than what’s on the market, it’s making some moves in its online document tool Paper to further reduce that friction today. Dropbox said it was rolli…",
            "url": "https://techcrunch.com/2018/04/26/dropbox-rolls-out-a-templates-tool-for-its-paper-online-document-service/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/unnamed.png?w=640",
            "publishedAt": "2018-04-26T16:00:42Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "Mammoth Biosciences launches a CRISPR-powered search engine for disease detection",
            "description": "Most people tend to think of CRISPR as a groundbreaking gene-editing technology that can hunt down and snip away bits of DNA, like the cut and paste function on a keyboard. While many research projects tend to emphasize the potential of that process in replac…",
            "url": "https://techcrunch.com/2018/04/26/mammoth-crispr-jennifer-doudna-crispr/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/team_51.jpg?w=600",
            "publishedAt": "2018-04-26T16:00:11Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Samsung tempers record earnings with pessimistic smartphone outlook",
            "description": "Samsung’s latest earnings report is a succinct lesson in hoping for the best and preparing for the worst. The actual news here is pretty positive, as the company reports a record operating profit, courtesy of high demand for its components and flagship handse…",
            "url": "https://techcrunch.com/2018/04/26/samsung-tempers-record-earnings-with-pessimistic-smartphone-outlook/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/08/samsung_0201.jpg?w=600",
            "publishedAt": "2018-04-26T15:47:29Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Tile and Comcast team up to help you find lost items with your TV's voice remote",
            "description": "Lost device finder Tile today is making good on its previously announced partnership with Comcast by introducing a way for Comcast Xfinity customers to locate their Tiles using Comcast’s TV remote, the Xfinity X1 Voice Remote. This is also the first video and…",
            "url": "https://techcrunch.com/2018/04/26/tile-and-comcast-team-up-to-help-you-find-lost-items-with-your-tvs-voice-remote/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/05/tile-slim-and-mate.jpg?w=527",
            "publishedAt": "2018-04-26T15:19:33Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Alexa will soon gain a memory, converse more naturally, and automatically launch skills",
            "description": "Alexa will soon be able to recall information you’ve directed her to remember, as well as have more natural conversations that don’t require every command to begin with “Alexa.” She’ll also be able to launch skills in response to questions you ask, without ex…",
            "url": "https://techcrunch.com/2018/04/26/alexa-will-soon-gain-a-memory-converse-more-naturally-and-automatically-launch-skills/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/08/amazon-echo-dot-4-of-41.jpg?w=600",
            "publishedAt": "2018-04-26T14:08:03Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "John Biggs",
            "title": "The ONE Smart Keyboard Pro lets you tickle the ivories with ease",
            "description": "While the ONE Smart Keyboard Pro doesn’t have a sweet demo tune nor can it play barking dog Jingle Bells without some help, it can teach you or your kids how to play piano. The elegant keyboard has 88 weighted keys that simulate a true mechanical piano and co…",
            "url": "https://techcrunch.com/2018/04/26/the-one-smart-keyboard-pro-lets-you-tickle-the-ivories-with-ease/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/81r1icqwggl-_sl1500_.jpg?w=520",
            "publishedAt": "2018-04-26T14:06:43Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jordan Crook",
            "title": "Meet 11 new startups launching out of the Entrepreneurs Roundtable Accelerator",
            "description": "Today, 11 new companies launch out of the Entrepreneurs Roundtable Accelerator based in NYC. This is the 14th cohort of startups to launch our of ERA, and each company has received $100,000 in seed funding from the accelerator. These startups span a wide vari…",
            "url": "https://techcrunch.com/2018/04/26/meet-11-new-startups-launching-out-of-the-entrepreneurs-roundtable-accelerator/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/img_6884.jpg?w=750",
            "publishedAt": "2018-04-26T13:52:09Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Matt Burns",
            "title": "This is a real life Transformer",
            "description": "The J-deite RIDE transformers from a vehicle to a robot just like the Megazord from Voltron. Specific information about the creation is a bit sketchy but the YouTube channel states it’s an electric vehicle and show the driver and passenger staying in their se…",
            "url": "https://techcrunch.com/2018/04/26/this-is-a-real-life-transformer/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/screen-shot-2018-04-26-at-9-26-21-am.png?w=679",
            "publishedAt": "2018-04-26T13:28:10Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Matt Burns",
            "title": "Leaked iPhone pics show glass back and headphone jack",
            "description": "The headphone jack could still have a future in an iPhone. These leaked pics show an iPhone SE 2 with a glass back and headphone jack. Like the current iPhone SE, the design seems to be a take on the classic iPhone 5. I dig it. The leak also states the upcomi…",
            "url": "https://techcrunch.com/2018/04/26/leaked-iphone-pics-show-glass-back-and-headphone-jack/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/iphone-se-2.jpg?w=764",
            "publishedAt": "2018-04-26T13:13:15Z"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Catherine Shu",
            "title": "Waze signs data-sharing deal with AI-based traffic management startup Waycare",
            "description": "Waze has struck a data-sharing agreement with Waycare, an artificial intelligence-based traffic management startup, the two companies announced today. The deal will allow them to combine anonymized navigation information crowdsourced from the 100 million driv…",
            "url": "https://techcrunch.com/2018/04/26/waze-signs-data-sharing-deal-with-ai-based-traffic-management-startup-waycare/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/gettyimages-928937826.jpg?w=533",
            "publishedAt": "2018-04-26T13:00:55Z"
        }
    ]
};

export const I_NEWS = {
    ...NEWS,
    articles: NEWS.articles.map( (article) => {
        article.id = uuid.v4();
        return article;
    })
};
