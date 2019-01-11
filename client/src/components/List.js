import React from 'react';
import {Animation, MDBContainer, Card, CardBody, CardTitle, CardText} from "mdbreact";
import './List.css';
import {Link} from 'react-router-dom';
import Parser from 'html-react-parser';
import Moment from 'react-moment';


const List = ({ items}) => {
    const itemsList = items.length ? (
        items.map((item, index) => {
            
            return (
         
                <Animation key={index} type="fadeIn" duration="600ms" delay={`0.${index}s`}>
                 <Link to={`/stories/${item._id}`} style={{color: "black"}}>
                    <div className="mainbody">
                        
                        <Card className="z-depth-2 cardcss oxygen">
                        
                        <div className="image d-flex justify-content-center center">
                        <img alt="list_image" src={item.imageurl.length === 0 ? 'uploads/no.png': item.imageurl[0]} />
                        </div>
                        
                        <CardBody className="card-body">
                        <div className="d-flex justify-content-between">
                        <CardTitle>{item.title}</CardTitle>
                        <Moment className="date-main" format="YYYY-MM-DD HH:mm">{item.date}</Moment>
                        </div>
                        <CardText className="cardtext" >
                        {(item.content.length > 200 ? Parser(item.content.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 140))+ "...": Parser(item.content.replace(/<\/?[^>]+(>|$)/g, "")))}
                        </CardText>
                        </CardBody>
                        </Card>
                        
                    </div>
                    </Link>
                </Animation>
            )
        })
    ) : (<MDBContainer><div style={{paddingTop: "5rem", color: "white"}} className="d-flex justify-content-center oxygen">
    <h2>Ooops... no stories found! :(</h2></div></MDBContainer>);
  return (
    <React.Fragment>
         {itemsList}
     </React.Fragment>
  )
}

export default List;