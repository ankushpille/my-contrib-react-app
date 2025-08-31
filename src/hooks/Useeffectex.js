import { useEffect, useState } from "react";

function Useeffectex() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));

      const handleResize = () => {
         console.log('window resized',window.innerWidth);
      }

      window.addEventListener('resize',handleResize)

    //   return () => {
    //      window.removeEventListener('resize',handleResize);
    //   }
  }, []);

  //events cleanup


  return (
    <>
      <h1>Useeffect example</h1>
      <ul>
           {posts.map((item) => (
                <li key={item.id}>
                    {item.title}
                </li>
           ))}

      </ul>
    </>
  );
}

export default Useeffectex;
