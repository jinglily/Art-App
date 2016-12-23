import React, { PropTypes } from 'react'
import zhuanf from '../../images/littlepic/24.png'
import liulan from '../../images/littlepic/25.png'
import plun from '../../images/littlepic/26.png'
import plunh from '../../images/littlepic/20.png'
import heart from '../../images/littlepic/21.png'
import hearth from '../../images/littlepic/22.png'
import zhuanfh from '../../images/littlepic/23.png'

class Wen2 extends React.Component {
  constructor(){
    super();
    this.state={
      manyShow:true,
      manyShow1:true
    }
  }
  handleClick(){
    this.setState({
      manyShow:!this.state.manyShow
    })
  }
  render () {
let like = this.state.manyShow ? <span className="glyphicon glyphicon-heart-empty"></span> :
    <span className="glyphicon glyphicon-heart" style={{color:'red'}}></span>
   return(

       <div className="recdsecond2">
          <p className="rectf">杉泽【中国百鬼】</p>
          <p className="recdf">子不语怪力乱神。国人画之。</p>
          <div className="recdbom">
            <a><img src={zhuanf} className="recdzf" /></a>
            <ul className="recdul">
              <li onClick={this.handleClick.bind(this)}>{like}821</li>
              <li><img src={liulan} className="recdul1"/>1.3k</li>
              <li><img src={plun} className="recdul1"/>56</li>
            </ul>
          </div>
        </div>
   )
  }
}

export default Wen2;