import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import './index.css';

class News extends React.Component {
    state = {
        data : [],
        pencarian:'',
    }
    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=83e34568e80d4470bfa501380f65f0d6")
        .then(respon => respon.json())
        .then(panggil =>{
            this.setState({data: panggil.articles})
        })
        .catch(error=> alert(error));
    }
    handleInput = (a) => {
        this.setState({ pencarian: a.target.value });
      }
    eventButton = (a) =>{
        a.preventDefault();
        fetch(`https://newsapi.org/v2/everything?q=${this.state.pencarian}&apiKey=83e34568e80d4470bfa501380f65f0d6`)
        .then(respon => respon.json())
        .then(panggil =>{
            this.setState({data: panggil.articles})
        })
        .catch(error=> alert(error));
    }

    render() {
        const {data} = this.state; //fungsinya biar ga jadi this.state.map
        return (
            <div >
                <div className="isi">
                    <form onSubmit={this.eventButton}>
                        <input className="Input" type="text" value={this.state.pencarian} placeholder="Cari Berita..." onChange={this.handleInput}/>
                        <button className="tmbol" type="submit">Cari</button>
                    </form>
                </div>
                <Container>
                <Row>
                    {data.map(ulang => {
                        return(
                        <Card style={{ width: '26rem' ,marginLeft:'1%', marginTop:'3%'}}>
                        <Card.Img variant="top" src={ulang.urlToImage} />
                            <Card.Body>
                                <Card.Title>{ulang.title}</Card.Title>
                                <p>{ulang.author} - {ulang.publishedAt}</p>
                                <Card.Text>{ulang.description}</Card.Text>
                                <Button variant="primary" href={ulang.url}>Read More...</Button>
                            </Card.Body>
                        </Card>
                        )
                    })}
                </Row>
                </Container>
            </div>
        );
    }
}
export default News;