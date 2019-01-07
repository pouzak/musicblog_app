import React from 'react';
import {Animation, MDBContainer, Button, Card, CardBody, CardTitle, CardText, MDBIcon} from "mdbreact";
import './List.css';
import {Link} from 'react-router-dom';


const List = ({ items}) => {
    const itemsList = items.length ? (
        items.map((item, index) => {
            
            return (
         
                <Animation key={index} type="fadeIn" duration="600ms" delay={`0.${index}s`}>
                    <div className="mainbody">
                    
                        <Card className="z-depth-2 cardcss oxygen">
                        
                        <div className="image d-flex justify-content-center center">
                        <img alt="list_image" src={item.imageurl.length === 0 ? 'uploads/no.png': item.imageurl[0]} />
                        </div>
                        
                        <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                    
                        <CardText className="cardtext" >
                        {(item.content.length > 200 ? item.content.slice(0, 140).replace(/<\/?[^>]+(>|$)/g, "")+ "...": item.content.replace(/<\/?[^>]+(>|$)/g, ""))}
                        </CardText>
                        <Link to={`/stories/${item._id}` }>
                        <Button className="listbutt">Read More</Button>
                        </Link>
                        </CardBody>
                        </Card>
                        
                    </div>
                </Animation>
            )
        })
    ) : (<MDBContainer><div style={{paddingTop: "5rem"}} className="d-flex justify-content-center center"><h2><MDBIcon icon="warning" />
     Ooops... no stories found! :(</h2></div></MDBContainer>);
  return (
    <React.Fragment>
         {itemsList}
     </React.Fragment>
  )
}

export default List;