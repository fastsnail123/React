
import React, {Component} from 'react';
import{Card, CardImg, CardImgOverlay,CardText, CardBody,CardTitle} from 'reactstrap';



class  DishDetail extends Component {
    constructor(props){
    super(props);
      this.state={
      };
    }
  
     renderComments (comments) {
    if(comments!=null){
        const com= comments.map((eachcomment)=>{
            return(
            <div>
                
               <li>{eachcomment.comment}</li>
                <li>--{eachcomment.author}, {eachcomment.date}</li> 
                 
                </div>);
        });
        return(
            <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{com}</ul>
            </div>
        );
    }else
       {console.log("111"); return(<div></div>);
    }

}
    render(){
        if(this.props.dish != null){
    return (
    <div className="row">
        <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
            <CardTitle>{this.props.dish.name}</CardTitle>                      
            <CardText>{this.props.dish.description}</CardText>  
        </Card></div>
       <div key={this.props.comments}className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
       </div>
      
        </div>
      
    
    
    );


}
    else {return(<div></div>); }
  }
  }
  export default DishDetail;
  