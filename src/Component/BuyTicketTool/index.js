import React,{useState,useEffect} from "react";
import {actFetchMovieTool} from "./modules/action";
import {connect} from "react-redux";
import BuyTicketToolChild from "./BuyTicketToolChild";

function BuyTicketTool(props) {
  const [index, setIndex] = useState({indexShow: 0});
  useEffect(() => {
    props.fetchMovieTool();
  }, [])
  const {data} = props;

  const renderBuyTicketToolMovie = () => {
    return(data&&data.map((item,index)=>{
      const chooseMovie = (e) => {
    const buttonSelected = document.getElementById("buyTicketDropdownMovie");
    const itemSelected = document.getElementById(e.target.id);
    const getId = document.getElementById("buyTicketDropdownTheater");
    if(getId){
      getId.classList.remove("disabled");
    }
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
    setIndex({indexShow: index});
  }
      return(
        <li>
            <a className="dropdown-item" id={item.maPhim} onClick={chooseMovie} key={item.maPhim}>
              {item.tenPhim}
            </a>
          </li>
      )
    })) 
  }

  const test = () => {
    return (
      data && (<BuyTicketToolChild id ={data&&data[index.indexShow].maPhim}/>)
    )
  }


  return (
    <section className="tool__nav noneOnMobile">
      <div className="nav__container">
      <div className="dropdown -selectFilm">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="buyTicketDropdownMovie" data-toggle="dropdown" aria-expanded="false">
          Phim
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {renderBuyTicketToolMovie()}
        </ul>
      </div>
      {test()}
      {/* <BuyTicketToolChild id ={index}/> */}

    </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.listToolMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieTool: () => {
      dispatch(actFetchMovieTool());
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(BuyTicketTool);
