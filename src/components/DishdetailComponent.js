
import React from 'react';
import{Card, CardImg, CardImgOverlay,CardText, CardBody,CardTitle} from 'reactstrap';




    function RenderComments ({comments}) {
    if(comments!=null){
        const com= comments.map((eachcomment)=>{
            return(
            <div>
                
               <li>{eachcomment.comment}</li>
                <li>--{eachcomment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(eachcomment.date)))}</li> 
                 
                </div>);
        });
        return(
            <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{com}</ul>
            </div>
        );
    }else
        return(<div></div>);
    }


    const DishDetail =(props) =>{
        if(props.dish != null){
    return (
        <div class="container">
    <div className="row">
        <div key={props.dish.id} className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
            <CardTitle>{props.dish.name}</CardTitle>                      
            <CardText>{props.dish.description}</CardText>  
        </Card></div>
       <div key={props.comments}className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments} />
       </div>
      
        </div>
      
    </div>
    
    );


}
    else {return(<div></div>); }
  
    }
  export default DishDetail;  
  