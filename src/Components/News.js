import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import { Spinner } from "./spinner";


export class news extends Component {
  static defaultProps={
    pagesize:20,
    category:'sports',
    country:'in'
  };

  capitalizefirstletter=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1)
  }

  static propTypes={
    category: PropTypes.string,
    country: PropTypes.string,
    pagesize:PropTypes.number
  }
  constructor(props) {
    super(props);
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title=`${this.capitalizefirstletter(this.props.category)} - New-Monkey`;
  }
  updatenews=async()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3debce18ff414e3abc84dd3028c41269&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  this.setState({
      loading:true
  })
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false
  });
  console.log(parsedData);
  }
  async componentDidMount() {
    this.updatenews()
  }

  nextclick = async () => {
    this.setState({page:this.state.page + 1})
    this.updatenews()
  };

  preclick = async () => {
    this.setState({page:this.state.page - 1})
    this.updatenews()
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center">NewsMonkey-Top headlines</h2>
         { this.state.loading && <Spinner/>}
          <div className="row">
            {!(this.state.loading) && this.state.articles.map((element) => {
              return (
                <div className="col-md-3 mx-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={
                      element.description ? element.description : "..."
                    }
                    source={element.source.name}
                    author={element.author?'Unknown':element.author}
                    date={element.publishedAt}
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.toiimg.com/photo/97972212.cms"
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between container">
          <button
            disabled={this.state.page <= 1}
            onClick={this.preclick}
            className="btn btn-dark"
          >
            &larr; Prev page
          </button>
          <button onClick={this.nextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark">
            Next page &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default news;
