import React, { useReducer } from "react";
import GeneralKnowledge from "./GeneralKnowledge";
import History from "./History";
import HTML from "./HTML";
import Math from "./Math";
import Science from "./Science";
import Sports from "./Sports";
import "./Quiz.css";

const initialState={
  mathFlag:false,
  sciFlag:false,
  hisFlag:false,
  htmlFlag:false,
  sportFlag:false,
  gkFlag:false
}

const reducer =(state,action)=>{ 
  switch(action.type){
    case "math":
      return {...state,
        mathFlag:true
      }
      case "science":
      return {...state,
        sciFlag:true
      }
      case "history":
      return {...state,
        hisFlag:true
      }
      case "html":
      return {...state,
        htmlFlag:true
      }
      case "sports":
      return {...state,
        sportFlag:true
      }
      case "gk":
      return {...state,
        gkFlag:true
      }
      default:
        return state;
  }
}


function Categories() {

  const [topic, dispatch] = useReducer(reducer,initialState);
 
  const topicHandler=(subject)=>{
    const cat = document.querySelector(".mainCat");
    cat.style = "display:none";
    dispatch({type:subject})
  }

  return (
    <>
      <div className="mainCat">
        <div className="headerCat">
          <h1>QuizBee</h1>
        </div>
        <div className="list">
          <button onClick={()=>topicHandler("sports")}>Sports</button>
          <button onClick={()=>topicHandler("gk")}>G.K</button>
          <button onClick={()=>topicHandler("history")}>History</button>
          <button onClick={()=>topicHandler("html")}>HTML</button>
          <button onClick={()=>topicHandler("math")}>Maths</button>
          <button onClick={()=>topicHandler("science")}>Science</button>
        </div>
        <div id="catFooter">
          <h1>Choose options wisely...</h1>
        </div>
      </div>
      {topic.sportFlag && <Sports/>}
      {topic.gkFlag && <GeneralKnowledge />}
      {topic.mathFlag && <Math />}
      {topic.sciFlag && <Science />}
      {topic.hisFlag && <History />}
      {topic.htmlFlag && <HTML />}
    </>
  );
}

export default Categories;
