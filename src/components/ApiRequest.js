import React from 'react';

class ApiRequest extends React.Component{

   
    //thisonSetImages = this.onSetImage.bind(this);
  // this.onSetImage =  this.onSetImage.bind(this);

    
render() {  

let imagesArray = this.props.photosApi.map(photos =>{
  return photos
})
        return(
          <div className="imageContainer">
              {imagesArray.map(element => {
                return <div className="imageContainer-box"> <img src={element.webformatURL} key={element.id} alt="Images"/> </div>
               })}
            </div>
        )
        

}
}

export default ApiRequest; 