import { useState } from "react"

function ImageUploader(){
      
      const[image,setImage] =  useState(null);

      const handleUpload = (e) => {
        const file = e.target.files[0];
        if(file){
        setImage(URL.createObjectURL(file));
        console.log("Image uploaded:", file);
        }else{
          console.log("No file selected");
        }
      }

      const handleRemove = () => {
        setImage(null)
      }
  
    return(
        <>
            <h1>Upload your image</h1>
            <input type = "file" accept = "image/*" onChange={handleUpload}/>
            <button onClick={handleRemove}>Remove Image</button>


            {image && 
              <div>
                <h2>Uploaded Image</h2>
                  <img src={image} alt = "Uploaded image" style={{maxWidth: "300px"}}/>
              </div>
            
            }
 
        </>
    )

}

export default ImageUploader;