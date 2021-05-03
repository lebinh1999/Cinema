import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import ShowTimesItem from "../ShowTimesItem";
import { actShowTimeApi } from "./modules/action";

function ShowTimes(props) {
    
    useEffect(()=>{
        const {maCumRap, danhSachRap, nameCinema, maPhim} = props;
        props.fetchShowTime(nameCinema);
    })
    const renderShowTime = () =>{
      const { data } = props;
      if(data) {
        return (
          data && data.map((item)=>{
            return item.lstCumRap.map((itemR)=>{
            if(itemR.maCumRap === props.maCumRap)
            return (
              <ShowTimesItem danhSachPhim = {itemR.danhSachPhim} />
            )
          })
          })
        )
      }
    }
    return (
        <div className="theaterItem__item">
          {renderShowTime()}
      </div>
 
    )
}

const mapStateToProps = (state) =>{
  return {
    data: state.ShowTimeReducer.data,
  }
  
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchShowTime: (ma)=>{
      dispatch(actShowTimeApi(ma, "&maNhom=GP1"))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowTimes)


