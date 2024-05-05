const para = ["Welcome to MDN Learning arealorem20",
 "The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy.",
  "Para3 The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."];

const Title=()=>{
    return (<h1>Learn Web Development</h1>);
};

// const Title = () => {
//     return (<h1>Learn Web Development</h1>);
//   };
  


const ContainerMain = () => {
  

  return (
    <div>
        <Title/>
        {
            para.map(name=>{
                return(
                    <p>{name}</p>
                )
            })
        }
    </div>
  )
};

ReactDOM.render(<ContainerMain/>, document.getElementById("root"));
