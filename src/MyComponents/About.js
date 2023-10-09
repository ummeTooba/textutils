import React from 'react'

export default function About(props) {
  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const [myStyle,setmyStyle] =useState({
  //   color: 'black',
  //   backgroundColor:'white'
  // });

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     });
  //     setbtnText("Enable Light Mode");
  //   } else {
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // }
  let myStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#5D6661':'white'

  }



  return (
    <div className='container mt-2' style={{ color: props.mode === 'dark'?'white':'#lightslategrey'}}>
            <h2>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
         It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
         It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3 pb-3">
  <button className="btn " style={{ backgroundColor: 'black', color: 'white', border:'2px solid white'}} onClick={toggleStyle} >{btnText}</button>
</div> */}

    </div>
  )
}
