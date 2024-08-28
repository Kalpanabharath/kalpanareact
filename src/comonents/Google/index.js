import { Component } from "react";
import "./index.css";

const suggestionsList = [
  { id: 1, name: "Amazon", url: "https://www.amazon.com" },
  { id: 2, name: "Adobe", url: "https://www.adobe.com" },
  { id: 3, name: "Airbnb", url: "https://www.airbnb.com" },

  { id: 4, name: "Best Buy", url: "https://www.bestbuy.com" },
  { id: 5, name: "Bing", url: "https://www.bing.com" },
  { id: 6, name: "BBC", url: "https://www.bbc.com" },

  { id: 7, name: "Craigslist", url: "https://www.craigslist.org" },
  { id: 8, name: "CNN", url: "https://www.cnn.com" },
  { id: 9, name: "Codecademy", url: "https://www.codecademy.com" },

  { id: 10, name: "Dropbox", url: "https://www.dropbox.com" },
  { id: 11, name: "Disney", url: "https://www.disney.com" },
  { id: 12, name: "Dell", url: "https://www.dell.com" },

  { id: 13, name: "eBay", url: "https://www.ebay.com" },
  { id: 14, name: "Etsy", url: "https://www.etsy.com" },
  { id: 15, name: "Expedia", url: "https://www.expedia.com" },

  { id: 16, name: "Facebook", url: "https://www.facebook.com" },
  { id: 17, name: "Flickr", url: "https://www.flickr.com" },
  { id: 18, name: "Forbes", url: "https://www.forbes.com" },

  { id: 19, name: "GitHub", url: "https://www.github.com" },
  { id: 20, name: "Google", url: "https://www.google.com" },
  { id: 21, name: "Gmail", url: "https://www.gmail.com" },

  { id: 22, name: "Hulu", url: "https://www.hulu.com" },
  { id: 23, name: "Hacker News", url: "https://news.ycombinator.com" },
  { id: 24, name: "HP", url: "https://www.hp.com" },

  { id: 25, name: "Instagram", url: "https://www.instagram.com" },
  { id: 26, name: "IKEA", url: "https://www.ikea.com" },
  { id: 27, name: "IMDB", url: "https://www.imdb.com" },

  { id: 28, name: "Jira", url: "https://www.atlassian.com/software/jira" },
  { id: 29, name: "Jumia", url: "https://www.jumia.com" },
  { id: 30, name: "Jet", url: "https://www.jet.com" },

  { id: 31, name: "Khan Academy", url: "https://www.khanacademy.org" },
  { id: 32, name: "Kayak", url: "https://www.kayak.com" },
  { id: 33, name: "KFC", url: "https://www.kfc.com" },

  { id: 34, name: "LinkedIn", url: "https://www.linkedin.com" },
  { id: 35, name: "Lazada", url: "https://www.lazada.com" },
  { id: 36, name: "Lyft", url: "https://www.lyft.com" },

  { id: 37, name: "Microsoft", url: "https://www.microsoft.com" },
  { id: 38, name: "Medium", url: "https://www.medium.com" },
  { id: 39, name: "Mozilla", url: "https://www.mozilla.org" },

  { id: 40, name: "Netflix", url: "https://www.netflix.com" },
  { id: 41, name: "Nike", url: "https://www.nike.com" },
  { id: 42, name: "Nest", url: "https://www.nest.com" },

  { id: 43, name: "OpenAI", url: "https://www.openai.com" },
  { id: 44, name: "Opera", url: "https://www.opera.com" },
  { id: 45, name: "Overstock", url: "https://www.overstock.com" },

  { id: 46, name: "Pinterest", url: "https://www.pinterest.com" },
  { id: 47, name: "PayPal", url: "https://www.paypal.com" },
  { id: 48, name: "Pepsi", url: "https://www.pepsi.com" },

  { id: 49, name: "Quora", url: "https://www.quora.com" },
  { id: 50, name: "QuickBooks", url: "https://quickbooks.intuit.com" },
  { id: 51, name: "Quizlet", url: "https://www.quizlet.com" },

  { id: 52, name: "Reddit", url: "https://www.reddit.com" },
  { id: 53, name: "Roblox", url: "https://www.roblox.com" },
  { id: 54, name: "Roku", url: "https://www.roku.com" },

  { id: 55, name: "Slack", url: "https://www.slack.com" },
  { id: 56, name: "Spotify", url: "https://www.spotify.com" },
  { id: 57, name: "Samsung", url: "https://www.samsung.com" },

  { id: 58, name: "Twitter", url: "https://www.twitter.com" },
  { id: 59, name: "Target", url: "https://www.target.com" },
  { id: 60, name: "TikTok", url: "https://www.tiktok.com" },

  { id: 61, name: "Uber", url: "https://www.uber.com" },
  { id: 62, name: "Udemy", url: "https://www.udemy.com" },
  { id: 63, name: "Upwork", url: "https://www.upwork.com" },

  { id: 64, name: "Vimeo", url: "https://www.vimeo.com" },
  { id: 65, name: "Verizon", url: "https://www.verizon.com" },
  { id: 66, name: "Vine", url: "https://vine.co" },

  { id: 67, name: "Wikipedia", url: "https://www.wikipedia.org" },
  { id: 68, name: "Walmart", url: "https://www.walmart.com" },
  { id: 69, name: "WordPress", url: "https://www.wordpress.com" },

  { id: 70, name: "Xbox", url: "https://www.xbox.com" },
  { id: 71, name: "Xfinity", url: "https://www.xfinity.com" },
  { id: 72, name: "Xero", url: "https://www.xero.com" },

  { id: 73, name: "Yahoo", url: "https://www.yahoo.com" },
  { id: 74, name: "Yelp", url: "https://www.yelp.com" },
  { id: 75, name: "YouTube", url: "https://www.youtube.com" },

  { id: 76, name: "Zoom", url: "https://www.zoom.us" },
  { id: 77, name: "Zillow", url: "https://www.zillow.com" },
  { id: 78, name: "Zappos", url: "https://www.zappos.com" },
];

class Google extends Component {
  state = { sugessionarray: [] };

  updateArray = (event) => {
    const filteredArray = suggestionsList.filter((suggestion) =>
      suggestion.name.includes(event.target.value)
    );
    this.setState({ sugessionarray: filteredArray });
  };

  render() {
    const { sugessionarray } = this.state;

    return (
      <div className="googlepage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="searchcontainer">
          <div className="inputdiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="Google Search Icon"
              className="google-search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.updateArray}
            />
          </div>
          {sugessionarray.map((obj) => (
            <div key={obj.id} className="sugesstiondiv">
              <p>{obj.name}</p>
              <a href={obj.url}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                  alt="Google Search Icon"
                  className="google-search-icon"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Google;
